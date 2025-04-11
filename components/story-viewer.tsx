"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

type Story = {
  id: string
  image: string
  title: string
}

type StoryCategory = {
  id: string
  title: string
  icon: React.ReactNode
  stories: Story[]
}

interface StoryViewerProps {
  category: StoryCategory
  onClose: () => void
}

export function StoryViewer({ category, onClose }: StoryViewerProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const currentStory = category.stories[currentStoryIndex]
  const storyDuration = 5000 // 5 segundos por story

  useEffect(() => {
    let interval: NodeJS.Timeout
    let startTime: number
    const pausedTime = 0
    let animationFrameId: number

    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const elapsed = isPaused ? pausedTime : timestamp - startTime

      const newProgress = Math.min((elapsed / storyDuration) * 100, 100)
      setProgress(newProgress)

      if (newProgress < 100 && !isPaused) {
        animationFrameId = requestAnimationFrame(updateProgress)
      }
    }

    // Iniciar a animação
    animationFrameId = requestAnimationFrame(updateProgress)

    // Configurar o intervalo para avançar para o próximo story
    interval = setInterval(() => {
      if (!isPaused) {
        if (currentStoryIndex < category.stories.length - 1) {
          setCurrentStoryIndex(currentStoryIndex + 1)
          setProgress(0)
        } else {
          onClose()
        }
      }
    }, storyDuration)

    return () => {
      clearInterval(interval)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentStoryIndex, category.stories.length, onClose, isPaused])

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1)
      setProgress(0)
    }
  }

  const handleNextStory = () => {
    if (currentStoryIndex < category.stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1)
      setProgress(0)
    } else {
      onClose()
    }
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <div className="story-viewer" onClick={togglePause}>
      <div className="story-title">{currentStory.title}</div>
      <button
        className="story-close"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        aria-label="Fechar"
      >
        <X size={24} />
      </button>

      <div className="story-progress">
        {category.stories.map((_, index) => (
          <div key={index} className="story-progress-bar">
            <div
              className="story-progress-bar-fill"
              style={{
                width: index < currentStoryIndex ? "100%" : index === currentStoryIndex ? `${progress}%` : "0%",
              }}
            />
          </div>
        ))}
      </div>

      <div className="story-content">
        <Image
          src={currentStory.image || "/placeholder.svg"}
          alt={currentStory.title}
          width={500}
          height={800}
          className="story-image"
        />

        <div className="story-controls">
          <div
            className="story-prev"
            onClick={(e) => {
              e.stopPropagation()
              handlePrevStory()
            }}
            role="button"
            tabIndex={0}
            aria-label="História anterior"
          />
          <div
            className="story-next"
            onClick={(e) => {
              e.stopPropagation()
              handleNextStory()
            }}
            role="button"
            tabIndex={0}
            aria-label="Próxima história"
          />
        </div>
      </div>
    </div>
  )
}

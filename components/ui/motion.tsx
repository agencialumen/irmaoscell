"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import type React from "react"

type MotionDivProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode
}

export const MotionDiv = ({ children, ...props }: MotionDivProps) => {
  return <motion.div {...props}>{children}</motion.div>
}

export const fadeIn = (direction: "up" | "down" | "left" | "right", delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}

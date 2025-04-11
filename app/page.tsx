"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StoryViewer } from "@/components/story-viewer"
import { MobileMenu } from "@/components/mobile-menu"
import {
  ShoppingBag,
  Smartphone,
  PenToolIcon as Tool,
  Menu,
  X,
  Instagram,
  MapPin,
  MessageCircle,
  Clock,
  Watch,
  Headphones,
  BatteryCharging,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Phone,
} from "lucide-react"

// Animação para revelar elementos ao rolar
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.querySelectorAll(".scroll-reveal").forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])
}

// Dados dos stories
const storyCategories = [
  {
    id: "tabela",
    title: "TABELA",
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    stories: [
      {
        id: "tabela-1",
        image: "/placeholder.svg?height=800&width=400",
        title: "Tabela de Preços",
      },
    ],
  },
  {
    id: "assistencia",
    title: "ASSISTÊNCIA",
    icon: <Tool className="h-8 w-8 text-primary" />,
    stories: [
      {
        id: "assistencia-1",
        image: "/placeholder.svg?height=800&width=400",
        title: "Assistência Técnica",
      },
    ],
  },
  {
    id: "horarios",
    title: "HORÁRIOS",
    icon: <Clock className="h-8 w-8 text-primary" />,
    stories: [
      {
        id: "horarios-1",
        image: "/placeholder.svg?height=800&width=400",
        title: "Horários de Funcionamento",
      },
    ],
  },
  {
    id: "clientes",
    title: "CLIENTES",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    stories: [
      {
        id: "clientes-1",
        image: "/placeholder.svg?height=800&width=400",
        title: "Depoimentos de Clientes",
      },
    ],
  },
  {
    id: "fones",
    title: "FONES",
    icon: <Headphones className="h-8 w-8 text-primary" />,
    stories: [
      {
        id: "fones-1",
        image: "/placeholder.svg?height=800&width=400",
        title: "Fones de Ouvido",
      },
    ],
  },
  {
    id: "apple-watch",
    title: "APPLE WATCH",
    icon: <Watch className="h-8 w-8 text-primary" />,
    stories: [
      {
        id: "apple-watch-1",
        image: "/placeholder.svg?height=800&width=400",
        title: "Apple Watch",
      },
    ],
  },
  {
    id: "carregadores",
    title: "CARREGADORES",
    icon: <BatteryCharging className="h-8 w-8 text-primary" />,
    stories: [
      {
        id: "carregadores-1",
        image: "/placeholder.svg?height=800&width=400",
        title: "Carregadores",
      },
    ],
  },
]

// Dados dos produtos
const featuredProducts = [
  {
    id: 1,
    name: "iPhone 11 Pro",
    storage: "64GB",
    condition: "Vitrine",
    battery: "88% a 100%",
    price: "R$ 2.400,00",
    installment: "R$ 2.740,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "iPhone 11 Pro Max",
    storage: "64GB",
    condition: "Vitrine",
    battery: "85% a 100%",
    price: "R$ 2.700,00",
    installment: "R$ 3.085,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "iPhone XR",
    storage: "64GB",
    condition: "Vitrine",
    battery: "85% a 100%",
    price: "R$ 1.680,00",
    installment: "R$ 1.920,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Apple Watch Series 6",
    storage: "44mm",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.899,00",
    installment: "R$ 2.170,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [storyViewerOpen, setStoryViewerOpen] = useState(false)
  const [currentStoryCategory, setCurrentStoryCategory] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useScrollReveal()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openStoryViewer = (categoryId: string) => {
    setCurrentStoryCategory(categoryId)
    setStoryViewerOpen(true)
  }

  const closeStoryViewer = () => {
    setStoryViewerOpen(false)
    setCurrentStoryCategory(null)
  }

  const nextSlide = () => {
    if (sliderRef.current) {
      const totalSlides = featuredProducts.length
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
      sliderRef.current.scrollTo({
        left: ((currentSlide + 1) % totalSlides) * sliderRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }

  const prevSlide = () => {
    if (sliderRef.current) {
      const totalSlides = featuredProducts.length
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
      sliderRef.current.scrollTo({
        left: ((currentSlide - 1 + totalSlides) % totalSlides) * sliderRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/irmaoscell.jpg-lRvz4HwzGPNZbecj7vKY5sq3tk4rxn.jpeg"
                alt="Irmãos Cell Import Logo"
                width={200}
                height={70}
                className="h-16 sm:h-20 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="#produtos" className="font-medium hover:text-primary transition-colors">
                Produtos
              </Link>
              <Link href="#stories" className="font-medium hover:text-primary transition-colors">
                Destaques
              </Link>
              <Link href="#servicos" className="font-medium hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="#contato" className="font-medium hover:text-primary transition-colors">
                Contato
              </Link>
              <Button asChild variant="default" className="rounded-full">
                <Link href="https://wa.me/5521991255504" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary/90 to-secondary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                iPhones Importados com <span className="text-primary">Garantia</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
                Smartphones de vitrine e lacrados com 90 dias de garantia. Assistência técnica especializada e
                acessórios originais.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  <Link href="#produtos">
                    <ShoppingBag className="mr-2 h-5 w-5" /> Ver Produtos
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto"
                >
                  <Link href="https://wa.me/5521991255504" target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent" />
        </section>

        {/* Destaques/Stories Section */}
        <section id="stories" className="py-10 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">Destaques</h2>
              <Link
                href="#stories"
                className="text-primary font-medium flex items-center hover:underline text-sm sm:text-base"
              >
                Ver todos <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="flex overflow-x-auto pb-4 gap-4 sm:gap-6 md:gap-8 hide-scrollbar">
              {storyCategories.map((category) => (
                <div key={category.id} className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className="story-circle"
                    onClick={() => openStoryViewer(category.id)}
                    style={{ width: "70px", height: "70px" }}
                  >
                    <div className="story-circle-inner">{category.icon}</div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{category.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Slider */}
        <section id="produtos" className="py-10 sm:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">Produtos em Destaque</h2>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Produto anterior"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Próximo produto"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            <div ref={sliderRef} className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth">
              {featuredProducts.map((product) => (
                <div key={product.id} className="min-w-full w-full flex-shrink-0 snap-center px-2 sm:px-4">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 sm:p-8">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{product.name}</h3>
                      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                        {product.storage}
                      </p>
                      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500" />
                          <span className="text-sm sm:text-base">Condição: {product.condition}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500" />
                          <span className="text-sm sm:text-base">Bateria: {product.battery}</span>
                        </div>
                      </div>
                      <div className="mb-4 sm:mb-6">
                        <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{product.price}</p>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{product.installment}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button asChild size="lg" className="rounded-full w-full">
                          <Link href="https://wa.me/5521991255504" target="_blank">
                            <ShoppingBag className="mr-2 h-5 w-5" /> Comprar Agora
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          className="rounded-full w-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                        >
                          <Link href="https://wa.me/5521991255504" target="_blank">
                            <MessageCircle className="mr-2 h-5 w-5" /> Mais Informações
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 mx-1 rounded-full ${
                    currentSlide === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => {
                    setCurrentSlide(index)
                    sliderRef.current?.scrollTo({
                      left: index * sliderRef.current.offsetWidth,
                      behavior: "smooth",
                    })
                  }}
                  aria-label={`Ir para o produto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-10 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Categorias</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <Link href="/categorias/iphones" className="category-card">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-2xl p-4 sm:p-6 h-full flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                  <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 text-primary" />
                  <h3 className="font-bold text-base sm:text-lg">iPhones</h3>
                </div>
              </Link>
              <Link href="/categorias/apple-watch" className="category-card">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-4 sm:p-6 h-full flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                  <Watch className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 text-secondary" />
                  <h3 className="font-bold text-base sm:text-lg">Apple Watch</h3>
                </div>
              </Link>
              <Link href="/categorias/fones" className="category-card">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-4 sm:p-6 h-full flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                  <Headphones className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-bold text-base sm:text-lg">Fones</h3>
                </div>
              </Link>
              <Link href="/categorias/acessorios" className="category-card">
                <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl p-4 sm:p-6 h-full flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                  <BatteryCharging className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 text-green-600 dark:text-green-400" />
                  <h3 className="font-bold text-base sm:text-lg">Acessórios</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-10 sm:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Nossos Serviços</h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
              <div className="service-box">
                <div className="relative pt-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 pt-10 sm:pt-12 text-center h-full">
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">iPhones Importados</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 sm:mb-6">
                      Smartphones de vitrine e lacrados com garantia de 90 dias e excelente custo-benefício.
                    </p>
                    <Button asChild variant="link" className="text-primary">
                      <Link href="https://wa.me/5521991255504" target="_blank">
                        Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="service-box">
                <div className="relative pt-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                    <Tool className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 pt-10 sm:pt-12 text-center h-full">
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Assistência Técnica</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 sm:mb-6">
                      Reparo especializado para seu iPhone e outros dispositivos Apple com peças originais.
                    </p>
                    <Button asChild variant="link" className="text-secondary">
                      <Link href="https://wa.me/5521991255504" target="_blank">
                        Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="service-box">
                <div className="relative pt-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <BatteryCharging className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 pt-10 sm:pt-12 text-center h-full">
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Acessórios Originais</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 sm:mb-6">
                      Acessórios originais e compatíveis para dispositivos Apple com garantia de qualidade.
                    </p>
                    <Button asChild variant="link" className="text-primary">
                      <Link href="https://wa.me/5521991255504" target="_blank">
                        Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-10 sm:py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center md:text-left">
                  Pronto para adquirir seu iPhone?
                </h2>
                <p className="text-white/90 text-base sm:text-lg text-center md:text-left">
                  Entre em contato agora e garanta as melhores condições!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                <Button asChild size="lg" className="rounded-full w-full sm:w-auto bg-secondary hover:bg-secondary/90">
                  <Link href="https://wa.me/5521991255504" target="_blank">
                    <Phone className="mr-2 h-5 w-5" /> (21) 99125-5504
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full w-full sm:w-auto bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="https://www.instagram.com/irmaoscell_import" target="_blank">
                    <Instagram className="mr-2 h-5 w-5" /> @irmaoscell_import
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-10 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Entre em Contato</h2>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="bg-gradient-to-br from-primary to-secondary p-6 sm:p-8 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Informações de Contato</h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 mt-1" />
                        <div>
                          <p className="font-bold">WhatsApp</p>
                          <p>(21) 99125-5504</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Instagram className="h-5 w-5 sm:h-6 sm:w-6 mt-1" />
                        <div>
                          <p className="font-bold">Instagram</p>
                          <p>@irmaoscell</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mt-1" />
                        <div>
                          <p className="font-bold">Localização</p>
                          <p>Rio de Janeiro, RJ</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6 mt-1" />
                        <div>
                          <p className="font-bold">Horário de Atendimento</p>
                          <p>Segunda a Sábado: 9h às 18h</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Envie uma Mensagem</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <Button asChild size="lg" className="w-full rounded-full">
                        <Link href="https://wa.me/5521991255504" target="_blank">
                          <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                      >
                        <Link href="https://www.instagram.com/irmaoscell_import" target="_blank">
                          <Instagram className="mr-2 h-5 w-5" /> Seguir no Instagram
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/irmaoscell.jpg-lRvz4HwzGPNZbecj7vKY5sq3tk4rxn.jpeg"
                alt="Irmãos Cell Import Logo"
                width={180}
                height={60}
                className="h-14 sm:h-16 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                iPhones de vitrine e lacrados, assistência técnica e acessórios em geral.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/irmaoscell_import"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Produtos</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/categorias/iphones"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    iPhones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categorias/apple-watch"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Apple Watch
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categorias/fones"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    AirPods
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categorias/acessorios"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Acessórios
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Vendas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Assistência Técnica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Garantia
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                  <MapPin size={16} />
                  <span>Rio de Janeiro, RJ</span>
                </li>
                <li>
                  <Link
                    href="https://wa.me/5521991255504"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    <MessageCircle size={16} />
                    <span>(21) 99125-5504</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/irmaoscell"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    <Instagram size={16} />
                    <span>@irmaoscell</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Irmãos Cell Import. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Story Viewer */}
      {storyViewerOpen && currentStoryCategory && (
        <StoryViewer
          category={storyCategories.find((cat) => cat.id === currentStoryCategory)!}
          onClose={closeStoryViewer}
        />
      )}
    </div>
  )
}

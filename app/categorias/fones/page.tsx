import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronLeft } from "lucide-react"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "Fones | Irmãos Cell Import",
  description: "Confira nossa seleção de fones de ouvido Apple e compatíveis com garantia.",
}

// Dados dos produtos - Pode ser facilmente substituído por uma API ou banco de dados
const fonesProducts = [
  {
    id: 1,
    name: "AirPods Pro",
    storage: "2ª Geração",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.499,00",
    installment: "R$ 1.710,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "AirPods",
    storage: "3ª Geração",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.199,00",
    installment: "R$ 1.370,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "AirPods Max",
    storage: "Cinza Espacial",
    condition: "Novo",
    battery: "100%",
    price: "R$ 3.999,00",
    installment: "R$ 4.560,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Beats Solo 3",
    storage: "Wireless",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.299,00",
    installment: "R$ 1.480,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function FonesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header com navegação de volta */}
      <header className="bg-white dark:bg-gray-900 shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary">
                <ChevronLeft className="h-5 w-5" />
                <span>Voltar</span>
              </Link>
              <h1 className="text-xl font-bold">Fones</h1>
            </div>
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/irmaoscell.jpg-lRvz4HwzGPNZbecj7vKY5sq3tk4rxn.jpeg"
                alt="Irmãos Cell Import Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Banner da categoria */}
        <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-purple-800/90 z-10" />
          <Image src="/placeholder.svg?height=400&width=1200" alt="Fones" fill className="object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Fones de Ouvido</h2>
            <p className="text-lg md:text-xl text-center max-w-2xl">
              AirPods, Beats e outros fones de alta qualidade com garantia.
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            Todos
          </Button>
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            AirPods
          </Button>
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            AirPods Pro
          </Button>
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            AirPods Max
          </Button>
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            Beats
          </Button>
        </div>

        {/* Lista de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fonesProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              storage={product.storage}
              condition={product.condition}
              battery={product.battery}
              price={product.price}
              installment={product.installment}
              image={product.image}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Não encontrou o que procura?</h3>
              <p>Entre em contato conosco e encontraremos os fones ideais para você!</p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-purple-700 hover:bg-gray-100 w-full md:w-auto"
            >
              <Link href="https://wa.me/5521991255504" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

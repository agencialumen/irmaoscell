import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronLeft } from "lucide-react"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "Apple Watch | Irmãos Cell Import",
  description: "Confira nossa seleção de Apple Watch importados com garantia e excelente custo-benefício.",
}

// Dados dos produtos - Pode ser facilmente substituído por uma API ou banco de dados
const appleWatchProducts = [
  {
    id: 1,
    name: "Apple Watch Series 6",
    storage: "44mm",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.899,00",
    installment: "R$ 2.170,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "Apple Watch SE",
    storage: "40mm",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.599,00",
    installment: "R$ 1.825,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Apple Watch Series 7",
    storage: "45mm",
    condition: "Novo",
    battery: "100%",
    price: "R$ 2.499,00",
    installment: "R$ 2.850,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Apple Watch Series 8",
    storage: "45mm",
    condition: "Novo",
    battery: "100%",
    price: "R$ 3.199,00",
    installment: "R$ 3.650,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function AppleWatchPage() {
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
              <h1 className="text-xl font-bold">Apple Watch</h1>
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
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-blue-500/90 z-10" />
          <Image src="/placeholder.svg?height=400&width=1200" alt="Apple Watch" fill className="object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Apple Watch</h2>
            <p className="text-lg md:text-xl text-center max-w-2xl">
              Relógios inteligentes com garantia e preços imbatíveis.
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            Todos
          </Button>
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            Series 6
          </Button>
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            Series 7
          </Button>
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            Series 8
          </Button>
          <Button variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
            SE
          </Button>
        </div>

        {/* Lista de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appleWatchProducts.map((product) => (
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
        <div className="mt-12 bg-gradient-to-r from-secondary to-blue-500 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Não encontrou o que procura?</h3>
              <p>Entre em contato conosco e encontraremos o Apple Watch ideal para você!</p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-secondary hover:bg-gray-100 w-full md:w-auto"
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

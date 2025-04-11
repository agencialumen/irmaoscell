import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"

interface ProductCardProps {
  name: string
  storage: string
  condition: string
  battery: string
  price: string
  installment: string
  image: string
}

export function ProductCard({ name, storage, condition, battery, price, installment, image }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 bg-gray-100 dark:bg-gray-700">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain p-4" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2">
          {name} {storage}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-1">Condição: {condition}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Bateria: {battery}</p>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold text-primary mb-1">{price} à vista</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">{installment}</span>
          <Button asChild size="sm" className="mt-3 rounded-full">
            <Link href="https://wa.me/5521991255504" target="_blank">
              <ShoppingBag className="mr-2 h-4 w-4" /> Comprar
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

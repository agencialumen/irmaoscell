"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-in slide-in-from-top duration-300">
      <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
        <Link
          href="#produtos"
          className="font-medium py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={onClose}
        >
          Produtos
        </Link>
        <Link
          href="#stories"
          className="font-medium py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={onClose}
        >
          Destaques
        </Link>
        <Link
          href="#servicos"
          className="font-medium py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={onClose}
        >
          Serviços
        </Link>
        <Link
          href="#contato"
          className="font-medium py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={onClose}
        >
          Contato
        </Link>
        <Button asChild className="mt-2 rounded-full bg-primary hover:bg-primary/90 text-white">
          <Link href="https://wa.me/5521991255504" target="_blank" onClick={onClose}>
            <MessageCircle className="mr-2 h-4 w-4" /> Fale Conosco
          </Link>
        </Button>
      </nav>
    </div>
  )
}

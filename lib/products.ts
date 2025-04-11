// Este arquivo serve como uma fonte de dados centralizada para produtos
// Pode ser facilmente substituído por uma API ou banco de dados no futuro

export type Product = {
  id: number
  name: string
  storage: string
  condition: string
  battery: string
  price: string
  installment: string
  image: string
  category: "iphone" | "apple-watch" | "fones" | "acessorios"
  featured?: boolean
}

export const products: Product[] = [
  // iPhones
  {
    id: 1,
    name: "iPhone 11 Pro",
    storage: "64GB",
    condition: "Vitrine",
    battery: "88% a 100%",
    price: "R$ 2.400,00",
    installment: "R$ 2.740,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "iphone",
    featured: true,
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
    category: "iphone",
    featured: true,
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
    category: "iphone",
    featured: true,
  },
  {
    id: 4,
    name: "iPhone 12",
    storage: "64GB",
    condition: "Vitrine",
    battery: "90% a 100%",
    price: "R$ 2.900,00",
    installment: "R$ 3.310,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "iphone",
  },
  {
    id: 5,
    name: "iPhone 12 Pro",
    storage: "128GB",
    condition: "Vitrine",
    battery: "90% a 100%",
    price: "R$ 3.500,00",
    installment: "R$ 3.990,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "iphone",
  },
  {
    id: 6,
    name: "iPhone 13",
    storage: "128GB",
    condition: "Vitrine",
    battery: "95% a 100%",
    price: "R$ 4.200,00",
    installment: "R$ 4.790,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "iphone",
  },

  // Apple Watch
  {
    id: 7,
    name: "Apple Watch Series 6",
    storage: "44mm",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.899,00",
    installment: "R$ 2.170,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "apple-watch",
    featured: true,
  },
  {
    id: 8,
    name: "Apple Watch SE",
    storage: "40mm",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.599,00",
    installment: "R$ 1.825,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "apple-watch",
  },
  {
    id: 9,
    name: "Apple Watch Series 7",
    storage: "45mm",
    condition: "Novo",
    battery: "100%",
    price: "R$ 2.499,00",
    installment: "R$ 2.850,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "apple-watch",
  },
  {
    id: 10,
    name: "Apple Watch Series 8",
    storage: "45mm",
    condition: "Novo",
    battery: "100%",
    price: "R$ 3.199,00",
    installment: "R$ 3.650,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "apple-watch",
  },

  // Fones
  {
    id: 11,
    name: "AirPods Pro",
    storage: "2ª Geração",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.499,00",
    installment: "R$ 1.710,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "fones",
  },
  {
    id: 12,
    name: "AirPods",
    storage: "3ª Geração",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.199,00",
    installment: "R$ 1.370,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "fones",
  },
  {
    id: 13,
    name: "AirPods Max",
    storage: "Cinza Espacial",
    condition: "Novo",
    battery: "100%",
    price: "R$ 3.999,00",
    installment: "R$ 4.560,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "fones",
  },
  {
    id: 14,
    name: "Beats Solo 3",
    storage: "Wireless",
    condition: "Novo",
    battery: "100%",
    price: "R$ 1.299,00",
    installment: "R$ 1.480,00 em até 12x s/ juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "fones",
  },

  // Acessórios
  {
    id: 15,
    name: "Carregador USB-C",
    storage: "20W",
    condition: "Novo",
    battery: "N/A",
    price: "R$ 149,00",
    installment: "R$ 170,00 em até 12x s/juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "acessorios",
  },
  {
    id: 16,
    name: "Cabo Lightning",
    storage: "1m",
    condition: "Novo",
    battery: "N/A",
    price: "R$ 99,00",
    installment: "R$ 113,00 em até 12x s/juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "acessorios",
  },
  {
    id: 17,
    name: "Capa iPhone 13",
    storage: "Silicone",
    condition: "Novo",
    battery: "N/A",
    price: "R$ 79,00",
    installment: "R$ 90,00 em até 12x s/juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "acessorios",
  },
  {
    id: 18,
    name: "Película iPhone 13",
    storage: "Vidro Temperado",
    condition: "Novo",
    battery: "N/A",
    price: "R$ 49,00",
    installment: "R$ 56,00 em até 12x s/juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "acessorios",
  },
  {
    id: 19,
    name: "Carregador MagSafe",
    storage: "15W",
    condition: "Novo",
    battery: "N/A",
    price: "R$ 299,00",
    installment: "R$ 341,00 em até 12x s/juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "acessorios",
  },
  {
    id: 20,
    name: "Suporte Veicular",
    storage: "MagSafe",
    condition: "Novo",
    battery: "N/A",
    price: "R$ 199,00",
    installment: "R$ 227,00 em até 12x s/juros",
    image: "/placeholder.svg?height=400&width=300",
    category: "acessorios",
  },
]

// Funções auxiliares para filtrar produtos
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductsByCategory(category: "iphone" | "apple-watch" | "fones" | "acessorios"): Product[] {
  return products.filter((product) => product.category === category)
}

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

# Irmãos Cell Import - Website

![Irmãos Cell Import Logo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/irmaoscell.jpg-lRvz4HwzGPNZbecj7vKY5sq3tk4rxn.jpeg)

## Visão Geral

Este é o repositório do website da Irmãos Cell Import, uma loja especializada em iPhones importados, Apple Watch, fones de ouvido e acessórios para dispositivos Apple. O site foi desenvolvido com foco em design responsivo, experiência do usuário e facilidade de manutenção.

## Tecnologias Utilizadas

- **Next.js 14**: Framework React com renderização do lado do servidor (SSR) e geração estática (SSG)
- **React 18**: Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript**: Superset tipado de JavaScript para desenvolvimento mais seguro
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva
- **Framer Motion**: Biblioteca para animações fluidas
- **Lucide React**: Biblioteca de ícones SVG
- **Shadcn/UI**: Componentes de UI reutilizáveis e acessíveis

## Estrutura do Projeto

\`\`\`
irmãos-cell-import/
├── app/                    # Diretório principal do Next.js App Router
│   ├── categorias/         # Páginas de categorias de produtos
│   │   ├── iphones/        # Página de iPhones
│   │   ├── apple-watch/    # Página de Apple Watch
│   │   ├── fones/          # Página de fones de ouvido
│   │   └── acessorios/     # Página de acessórios
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal da aplicação
│   └── page.tsx            # Página inicial
├── components/             # Componentes reutilizáveis
│   ├── mobile-menu.tsx     # Menu mobile
│   ├── product-card.tsx    # Card de produto
│   ├── story-viewer.tsx    # Visualizador de stories (estilo Instagram)
│   └── ui/                 # Componentes de UI (shadcn)
├── lib/                    # Funções e utilitários
│   ├── products.ts         # Dados e funções para gerenciar produtos
│   └── utils.ts            # Funções utilitárias
├── public/                 # Arquivos estáticos
├── tailwind.config.ts      # Configuração do Tailwind CSS
└── README.md               # Documentação do projeto
\`\`\`

## Requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn

## Instalação e Execução

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/seu-usuario/irmaos-cell-import.git
   cd irmaos-cell-import
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   # ou
   yarn install
   \`\`\`

3. Execute o servidor de desenvolvimento:
   \`\`\`bash
   npm run dev
   # ou
   yarn dev
   \`\`\`

4. Acesse o site em [http://localhost:3000](http://localhost:3000)

## Guia para Edições Futuras

### Modificando Produtos

Os produtos são gerenciados no arquivo `lib/products.ts`. Para adicionar, remover ou editar produtos:

1. Abra o arquivo `lib/products.ts`
2. Localize o array `products`
3. Adicione um novo objeto de produto ou modifique um existente seguindo a estrutura:

\`\`\`typescript
{
  id: 21, // ID único
  name: "Nome do Produto",
  storage: "Especificação",
  condition: "Novo/Vitrine/etc",
  battery: "100%", // ou "N/A" para acessórios
  price: "R$ 999,00",
  installment: "R$ 1.140,00 em até 12x s/ juros",
  image: "/caminho/para/imagem.jpg",
  category: "iphone", // Categoria: "iphone", "apple-watch", "fones", "acessorios"
  featured: true, // opcional, para destacar na página inicial
}
\`\`\`

### Adicionando Novas Imagens

1. Coloque as imagens na pasta `public/`
2. Referencie-as nos produtos ou componentes usando o caminho relativo (ex: `/imagens/produto.jpg`)

### Modificando Cores e Tema

As cores principais do site são definidas no arquivo `tailwind.config.ts` e `app/globals.css`:

- **Cor primária**: Laranja (`#ff8c00`)
- **Cor secundária**: Azul escuro (`#00405b`)

Para alterar as cores:

1. Abra o arquivo `app/globals.css`
2. Localize a seção `:root` e modifique as variáveis CSS:
   \`\`\`css
   --primary: 28 100% 50%; /* Laranja */
   --secondary: 210 100% 20%; /* Azul escuro */
   \`\`\`

### Modificando o Layout

O layout principal está definido em `app/layout.tsx`. Para modificar elementos que aparecem em todas as páginas (como o header e footer), edite este arquivo.

### Adicionando Novas Páginas

Para adicionar uma nova página:

1. Crie um novo diretório na pasta `app/` com o nome da rota desejada
2. Adicione um arquivo `page.tsx` dentro desse diretório
3. Implemente o componente da página seguindo o padrão das páginas existentes

Exemplo para uma página de "Sobre Nós":
\`\`\`tsx
// app/sobre/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: "Sobre Nós | Irmãos Cell Import",
  description: "Conheça a história da Irmãos Cell Import e nossa missão.",
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-900 shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary">
                <ChevronLeft className="h-5 w-5" />
                <span>Voltar</span>
              </Link>
              <h1 className="text-xl font-bold">Sobre Nós</h1>
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
        {/* Conteúdo da página */}
      </main>
    </div>
  )
}
\`\`\`

### Modificando o Componente de Stories

O componente de stories (inspirado no Instagram) está em `components/story-viewer.tsx`. Para adicionar novas categorias ou stories:

1. Abra o arquivo `app/page.tsx`
2. Localize o array `storyCategories`
3. Adicione ou modifique as categorias e stories conforme necessário

### Modificando os Botões de WhatsApp

Os links de WhatsApp estão espalhados pelo site. Para alterar o número:

1. Busque por `https://wa.me/5521991255504` em todos os arquivos
2. Substitua pelo novo número no formato: `https://wa.me/55DDDNUMERO`

## Componentes Principais

### ProductCard

O componente `ProductCard` é usado para exibir produtos em todas as páginas. Ele aceita as seguintes propriedades:

- `name`: Nome do produto
- `storage`: Especificação (capacidade, tamanho, etc.)
- `condition`: Estado do produto (Novo, Vitrine, etc.)
- `battery`: Porcentagem da bateria (ou "N/A")
- `price`: Preço à vista
- `installment`: Informação de parcelamento
- `image`: URL da imagem do produto

### StoryViewer

O componente `StoryViewer` implementa uma funcionalidade similar aos stories do Instagram. Ele exibe imagens em sequência com uma barra de progresso e permite navegação entre elas.

### MobileMenu

O componente `MobileMenu` é responsável pelo menu de navegação em dispositivos móveis. Ele é ativado quando o usuário clica no ícone de menu no header.

## Otimização e Performance

O site foi desenvolvido com foco em performance:

- Imagens otimizadas com o componente `Image` do Next.js
- Carregamento lazy de componentes e imagens
- CSS otimizado com Tailwind (apenas as classes utilizadas são incluídas no bundle final)
- Animações eficientes com Framer Motion

## Acessibilidade

O site segue boas práticas de acessibilidade:

- Uso de elementos semânticos HTML
- Contraste adequado entre texto e fundo
- Textos alternativos para imagens
- Navegação por teclado
- Tamanhos de fonte responsivos

## Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- Layout fluido com Tailwind CSS
- Breakpoints para mobile, tablet e desktop
- Menu adaptativo para dispositivos móveis
- Imagens e elementos redimensionáveis

## Considerações Finais

Este projeto foi desenvolvido com foco na experiência do usuário e facilidade de manutenção. A estrutura modular permite adicionar novas funcionalidades e conteúdo de forma simples e organizada.

Para qualquer dúvida ou suporte adicional, entre em contato com o desenvolvedor.

---

© 2025 Irmãos Cell Import. Todos os direitos reservados.

# NexusCore — Site Institucional

Landing page premium para Software House de Engenharia Avançada & IA.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Fontes:** Geist (Vercel)

## Estrutura

```
src/
├── app/
│   ├── globals.css       # Variáveis CSS, utilitários globais
│   ├── layout.tsx        # Root layout com metadados SEO
│   └── page.tsx          # Página principal (composição das seções)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Header fixo com scroll detection
│   │   └── Footer.tsx    # Footer com links e redes sociais
│   ├── sections/
│   │   ├── HeroSection.tsx           # Hero com canvas de partículas
│   │   ├── ServicesSection.tsx       # Grid de 3 serviços
│   │   ├── TechDifferentialSection.tsx  # 6 pilares técnicos
│   │   ├── AIConciergeSection.tsx    # Mockup de chat com IA
│   │   └── CTASection.tsx            # Formulário de contato
│   └── ui/
│       ├── button.tsx    # Button com variantes (gradient, outline, ghost)
│       └── badge.tsx     # Badge com variantes de cor
└── lib/
    └── utils.ts          # cn() helper (clsx + tailwind-merge)
```

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar em produção
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Deploy

### Vercel (recomendado)

```bash
npm i -g vercel
vercel
```

Ou conecte o repositório diretamente em [vercel.com](https://vercel.com).

### Netlify

```bash
npm run build
# Faça upload da pasta /out ou conecte via Git
```

## Personalização

### Cores e tema
Edite as variáveis CSS em `src/app/globals.css` e os tokens em `tailwind.config.ts`.

### Conteúdo
- **Serviços:** `src/components/sections/ServicesSection.tsx` → array `services`
- **Diferenciais:** `src/components/sections/TechDifferentialSection.tsx` → array `pillars`
- **Chat demo:** `src/components/sections/AIConciergeSection.tsx` → array `demoConversation`

### Formulário de contato
Em `CTASection.tsx`, substitua o `handleSubmit` pela integração desejada (Resend, EmailJS, Formspree, n8n webhook etc).

### Redes sociais
Atualize os links em `src/components/layout/Footer.tsx`.

## Licença

Projeto privado — NexusCore Engenharia de Software.

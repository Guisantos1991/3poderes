# 3 Poderes - Centro Automotivo 🚗🔧

Landing Page oficial da **3 Poderes Centro Automotivo** em Uberlândia/MG, desenvolvida com **Angular 21**, **SCSS** e suporte a **Server-Side Rendering (SSR) e Static Site Generation (SSG)**.

---

## 🚀 Tecnologias e Recursos

- **Angular 21.2+**:
  - **Standalone Components**: Componentes desacoplados e sem necessidade de `NgModules`.
  - **Signals**: Reatividade moderna para o carrossel e seletores de unidade (`signal`, `computed`).
  - **Novo Controle de Fluxo**: `@if`, `@for`, `@switch`.
  - **`@defer (on viewport)`**: Carregamento sob demanda do vídeo institucional e componentes pesados.
  - **SSR / SSG**: Pré-renderização estática de rotas para SEO local otimizado no Google.
- **SCSS Modular**:
  - Tokens de Design System centralizados em `src/styles/_variables.scss`.
  - Mixins de responsividade fluida em `src/styles/_mixins.scss`.
  - Escala de espaçamento modular baseada em 8px.
  - Zero overflow horizontal (`0px`).
- **Otimização de Assets**:
  - Redução de ~80% no peso de imagens de alta definição.
  - Imagens servidas com dimensões e proporções balanceadas.
  - Botão Flutuante de WhatsApp inteligente com seletor de unidade.

---

## 🏢 Unidades da 3 Poderes em Uberlândia

1. **Unidade Canaã:**
   - Avenida Babel, 121 - Jardim Canaã - Uberlândia/MG
   - Telefone / WhatsApp: (34) 99644-1060
2. **Unidade Chácaras Tubalina:**
   - Avenida Dimas Machado, 60 - Chácaras Tubalina - Uberlândia/MG
   - Telefone / WhatsApp: (34) 99966-6729

---

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── core/
│   │   ├── models/           # Interfaces TypeScript (Branch, ServiceItem, Testimonial)
│   │   └── data/             # Dados centralizados (company, services, testimonials)
│   ├── shared/
│   │   └── components/
│   │       ├── navbar/       # Barra superior fixa com links e menu mobile
│   │       ├── whatsapp-fab/ # Botão flutuante de agendamento no WhatsApp
│   │       └── section-header/ # Cabeçalho padrão com ícones e badges
│   └── features/landing/
│       └── components/
│           ├── hero/         # Banner principal e CTAs para Canaã e Tubalina
│           ├── highlights/   # 3 diferenciais (Preço justo, Garantia, Qualidade)
│           ├── about/        # Seção "O que fazemos"
│           ├── services/     # Carrossel com Signals e scroll snap mobile
│           ├── video-showcase/# Vídeo institucional com @defer
│           ├── testimonials/ # Avaliações reais de clientes com 5 estrelas
│           ├── contact/      # Cards das 2 unidades sem overflow
│           └── footer/       # Rodapé completo com ano dinâmico
├── assets/                   # Ícones e imagens
├── public/                   # Favicon, imagens e mídias estáticas
└── styles/                   # Variáveis, mixins e estilos globais SCSS
```

---

## 🛠️ Comandos de Desenvolvimento

### Instalar Dependências
```bash
npm install
```

### Rodar em Modo de Desenvolvimento
```bash
npm start
# ou
ng serve
```
Acesse: [http://localhost:4200](http://localhost:4200)

### Compilar para Produção (com Prerendering Estático)
```bash
npm run build
```
Os arquivos otimizados serão gerados em `dist/3poderes/browser` e `dist/3poderes/server`.

---

## 📦 Deploy na Vercel

O projeto possui suporte nativo para deploy na Vercel:
- **Framework Preset**: `Angular`
- **Build Command**: `ng build`
- **Output Directory**: `dist/3poderes/browser`

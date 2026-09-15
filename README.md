# AI Systems Engineer Portfolio

> Brutalist single-page portfolio showcasing AI/ML infrastructure expertise

![Tech Stack](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)

## 🎯 Overview

Professional portfolio for **David Vargas**, AI Systems Engineer with 3+ years of experience in fintech, self-hosted AI infrastructure, and GPU-optimized ML systems. Designed to showcase technical expertise and attract AI infrastructure consulting/development opportunities. Features a **brutalist design** with Three.js 3D background, GSAP animations, and comprehensive project demonstrations.

### Key Features

- ✨ **Single-page landing** - Clean, focused landing page only
- 🎨 **Brutalist design** - Bold typography, high contrast, thick borders
- 🌐 **Three.js background** - Interactive 3D wireframe geometry
- ⚡ **GSAP animations** - Smooth scroll-triggered effects
- 📱 **Fully responsive** - Mobile-first design
- 🚀 **SEO optimized** - Meta tags, schema markup, sitemap
- 🎯 **Performance focused** - Fast load times, optimized assets

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` to see the site.

## 📂 Project Structure

```
portfolio-ai/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Comprehensive landing page
│   │   └── 404.astro             # Custom 404 error page
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with SEO & analytics
│   ├── components/
│   │   ├── Header.astro          # Shared nav (home + 404)
│   │   └── Footer.astro          # Shared footer (home + 404)
│   ├── scripts/
│   │   ├── three-scene.ts        # Three.js wireframe background
│   │   ├── gsap-animations.ts    # Scroll-triggered animations
│   │   ├── analytics.ts          # Local event tracking
│   │   └── analytics-umami.ts    # Umami Cloud integration
│   └── styles/
│       └── global.css            # Brutalist CSS variables & shared UI
├── public/
│   ├── robots.txt
│   ├── manifest.json
│   └── og-image.svg               # Social sharing image
└── package.json
```

## 🎨 Design System

### Colors

```css
--color-bg: #000000           /* Pure black */
--color-accent: #00ff00       /* Neon green */
--color-accent-2: #ff00ff     /* Magenta */
--color-accent-3: #00ffff     /* Cyan */
--color-text: #ffffff         /* Pure white */
```

### Typography

- **Headers**: Space Grotesk, 900 weight, uppercase
- **Body**: JetBrains Mono, monospace
- **Scale**: Aggressive size jumps for hierarchy

### Borders

- Thin: 2px
- Medium: 4px  
- Thick: 8px
- Ultra: 12px

## ⚡ Tech Stack

### Core
- **Astro** - Static site generation
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **GSAP** - Animations

### SEO & Performance
- Sitemap generation
- Schema.org markup
- Meta tags optimization
- Responsive images ready

## 📊 Featured Projects

1. **Kurai-Transcribe** - Self-hosted transcription API with custom vocabularies
2. **KuraiMusik** - 24/7 autonomous AI radio station
3. **KurAI2Video** - Self-hosted video generation system
4. **Daily Journal** - 100% private, offline-first diary app for Android

## 🔗 Social Links

- [GitHub](https://github.com/DavidDevGt)
- [LinkedIn](https://www.linkedin.com/in/jdavidvl/)

## 📝 Content Sections

1. **Hero** - Name, role, key metrics (3+ years experience, $0 vendor lock-in, 24/7 autonomous operation)
2. **About** - AI infrastructure philosophy & achievements
3. **Experience** - Professional background & key achievements
4. **Work** - 4 featured projects with detailed descriptions
5. **Stack** - 4 technical skill categories
6. **Contact** - Professional contact information & call-to-action

## 🌐 Deployment

Build output is in `dist/` directory. Deploy to:

- **Cloudflare Pages** (primary target, see `wrangler.toml`): Connect repo
- **Docker / nginx**: `docker compose up --build` (see `Dockerfile`, `nginx.conf`)
- **Netlify**: `netlify deploy --prod`
- **Vercel**: `vercel --prod`
- **Any static host**: Upload `dist/` folder

Full step-by-step instructions: [DEPLOY.md](./DEPLOY.md)

### Environment Variables

No environment variables needed for basic deployment.

## 🎯 SEO & Performance

- **Title**: "David Vargas — AI Systems Engineer | Self-Hosted AI & GPU Optimization"
- **Description**: AI Systems Engineer from Guatemala specializing in self-hosted AI systems, GPU optimization, and production ML infrastructure
- **Keywords**: AI Systems Engineer, self-hosted AI, GPU optimization, ML infrastructure, MLOps, CUDA, Kubernetes
- **Schema Markup**: Person + FAQPage + WebSite structured data
- **Analytics**: Umami Cloud (privacy-focused)
- **Social**: OG image with brutalist design
- Schema: Person markup with AI/ML expertise

## 📱 Responsive Design

- **Desktop**: 1400px container
- **Tablet**: 968px breakpoint
- **Mobile**: 640px breakpoint
- All text sizes use `clamp()` for fluid scaling

## ⚙️ Performance Optimizations

### Three.js
- Pixel ratio capped at 1.5
- Simple geometry (low poly)
- Wireframe rendering
- Minimal animations

### GSAP
- Respects `prefers-reduced-motion`
- Lazy-loaded ScrollTrigger
- Efficient selectors
- Staggered animations

## 🔍 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This is a personal portfolio. Feel free to use as inspiration, but please don't copy directly.

## 🤝 Credits

- Design: Custom brutalist approach
- Fonts: Google Fonts (Space Grotesk, JetBrains Mono)
- Icons: Custom SVG
- 3D: Three.js community

---

**Built by**: David Vargas
**Domain**: davidwebgt.com

**Profile**: AI Systems Engineer (2023-present)
**Experience**: Fintech, self-hosted AI infrastructure, QA automation
**Projects**: 4 featured project showcases
**Tech Stack**: Astro, TypeScript, Three.js, GSAP

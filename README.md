# AI Systems Engineer Portfolio

> Brutalist single-page portfolio showcasing AI/ML infrastructure expertise

![Tech Stack](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)

## 🎯 Overview

Professional portfolio for **David Vargas**, Software Engineer with 3+ years of experience in fintech, ERP systems, and AI development. Designed to showcase technical expertise and attract software development opportunities. Features a **brutalist design** with Three.js 3D background, GSAP animations, and comprehensive project demonstrations.

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
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Button.astro
│   └── styles/
│       └── global.css            # Brutalist CSS variables
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

## 🔗 Social Links

- [GitHub](https://github.com/DavidDevGt)
- [LinkedIn](https://www.linkedin.com/in/jdavidvl/)

## 📝 Content Sections

1. **Hero** - Name, role, key metrics (8+ systems, 50M+ req/day, 99.95% uptime)
2. **About** - AI infrastructure philosophy & achievements
3. **Experience** - Professional background & key achievements
4. **Work** - 8 featured projects with detailed descriptions
5. **Stack** - 6 technical skill categories (20+ technologies)
6. **Expertise** - 4 specialized areas (GPU optimization, self-hosted AI, MLOps, real-time systems)
7. **Contact** - Professional contact information & call-to-action

## 🌐 Deployment

Build output is in `dist/` directory. Deploy to:

- **Netlify**: `netlify deploy --prod`
- **Vercel**: `vercel --prod`
- **Cloudflare Pages**: Connect repo
- **Any static host**: Upload `dist/` folder

### Environment Variables

No environment variables needed for basic deployment.

## 🎯 SEO & Performance

- **Title**: "David Vargas — Software Engineer | Fintech, ERP & AI Development"
- **Description**: Software Engineer from Guatemala with experience in fintech, ERP systems, and AI development. Building robust software solutions for modern business challenges
- **Keywords**: Software Engineer, Fintech, ERP, AI Development, React, Python, PostgreSQL, Full Stack
- **Schema Markup**: Person + FAQPage + WebSite structured data
- **Analytics**: Plausible (privacy-focused)
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

## 📚 Documentation

For detailed design decisions and implementation notes, see:
- [BRUTALIST-PORTFOLIO.md](./BRUTALIST-PORTFOLIO.md) - Full design documentation
- [SEO-STRATEGY.md](./SEO-STRATEGY.md) - SEO implementation details
- [SEO-CHECKLIST.md](./SEO-CHECKLIST.md) - Optimization checklist

---

**Built by**: David Vargas
**Domain**: davidwebgt.com
**Last Updated**: 2026-04-03

**Profile**: Software Engineer (2023-present)
**Experience**: Fintech, ERP, AI Development
**Projects**: 3 core systems + multiple implementations
**Tech Stack**: Full-stack development, modern frameworks

**Sections**: 7 comprehensive sections
**Projects**: 8 detailed project showcases
**Skills**: 20+ technologies across 6 categories
**Experience**: 3 professional roles with achievements
**Expertise**: 4 specialized technical areas

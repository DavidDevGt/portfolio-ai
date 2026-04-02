# AI Systems Engineer Portfolio

> Brutalist single-page portfolio showcasing AI/ML infrastructure expertise

![Tech Stack](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)

## 🎯 Overview

Production-ready portfolio for **David Vargas**, AI Systems Engineer. Features a **brutalist design** with Three.js 3D background, GSAP animations, and a tech-savvy aesthetic.

### Key Features

- ✨ **Single-page landing** - All content on one optimized page
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
│   │   ├── index.astro          # Main landing page (brutalist design)
│   │   ├── about.astro           # Redirects to /
│   │   ├── projects.astro        # Redirects to /#work
│   │   └── lab.astro             # Redirects to GitHub
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with SEO
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Button.astro
│   └── styles/
│       └── global.css            # Brutalist CSS variables
├── public/
│   ├── robots.txt
│   ├── manifest.json
│   └── favicon.svg
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

1. **Neural Network Optimizer** - 73% speedup
2. **Distributed LLM Gateway** - 50M+ req/day
3. **Real-time CV System** - 60fps edge deployment
4. **AI Model Observatory** - MLOps platform

## 🔗 Social Links

- [GitHub](https://github.com/DavidDevGt)
- [LinkedIn](https://www.linkedin.com/in/jdavidvl/)

## 📝 Content Sections

1. **Hero** - Name, role, key metrics
2. **About** - AI infrastructure expertise
3. **Work** - Featured projects
4. **Stack** - Technical skills
5. **Contact** - Get in touch

## 🌐 Deployment

Build output is in `dist/` directory. Deploy to:

- **Netlify**: `netlify deploy --prod`
- **Vercel**: `vercel --prod`
- **Cloudflare Pages**: Connect repo
- **Any static host**: Upload `dist/` folder

### Environment Variables

No environment variables needed for basic deployment.

## 🎯 SEO

- Title: "David Vargas — AI Systems Engineer | ML Infrastructure & Real-time AI"
- Description: Production ML infrastructure specialist
- Keywords: AI Systems Engineer, Machine Learning, PyTorch, TensorFlow
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
**Last Updated**: 2026-04-02

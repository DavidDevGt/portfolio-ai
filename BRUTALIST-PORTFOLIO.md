# AI Systems Engineer Portfolio - Brutalist Design

## 🎯 Overview

Single-page landing portfolio con diseño **brutalist** para AI Systems Engineer. Featuring Three.js background, GSAP animations, y un aesthetic tech-savvy.

## 🎨 Design Philosophy

### Brutalism
- **Tipografía pesada**: Font weights de 900, uppercase, letra tracking negativa
- **Colores crudos**: Verde neón (#00ff00), magenta (#ff00ff), cyan (#00ffff)
- **Bordes gruesos**: 4px, 8px, 12px borders en elementos clave
- **Sin suavizado**: image-rendering pixelated, -webkit-font-smoothing: none
- **Contraste máximo**: Negro puro (#000) con blanco puro (#fff)
- **Efectos de sombra offset**: `transform: translate(-4px, -4px)` con `box-shadow`

### Tech Stack Showcase
- **Three.js**: Wireframe icosahedron animado en el background
- **GSAP + ScrollTrigger**: Animaciones smooth y performantes
- **TypeScript**: Type-safe animations y interacciones
- **Responsive**: Mobile-first con breakpoints lógicos

## 🚀 Features

### Hero Section
- Título dramático multi-línea con text-shadow
- Stats cards con bordes gruesos
- CTAs con hover effects brutalist (lift + shadow)
- Three.js wireframe geometry animado

### Projects Section
- Cards con bordes gruesos y hover transforms
- Proyecto numbering estilo terminal
- Tech tags con estilo monospace
- Métricas destacadas por proyecto

### Stack Section
- Grid categorizado por tipo de tech
- Bullet points con caracteres especiales (▸)
- Hover effects mínimos pero impactantes

### Contact Section
- Links grandes estilo brutalist
- Hover effects con desplazamiento y sombra
- Información de contacto limpia

## 📂 Structure

```
src/
├── pages/
│   ├── index.astro          # Main landing page (BRUTALIST)
│   ├── about.astro           # Redirects to /
│   ├── projects.astro        # Redirects to /#work
│   └── lab.astro             # Redirects to GitHub
├── layouts/
│   └── Layout.astro          # Updated with AI Systems Engineer info
├── components/
│   ├── Header.astro          # Kept for 404 page
│   ├── Footer.astro          # Kept for 404 page
│   └── Button.astro          # Kept for 404 page
└── styles/
    └── global.css            # Brutalist CSS variables
```

## 🎯 SEO Optimization

### Meta Tags
- **Title**: "David Vargas — AI Systems Engineer | ML Infrastructure & Real-time AI"
- **Description**: Focus on production ML, model optimization, real-time AI systems
- **Keywords**: AI Systems Engineer, Machine Learning Infrastructure, PyTorch, TensorFlow, CUDA

### Schema Markup
- Person schema con jobTitle "AI Systems Engineer"
- knowsAbout array con AI/ML technologies
- Social links: GitHub (DavidDevGt), LinkedIn (jdavidvl)

### Technical SEO
- Canonical URLs
- Sitemap XML
- robots.txt optimizado
- Open Graph tags
- Twitter Cards

## 🔧 Tech Stack

### Dependencies
```json
{
  "gsap": "^3.x",
  "three": "^0.x",
  "@types/three": "^0.x"
}
```

### Framework
- **Astro**: Static site generation
- **TypeScript**: Type safety
- **Vite**: Build tool

## 🎨 Color Palette

```css
--color-bg: #000000           /* Pure black */
--color-bg-alt: #0a0a0a       /* Almost black */
--color-accent: #00ff00       /* Neon green */
--color-accent-2: #ff00ff     /* Magenta */
--color-accent-3: #00ffff     /* Cyan */
--color-warning: #ffff00      /* Yellow */
--color-error: #ff0000        /* Red */
--color-text: #ffffff         /* Pure white */
--color-text-muted: #888888   /* Gray */
--color-border: #ffffff       /* White borders */
```

## 📱 Responsive Breakpoints

- **Desktop**: 1400px max-width containers
- **Tablet**: 968px breakpoint
- **Mobile**: 640px breakpoint

### Mobile Optimizations
- Hero stats stack vertically
- Projects grid becomes 1 column
- Nav links compress
- Font sizes scale with clamp()

## ⚡ Performance

### Three.js Optimization
- PixelRatio capped at 1.5
- Simple icosahedron geometry (low poly count)
- Wireframe material (performance-friendly)
- Minimal animations (rotation only)

### GSAP Optimization
- Respects `prefers-reduced-motion`
- Stagger animations (better perceived performance)
- ScrollTrigger with efficient triggers
- No layout thrashing

## 🌐 Social Links

- **GitHub**: https://github.com/DavidDevGt
- **LinkedIn**: https://www.linkedin.com/in/jdavidvl/
- **Email**: contact@davidwebgt.com

## 📦 Build & Deploy

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

### Deployment Targets
- Netlify
- Vercel
- Cloudflare Pages
- Any static host

## 🎯 Projects Showcased

1. **Neural Network Optimizer**
   - Custom GPU-accelerated training pipeline
   - 73% inference time reduction
   - Stack: PyTorch, CUDA, TensorRT

2. **Distributed LLM Gateway**
   - 50M+ requests/day
   - <100ms latency
   - Stack: Go, Redis, Kubernetes

3. **Real-time Computer Vision System**
   - Edge-deployed object detection
   - 60fps on constrained devices
   - Stack: ONNX, TensorFlow Lite, C++

4. **AI Model Observatory**
   - MLOps platform
   - Model versioning, A/B testing, monitoring
   - Stack: Python, MLflow, Prometheus

## 📊 Key Metrics

- **73%** - Inference speedup
- **50M+** - Requests/day handled
- **<100ms** - P99 latency

## 🚨 Important Notes

1. **Single Page App**: All pages redirect to home or external links
2. **No Navigation**: Nav bar only has anchors and external links
3. **Brutalist Aesthetic**: Intentionally raw, bold, high-contrast
4. **Three.js Background**: Fixed position canvas behind content
5. **GSAP Animations**: Smooth but not excessive

## 🔍 SEO Keywords

Primary:
- AI Systems Engineer
- Machine Learning Infrastructure
- Model Optimization
- Real-time AI Systems

Secondary:
- PyTorch Engineer
- TensorFlow Production
- MLOps Engineer
- Kubernetes ML

## 📝 Content Strategy

- Tech-savvy professional tone
- Focus on production experience
- Metrics-driven project descriptions
- Clear specialization (AI infrastructure)
- Build systems that "actually ship"

## 🎓 Education/Experience

Not prominently featured (single-page focus on work and skills), but can be added:
- Add experience timeline in future iterations
- Keep focus on recent AI/ML infrastructure work
- Highlight production impact over titles

---

**Built with**: Astro, TypeScript, Three.js, GSAP
**Design**: Brutalist / Neo-Brutalist
**Focus**: AI Systems Engineering, ML Infrastructure
**Domain**: davidwebgt.com

**Last Updated**: 2026-04-02

# Deployment Guide

## Prerequisites

- Docker & Docker Compose
- Node.js 22+ (for local development)

---

## Option 1: Docker Compose (Local / Server)

### Build & Run

```bash
# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### Access
- http://localhost:3000

---

## Option 2: Docker Solo

```bash
# Build image
docker build -t portfolio-ai .

# Run container
docker run -d -p 3000:80 --name portfolio portfolio-ai

# Access
# http://localhost:3000
```

---

## Option 3: Deploy to Railway (Recomendado)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Init project
railway init

# Deploy
railway up
```

### Railway con Docker

```bash
# Create project from Docker Compose
railway up --template=docker
```

---

## Option 4: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## Option 5: Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build first
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

---

## Production Checklist

- [ ] Set custom domain
- [ ] Configure SSL (Let's Encrypt automatico en Railway/Vercel)
- [ ] Set up health monitoring
- [ ] Verify all pages load correctly
- [ ] Test mobile menu works

## Environment Variables

This portfolio no requiere variables de entorno en producción.

---

## Quick Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview build locally
npm run preview

# Docker build
docker build -t portfolio .

# Docker run
docker run -p 3000:80 portfolio
```
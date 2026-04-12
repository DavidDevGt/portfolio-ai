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

## Option 3: Deploy to Railway (Recommended)

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

### Railway with Docker

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

## Option 6: Deploy to Cloudflare Pages (Recommended)

### Via GitHub (Recommended - Automated)

1. Connect your GitHub repository to Cloudflare Pages:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Select your domain
   - Go to Pages → Connect to Git
   - Select your repository
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Leave "Deploy command" empty** (important!)
   - Deploy

### Configuration in Cloudflare Pages Dashboard

If you already have a project connected:
1. Go to your project settings
2. Find "Build & Deployments"
3. Set **Build command:** `npm run build`
4. Set **Build output:** `dist`
5. **Remove or leave empty the "Deploy command"** - Pages handles this automatically

### Via CLI (Manual)

```bash
# Build first
npm run build

# Deploy to Pages
npx wrangler pages deploy dist
```

**Important:** Do NOT use `npx wrangler deploy` for Pages - that's for Workers, not Pages.

---

## Production Checklist

- [ ] Set custom domain
- [ ] Configure SSL (Let's Encrypt automatico en Railway/Vercel)
- [ ] Set up health monitoring
- [ ] Verify all pages load correctly
- [ ] Test mobile menu works

## Environment Variables

This portfolio does not require environment variables in production.

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
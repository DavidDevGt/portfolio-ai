# Guía de Deployment y Verificación SEO

## 🚀 Deployment a davidwebgt.com

### Pre-deployment Checklist

1. **Verificar configuración de dominio**
   ```bash
   # Verificar que astro.config.mjs tiene:
   site: 'https://davidwebgt.com'
   ```

2. **Build del proyecto**
   ```bash
   npm run build
   ```

3. **Verificar build local**
   ```bash
   npm run preview
   ```

### Deployment (Según tu hosting)

#### Opción 1: Netlify
```bash
# Instalar CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Configuración DNS en Netlify:**
- Domain: davidwebgt.com
- SSL: Auto-enabled
- HTTPS redirect: Enabled

#### Opción 2: Vercel
```bash
# Instalar CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Configuración en Vercel:**
- Framework: Astro
- Domain: davidwebgt.com
- Auto SSL: Yes

#### Opción 3: Cloudflare Pages
```bash
# Conectar repo de GitHub
# Build command: npm run build
# Output directory: dist
```

## ✅ Post-Deployment: Verificación SEO

### 1. Verificar URLs y Redirects

```bash
# Homepage
curl -I https://davidwebgt.com
# Debe retornar: 200 OK

# WWW redirect
curl -I https://www.davidwebgt.com
# Debe redirigir a: https://davidwebgt.com (301)

# HTTP redirect
curl -I http://davidwebgt.com
# Debe redirigir a: https://davidwebgt.com (301)
```

### 2. Verificar Archivos SEO

```bash
# Sitemap
https://davidwebgt.com/sitemap-index.xml

# Robots.txt
https://davidwebgt.com/robots.txt

# Manifest
https://davidwebgt.com/manifest.json
```

### 3. Google Search Console Setup

1. **Agregar propiedad**
   - Ir a: https://search.google.com/search-console
   - Add Property: https://davidwebgt.com
   - Verificar con HTML tag (agregar en Layout.astro):
   ```html
   <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
   ```

2. **Enviar sitemap**
   - URL: https://davidwebgt.com/sitemap-index.xml
   - Sitemaps > Add new sitemap

3. **Solicitar indexación**
   - URL Inspection tool
   - Request Indexing para homepage

### 4. Meta Tags Verification

Usar herramienta: https://metatags.io

- [x] Title correcto
- [x] Description correcta
- [x] OG Image carga (crear imagen primero)
- [x] Twitter Card preview

### 5. Schema Markup Validation

Usar: https://validator.schema.org

- Copiar HTML de homepage
- Validar que Person schema esté correcto
- Verificar SoftwareApplication schema en proyectos

### 6. Performance Testing

```bash
# Lighthouse CI
npx lighthouse https://davidwebgt.com --view

# PageSpeed Insights
# Ir a: https://pagespeed.web.dev/
# URL: https://davidwebgt.com
```

**Targets:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100

### 7. Mobile-Friendly Test

Visitar: https://search.google.com/test/mobile-friendly
URL: https://davidwebgt.com

## 🎨 Crear og-image.jpg

### Especificaciones
- Tamaño: 1200 x 630 px
- Formato: JPG optimizado
- Peso: < 100KB
- Ubicación: `/public/og-image.jpg`

### Contenido sugerido
```
[Fondo oscuro #080810 con grid sutil]

<davidwebgt/>

David Vargas
Ingeniero de Software

[Iconos]: Android • Node.js • Go • Cloud

Guatemala 🇬🇹
```

### Herramientas para crear
- Figma (https://figma.com)
- Canva (https://canva.com)
- OG Image Generator (https://og-image.vercel.app)

## 📊 Monitoreo Post-Launch

### Semana 1
- [ ] Verificar indexación en Google: `site:davidwebgt.com`
- [ ] Revisar errores en Search Console
- [ ] Verificar que sitemap fue procesado
- [ ] Core Web Vitals baseline

### Semana 2-4
- [ ] Primeras impresiones en Search Console
- [ ] Revisar keywords que están rankeando
- [ ] Ajustar meta descriptions según CTR
- [ ] Crear 1-2 artículos de blog

### Mes 2-3
- [ ] Analizar páginas más visitadas
- [ ] Optimizar páginas con alto bounce rate
- [ ] Comenzar link building
- [ ] Revisar competencia para keywords target

## 🔍 Debugging SEO

### Sitio no indexa
```bash
# Verificar robots.txt
curl https://davidwebgt.com/robots.txt

# Verificar que permite Googlebot
# Debe tener: User-agent: Googlebot / Allow: /
```

### Meta tags no aparecen
- Verificar que no hay multiple H1
- Verificar canonical URL correcto
- Hard refresh del navegador (Ctrl+Shift+R)

### Schema markup no valida
- Copiar HTML source (no inspeccionar elemento)
- Pegar en https://validator.schema.org
- Corregir errores de sintaxis JSON-LD

## 📞 Soporte

Si tienes dudas con el deployment o SEO:

1. Revisar documentación de Astro: https://docs.astro.build
2. Revisar estos archivos:
   - `SEO-STRATEGY.md` - Estrategia general
   - `SEO-CHECKLIST.md` - Lista completa de optimizaciones
3. Contactar soporte del hosting que uses

---

**Importante:** Después del deployment, el SEO toma 3-6 meses en mostrar resultados. Sé paciente y consistente con la creación de contenido.

**Última actualización:** 2026-04-02

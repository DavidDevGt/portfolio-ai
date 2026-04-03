# SEO + AI Visibility Audit: Portfolio David Vargas

## Summary
Portfolio website for an AI Infrastructure Engineer built with Astro 6. Overall SEO health: **A-**. Strong technical foundation with JSON-LD schema (Person + FAQPage + WebSite), sitemap, proper meta tags, semantic HTML, and OG image. All critical issues have been resolved.

## Issues Resolved

### ✅ Fixed: OG Image
- Created `/public/og-image.svg` (1200x630px social card)
- Updated `og:image` and `twitter:image` to point to `.svg`

### ✅ Fixed: Language & Locale
- Changed `html lang` from `en` to `es`
- Changed `og:locale` from `en_US` to `es_GT`
- Added `geo.region` (GT) and `geo.placename` (Guatemala) meta tags
- Added `address` to Person schema with Guatemala

### ✅ Fixed: Metadata Inconsistencies
- Updated title to "AI Systems Engineer | ML Infrastructure & Self-Hosted AI"
- Updated description to reflect actual tech (Faster-Whisper, Liquidsoap, Kubernetes)
- Updated keywords to match real expertise
- Updated `knowsAbout` in Person schema to 16 relevant topics
- Updated manifest.json to match AI Systems Engineer branding

### ✅ Fixed: Semantic HTML
- Added `<header>` around navigation
- Added `<main>` wrapping all page content
- Added `<footer>` as semantic element
- Added `aria-label` to nav and hero sections
- Added `aria-hidden="true"` to decorative canvas

### ✅ Fixed: Broken Links
- Removed all `/blog/*` references from `projects.ts`
- Updated projects to match actual portfolio (Kurai-Transcribe, KuraiMusik, etc.)
- All links now point to valid URLs

### ✅ Fixed: Redirects
- Changed from `meta http-equiv="refresh"` to `Astro.redirect()` (proper 301)
- Applied to `/about`, `/projects`, `/lab`

### ✅ Added: FAQPage Schema
- 4 FAQ items covering AI Systems Engineering topics
- Optimized for AI answer visibility (ChatGPT, Gemini, Perplexity)

### ✅ Added: WebSite Schema
- Structured data for the overall website
- Links to author (Person schema)

### ✅ Added: Analytics
- Plausible Analytics snippet integrated
- Privacy-first, no cookie banner needed

## Current Schema Markup
1. **Person** - Name, jobTitle, address (Guatemala), sameAs (GitHub, LinkedIn), knowsAbout (16 topics)
2. **FAQPage** - 4 questions about AI infrastructure engineering
3. **WebSite** - Site name, URL, author, language

## Remaining Opportunities

### Medium Priority
1. **Blog/Content** - No blog section exists yet. Would enable long-tail keyword targeting.
2. **Core Web Vitals** - Monitor LCP, INP, CLS after deployment.
3. **Google Search Console** - Add verification meta tag, submit sitemap.
4. **Performance** - Consider lazy-loading Three.js after first user interaction.

### Low Priority
1. **RSS Feed** - Add when blog section is created.
2. **Testimonials** - Add social proof section.
3. **Case Studies** - Expand project descriptions into full case study pages.

## Quick Reference Checklist

- [x] JSON-LD Person schema with Guatemala address
- [x] JSON-LD FAQPage schema (4 questions)
- [x] JSON-LD WebSite schema
- [x] Sitemap generated (@astrojs/sitemap)
- [x] Canonical URLs set
- [x] Open Graph tags complete with SVG image
- [x] Twitter Card meta tags complete
- [x] Semantic HTML structure (header, main, footer, nav, section, article)
- [x] Single H1 per page
- [x] Proper 301 redirects
- [x] Analytics (Plausible)
- [x] robots.txt with sitemap
- [x] manifest.json aligned with branding
- [x] geo meta tags for local SEO
- [x] html lang = es, og:locale = es_GT

---

**Last audit:** 2026-04-03
**Grade:** A- (downgraded only for lack of blog content)

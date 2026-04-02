# SEO + AI Visibility Audit: Portfolio David

## Summary
Portfolio website for an AI Infrastructure Engineer built with Astro. Overall SEO health: **B**. Strong technical foundation with JSON-LD schema, sitemap, and proper meta tags. Main opportunities: create OG image, add FAQ schema, and optimize content for AI answer visibility.

## Critical Issues (fix immediately)

1. **Missing OG Image** — `og:image` points to `/og-image.png` which doesn't exist
   - Fix: Create a 1200x630px social preview image with name + title + brand accent
   
2. **No RSS Feed** — Linked in Layout but not implemented
   - Fix: Add `src/pages/rss.xml.js` for blog/content RSS

## High Impact Opportunities

1. **Add FAQPage Schema** — No structured FAQ data for AI visibility
   - Add JSON-LD with common questions about AI infrastructure engineering
   
2. **Optimize for AI Answers** — Content structure could be more "answer-first"
   - Add "TL;DR" sections to longer content blocks
   - Use more bullet points and tables for comparison data

3. **Author Schema Enhancement** — Current Person schema is minimal
   - Add `worksFor`, `jobTitle`, and potential alumni from organizations

## AI Answer Optimization

1. **Inverted Pyramid Style** — Ensure each section's first sentence answers the core question
   - About page intro: Lead with what the person does, not background
   
2. **Structured Data for Q&A** — Lab demos could benefit from QAPage schema
   - Each demo tool could have FAQ-style structured data

3. **Specific Metrics in Content** — Already has good metrics (50M requests, 60% cost reduction)
   - This is excellent for AI citation — keep this approach

## Content Gaps

1. **Blog Section** — Referenced in project links (`/blog/llm-gateway`) but doesn't exist
   - Either create blog pages or remove broken links

2. **Case Studies** — Projects link to case study pages that don't exist
   - Either create at `/blog/ml-pipeline-case-study` or update links

## Maintenance & Monitoring

- [ ] Generate and upload OG image to `/public/`
- [ ] Run `npm run build` after any content changes to update sitemap
- [ ] Check Google Search Console for indexing status after deployment
- [ ] Monitor AI answer appearances in ChatGPT/Gemini/Perplexity

## Quick Reference Checklist

- [x] JSON-LD Person schema implemented
- [x] Sitemap generated
- [x] Canonical URLs set
- [x] Open Graph tags complete
- [x] Twitter Card meta tags complete
- [x] Semantic HTML structure (header, main, footer, nav)
- [x] Single H1 per page
- [ ] Blog/case study links need resolution (broken links in projects.ts)
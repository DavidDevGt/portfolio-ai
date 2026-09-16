// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { visualizer } from 'rollup-plugin-visualizer';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai.davidwebgt.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-GT'
        }
      }
    })
  ],
  vite: {
    plugins: [
      visualizer({
        filename: 'dist/stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true
      })
    ],
    css: {
      preprocessorOptions: {}
    }
  }
});
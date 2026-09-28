import tailwindcss from '@tailwindcss/vite'

const siteUrl = 'https://amin.darabi.one'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: { siteUrl },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#fbfbfd', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#1a1c24', media: '(prefers-color-scheme: dark)' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      ],
      link: [
        // SVG favicon adapts to light/dark mode; the .ico is a fallback for older browsers.
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  // Old /skills/* sub-pages were merged into /skills.
  routeRules: {
    '/skills/ce': { redirect: '/skills' },
    '/skills/cs': { redirect: '/skills' },
    '/skills/lang': { redirect: '/skills' },
  },

  // Fully static output for GitHub Pages (`nuxt generate` -> .output/public).
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/skills/ce', '/skills/cs', '/skills/lang'],
      failOnError: true,
      // Emit about.html instead of about/index.html so GitHub Pages serves /about without a redirect.
      autoSubfolderIndex: false,
    },
  },
})

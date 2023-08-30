// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: [
    'nuxt-vite'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' }]
    }
  },
  routeRules: {
    '/modify-headers-route': { headers: { 'x-magic-of': 'nuxt and vercel' } },
  },
  vite: {
    optimizeDeps: {
      exclude: [
        'date-fns'
      ]
    },
    build: true,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/main.scss" as *;'
        }
      }
    }
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-gtag'
  ],
  app: {
    head: {
      title: 'Reaping Misery - Farm, Train Pets, Conquer Dungeons',
      meta: [
        { name: 'description', content: 'Reaping Misery is a game where you manage your farm, train loyal pets, and face monsters in dark and brutal dungeons!' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        // 1. Skrip eksternal Google Tag Manager
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-Y7XBY7KM2F'
        },
        // 2. Skrip inisialisasi inline
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y7XBY7KM2F');
          `
        }
      ]
    }
  }
})
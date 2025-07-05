// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-gtag' // <-- Di sini, daftarkan HANYA NAMA MODULNYA.
  ],

  // TAMBAHKAN BLOK KONFIGURASI INI SECARA TERPISAH
  'google-gtag': {
    id: 'G-Y7XBY7KM2F' // Pastikan ID ini adalah milik Anda
  },

  app: {
    head: {
      title: 'Reaping Misery - Farm, Train Pets, Conquer Dungeons',
      meta: [
        { name: 'description', content: 'Reaping Misery is a game where you manage your farm, train loyal pets, and face monsters in dark and brutal dungeons!' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
<template>
  <section class="relative pt-28 pb-16 md:pt-52 md:pb-24 overflow-hidden">
    <!-- Background overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-game-dark z-0">
      <img src="https://source.unsplash.com/featured/?fantasy,game,adventure" alt="Game background"
        class="w-full h-full object-cover opacity-50 mix-blend-overlay" />
    </div>

    <div class="container relative z-10">
      <div class="flex flex-col items-center text-center">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-float">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">REAPING MISERY</span>
        </h1>

        <p class="text-xl md:text-2xl text-indigo-200 max-w-3xl mb-8">
          Kelola kebunmu, latih pet setia, dan hadapi monster di dungeon yang gelap dan brutal!
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 mt-4">
          <a class="btn-primary" href="https://sw-station.itch.io/reaping-misery" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Sekarang
          </a>
          <!-- <button class="btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Wishlist
          </button> -->
        </div>

        <div class="mt-12">
          <svg class="animate-bounce w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
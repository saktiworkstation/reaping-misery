<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img src="https://source.unsplash.com/featured/?fantasy,game,epic" alt="CTA background" class="w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-gradient-to-t from-game-dark via-purple-900/70 to-game-dark"></div>
    </div>
    
    <!-- Content -->
    <div class="container relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Siap Memulai Petualangan?</h2>
        <p class="text-xl text-indigo-200 mb-10">
          Jelajahi dunia yang luas dan tana harapan ini, capai tingkat tertinggi dan kalahkan para creature.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://sw-station.itch.io/reaping-misery" target="_blank" class="btn-primary text-lg px-8 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Sekarang
          </a>
          <!-- <button class="btn-secondary text-lg px-8 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Registrasi Ulang
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>
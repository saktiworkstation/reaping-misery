<template>
  <section id="features" class="section bg-gradient-to-b from-game-dark to-indigo-950">
    <div class="container">
      <h2 class="section-title text-center">Fitur Unggulan</h2>
      <p class="section-subtitle text-center">
        Fitur-fitur menarik yang akan membuat pengalaman bermainmu semakin seru dan menyenangkan.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div v-for="(feature, index) in features" :key="index"
          class="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-800 hover:border-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/50 hover:-translate-y-1">
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-pink-600 mb-6 mx-auto">
            <component :is="feature.icon" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3 text-center">{{ feature.title }}</h3>
          <p class="text-indigo-200 text-center">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Feature icons as components
const LeafIcon = {
  template: `
    <svg xmlns="https://img.icons8.com/?size=100&id=undefined&format=png&color=000000" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  `
}

const PetIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  `
}

const DungeonIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  `
}

// Feature data
const features = [
  {
    icon: LeafIcon,
    title: 'Sistem Bertani Simpel',
    description: 'Tanam, panen, dan jual hasil kebun untuk upgrade alat.'
  },
  {
    icon: PetIcon,
    title: 'Peliharaan Tangguh',
    description: 'Latih pet-mu untuk bertarung atau bantu pekerjaan di kebun.'
  },
  {
    icon: DungeonIcon,
    title: 'Dungeon Misterius',
    description: 'Jelajahi dungeon dengan musuh unik dan hadiah langka.'
  }
]
</script>
<template>
  <section id="dungeons" class="section bg-gradient-to-b from-purple-950 to-game-dark">
    <div class="container">
      <h2 class="section-title text-center">Dungeon Preview</h2>
      <p class="section-subtitle text-center">
        Jelajahi dunia yang luas di mana tantangan selalu beradaptasi dengan level kekuatanmu. Namun, bagi para petualang sejati, sebuah dungeon dengan tingkat kesulitan brutal telah menanti di dekatmu. Meskipun berbahaya, hadiah yang tersimpan di dalamnya tak ternilai harganya. Pilihlah jalanmu: bertumbuh seiring dunia atau taklukkan tantangan mustahil.
      </p>
      
      <div class="mt-12 bg-game-dark/70 rounded-xl overflow-hidden border border-purple-800 shadow-2xl shadow-purple-900/30 max-w-4xl mx-auto">
        <div class="relative pb-[56.25%] h-0 overflow-hidden">
          <iframe 
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="SW-STATION Dungeon Preview"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        
        <div class="p-6">
          <h3 class="text-2xl font-bold text-white mb-3">Battle Mechanism Preview</h3>
          <p class="text-indigo-200">
            Dalam video ini, kamu bisa melihat preview dari battle mechanism yang brutal dan menantang di dalam dungeon.
            Setiap monster memiliki pattern yang harus kamu pelajari untuk mengalahkannya.
          </p>
          
          <div class="mt-6 flex flex-wrap gap-4">
            <div v-for="(feature, index) in dungeonFeatures" :key="index" class="flex items-center space-x-2">
              <div class="flex-shrink-0 w-4 h-4 rounded-full" :class="feature.colorClass"></div>
              <span class="text-sm text-gray-300">{{ feature.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Dungeon features
const dungeonFeatures = [
  { text: 'Dungeon Acak', colorClass: 'bg-indigo-500' },
  { text: 'Boss Brutal', colorClass: 'bg-red-500' },
  { text: 'Hadiah Melimpah', colorClass: 'bg-yellow-500' },
  { text: 'Trap Mematikan', colorClass: 'bg-pink-500' },
  { text: 'Puzzle Tersembunyi', colorClass: 'bg-green-500' }
]
</script>
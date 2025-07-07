<template>
  <section id="pets" class="section bg-gradient-to-b from-indigo-950 to-purple-950">
    <div class="container">
      <h2 class="section-title text-center">Sistem Pet</h2>
      <p class="section-subtitle text-center">
        Pilih rekan pet untuk menemanimu berpetualang. Setiap pet memiliki peran dan kemampuan unik, seperti menyembuhkan dari jarak jauh, namun juga memiliki kelemahan. Manfaatkan mereka secara strategis untuk meraih kemenangan.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div v-for="(pet, index) in pets" :key="index"
          class="bg-purple-900/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-800/30 transition-all duration-300 hover:-translate-y-2 group">
          <div class="relative h-60 overflow-hidden">
            <img :src="pet.imageUrl" :alt="pet.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-60"></div>
          </div>
          <div class="p-4">
            <h3 class="text-2xl font-bold text-white mb-2">{{ pet.name }}</h3>
            <div class="flex space-x-2 mb-3">
              <span v-for="(tag, tagIndex) in pet.tags" :key="tagIndex" class="text-xs px-2 py-1 rounded-full" :class="{
                'bg-indigo-600 text-white': tag === 'Water',
                'bg-red-600 text-white': tag === 'Fire',
                'bg-green-600 text-white': tag === 'Earth',
                'bg-yellow-600 text-white': tag === 'Electric',
                'bg-gray-600 text-white': !['Water', 'Fire', 'Earth', 'Electric'].includes(tag)
              }">
                {{ tag }}
              </span>
            </div>
            <p class="text-indigo-200">{{ pet.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pet data
const pets = [
  {
    name: 'Chicken',
    imageUrl: 'https://img.itch.zone/aW1hZ2UvMzY4ODQ0OC8yMjAzMDIwMS5wbmc=/794x1000/zvoEmj.png',
    tags: ['Healer', 'Slow'],
    description: 'Pet ini berkhusus pada penyembuhan jarak jauh, kekurangannya adalah healnya sangat lama.'
  },
]
</script>
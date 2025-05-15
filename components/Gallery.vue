<template>
  <section id="gallery" class="section bg-gradient-to-b from-indigo-950 to-purple-950">
    <div class="container">
      <h2 class="section-title text-center">Screenshot Gallery</h2>
      <p class="section-subtitle text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu neque nisi.
      </p>

      <div class="mt-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(image, index) in images" :key="index" class="overflow-hidden rounded-xl group">
            <div class="relative overflow-hidden cursor-pointer">
              <img :src="image.url" :alt="image.alt"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              </div>
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-white font-bold text-xl">{{ image.caption }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <button class="btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View More Screenshots
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Gallery images
const images = [
  {
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Farming System',
    caption: 'Farm Management'
  },
  {
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Pet Collection',
    caption: 'Pet Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dungeon Battle',
    caption: 'Epic Battles'
  }
]
</script>
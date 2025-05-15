<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-game-dark bg-opacity-95 border-b border-indigo-900 transition-all duration-300">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-2xl font-bold text-white">SW-STATION</span>
          </NuxtLink>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="#features" class="text-gray-300 hover:text-white transition-colors">Features</NuxtLink>
          <NuxtLink to="#pets" class="text-gray-300 hover:text-white transition-colors">Pets</NuxtLink>
          <NuxtLink to="#dungeons" class="text-gray-300 hover:text-white transition-colors">Dungeons</NuxtLink>
          <NuxtLink to="#story" class="text-gray-300 hover:text-white transition-colors">Story</NuxtLink>
          <NuxtLink to="#gallery" class="text-gray-300 hover:text-white transition-colors">Gallery</NuxtLink>
        </div>
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden bg-game-dark border-t border-indigo-900">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink to="#features" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-indigo-900">Features</NuxtLink>
        <NuxtLink to="#pets" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-indigo-900">Pets</NuxtLink>
        <NuxtLink to="#dungeons" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-indigo-900">Dungeons</NuxtLink>
        <NuxtLink to="#story" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-indigo-900">Story</NuxtLink>
        <NuxtLink to="#gallery" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-indigo-900">Gallery</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false);
</script>
<script setup lang="ts">
// Importation explicite du composant AppLogo
import AppLogo from './AppLogo.vue'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Fonctionnalités', href: '/' },
  { name: 'Tarifs', href: '/' },
  { name: 'Blog', href: '/' },
]

const colorMode = useColorMode()
const toggleDarkMode = () => {
  // Inverser le mode couleur actuel
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  colorMode.value = colorMode.preference
}
</script>

<template>
  <!-- Header avec effet glassmorphism -->
  <header class="sticky top-0 z-50 backdrop-blur-md bg-white dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo et nom du site -->
        <NuxtLink to="/" class="flex items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
          <div class="h-8 w-8">
            <AppLogo color="primary" />
          </div>
          <span class="text-xl font-medium">Boilerplate</span>
        </NuxtLink>

        <!-- Navigation principale - visible sur desktop -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <UButton 
            color="primary" 
            variant="ghost" 
            :icon="colorMode.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" 
            :padded="false"
            aria-label="Toggle dark mode"
            @click="toggleDarkMode"
          />
          <UButton color="primary" variant="soft" to="/login" label="Se connecter" />
        </div>
      </div>
    </div>
  </header>
</template>

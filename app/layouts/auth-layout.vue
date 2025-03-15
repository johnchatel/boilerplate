<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 flex flex-col">
    <!-- Bouton de changement de mode (clair/sombre) -->
    <div class="fixed top-4 right-4 z-10">
      <UButton 
        color="primary" 
        variant="ghost" 
        :icon="$colorMode.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" 
        :padded="false"
        class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        aria-label="Toggle dark mode"
        @click="toggleDarkMode"
      />
    </div>
    
    <!-- Contenu de la page -->
    <div class="flex-grow flex flex-col justify-center overflow-auto">
      <slot />
    </div>
    
    <!-- Pied de page minimaliste -->
    <div class="text-center py-4 text-sm text-gray-500 dark:text-gray-400 mt-auto">
      &copy; {{ new Date().getFullYear() }} Boilerplate. Tous droits réservés.
    </div>
  </div>
</template>

<script setup lang="ts">
// AuthLayout - Layout pour les pages d'authentification
const colorMode = useColorMode()

const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  colorMode.value = colorMode.preference
}
</script>

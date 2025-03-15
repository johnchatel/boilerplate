<template>
  <div class="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <!-- Logo animé -->
      <div class="mx-auto w-24 h-24 mb-8">
        <AppLogo :loading="true" color="primary" />
      </div>
      
      <!-- Titre et description -->
      <h1 class="mt-6 text-3xl font-bold tracking-tight text-gray-800 dark:text-white">
        Vérification en cours...
      </h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Nous vérifions votre identité, veuillez patienter un instant.
      </p>

      <!-- Message d'information -->
      <div class="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Vous serez automatiquement redirigé vers votre espace personnel une fois la vérification terminée.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importation explicite du composant AppLogo
import AppLogo from '../components/AppLogo.vue'

// Définir un nom pour le composant
defineOptions({
  name: 'ConfirmPage'
})

// Utiliser le layout d'authentification
definePageMeta({
  layout: 'auth-layout'
})
</script>

<style scoped>
/* Styles spécifiques à la page de confirmation */
</style>

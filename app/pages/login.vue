<template>
<!-- LoginPage -->
  <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <!-- Logo et titre -->
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-flex items-center space-x-2 text-gray-800 dark:text-gray-200">
          <div class="h-10 w-10">
            <AppLogo color="primary" />
          </div>
          <span class="text-2xl font-medium">Boilerplate</span>
        </NuxtLink>
        <h1 class="mt-6 text-3xl font-bold tracking-tight text-gray-800 dark:text-white">
          Connexion à votre compte
        </h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Connectez-vous pour accéder à votre espace personnel
        </p>
      </div>

      <!-- Carte de connexion -->
      <UCard class="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <div class="space-y-6">
          <!-- Connexion avec OAuth -->
          <div class="space-y-4">
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Connexion avec
            </p>
            <div class="grid grid-cols-2 gap-3">
              <UButton
                block
                color="primary"
                variant="outline"
                class="border-gray-300 dark:border-gray-700"
              >
                <template #leading>
                  <UIcon name="i-simple-icons-google" class="h-5 w-5" />
                </template>
                Google
              </UButton>
              <UButton
                block
                color="primary"
                variant="outline"
                class="border-gray-300 dark:border-gray-700"
              >
                <template #leading>
                  <UIcon name="i-simple-icons-linkedin" class="h-5 w-5 text-blue-700" />
                </template>
                LinkedIn
              </UButton>
            </div>
          </div>

          <!-- Séparateur -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                Ou
              </span>
            </div>
          </div>

          <!-- Connexion par Magic Link -->
          <div>
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              Connexion par email (Magic Link)
            </p>
            <div class="mb-2">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <UInput
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                icon="i-heroicons-envelope"
                size="lg"
                class="w-full"
              />
            </div>
            <UButton
              color="primary"
              block
              size="lg"
              class="mt-4"
            >
              Recevoir un lien de connexion
            </UButton>
          </div>
        </div>
      </UCard>

      <!-- Lien d'inscription -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Vous n'avez pas de compte ?
          <NuxtLink to="/" class="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500">
            Créer un compte
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importation explicite du composant AppLogo
import AppLogo from '../components/AppLogo.vue'

definePageMeta({
  layout: 'auth-layout'
})

// Définir un nom pour le composant
defineOptions({
  name: 'LoginPage'
})
</script>

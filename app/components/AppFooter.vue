<template>
  <footer class="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
    <UContainer>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div class="col-span-2 lg:col-span-1">
          <div class="flex items-center space-x-2 text-gray-800 dark:text-gray-200 mb-4">
            <UIcon name="i-simple-icons-nuxt" class="h-8 w-8" />
            <span class="text-xl font-medium">Boilerplate</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Une base solide pour vos projets Nuxt 3, optimisée pour la productivité.
          </p>
          <div class="flex space-x-4">
            <UButton color="primary" variant="ghost" icon="i-simple-icons-github" :padded="false" />
            <UButton color="primary" variant="ghost" icon="i-simple-icons-twitter" :padded="false" />
            <UButton color="primary" variant="ghost" icon="i-simple-icons-discord" :padded="false" />
          </div>
        </div>
        <div>
          <h3 class="font-semibold mb-4 text-gray-800 dark:text-white">Produit</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Fonctionnalités</NuxtLink></li>
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Tarifs</NuxtLink></li>
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">FAQ</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-4 text-gray-800 dark:text-white">Ressources</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Documentation</NuxtLink></li>
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Blog</NuxtLink></li>
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Guides</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-4 text-gray-800 dark:text-white">Entreprise</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">À propos</NuxtLink></li>
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Carrières</NuxtLink></li>
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Contact</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-4 text-gray-800 dark:text-white">Légal</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Confidentialité</NuxtLink></li>
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Conditions</NuxtLink></li>
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Cookies</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Boilerplate. Tous droits réservés.</p>
      </div>
    </UContainer>
  </footer>
</template>

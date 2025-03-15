<template>
  <nav class="flex-1 px-2 py-4 space-y-1">
    <NuxtLink 
      v-for="item in navigationItems" 
      :key="item.to" 
      :to="item.to"
      class="group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
      :class="[
        isActive(item.to) 
          ? 'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400' 
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
      ]"
      @click="$emit('navigate')"
    >
      <UIcon 
        :name="item.icon" 
        class="mr-3 h-5 w-5 flex-shrink-0"
        :class="[
          isActive(item.to) 
            ? 'text-primary-600 dark:text-primary-400' 
            : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400'
        ]"
      />
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

// Navigation items
const navigationItems = [
  {
    label: 'Tableau de bord',
    icon: 'i-heroicons-home',
    to: '/account'
  },
  {
    label: 'Profil',
    icon: 'i-heroicons-user',
    to: '/account/profile'
  },
  {
    label: 'Abonnements',
    icon: 'i-heroicons-credit-card',
    to: '/account/subscriptions'
  },
  {
    label: 'Paramètres',
    icon: 'i-heroicons-cog-6-tooth',
    to: '/account/settings'
  },
  {
    label: 'Paiements',
    icon: 'i-heroicons-banknotes',
    to: '/account/payments'
  }
]

// Émit pour fermer le menu sur mobile après navigation
defineEmits(['navigate'])

// Vérifier si un lien est actif
const route = useRoute()
const isActive = (path: string) => {
  // Cas spécial pour le tableau de bord (/account)
  if (path === '/account') {
    // Actif uniquement si c'est exactement /account ou /account/
    return route.path === '/account' || route.path === '/account/'
  }
  
  // Pour les autres liens, vérifier si le chemin actuel commence par le chemin du lien
  // et s'assurer que c'est bien un sous-chemin (pas juste un préfixe partiel)
  if (route.path.startsWith(path)) {
    // Vérifier si c'est exactement ce chemin ou un sous-chemin
    return route.path === path || route.path.startsWith(path + '/')
  }
  
  return false
}
</script>

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
    to: '/'
  },
  {
    label: 'Profil',
    icon: 'i-heroicons-user',
    to: '/profile'
  },
  {
    label: 'Abonnements',
    icon: 'i-heroicons-credit-card',
    to: '/subscriptions'
  },
  {
    label: 'Paramètres',
    icon: 'i-heroicons-cog-6-tooth',
    to: '/settings'
  },
  {
    label: 'Paiements',
    icon: 'i-heroicons-banknotes',
    to: '/payments'
  }
]

// Émit pour fermer le menu sur mobile après navigation
defineEmits(['navigate'])

// Vérifier si un lien est actif
const route = useRoute()
const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

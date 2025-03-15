<script setup lang="ts">
const features = [
  {
    name: 'Nuxt 3',
    description: 'Framework Vue.js moderne avec rendu hybride, optimisé pour la performance et le SEO.',
    icon: 'i-simple-icons-nuxt'
  },
  {
    name: 'Nuxt UI',
    description: 'Bibliothèque de composants UI prête à l\'emploi, basée sur Tailwind CSS et Headless UI.',
    icon: 'i-heroicons-squares-2x2'
  },
  {
    name: 'TypeScript',
    description: 'Support complet de TypeScript pour un développement plus robuste et maintenable.',
    icon: 'i-simple-icons-typescript'
  },
  {
    name: 'Dark Mode',
    description: 'Thème sombre élégant activé par défaut, avec possibilité de basculer vers le mode clair.',
    icon: 'i-heroicons-moon'
  },
  {
    name: 'Responsive',
    description: 'Design adaptatif pour une expérience optimale sur tous les appareils.',
    icon: 'i-heroicons-device-phone-mobile'
  },
  {
    name: 'Modulaire',
    description: 'Architecture modulaire pour faciliter l\'extension et la maintenance du code.',
    icon: 'i-heroicons-cube'
  }
]
</script>

<template>
  <section class="py-20 bg-gray-100 dark:bg-gray-950">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Fonctionnalités clés</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Tout ce dont vous avez besoin pour démarrer rapidement votre prochain projet Nuxt 3.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard 
          v-for="feature in features" 
          :key="feature.name"
          class="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-primary-500 transition-all duration-300"
        >
          <template #header>
            <div class="flex items-center space-x-4 p-4">
              <div class="bg-primary-500/10 p-3 rounded-lg">
                <UIcon :name="feature.icon" class="text-primary-400 h-6 w-6" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white">{{ feature.name }}</h3>
            </div>
          </template>
          <div class="p-4 pt-0 text-gray-600 dark:text-gray-400">
            {{ feature.description }}
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

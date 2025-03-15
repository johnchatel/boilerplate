<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <!-- En-tête de la page -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Tableau de bord</h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Bienvenue sur votre espace personnel OKR App
        </p>
      </div>

      <!-- Résumé des statistiques -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard 
          title="Objectifs" 
          value="3" 
          icon="i-heroicons-flag" 
          color="primary"
          description="Objectifs actifs"
        />
        <DashboardCard 
          title="Résultats clés" 
          value="12" 
          icon="i-heroicons-check-circle" 
          color="success"
          description="Résultats en cours"
        />
        <DashboardCard 
          title="Progression" 
          value="68%" 
          icon="i-heroicons-chart-bar" 
          color="info"
          description="Progression globale"
        />
      </div>

      <!-- Activité récente -->
      <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden mb-6">
        <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Activité récente</h2>
          
          <div class="space-y-4">
            <div v-for="(activity, index) in recentActivities" :key="index" class="flex items-start">
              <div class="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                <UIcon :name="activity.icon" class="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ activity.title }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Objectifs en cours -->
      <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Objectifs en cours</h2>
          
          <div class="space-y-6">
            <div v-for="(objective, index) in currentObjectives" :key="index" class="space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ objective.title }}</h3>
                <span class="text-xs font-medium px-2 py-1 rounded-full" :class="objective.statusClass">{{ objective.status }}</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div class="h-2 rounded-full" :style="{ width: objective.progress + '%' }" :class="objective.progressClass" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Définir le layout et le nom du composant
definePageMeta({
  layout: 'dashboard-layout'
})

defineOptions({
  name: 'DashboardHomePage'
})

// Données fictives pour l'activité récente
const recentActivities = [
  {
    title: 'Objectif "Augmenter les ventes" mis à jour',
    time: 'Il y a 2 heures',
    icon: 'i-heroicons-pencil'
  },
  {
    title: 'Nouveau résultat clé ajouté à "Améliorer l\'expérience client"',
    time: 'Hier à 15:30',
    icon: 'i-heroicons-plus'
  },
  {
    title: 'Objectif "Optimiser les processus internes" complété à 100%',
    time: 'Il y a 2 jours',
    icon: 'i-heroicons-check'
  }
]

// Données fictives pour les objectifs en cours
const currentObjectives = [
  {
    title: 'Augmenter les ventes de 20% ce trimestre',
    progress: 75,
    status: 'En cours',
    statusClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    progressClass: 'bg-blue-600 dark:bg-blue-500'
  },
  {
    title: 'Améliorer l\'expérience client',
    progress: 45,
    status: 'En cours',
    statusClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    progressClass: 'bg-blue-600 dark:bg-blue-500'
  },
  {
    title: 'Optimiser les processus internes',
    progress: 100,
    status: 'Complété',
    statusClass: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    progressClass: 'bg-green-600 dark:bg-green-500'
  }
]
</script>
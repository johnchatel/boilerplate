<template>
  <div class="container mx-auto max-w-4xl">
    <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden mb-6">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Abonnements</h2>
        
        <!-- Abonnement actuel -->
        <div class="mb-8">
          <div class="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-lg p-4 mb-6">
            <div class="flex items-start">
              <UIcon name="i-heroicons-check-badge" class="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" />
              <div>
                <h3 class="text-md font-medium text-gray-900 dark:text-white">Abonnement actuel : Premium</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Votre abonnement se renouvellera automatiquement le 15 avril 2025</p>
              </div>
            </div>
          </div>
          
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">Détails de l'abonnement</h3>
            <UBadge color="success" variant="soft">Actif</UBadge>
          </div>
          
          <div class="space-y-4">
            <div class="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span class="text-sm text-gray-600 dark:text-gray-400">Plan</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Premium</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span class="text-sm text-gray-600 dark:text-gray-400">Prix</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">9,90€ / mois / utilisateur</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span class="text-sm text-gray-600 dark:text-gray-400">Utilisateurs</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">5</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span class="text-sm text-gray-600 dark:text-gray-400">Facturation</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Mensuelle</span>
            </div>
            <div class="flex justify-between py-2">
              <span class="text-sm text-gray-600 dark:text-gray-400">Prochain paiement</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">15 avril 2025</span>
            </div>
          </div>
        </div>
        
        <!-- Options d'abonnement -->
        <div>
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">Options d'abonnement</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Plan Gratuit -->
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 class="text-md font-medium text-gray-900 dark:text-white mb-2">Gratuit</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Pour les petites équipes ou les utilisateurs individuels</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white mb-4">0€</p>
              
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-sm text-gray-600 dark:text-gray-400">Jusqu'à 3 utilisateurs</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-sm text-gray-600 dark:text-gray-400">Jusqu'à 5 objectifs</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-sm text-gray-600 dark:text-gray-400">Fonctionnalités de base</span>
                </li>
              </ul>
              
              <UButton
                color="neutral"
                variant="soft"
                class="w-full"
                disabled
              >
                Plan actuel
              </UButton>
            </div>
            
            <!-- Plan Premium -->
            <div class="border-2 border-primary-500 dark:border-primary-400 rounded-lg p-4 relative">
              <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs px-2 py-1 rounded">
                Recommandé
              </div>
              
              <h4 class="text-md font-medium text-gray-900 dark:text-white mb-2">Premium</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Pour les équipes professionnelles</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white mb-4">9,90€ <span class="text-sm font-normal text-gray-600 dark:text-gray-400">/ mois / utilisateur</span></p>
              
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-sm text-gray-600 dark:text-gray-400">Utilisateurs illimités</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-sm text-gray-600 dark:text-gray-400">Objectifs illimités</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-sm text-gray-600 dark:text-gray-400">Toutes les fonctionnalités avancées</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-sm text-gray-600 dark:text-gray-400">Support prioritaire</span>
                </li>
              </ul>
              
              <UButton
                color="primary"
                class="w-full"
                disabled
              >
                Plan actuel
              </UButton>
            </div>
          </div>
        </div>
        
        <!-- Actions -->
        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex flex-col sm:flex-row gap-4">
            <UButton
              color="neutral"
              variant="soft"
              icon="i-heroicons-credit-card"
            >
              Gérer le mode de paiement
            </UButton>
            
            <UButton
              color="error"
              variant="soft"
              icon="i-heroicons-x-circle"
            >
              Annuler l'abonnement
            </UButton>
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
  name: 'SubscriptionsPage'
})
</script>

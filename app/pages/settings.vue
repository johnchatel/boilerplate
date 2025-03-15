<template>
  <div class="container mx-auto max-w-4xl">
    <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden mb-6">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Paramètres</h2>
        
        <div class="space-y-6">
          <!-- Préférences de l'application -->
          <div class="space-y-4">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">Préférences de l'application</h3>
            
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Mode sombre</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Activer ou désactiver le mode sombre</p>
              </div>
              <UToggle v-model="darkMode" />
            </div>
            
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Notifications</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Recevoir des notifications par email</p>
              </div>
              <UToggle v-model="notifications" />
            </div>
          </div>
          
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">Langue</h3>
            
            <USelect
              v-model="language"
              :options="languageOptions"
              placeholder="Sélectionnez une langue"
              class="w-full md:w-64"
            />
          </div>
          
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">Fuseau horaire</h3>
            
            <USelect
              v-model="timezone"
              :options="timezoneOptions"
              placeholder="Sélectionnez un fuseau horaire"
              class="w-full md:w-64"
            />
          </div>
          
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-end">
            <UButton
              color="primary"
              @click="saveSettings"
            >
              Enregistrer les modifications
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Définir le layout et le nom du composant
definePageMeta({
  layout: 'dashboard-layout'
})

defineOptions({
  name: 'SettingsPage'
})

// États des paramètres
const darkMode = ref(true)
const notifications = ref(true)
const language = ref('fr')
const timezone = ref('Europe/Paris')

// Options pour les sélecteurs
const languageOptions = [
  { label: 'Français', value: 'fr' },
  { label: 'English', value: 'en' }
]

const timezoneOptions = [
  { label: 'Paris (UTC+1)', value: 'Europe/Paris' },
  { label: 'London (UTC+0)', value: 'Europe/London' },
  { label: 'New York (UTC-5)', value: 'America/New_York' }
]

// Méthode pour sauvegarder les paramètres
const saveSettings = () => {
  // Ici, vous implémenteriez la logique pour sauvegarder les paramètres
  // Par exemple, appel API ou stockage local
  alert('Paramètres sauvegardés avec succès!')
}
</script>

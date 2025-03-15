<template>
  <div class="container mx-auto max-w-4xl">
    <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden mb-6">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Historique des paiements</h2>
        
        <!-- Méthode de paiement actuelle -->
        <div class="mb-8">
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">Méthode de paiement</h3>
          
          <div class="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
            <div class="h-10 w-16 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center mr-4">
              <UIcon name="i-heroicons-credit-card" class="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">Carte de crédit</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">Visa se terminant par 4242</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">Expire le 12/2025</p>
            </div>
            <UButton
              color="neutral"
              variant="ghost"
              size="xs"
              class="ml-auto"
            >
              Modifier
            </UButton>
          </div>
        </div>
        
        <!-- Factures -->
        <div>
          <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-4">Factures</h3>
          
          <div class="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Montant
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Statut
                  </th>
                  <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                <tr v-for="(invoice, index) in invoices" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {{ invoice.date }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {{ invoice.amount }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <UBadge :color="invoice.statusColor" variant="soft">
                      {{ invoice.status }}
                    </UBadge>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <UButton
                      color="neutral"
                      variant="ghost"
                      size="xs"
                      icon="i-heroicons-document-arrow-down"
                    >
                      PDF
                    </UButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- Pagination -->
          <div class="flex items-center justify-between mt-4">
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Affichage de 1 à {{ invoices.length }} sur {{ invoices.length }} factures
            </div>
            <div class="flex space-x-2">
              <UButton
                color="neutral"
                variant="ghost"
                size="sm"
                icon="i-heroicons-chevron-left"
                disabled
              />
              <UButton
                color="neutral"
                variant="ghost"
                size="sm"
                icon="i-heroicons-chevron-right"
                disabled
              />
            </div>
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
  name: 'PaymentsPage'
})

// Définition du type pour les factures
type Invoice = {
  date: string
  amount: string
  status: string
  statusColor: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
}

// Données fictives pour les factures
const invoices = ref<Invoice[]>([
  {
    date: '15 mars 2025',
    amount: '49,50 €',
    status: 'Payé',
    statusColor: 'success'
  },
  {
    date: '15 février 2025',
    amount: '49,50 €',
    status: 'Payé',
    statusColor: 'success'
  },
  {
    date: '15 janvier 2025',
    amount: '49,50 €',
    status: 'Payé',
    statusColor: 'success'
  },
  {
    date: '15 décembre 2024',
    amount: '49,50 €',
    status: 'Payé',
    statusColor: 'success'
  },
  {
    date: '15 novembre 2024',
    amount: '49,50 €',
    status: 'Payé',
    statusColor: 'success'
  }
])
</script>

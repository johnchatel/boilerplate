<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Sidebar pour mobile (off-canvas) sans modal -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 z-40 md:hidden"
    >
      <!-- Overlay sombre -->
      <div
        class="absolute inset-0 bg-gray-900/50 transition-opacity"
        @click="isSidebarOpen = false"
      />

      <!-- Panneau latéral -->
      <div class="absolute inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform">
        <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <div class="w-8 h-8">
            <AppLogo />
          </div>
          <button
            class="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            @click="isSidebarOpen = false"
          >
            <UIcon
              name="i-heroicons-x-mark"
              class="h-5 w-5"
            />
          </button>
        </div>
        <SidebarNavigation @navigate="isSidebarOpen = false" />
      </div>
    </div>

    <!-- Layout principal -->
    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar desktop -->
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 border-r border-gray-200 dark:border-gray-800">
          <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center">
            <div class="w-8 h-8 mr-3">
              <AppLogo />
            </div>
            <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Boilerplate</h1>
          </div>
          <SidebarNavigation />
        </div>
      </div>

      <!-- Contenu principal -->
      <div class="flex flex-col flex-1 overflow-hidden">
        <!-- Header -->
        <div class="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div class="flex items-center justify-between h-16 px-4">
            <!-- Bouton menu mobile -->
            <button
              class="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              @click="isSidebarOpen = true"
            >
              <UIcon
                name="i-heroicons-bars-3"
                class="h-6 w-6"
              />
            </button>

            <!-- Titre de la page (mobile uniquement) -->
            <div class="md:hidden font-semibold text-gray-900 dark:text-white">
              {{ currentPageTitle }}
            </div>

            <!-- Actions utilisateur -->
            <div class="flex items-center ml-auto">
              <div class="relative">
                <UButton
                  ref="userButtonRef"
                  color="neutral"
                  variant="ghost"
                  trailing-icon="i-heroicons-chevron-down"
                  @click.stop="toggleUserMenu"
                >
                  <span class="flex items-center">
                    <UAvatar
                      size="sm"
                      src=""
                      :alt="userName"
                      class="mr-2"
                    />
                    <span class="hidden sm:inline">{{ userName }}</span>
                  </span>
                </UButton>

                <!-- Menu déroulant personnalisé sans UCard -->
                <div
                  v-if="isUserMenuOpen"
                  ref="userMenuRef"
                  class="absolute right-0 mt-2 w-48 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 border border-gray-200 dark:border-gray-700"
                >
                  <NuxtLink
                    to="/account/profile"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                    @click="isUserMenuOpen = false"
                  >
                    <span class="flex items-center">
                      <UIcon
                        name="i-heroicons-user"
                        class="mr-2 h-4 w-4"
                      />
                      Profil
                    </span>
                  </NuxtLink>
                  <NuxtLink
                    to="/account/settings"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                    @click="isUserMenuOpen = false"
                  >
                    <span class="flex items-center">
                      <UIcon
                        name="i-heroicons-cog-6-tooth"
                        class="mr-2 h-4 w-4"
                      />
                      Paramètres
                    </span>
                  </NuxtLink>
                  <div class="border-t border-gray-200 dark:border-gray-700 my-1" />
                  <NuxtLink
                    to="/login"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                    @click="isUserMenuOpen = false"
                  >
                    <span class="flex items-center">
                      <UIcon
                        name="i-heroicons-arrow-right-on-rectangle"
                        class="mr-2 h-4 w-4"
                      />
                      Déconnexion
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenu de la page -->
        <main class="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 p-4 md:p-6">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import { useRoute } from 'vue-router'

  // États pour les menus
  const isSidebarOpen = ref(false)
  const isUserMenuOpen = ref(false)

  // Informations utilisateur (à remplacer par des données réelles)
  const userName = ref('John Doe')

  // Titre de la page courante (pour mobile)
  const route = useRoute()
  const currentPageTitle = computed(() => {
    // Extraire les segments du chemin pour les pages dans /account
    const pathSegments = route.path.split('/')
    
    // Si le chemin est /account ou /account/ (avec ou sans slash final)
    if ((pathSegments.length === 2 && pathSegments[1] === 'account') ||
        (pathSegments.length === 3 && pathSegments[1] === 'account' && pathSegments[2] === '')) {
      return 'Tableau de bord'
    }
    
    // Sinon, utiliser le dernier segment du chemin
    const lastSegment = pathSegments[pathSegments.length - 1] || ''
    
    const pageTitles: Record<string, string> = {
      'profile': 'Profil',
      'settings': 'Paramètres',
      'subscriptions': 'Abonnements',
      'payments': 'Paiements'
    }

    return pageTitles[lastSegment] || 'Dashboard'
  })

  // Référence pour le menu utilisateur
  const userMenuRef = ref<HTMLElement | null>(null)
  const userButtonRef = ref<HTMLElement | null>(null)

  // Fonction pour basculer le menu utilisateur
  const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value
  }

  // Fonction pour fermer le menu utilisateur lors d'un clic à l'extérieur
  const handleClickOutside = (event: MouseEvent) => {
    // Ne pas fermer si on clique sur le bouton lui-même (géré par toggleUserMenu)
    if (userButtonRef.value && userButtonRef.value.contains(event.target as Node)) {
      return
    }
    
    // Fermer seulement si le clic est en dehors du menu
    if (isUserMenuOpen.value && userMenuRef.value && !userMenuRef.value.contains(event.target as Node)) {
      isUserMenuOpen.value = false
    }
  }

  // Ajouter et supprimer les écouteurs d'événements
  onMounted(() => {
    // Utiliser setTimeout pour s'assurer que l'événement click qui a ouvert le menu ne le ferme pas immédiatement
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside)
    }, 0)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })
</script>

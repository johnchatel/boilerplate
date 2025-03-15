<template>
  <div class="container mx-auto max-w-4xl px-4 py-6">
    <!-- En-tête de la page -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Profil utilisateur</h1>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Gérez vos informations personnelles et les paramètres de votre compte
      </p>
    </div>

    <!-- Informations personnelles -->
    <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden mb-8">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-6">Informations personnelles</h2>

        <UForm
          :state="profile"
          class="space-y-8"
          @submit="onSubmit"
        >
          <!-- Section Avatar -->
          <div class="w-full mb-8">
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="md:w-1/4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-0">Photo de profil</label>
              </div>
              <div class="md:w-3/4 flex flex-col sm:flex-row items-center gap-6">
                <div class="relative group">
                  <div class="h-24 w-24 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                    <img 
                      v-if="avatarPreview" 
                      :src="avatarPreview" 
                      alt="Avatar de l'utilisateur" 
                      class="h-full w-full object-cover"
                    />
                    <div v-else class="h-full w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <UIcon name="i-heroicons-user" class="h-12 w-12 text-gray-400 dark:text-gray-600" />
                    </div>
                  </div>
                  <div 
                    class="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    @click="triggerFileInput"
                  >
                    <UIcon name="i-heroicons-camera" class="h-8 w-8 text-white" />
                  </div>
                  <input 
                    ref="fileInput" 
                    type="file" 
                    accept="image/*" 
                    class="hidden" 
                    @change="onFileChange"
                  />
                </div>
                <div class="flex flex-col justify-center space-y-2 text-center sm:text-left">
                  <p class="text-sm text-gray-500 dark:text-gray-400">JPG, PNG ou GIF. 2 Mo maximum.</p>
                  <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <UButton 
                      size="sm" 
                      color="primary" 
                      variant="soft" 
                      @click="triggerFileInput"
                    >
                      <UIcon name="i-heroicons-arrow-up-tray" class="mr-1 h-4 w-4" />
                      Changer
                    </UButton>
                    <UButton 
                      v-if="avatarPreview" 
                      size="sm" 
                      color="error" 
                      variant="soft" 
                      @click="removeAvatar"
                    >
                      <UIcon name="i-heroicons-trash" class="mr-1 h-4 w-4" />
                      Supprimer
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Informations personnelles -->
          <div class="space-y-6 w-full">
            <!-- Prénom -->
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="md:w-1/4">
                <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-0">Prénom</label>
              </div>
              <div class="md:w-3/4">
                <UInput 
                  id="firstName"
                  v-model="profile.firstName"
                  placeholder="Entrez votre prénom"
                  icon="i-heroicons-user"
                  class="w-full"
                />
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Votre prénom tel qu'il apparaîtra sur votre profil</p>
              </div>
            </div>

            <!-- Nom -->
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="md:w-1/4">
                <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-0">Nom</label>
              </div>
              <div class="md:w-3/4">
                <UInput 
                  id="lastName"
                  v-model="profile.lastName"
                  placeholder="Entrez votre nom"
                  icon="i-heroicons-identification"
                  class="w-full"
                />
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Votre nom de famille tel qu'il apparaîtra sur votre profil</p>
              </div>
            </div>

            <!-- Nom d'utilisateur -->
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="md:w-1/4">
                <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-0">Nom d'utilisateur</label>
              </div>
              <div class="md:w-3/4">
                <UInput 
                  id="username"
                  v-model="profile.username"
                  placeholder="Entrez votre nom d'utilisateur"
                  icon="i-heroicons-at-symbol"
                  class="w-full"
                />
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Votre identifiant unique sur la plateforme</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="md:w-1/4">
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-0">Email</label>
              </div>
              <div class="md:w-3/4">
                <UInput
                  id="email"
                  v-model="profile.email"
                  type="email"
                  placeholder="Entrez votre email"
                  icon="i-heroicons-envelope"
                  class="w-full"
                />
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Votre adresse email principale pour les notifications</p>
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-8">
            <UButton
              type="submit"
              color="primary"
              :loading="isSubmitting"
              icon="i-heroicons-check"
              class="px-6"
            >
              Enregistrer les modifications
            </UButton>
          </div>
        </UForm>
      </div>
    </div>

    <!-- Changer le mot de passe -->
    <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden mb-8">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-6">Sécurité du compte</h2>

        <UForm
          :state="passwordForm"
          class="space-y-6"
          @submit="onChangePassword"
        >
          <div class="space-y-6 w-full">
            <!-- Mot de passe actuel -->
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="md:w-1/4">
                <label for="currentPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-0">Mot de passe actuel</label>
              </div>
              <div class="md:w-3/4">
                <UInputGroup class="w-full">
                  <UInput
                    id="currentPassword"
                    v-model="passwordForm.currentPassword"
                    :type="showCurrentPassword ? 'text' : 'password'"
                    placeholder="••••••••"
                    icon="i-heroicons-lock-closed"
                    class="w-full"
                  />
                  <template #trailing>
                    <UButton 
                      color="neutral" 
                      variant="ghost" 
                      icon="i-heroicons-eye" 
                      :ui="{ rounded: 'rounded-r-md' }"
                      @click="showCurrentPassword = !showCurrentPassword"
                      v-if="!showCurrentPassword"
                    />
                    <UButton 
                      color="neutral" 
                      variant="ghost" 
                      icon="i-heroicons-eye-slash" 
                      :ui="{ rounded: 'rounded-r-md' }"
                      @click="showCurrentPassword = !showCurrentPassword"
                      v-else
                    />
                  </template>
                </UInputGroup>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Entrez votre mot de passe actuel pour confirmer votre identité</p>
              </div>
            </div>

            <!-- Nouveau mot de passe -->
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="md:w-1/4">
                <label for="newPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-0">Nouveau mot de passe</label>
              </div>
              <div class="md:w-3/4">
                <UInputGroup class="w-full">
                  <UInput
                    id="newPassword"
                    v-model="passwordForm.newPassword"
                    :type="showNewPassword ? 'text' : 'password'"
                    placeholder="••••••••"
                    icon="i-heroicons-key"
                    class="w-full"
                  />
                  <template #trailing>
                    <UButton 
                      color="neutral" 
                      variant="ghost" 
                      icon="i-heroicons-eye" 
                      :ui="{ rounded: 'rounded-r-md' }"
                      @click="showNewPassword = !showNewPassword"
                      v-if="!showNewPassword"
                    />
                    <UButton 
                      color="neutral" 
                      variant="ghost" 
                      icon="i-heroicons-eye-slash" 
                      :ui="{ rounded: 'rounded-r-md' }"
                      @click="showNewPassword = !showNewPassword"
                      v-else
                    />
                  </template>
                </UInputGroup>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">8 caractères minimum avec au moins une lettre majuscule et un chiffre</p>
              </div>
            </div>

            <!-- Confirmation du nouveau mot de passe -->
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="md:w-1/4">
                <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 md:mb-0">Confirmer le mot de passe</label>
              </div>
              <div class="md:w-3/4">
                <UInputGroup class="w-full">
                  <UInput
                    id="confirmPassword"
                    v-model="passwordForm.confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    placeholder="••••••••"
                    icon="i-heroicons-check-circle"
                    class="w-full"
                  />
                  <template #trailing>
                    <UButton 
                      color="neutral" 
                      variant="ghost" 
                      icon="i-heroicons-eye" 
                      :ui="{ rounded: 'rounded-r-md' }"
                      @click="showConfirmPassword = !showConfirmPassword"
                      v-if="!showConfirmPassword"
                    />
                    <UButton 
                      color="neutral" 
                      variant="ghost" 
                      icon="i-heroicons-eye-slash" 
                      :ui="{ rounded: 'rounded-r-md' }"
                      @click="showConfirmPassword = !showConfirmPassword"
                      v-else
                    />
                  </template>
                </UInputGroup>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Répétez votre nouveau mot de passe pour confirmer</p>
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-8">
            <UButton
              type="submit"
              color="primary"
              :loading="isChangingPassword"
              icon="i-heroicons-shield-check"
              class="px-6"
            >
              Mettre à jour le mot de passe
            </UButton>
          </div>
        </UForm>
      </div>
    </div>

    <!-- Supprimer le compte -->
    <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
      <div class="p-6">
        <h2 class="text-lg font-medium text-red-600 dark:text-red-500 mb-3">Danger</h2>
        <div class="border-l-4 border-red-500 pl-4 py-2 mb-6">
          <h3 class="text-base font-medium text-gray-900 dark:text-white mb-1">Supprimer le compte</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Une fois que vous supprimez votre compte, toutes vos données seront définitivement effacées. Cette action est irréversible.
          </p>
        </div>

        <div v-if="showDeleteConfirm" class="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-4">
          <div class="flex items-center mb-3">
            <UIcon
              name="i-heroicons-exclamation-triangle"
              class="h-5 w-5 text-red-600 dark:text-red-400 mr-2"
            />
            <h3 class="text-base font-medium text-red-600 dark:text-red-400">Confirmation requise</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Pour confirmer la suppression, veuillez saisir <span class="font-medium">supprimer mon compte</span> ci-dessous.
          </p>
          
          <UFormItem>
            <UInput 
              v-model="deleteConfirmText"
              placeholder="Tapez 'supprimer mon compte'"
              class="mb-4"
            />
          </UFormItem>
          
          <div class="flex gap-3">
            <UButton
              color="neutral"
              variant="soft"
              icon="i-heroicons-x-mark"
              @click="cancelDelete"
            >
              Annuler
            </UButton>
            <UButton
              color="error"
              :loading="isDeleting"
              :disabled="deleteConfirmText !== 'supprimer mon compte'"
              icon="i-heroicons-trash"
              @click="onDeleteAccount"
            >
              Supprimer définitivement
            </UButton>
          </div>
        </div>

        <UButton
          v-if="!showDeleteConfirm"
          color="error"
          variant="soft"
          icon="i-heroicons-trash"
          @click="showDeleteConfirm = true"
        >
          Supprimer mon compte
        </UButton>
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
    name: 'UserProfilePage'
  })

  // Référence pour l'input de fichier
  const fileInput = ref<HTMLInputElement | null>(null)

  // État du formulaire de profil
  const profile = ref({
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'john.doe@example.com'
  })

  // État de l'avatar
  const avatarPreview = ref<string | null>(null)
  const avatarFile = ref<File | null>(null)

  // État du formulaire de mot de passe
  const passwordForm = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  // Visibilité des mots de passe
  const showCurrentPassword = ref(false)
  const showNewPassword = ref(false)
  const showConfirmPassword = ref(false)

  // États de chargement
  const isSubmitting = ref(false)
  const isChangingPassword = ref(false)
  const isDeleting = ref(false)

  // État de la confirmation de suppression
  const showDeleteConfirm = ref(false)
  const deleteConfirmText = ref('')

  // Méthodes pour l'avatar
  const triggerFileInput = () => {
    fileInput.value?.click()
  }

  const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files.length > 0) {
      const file = target.files[0]
      
      // Vérifier la taille du fichier (2Mo max)
      if (file.size > 2 * 1024 * 1024) {
        alert('Le fichier est trop volumineux. Veuillez choisir un fichier de moins de 2 Mo.')
        return
      }
      
      avatarFile.value = file
      const reader = new FileReader()
      reader.onload = (e) => {
        avatarPreview.value = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  const removeAvatar = () => {
    avatarPreview.value = null
    avatarFile.value = null
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  }

  // Méthodes pour le profil
  const onSubmit = () => {
    isSubmitting.value = true

    // Simuler une requête API
    setTimeout(() => {
      isSubmitting.value = false
      // Afficher un message de succès avec Nuxt UI toast
      useToast().add({
        title: 'Profil mis à jour',
        description: 'Vos informations personnelles ont été mises à jour avec succès.',
        icon: 'i-heroicons-check-circle',
        color: 'success'
      })
    }, 1000)
  }

  // Méthodes pour le mot de passe
  const onChangePassword = () => {
    isChangingPassword.value = true

    // Simuler une requête API
    setTimeout(() => {
      isChangingPassword.value = false
      passwordForm.value = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
      // Réinitialiser la visibilité des mots de passe
      showCurrentPassword.value = false
      showNewPassword.value = false
      showConfirmPassword.value = false
      
      // Afficher un message de succès avec Nuxt UI toast
      useToast().add({
        title: 'Mot de passe mis à jour',
        description: 'Votre mot de passe a été modifié avec succès.',
        icon: 'i-heroicons-shield-check',
        color: 'success'
      })
    }, 1000)
  }

  // Méthodes pour la suppression de compte
  const cancelDelete = () => {
    showDeleteConfirm.value = false
    deleteConfirmText.value = ''
  }

  const onDeleteAccount = () => {
    if (deleteConfirmText.value !== 'supprimer mon compte') {
      return
    }
    
    isDeleting.value = true

    // Simuler une requête API
    setTimeout(() => {
      isDeleting.value = false
      showDeleteConfirm.value = false
      deleteConfirmText.value = ''
      
      // Rediriger vers la page de connexion
      navigateTo('/login')
      
      // Afficher un message de succès avec Nuxt UI toast
      useToast().add({
        title: 'Compte supprimé',
        description: 'Votre compte a été supprimé avec succès.',
        icon: 'i-heroicons-information-circle',
        color: 'info'
      })
    }, 1000)
  }
</script>

<style scoped>
.avatar-upload-zone {
  transition: all 0.3s ease;
}

.avatar-upload-zone:hover {
  opacity: 0.8;
}
</style>

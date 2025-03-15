<template>
  <div class="container mx-auto max-w-4xl">
    <!-- En-tête de la page -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Profil utilisateur</h1>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Gérez vos informations personnelles et les paramètres de votre compte
      </p>
    </div>

    <!-- Informations personnelles -->
    <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden mb-6">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Informations personnelles</h2>

        <UForm
          :state="profile"
          class="space-y-6"
          @submit="onSubmit"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Prénom -->
            <UFormItem
              label="Prénom"
              name="firstName"
            >
              <UInput v-model="profile.firstName" />
            </UFormItem>

            <!-- Nom -->
            <UFormItem
              label="Nom"
              name="lastName"
            >
              <UInput v-model="profile.lastName" />
            </UFormItem>

            <!-- Nom d'utilisateur -->
            <UFormItem
              label="Nom d'utilisateur"
              name="username"
            >
              <UInput v-model="profile.username" />
            </UFormItem>

            <!-- Email -->
            <UFormItem
              label="Email"
              name="email"
            >
              <UInput
                v-model="profile.email"
                type="email"
              />
            </UFormItem>
          </div>

          <div class="flex justify-end">
            <UButton
              type="submit"
              color="primary"
              :loading="isSubmitting"
            >
              Enregistrer les modifications
            </UButton>
          </div>
        </UForm>
      </div>
    </div>

    <!-- Changer le mot de passe -->
    <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden mb-6">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Changer le mot de passe</h2>

        <UForm
          :state="passwordForm"
          class="space-y-6"
          @submit="onChangePassword"
        >
          <div class="space-y-4">
            <!-- Mot de passe actuel -->
            <UFormItem
              label="Mot de passe actuel"
              name="currentPassword"
            >
              <UInput
                v-model="passwordForm.currentPassword"
                type="password"
              />
            </UFormItem>

            <!-- Nouveau mot de passe -->
            <UFormItem
              label="Nouveau mot de passe"
              name="newPassword"
            >
              <UInput
                v-model="passwordForm.newPassword"
                type="password"
              />
            </UFormItem>

            <!-- Confirmation du nouveau mot de passe -->
            <UFormItem
              label="Confirmer le nouveau mot de passe"
              name="confirmPassword"
            >
              <UInput
                v-model="passwordForm.confirmPassword"
                type="password"
              />
            </UFormItem>
          </div>

          <div class="flex justify-end">
            <UButton
              type="submit"
              color="primary"
              :loading="isChangingPassword"
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
        <h2 class="text-lg font-medium text-red-600 dark:text-red-500 mb-2">Supprimer le compte</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Une fois que vous supprimez votre compte, toutes vos données seront définitivement effacées. Cette action est irréversible.
        </p>

        <div v-if="showDeleteConfirm" class="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-4">
          <div class="flex items-center mb-3">
            <UIcon
              name="i-heroicons-exclamation-triangle"
              class="h-5 w-5 text-red-600 dark:text-red-400 mr-2"
            />
            <h3 class="text-base font-medium text-red-600 dark:text-red-400">Confirmation requise</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Êtes-vous sûr de vouloir supprimer votre compte ? Toutes vos données seront définitivement effacées.
            Cette action ne peut pas être annulée.
          </p>
          <div class="flex gap-3">
            <UButton
              color="neutral"
              variant="soft"
              @click="showDeleteConfirm = false"
            >
              Annuler
            </UButton>
            <UButton
              color="error"
              :loading="isDeleting"
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

  // État du formulaire de profil
  const profile = ref({
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'john.doe@example.com'
  })

  // État du formulaire de mot de passe
  const passwordForm = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  // États de chargement
  const isSubmitting = ref(false)
  const isChangingPassword = ref(false)
  const isDeleting = ref(false)

  // État de la confirmation de suppression
  const showDeleteConfirm = ref(false)

  // Méthodes
  const onSubmit = () => {
    isSubmitting.value = true

    // Simuler une requête API
    setTimeout(() => {
      isSubmitting.value = false
      // Afficher un message de succès
      alert('Profil mis à jour avec succès!')
    }, 1000)
  }

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
      // Afficher un message de succès
      alert('Mot de passe mis à jour avec succès!')
    }, 1000)
  }



  const onDeleteAccount = () => {
    isDeleting.value = true

    // Simuler une requête API
    setTimeout(() => {
      isDeleting.value = false
      showDeleteConfirm.value = false
      // Afficher un message de succès
      alert('Compte supprimé avec succès!')
    }, 1000)
  }
</script>

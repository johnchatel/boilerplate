<script setup lang="ts">
// Configuration du mode couleur
const colorMode = useColorMode()

// S'assurer que le mode sombre est activé par défaut
onMounted(() => {
  // Définir la préférence sur dark
  colorMode.preference = 'dark'
  
  // Synchroniser la classe HTML avec le mode couleur
  useHead({
    htmlAttrs: {
      class: () => colorMode.value === 'dark' ? 'dark' : ''
    }
  })
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

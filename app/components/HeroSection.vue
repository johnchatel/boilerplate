<template>
  <section class="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
    <UContainer>
      <div class="max-w-3xl mx-auto text-center">
        <UBadge color="primary" variant="subtle" class="mb-4">Version 1.0</UBadge>
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent mb-6">
          Boilerplate Nuxt 3 Moderne
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          Une base solide et minimaliste pour vos projets Nuxt 3 avec Nuxt UI, optimisée pour la productivité et l'expérience utilisateur.  
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <UButton 
            to="/"
            color="primary" 
            size="xl" 
            icon="i-heroicons-rocket-launch"
            label="Démarrer un projet" 
          />
          <UButton 
            to="/"
            color="primary" 
            variant="ghost" 
            size="xl" 
            icon="i-heroicons-document-text"
            label="Documentation" 
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<template>
  <div class="app-logo">
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      :class="{ 'animate-loading': loading }"
    >
      <path 
        d="M24 4L45.3 38H2.7L24 4Z" 
        :fill="color === 'light' ? '#ffffff' : 'none'" 
        stroke="currentColor" 
        stroke-width="3" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        :class="{ 'pulse-opacity': loading }"
      />
      <path 
        d="M24 34L32 22H16L24 34Z" 
        fill="currentColor" 
        stroke="currentColor" 
        stroke-width="1" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        :class="{ 'pulse-opacity': loading }"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppLogo'
})

// Définition des props avec utilisation directe (sans variable intermédiaire)
defineProps({
  size: {
    type: String,
    default: 'md'
  },
  color: {
    type: String,
    default: 'primary'
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.app-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.app-logo svg {
  width: 100%;
  height: 100%;
}

.pulse-opacity {
  animation: pulse-logo 3s infinite ease-in-out;
}

@keyframes pulse-logo {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}

.animate-loading {
  position: relative;
}
</style>

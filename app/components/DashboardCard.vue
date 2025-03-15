<template>
  <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
    <div class="p-6">
      <div class="flex items-center">
        <div 
          class="flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center mr-4"
          :class="{
            'bg-primary-100 dark:bg-primary-900': color === 'primary',
            'bg-green-100 dark:bg-green-900': color === 'success',
            'bg-blue-100 dark:bg-blue-900': color === 'info',
            'bg-yellow-100 dark:bg-yellow-900': color === 'warning',
            'bg-red-100 dark:bg-red-900': color === 'error',
            'bg-gray-100 dark:bg-gray-800': color === 'neutral'
          }"
        >
          <UIcon 
            :name="icon" 
            class="h-6 w-6"
            :class="{
              'text-primary-600 dark:text-primary-400': color === 'primary',
              'text-green-600 dark:text-green-400': color === 'success',
              'text-blue-600 dark:text-blue-400': color === 'info',
              'text-yellow-600 dark:text-yellow-400': color === 'warning',
              'text-red-600 dark:text-red-400': color === 'error',
              'text-gray-600 dark:text-gray-400': color === 'neutral'
            }"
          />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ title }}</p>
          <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ value }}</p>
          <p v-if="description" class="text-xs text-gray-500 dark:text-gray-500 mt-1">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String as () => 'primary' | 'success' | 'info' | 'warning' | 'error' | 'neutral',
    default: 'primary'
  },
  description: {
    type: String,
    default: ''
  }
})
</script>


<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<!-- src/components/FeatureCard.vue -->
<template>
  <div class="flex flex-col px-2 text-center md:px-0">
    <!-- Ícono descriptivo -->
    <img :src="icon" :alt="title" class="h-16 mb-6 object-contain md:h-21" />
    
    <!-- Título de la característica (Raleway Bold) -->
    <h3 class="text-preset-2F mb-2">{{ title }}</h3>
    
    <!-- Descripción (Open Sans Regular) -->
    <p class="text-preset-3F max-w-sm">{{ description }}</p>
  </div>
</template>


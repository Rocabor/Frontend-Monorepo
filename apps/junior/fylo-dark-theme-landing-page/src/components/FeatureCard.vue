
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
  <article class="flex flex-col px-2 text-center md:px-0">
    <img :src="icon" :alt="title" class="h-16 mb-6 object-contain md:h-21" />
    
    <h3 class="text-preset-2F mb-2">{{ title }}</h3>
    
    <p class="text-preset-3F max-w-sm">{{ description }}</p>
  </article>
</template>


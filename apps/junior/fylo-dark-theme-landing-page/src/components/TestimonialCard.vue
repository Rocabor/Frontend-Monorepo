<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <figure class="bg-navy-800 py-5.5 px-4.5 md:p-10 rounded-sm shadow-lg flex flex-col justify-between relative z-10 w-70 md:w-120 xl:w-90 xl:px-6 xl:py-8">

    <blockquote class="text-preset-7 mb-4 md:mb-6">
      {{ text }}
    </blockquote>
    
    <figcaption class="flex items-center gap-3">
      <img :src="image" :alt="name" class="w-7 h-7 rounded-full object-cover" />
      
      <div>
        <strong class="text-preset-8F not-italic">{{ name }}</strong>
        
        <p class="text-preset-9F mt-0.5">{{ role }}</p>
      </div>
    </figcaption>
  </figure>
</template>


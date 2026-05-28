<template>
  <button 
    :type="type"
    class="bg-gradient-cyan-blue text-preset-4 rounded-full shadow-md hover:brightness-110 transition-all active:scale-98 cursor-pointer whitespace-nowrap w-[240px] mx-auto px-20 py-4 md:w-[280px] md:py-[18.5px]">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  }
})
</script>
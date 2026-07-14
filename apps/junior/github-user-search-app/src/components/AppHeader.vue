<script setup>
import { ref } from 'vue'
defineProps({
  theme: {
    type: String,
    default: 'light',
  },
});
const emit = defineEmits(['toggle-theme']);

const spinning = ref(false)
const onToggle = (event) => {
  spinning.value = true
  emit('toggle-theme', event)
  setTimeout(() => (spinning.value = false), 350)
}
</script>

<template>
  <header class="flex justify-between">
    <h1 class="text-[26px] font-bold text-neutral-900 dark:text-neutral-0">
      devfinder
    </h1>

    <button
      type="button"
      class="group flex cursor-pointer items-center gap-3 active:scale-95"
      @click="onToggle">
      <span class="text-[13px] text-neutral-500 dark:text-neutral-200 font-bold transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-0">{{ theme === 'dark' ? 'LIGHT' : 'DARK' }}</span>
      <span
        class="icon-mode transition-all duration-300"
        :class="[theme === 'dark' ? 'icon-sun' : 'icon-moon', { 'theme-spin': spinning }]" />
    </button>
  </header>
</template>

<style scoped>
.icon-mode {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: var(--color-mode-icon);
  transition: background-color 0.3s ease-in-out;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
}
.group:hover .icon-mode {
  background-color: var(--color-mode-icon-hover);
}
.icon-sun {
  mask-image: url('../assets/images/icon-sun.svg');
}
.icon-moon {
  mask-image: url('../assets/images/icon-moon.svg');
}

@keyframes theme-spin {
  from { transform: rotate(-90deg); }
  to   { transform: rotate(0deg); }
}
.theme-spin {
  animation: theme-spin 0.35s ease;
}

</style>

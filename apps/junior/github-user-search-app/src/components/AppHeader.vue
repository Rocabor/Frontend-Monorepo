<script setup>
defineProps({
  theme: {
    type: String,
    default: 'light',
  },
});
defineEmits(['toggle-theme']);
</script>

<template>
  <header class="flex justify-between">
    <h1 class="text-[26px] font-bold text-neutral-900 dark:text-neutral-0">devfinder</h1>

    <button
      type="button"
      class="group flex cursor-pointer items-center gap-3 active:scale-95"
      @click="$emit('toggle-theme')">
      <span class="text-[13px] text-neutral-500 dark:text-neutral-200 font-bold transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-0">LIGHT</span>
      <span class="icon-mode icon-sun group-hover:bg-neutral-700! dark:group-hover:bg-neutral-0!" />
    </button>
  </header>
</template>

<style scoped>
.icon-mode {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: var(--color-neutral-500);
  transition: all 0.3s ease-in-out;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
}
.dark .icon-mode {
  background-color: #90a4d4;
}
.icon-sun {
  mask-image: url('../assets/images/icon-sun.svg');
}
.icon-moon {
  mask-image: url('../assets/images/icon-moon.svg');
}

</style>

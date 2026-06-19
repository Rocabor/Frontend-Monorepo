<script setup>
import { ref, onMounted } from 'vue';
import logoLight from '../assets/images/logo-light-theme.svg';
import logoDark from '../assets/images/logo-dark-theme.svg';
import iconMoon from '../assets/images/icon-moon.svg';
import iconSun from '../assets/images/icon-sun.svg';

// Estado para controlar si el modo oscuro está activo
const isDark = ref(false);

// Función para alternar el tema
const toggleTheme = () => {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

// Al cargar el componente, recuperar la preferencia del usuario
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDark.value = false;
    document.documentElement.classList.remove('dark');
  }
});
</script>

<template>
  <header class="flex items-center justify-between p-4 md:px-8 xl:h-11 xl:px-0">
    <a href="#" class="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500" aria-label="Character Counter - Inicio">
      <img :src="isDark ? logoDark : logoLight" alt="Character Counter">
    </a>

    <button
      type="button"
      :aria-pressed="isDark"
      :aria-label="isDark ? 'Change to light mode' : 'Change to dark mode'"
      class="flex size-8 cursor-pointer items-center justify-center rounded-md bg-neutral-100 md:size-11 dark:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500"
      @click="toggleTheme">
      <img :src="isDark ? iconSun : iconMoon" alt="" aria-hidden="true" class="size-4.25 md:size-5.5">
    </button>
  </header>
</template>

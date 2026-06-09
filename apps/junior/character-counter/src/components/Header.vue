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
  <header class="flex items-center justify-between p-4">
    <a
      href="#"
      class="focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-purple-500"
      aria-label="Character Counter - Inicio">
      <img :src="isDark ? logoDark : logoLight" alt="Character Counter" />
    </a>

    <button
      type="button"
      @click="toggleTheme"
      :aria-pressed="isDark"
      :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
      class="flex size-8 cursor-pointer items-center justify-center rounded-md focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-purple-500">
      <img :src="isDark ? iconSun : iconMoon" alt="" aria-hidden="true" class="size-4.25" />
    </button>
  </header>
</template>

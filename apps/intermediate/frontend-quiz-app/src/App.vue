<script setup>
import { ref } from 'vue';
import { MyFooter } from '@packages/ui';
import dataQuiz from './data/data.json';

// Estado reactivo para controlar el modo oscuro
const isDark = ref(false);

// Función auxiliar para resolver la ruta estática dentro de assets en tiempo de ejecución
const getAssetUrl = (path) => {
  return new URL(`./assets/images/${path}`, import.meta.url).href;
};


</script>

<template>
  <div
    :class="{ dark: isDark }"
    class="min-h-dvh bg-gray-50 transition-colors duration-600 dark:bg-blue-900">
    <header class="flex justify-between px-6 py-4">
      <!--* Subject List -->
      <div class="h-10 w-[167px]"></div>

      <!--* Toggle Container -->
      <div class="flex items-center gap-2">
        <img
          :src="isDark ? getAssetUrl('icon-sun-light.svg') : getAssetUrl('icon-sun-dark.svg')"
          alt=""
          class="size-4"
          aria-hidden="true" />

        <button
          role="switch"
          :aria-checked="isDark"
          aria-label="Toggle dark mode"
          class="flex h-5 w-8 cursor-pointer items-center rounded-full bg-purple-600 p-1"
          @click="isDark = !isDark">
          <div
            :class="isDark ? 'translate-x-3' : 'translate-x-0'"
            class="size-3 rounded-full bg-white transition-transform duration-400 ease-in-out"></div>
        </button>

        <img
          :src="isDark ? getAssetUrl('icon-moon-light.svg') : getAssetUrl('icon-moon-dark.svg')"
          alt=""
          class="size-4"
          aria-hidden="true" />
      </div>
    </header>

    <!--* Main Container -->
    <main></main>
  </div>
</template>

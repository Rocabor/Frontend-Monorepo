<script setup>
import { ref } from 'vue';
import { MyFooter } from '@packages/ui';
import dataQuiz from './data/data.json';

import QuizHome from './components/QuizHome.vue';

// Estado reactivo para controlar el modo oscuro
// Comprueba si el usuario tiene activado el modo oscuro en su sistema (Windows/Mac/Android)
const prefersDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = ref(prefersDarkSystem || true);

// Función auxiliar para resolver la ruta estática de imágenes en Vite
const getAssetUrl = (path) => {
  if (!path) return '';
  const fileName = path.split('/').pop();
  return new URL(`./assets/images/${fileName}`, import.meta.url).href;
};

// Mapeo de colores de fondo adaptativos para cada asignatura
const subjectBgColors = {
  html: 'bg-orange-50 ',
  css: 'bg-green-100 ',
  javascript: 'bg-blue-50 ',
  accessibility: 'bg-purple-100 ',
};
</script>

<template>
  <div
    :class="{ dark: isDark }"
    class="bg-quiz-app min-h-dvh bg-gray-50 px-6 text-blue-900 transition-colors duration-300 md:px-16 dark:bg-blue-900 dark:text-white">
    <header class="flex justify-between py-4 md:py-10 xl:mx-auto xl:w-290 xl:py-20.75">
      <!--* Subject List -->
      <div class="h-10 w-41.75"></div>

      <!--* Toggle Container -->
      <div class="flex items-center gap-2">
        <img
          :src="isDark ? getAssetUrl('icon-sun-light.svg') : getAssetUrl('icon-sun-dark.svg')"
          alt=""
          class="size-4 md:size-6"
          aria-hidden="true" />

        <button
          role="switch"
          :aria-checked="isDark"
          aria-label="Toggle dark mode"
          class="flex h-5 w-8 cursor-pointer items-center rounded-full bg-purple-600 p-1 md:h-7 md:w-12"
          @click="isDark = !isDark">
          <div
            :class="isDark ? 'translate-x-3 md:translate-x-5' : 'translate-x-0'"
            class="size-3 rounded-full bg-white transition-transform duration-400 ease-in-out md:size-5"></div>
        </button>

        <img
          :src="isDark ? getAssetUrl('icon-moon-light.svg') : getAssetUrl('icon-moon-dark.svg')"
          alt=""
          class="size-4 md:size-6"
          aria-hidden="true" />
      </div>
    </header>

    <QuizHome
      :quizzes="dataQuiz.quizzes"
      :subject-bg-colors="subjectBgColors"
      :get-asset-url="getAssetUrl" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MyFooter } from '@packages/ui';
import dataQuiz from './data/data.json';

// Estado reactivo para controlar el modo oscuro
// Comprueba si el usuario tiene activado el modo oscuro en su sistema (Windows/Mac/Android)
const prefersDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Si el sistema no especifica nada, puedes forzar que empiece en true (oscuro) por defecto
const isDark = ref(prefersDarkSystem || true);

// Función auxiliar para resolver la ruta estática de imágenes en Vite
const getAssetUrl = (path) => {
  if (!path) return '';

  // Extrae solo el nombre del archivo (ej. "icon-html.svg")
  // Corta todo lo anterior sin importar si viene como "./assets/images/icon-html.svg" o solo "icon-sun.svg"
  const fileName = path.split('/').pop();

  // Se la pasamos limpia a la URL estática que Vite sí sabe compilar
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

    <!--* Main Container -->
    <main
      class="flex flex-col gap-10 pt-8 md:gap-16 md:pt-2.25 xl:mx-auto xl:w-290 xl:flex-row xl:gap-35.25 xl:pt-0.5">
      <!--* Header Container -->
      <section class="flex flex-col gap-4 xl:gap-12">
        <!--* Title Container -->
        <h1 class="text-preset-1">
          <span class="mb-2 block font-light">Welcome to the</span>
          Frontend Quiz!
        </h1>

        <!--* Description -->
        <p class="text-preset-2 text-gray-500 dark:text-blue-300">Pick a subject to get started.</p>
      </section>

      <!--* Subjects Container -->
      <section class="grow">
        <h2
          id="subjects-heading"
          class="sr-only">
          Available Subjects
        </h2>

        <ul
          aria-labelledby="subjects-heading"
          class="flex flex-col gap-4">
          <li
            v-for="quiz in dataQuiz.quizzes"
            :key="quiz.title">
            <button
              type="button"
              :aria-describedby="'desc-' + quiz.title.toLowerCase()"
              class="dark:bg-blue-850 group text-preset-3 flex w-full cursor-pointer items-center gap-4 rounded-3xl border-2 border-transparent bg-white p-4 shadow-[0_16px_40px_rgba(143,160,193,0.14)] transition-all hover:border-purple-600 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 focus:outline-none xl:p-6 dark:shadow-[0_16px_40px_rgba(49,62,81,0.14)]">
              <div
                :class="subjectBgColors[quiz.title.toLowerCase()]"
                class="flex size-10 items-center justify-center rounded-lg p-2 transition-colors md:size-14">
                <img
                  :src="getAssetUrl(quiz.icon)"
                  alt=""
                  class="size-6 object-contain md:size-10"
                  aria-hidden="true" />
              </div>

              <span :id="'desc-' + quiz.title.toLowerCase()">
                {{ quiz.title }}
              </span>
            </button>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

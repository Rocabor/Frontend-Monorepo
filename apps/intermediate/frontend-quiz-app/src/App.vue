<script setup>
import { ref } from 'vue';
import { MyFooter } from '@packages/ui';
import dataQuiz from './data/data.json';

// Estado reactivo para controlar el modo oscuro
const isDark = ref(false);

// Función auxiliar para resolver la ruta estática de imágenes en Vite
const getAssetUrl = (path) => {
  if (!path) return '';

  // Extrae solo el nombre del archivo (ej. "icon-html.svg")
  // Corta todo lo anterior sin importar si viene como "./assets/images/icon-html.svg" o solo "icon-sun.svg"
  const fileName = path.split('/').pop();

  // Se la pasamos limpia a la URL estática que Vite sí sabe compilar
  return new URL(`./assets/images/${fileName}`, import.meta.url).href;
};
</script>

<template>
  <div
    :class="{ dark: isDark }"
    class="bg-quiz-app min-h-dvh bg-gray-50 text-blue-900 transition-colors duration-300 dark:bg-blue-900 dark:text-white">
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
    <main class="flex flex-col gap-10 px-6 pt-8">
      <!--* Header Container -->
      <section class="flex flex-col gap-4">
        <!--* Title Container -->
        <h1 class="text-preset-1">
          <span class="mb-2 block font-light">Welcome to the</span>
          Frontend Quiz!
        </h1>

        <!--* Description -->
        <p class="text-preset-2 text-gray-500 dark:text-blue-300">Pick a subject to get started.</p>
      </section>

      <!--* Subjects Container -->
      <section class="">
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
              class="dark:bg-blue-850 group flex w-full cursor-pointer items-center gap-4 rounded-xl border-2 border-transparent bg-white p-3 text-left text-lg font-medium shadow-sm transition-all hover:border-purple-600 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 focus:outline-none md:text-xl">
              <div
                class="flex size-10 items-center justify-center rounded-lg bg-gray-100 p-2 transition-colors md:size-12">
                <img
                  :src="getAssetUrl(quiz.icon)"
                  alt=""
                  class="size-6 object-contain md:size-8"
                  aria-hidden="true" />
              </div>

              <span
                :id="'desc-' + quiz.title.toLowerCase()"
                class="text-blue-950 dark:text-white">
                {{ quiz.title }}
              </span>
            </button>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

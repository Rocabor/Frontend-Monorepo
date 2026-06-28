<script setup>
import { ref } from 'vue';
import { MyFooter } from '@packages/ui';
import dataQuiz from './data/data.json';

import QuizHome from './components/QuizHome.vue';
import QuizQuestion from './components/QuizQuestion.vue';
import QuizScore from './components/QuizScore.vue';

// Estado reactivo para controlar el modo oscuro
// Comprueba si el usuario tiene activado el modo oscuro en su sistema (Windows/Mac/Android)
const prefersDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = ref(prefersDarkSystem || true);

// Estados del Flujo Global
const currentQuiz = ref(null);
const currentQuestionIndex = ref(0);
const score = ref(0);
const isQuizFinished = ref(false);

// Mapeo de colores de fondo adaptativos para cada asignatura
const subjectBgColors = {
  html: 'bg-orange-50 ',
  css: 'bg-green-100 ',
  javascript: 'bg-blue-50 ',
  accessibility: 'bg-purple-100 ',
};

// Función auxiliar para resolver la ruta estática de imágenes en Vite
const getAssetUrl = (path) => {
  if (!path) return '';
  const fileName = path.split('/').pop();
  return new URL(`./assets/images/${fileName}`, import.meta.url).href;
};

// Acciones reactivas
const handleSelectQuiz = (quiz) => {
  currentQuiz.value = quiz;
  currentQuestionIndex.value = 0;
  score.value = 0;
  isQuizFinished.value = false;
};
const handleAnswerSubmitted = (isCorrect) => {
  if (isCorrect) score.value++;
};

const handleNextQuestion = () => {
  if (currentQuestionIndex.value + 1 < currentQuiz.value.questions.length) {
    currentQuestionIndex.value++;
  } else {
    isQuizFinished.value = true;
  }
};
</script>

<template>
  <div
    :class="{ dark: isDark }"
    class="bg-quiz-app min-h-dvh overflow-x-visible bg-gray-50 px-6 text-blue-900 transition-colors duration-300 md:px-16 dark:bg-blue-900 dark:text-white">
    <header class="flex justify-between py-4 md:py-10 xl:mx-auto xl:w-290 xl:py-20.75">
      <!--* Subject List -->
      <div
        v-if="currentQuiz"
        class="flex min-h-10 min-w-41.75 items-center gap-4">
        <div
          :class="subjectBgColors[currentQuiz.title.toLowerCase()]"
          class="flex size-10 items-center justify-center rounded-sm p-2 transition-colors md:size-14">
          <img
            :src="getAssetUrl(currentQuiz.icon)"
            alt=""
            class="h-6.25 w-5.25 object-contain md:h-8.75 md:w-7.5"
            aria-hidden="true">
        </div>
        <span class="text-preset-3 text-blue-950 dark:text-white">
          {{ currentQuiz.title }}
        </span>
      </div>
      <!--*  -->
      <div
        v-else
        class="min-h-14 min-w-41.75" />

      <!--* Toggle Container -->
      <div class="flex items-center gap-2">
        <img
          :src="isDark ? getAssetUrl('icon-sun-light.svg') : getAssetUrl('icon-sun-dark.svg')"
          alt=""
          class="size-4 md:size-6"
          aria-hidden="true">

        <button
          role="switch"
          :aria-checked="isDark"
          aria-label="Toggle dark mode"
          class="flex h-5 w-8 cursor-pointer items-center rounded-full bg-purple-600 p-1 md:h-7 md:w-12"
          @click="isDark = !isDark">
          <div
            :class="isDark ? 'translate-x-2.5 md:translate-x-4.5' : 'translate-x-0'"
            class="size-3 rounded-full bg-white transition-transform duration-400 ease-in-out md:size-5" />
        </button>

        <img
          :src="isDark ? getAssetUrl('icon-moon-light.svg') : getAssetUrl('icon-moon-dark.svg')"
          alt=""
          class="size-4 md:size-6"
          aria-hidden="true">
      </div>
    </header>

    <QuizHome
      v-if="!currentQuiz"
      :quizzes="dataQuiz.quizzes"
      :subject-bg-colors="subjectBgColors"
      :get-asset-url="getAssetUrl"
      @select-quiz="handleSelectQuiz" />

    <QuizQuestion
      v-else-if="currentQuiz && !isQuizFinished"
      :quiz="currentQuiz"
      :current-question-index="currentQuestionIndex"
      @answer-submitted="handleAnswerSubmitted"
      @next-question="handleNextQuestion" />

    <QuizScore
      v-else
      :quiz="currentQuiz"
      :score="score"
      :subject-bg-colors="subjectBgColors"
      :get-asset-url="getAssetUrl"
      @restart="currentQuiz = null" />

    <MyFooter
      bg-color="transparent"
      position="reative"
      font-family="Rubik"
      text-color-attribution="white dark:var(--color-blue-900)"
      text-color="var( --color-orange-500)"
      class="mt-6 min-w-88 -translate-x-4" />
  </div>
</template>

<script setup>
// Recibimos las configuraciones y funciones necesarias desde App.vue
defineProps({
  quizzes: {
    type: Array,
    required: true,
  },
  subjectBgColors: {
    type: Object,
    required: true,
  },
  getAssetUrl: {
    type: Function,
    required: true,
  },
});

// Declaramos el evento para avisar al componente padre la selección
const emit = defineEmits(['select-quiz']);
</script>

<template>
  <main class="flex flex-col gap-10 pt-8 md:gap-16 md:pt-2.25 xl:mx-auto xl:w-290 xl:flex-row xl:gap-35.25 xl:pt-0.5">
    <!--* Header Container -->
    <section class="flex flex-col gap-4 xl:gap-12">
      <!--* Title Container -->
      <h1 class="text-preset-1">
        <span class="mb-2 block font-light">Welcome to the</span>
        Frontend Quiz!
      </h1>

      <!--* Description -->
      <p class="text-preset-2 text-gray-500 dark:text-blue-300">
        Pick a subject to get started.
      </p>
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
          v-for="quiz in quizzes"
          :key="quiz.title">
          <button
            type="button"
            :aria-describedby="'desc-' + quiz.title.toLowerCase()"
            class="dark:bg-blue-850 group text-preset-3 flex w-full cursor-pointer items-center gap-4 rounded-xl border-3 border-transparent bg-white p-4 shadow-[0_16px_40px_rgba(143,160,193,0.14)] transition-all xl:p-6 dark:shadow-[0_16px_40px_rgba(49,62,81,0.14)] active:scale-95 "
            @click="emit('select-quiz', quiz)">
            <div
              :class="subjectBgColors[quiz.title.toLowerCase()]"
              class="flex size-10 items-center justify-center rounded-lg p-2 transition-colors md:size-14">
              <img
                :src="getAssetUrl(quiz.icon)"
                alt=""
                class="size-6 object-contain md:size-10"
                aria-hidden="true">
            </div>

            <span :id="'desc-' + quiz.title.toLowerCase()">
              {{ quiz.title }}
            </span>
          </button>
        </li>
      </ul>
    </section>
  </main>
</template>

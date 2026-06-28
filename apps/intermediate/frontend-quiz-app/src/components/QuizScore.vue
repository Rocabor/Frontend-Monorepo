<script setup>
defineProps({
  quiz: { type: Object, required: true },
  score: { type: Number, required: true },
  subjectBgColors: { type: Object, required: true },
  getAssetUrl: { type: Function, required: true },
});
defineEmits(['restart']);
</script>

<template>
  <main class="flex flex-col gap-10 pt-8 md:gap-16 xl:mx-auto xl:w-290 xl:flex-row xl:gap-36 xl:pt-0">
    <section class="flex flex-col gap-4  xl:w-1/2">
      <h1 class="text-preset-1 text-blue-950 dark:text-white">
        <span class="mb-2 block font-light">Quiz completed</span>
        You scored...
      </h1>
    </section>

    <section class="flex grow flex-col gap-4 md:gap-8 xl:w-141">
      <div
        class="dark:bg-blue-850 flex flex-col items-center justify-center rounded-xl bg-white p-8 shadow-[0_16px_40px_rgba(143,160,193,0.14)] md:p-12 dark:shadow-[0_16px_40px_rgba(49,62,81,0.14)] ">
        <div class="mb-4 flex items-center gap-4 md:mb-10">
          <div
            :class="subjectBgColors[quiz.title.toLowerCase()]"
            class="flex size-10 items-center justify-center rounded-lg p-2 md:size-14">
            <img
              :src="getAssetUrl(quiz.icon)"
              alt=""
              class="size-6 object-contain"
              aria-hidden="true">
          </div>
          <span class="text-preset-3 text-blue-950 dark:text-white">{{ quiz.title }}</span>
        </div>
        <p class="mb-4 text-preset-5 text-blue-950 dark:text-white">
          {{ score }}
        </p>
        <p class="text-[18px] md:text-[24px] font-normal md:leading-normal text-gray-500 dark:text-blue-300">
          out of {{ quiz.questions.length }}
        </p>
      </div>

      <button
        type="button"
        class="w-full cursor-pointer rounded-xl bg-purple-600 px-6 py-4 text-preset-3 text-white shadow-md transition-all hover:bg-[color-mix(in_srgb,var(--color-purple-600)_50%,white)] md:p-6"
        @click="$emit('restart')">
        Play Again
      </button>
    </section>
  </main>
</template>

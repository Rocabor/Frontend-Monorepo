<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  quiz: {
    type: Object,
    required: true,
  },
  currentQuestionIndex: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['answer-submitted', 'next-question']);

const selectedOption = ref(null);
const isSubmitted = ref(false);
const showFeedbackError = ref(false);

const currentQuestion = computed(() => props.quiz.questions[props.currentQuestionIndex]);
const totalQuestions = computed(() => props.quiz.questions.length);
const progressPercentage = computed(() => ((props.currentQuestionIndex + 1) / totalQuestions.value) * 100);

const letters = ['A', 'B', 'C', 'D'];

const selectOption = (option) => {
  if (isSubmitted.value) return;
  selectedOption.value = option;
  showFeedbackError.value = false;
};

const handleSubmit = () => {
  if (!selectedOption.value) {
    showFeedbackError.value = true;
    return;
  }

  if (!isSubmitted.value) {
    isSubmitted.value = true;
    const isCorrect = selectedOption.value === currentQuestion.value.answer;
    emit('answer-submitted', isCorrect);
  } else {
    isSubmitted.value = false;
    selectedOption.value = null;
    emit('next-question');
  }
};
</script>

<template>
  <main class="flex flex-col gap-10 mt-8 md:mt-2.25  xl:mx-auto xl:w-290 xl:flex-row xl:mt-0.5 xl:gap-32 ">
    <!--*  -->
    <section class="flex flex-col justify-between  xl:h-118 ">
      <div class="flex flex-col gap-4">
        <p class="text-preset-2 text-gray-500 dark:text-blue-300">
          Question {{ currentQuestionIndex + 1 }} of {{ totalQuestions }}
        </p>
        <h2 class="text-preset-4 text-blue-900 dark:text-white">
          {{ currentQuestion.question }}
        </h2>
      </div>

      <div
        class="dark:bg-blue-850 mt-6 h-4 w-full rounded-full bg-white p-1"
        role="progressbar"
        :aria-valuenow="currentQuestionIndex + 1"
        aria-valuemin="1"
        :aria-valuemax="totalQuestions">
        <div
          class="h-full rounded-full bg-purple-600 transition-all duration-300"
          :style="{ width: progressPercentage + '%' }" />
      </div>
    </section>

    <section class="flex  flex-col gap-4 md:gap-8 ">
      <fieldset class=" flex flex-col gap-4 md:gap-6 xl:gap-4 border-none xl:w-141">
        <legend class="sr-only">
          Choose the correct option
        </legend>

        <button
          v-for="(option, index) in currentQuestion.options"
          :key="option"
          type="button"
          class="dark:bg-blue-850 group text-preset-3 flex w-full cursor-pointer items-center justify-between rounded-xl md:rounded-3xl bg-white p-4 xl:p-6 text-left shadow-[0_16px_40px_rgba(143,160,193,0.14)] transition-all focus:outline-none border-3 border-transparent focus:border-purple-600  hover:border-purple-600  disabled:cursor-not-allowed dark:shadow-[0_16px_40px_rgba(49,62,81,0.14)] active:scale-95"
          :class="[
            selectedOption === option
              ? ' border-purple-600 '
              : '',
            isSubmitted && option === currentQuestion.answer ? 'border-green-500!' : '',
            isSubmitted && selectedOption === option && selectedOption !== currentQuestion.answer
              ? 'border-red-500!'
              : '',
          ]"
          :disabled="isSubmitted"
          @click="selectOption(option)">
          <div class="flex items-center gap-4">
            <div
              :class="[
                selectedOption === option
                  ? 'bg-purple-600 text-white  dark:text-blue-850'
                  : 'bg-gray-50 text-gray-500 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:text-blue-850',
                isSubmitted && option === currentQuestion.answer ? 'bg-green-500! text-white! dark:text-blue-850!' : '',
                isSubmitted && selectedOption === option && selectedOption !== currentQuestion.answer
                  ? 'bg-red-500! text-white!  dark:text-blue-850!'
                  : '',
              ]"
              class="flex size-10 shrink-0 items-center justify-center rounded-md transition-colors md:size-14">
              {{ letters[index] }}
            </div>
            <span class="text-preset-3 text-blue-950 dark:text-white">{{ option }}</span>
          </div>

          <div
            v-if="isSubmitted"
            class="shrink-0">
            <span
              v-if="option === currentQuestion.answer"
              class="">
              <img src="../assets/images/icon-correct.svg" alt="" class="size-6 md:size-7.5">
            </span>
            <span
              v-else-if="selectedOption === option"
              class="">
              <img src="../assets/images/icon-incorrect.svg" alt="" class="size-6 md:size-7.5">
            </span>
          </div>
        </button>
      </fieldset>

      <button
        type="button"
        class="w-full cursor-pointer rounded-xl min-h-14 bg-purple-600 p-4 md:p-8 text-preset-3 text-white shadow-[0_16px_40px_rgba(143,160,193,0.14)] dark:shadow-[0_16px_40px_rgba(49,62,81,0.14)] transition-all hover:bg-[color-mix(in_srgb,var(--color-purple-600)_50%,white)] md:rounded-3xl active:scale-95"
        @click="handleSubmit">
        {{ isSubmitted ? 'Next Question' : 'Submit Answer' }}
      </button>

      <p
        v-if="showFeedbackError"
        role="alert"
        class="flex items-center justify-center gap-2 text-center text-[18px] font-medium md:text-[24px] md:font-normal md:leading-normal  text-red-500">
        <span><img src="../assets/images/icon-error.svg" alt="" class="size-6 md:size-7.5"></span>
        Please select an answer
      </p>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  totalChar: {
    type: Number,
    required: true,
  },
  wordCount: {
    type: Number,
    required: true,
  },
  sentCount: {
    type: Number,
    required: true,
  },
});

// Formateadores locales para asegurar el look "00"
const formatChar = computed(() => String(props.totalChar).padStart(2, '0'));
const formatWords = computed(() => String(props.wordCount).padStart(2, '0'));
const formatSentences = computed(() => String(props.sentCount).padStart(2, '0'));
</script>

<template>
  <div class="mt-10 flex flex-col gap-4 px-4 md:mb-6 md:grid md:grid-cols-3 md:px-8 xl:mt-12 xl:px-0">
    <div class="Stat-Container bg-pattern-char bg-purple-400 text-neutral-900">
      <p class="text-preset-1">
        {{ formatChar }}
      </p>
      <p class="text-preset-3">
        Total Characters
      </p>
    </div>

    <div class="Stat-Container bg-pattern-word bg-yellow-500 text-neutral-900">
      <p class="text-preset-1">
        {{ formatWords }}
      </p>
      <p class="text-preset-3">
        Word Count
      </p>
    </div>

    <div class="Stat-Container bg-pattern-sentence bg-orange-500 text-neutral-900">
      <p class="text-preset-1">
        {{ formatSentences }}
      </p>
      <p class="text-preset-3">
        Sentence Count
      </p>
    </div>
  </div>
</template>

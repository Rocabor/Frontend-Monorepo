<script setup>
import { ref, computed } from 'vue';

const showCharLimit = ref(false);
const text = ref('');
const excEsp = ref(false);
const charLimit = ref('');

const effectiveText = computed(() => (excEsp.value ? text.value.replace(/\s/g, '') : text.value));

const isOverLimit = computed(() => {
  if (!showCharLimit.value || !charLimit.value) return false;
  return effectiveText.value.length > parseInt(charLimit.value);
});
</script>

<template>
  <main class="space-y-10">
    <!--* Title Container -->
    <header class="my-10 px-4">
      <h1 class="text-preset-1 text-center dark:text-neutral-100">Analyze your text in real-time.</h1>
    </header>

    <!--* Main Container -->
    <section class="px-4">
      <!--* Textarea wrapper -->
      <label for="text-input" class="sr-only">your text</label>
      <div class="mb-4 flex flex-col gap-3">
        <textarea
          name="text"
          id="text-input"
          v-model="text"
          placeholder="Start typing here… (or paste your text)"
          class="text-preset-3 focus:shadow-textarea mx-auto flex h-50 w-full rounded-xl border-2 border-neutral-200 bg-neutral-100 p-5 hover:bg-neutral-200 focus:ring-2 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          :class="{
            'focus:ring-purple-500': !isOverLimit,
            'focus:ring-orange-500': isOverLimit,
          }"></textarea>

        <p class="text-preset-4 text-orange-500" v-if="isOverLimit" aria-live="polite">
          <img src="../assets/images/icon-info.svg" alt="info" class="mr-2 inline" />
          Limit reached! Your text exceeds {{ charLimit }} characters.
        </p>
      </div>

      <!--* Options Container -->
      <fieldset class="flex flex-col gap-3">
        <legend class="sr-only">Options</legend>

        <div class="flex items-center gap-2.5">
          <input type="checkbox" id="exclude-spaces" v-model="excEsp" class="checkBox" />
          <label for="exclude-spaces" class="dark:text-neutral-200 py-1">Exclude Spaces</label>
        </div>

        <div class="flex  items-center gap-2.5">
          <input type="checkbox" id="character-limit" v-model="showCharLimit" class="checkBox" />
          <label for="character-limit" class="dark:text-neutral-200 py-0.5">Set Character Limit</label>

          <input
            type="text"
            id="input-char-limit"
            v-if="showCharLimit"
            v-model="charLimit"
            class="w-13.75 rounded-md border border-neutral-900 dark:border-neutral-600 px-3 py-0.5 text-preset-4 text-neutral-900 dark:text-neutral-0"
            maxlength="3" />
          <label for="input-char-limit" class="sr-only">Character limit value</label>
        </div>
        <p class="dark:text-neutral-200">Approx. reading time: <1 minute</p>
      </fieldset>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'; 
import Stats from './Stats.vue';
import Density from './Density.vue';

const showCharLimit = ref(false);
const text = ref('');
const excEsp = ref(false);
const charLimit = ref('');

const effectiveText = computed(() => (excEsp.value ? text.value.replace(/\s/g, '') : text.value));

const isOverLimit = computed(() => {
  if (!showCharLimit.value || !charLimit.value) return false;
  return effectiveText.value.length > parseInt(charLimit.value);
});

// Propiedad computada para contar caracteres
const totalChar = computed(() => effectiveText.value.length);

// Propiedad computada para contar palabras
const wordCount = computed(() => {
  const trimmedText = text.value.trim();
  if (!trimmedText) return 0;
  return trimmedText.split(/\s+/).length;
});

// Propiedad computada para contar oraciones
const sentCount = computed(() => {
  const trimmedText = text.value.trim();
  if (!trimmedText) return 0;
  const sentences = trimmedText.split(/[.!?]+/).filter(Boolean);
  return sentences.length;
});

// Propiedad computada para tiempo de lectura
const readingTime = computed(() => {
  const words = wordCount.value;
  if (words === 0) return '0 minutes';
  const minutes = Math.round(words / 200);
  if (minutes < 1) return '<1 minute';
  return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
});


// Propiedad computada para determinar densidad de caracteres
const letterDensity = computed(() => {

  // Usamos el texto limpio (sin espacios) para calcular la densidad real de letras
  const cleanText = effectiveText.value.toLowerCase();

  const counts = {};

  // 1. Contamos las ocurrencias de cada carácter
  for (const char of cleanText) {
    // Filtramos para contar solo letras y números (opcional, según tu diseño)
    if (/[a-z0-9áéíóúñ]/i.test(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  const total = Object.values(counts).reduce((sum, c) => sum + c, 0);

  if (total === 0) return [];

  // 2. Convertimos el objeto en un Array, calculamos porcentaje y ordenamos
  return (
    Object.entries(counts)
      .map(([letter, count]) => {
        const percentage = ((count / total) * 100).toFixed(2); // Retorna un string con 2 decimales (ej: "15.45")
        return {
          letter: letter.toUpperCase(),
          count,
          percentage,
        };
      })
      // Ordenamos de mayor a menor cantidad de apariciones
      .sort((a, b) => b.count - a.count)
  );
});
</script>

<template>
  <main class="space-y-10">
    <header class="my-10 px-4 md:px-8">
      <h1 class="text-preset-1 text-center dark:text-neutral-100 md:w-127.5 md:mx-auto">Analyze your text in real-time.</h1>
    </header>

    <section class="px-4 md:px-8">
      <label for="text-input" class="sr-only">your text</label>
      <div class="mb-4 flex flex-col gap-3">
        <textarea
          id="text-input"
          v-model="text"
          placeholder="Start typing here… (or paste your text)"
          class="placeholder-neutral-700 dark:placeholder-neutral-200 text-preset-3 focus:shadow-textarea mx-auto flex h-50 w-full rounded-xl border-2 p-5 hover:bg-neutral-200 focus:ring-2 focus:outline-hidden dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 transition-all"
          :class="{
            'border-neutral-200 dark:border-neutral-700 focus:ring-purple-500': !isOverLimit,
            'border-orange-500 focus:ring-orange-500': isOverLimit,
          }"></textarea>

        <p class="text-preset-4 text-orange-500 flex items-center" v-if="isOverLimit" aria-live="polite" role="alert">
          <img src="../assets/images/icon-info.svg" alt="" aria-hidden="true" class="mr-2 inline" />
          Limit reached! Your text exceeds {{ charLimit }} characters.
        </p>
      </div>

      <fieldset class="flex flex-col gap-3  md:flex-row">
        <legend class="sr-only">Options</legend>

        <div class="flex items-center gap-2.5">
          <input type="checkbox" id="exclude-spaces" v-model="excEsp" class="checkBox" />
          <label for="exclude-spaces" class="dark:text-neutral-200 py-1 cursor-pointer select-none">Exclude Spaces</label>
        </div>

        <div class="flex items-center gap-2.5">
          <input type="checkbox" id="character-limit" v-model="showCharLimit" class="checkBox" />
          <label for="character-limit" class="dark:text-neutral-200 py-0.5 cursor-pointer select-none">Set Character Limit</label>

          <input
            type="text"
            id="input-char-limit"
            v-if="showCharLimit"
            v-model="charLimit"
            class="w-13.75 rounded-md border border-neutral-900 dark:border-neutral-200 px-3 py-0.5 text-preset-4 text-neutral-900 dark:text-neutral-0 dark:bg-neutral-800 focus:outline-hidden focus:ring-1 focus:ring-purple-500 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            maxlength="3" />
          <label for="input-char-limit" class="sr-only">Character limit value</label>
        </div>
        <p class="dark:text-neutral-200 flex md:flex-1 items-center md:justify-end">Approx. reading time: {{ readingTime }}</p>
      </fieldset>
    </section>

    <Stats
      :total-char="totalChar"
      :word-count="wordCount"
      :sent-count="sentCount"        
    />

    <Density    
    :letter-density="letterDensity"
    />
  </main>  
</template>
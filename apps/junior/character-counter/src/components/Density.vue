<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  letterDensity: {
    type: Array,
    required: true,
  },
});

const isExpanded = ref(false);

const displayedDensity = computed(() => {
  if (isExpanded.value) {
    return props.letterDensity;
  }
  return props.letterDensity.slice(0, 5);
});
</script>

<template>
  <section class="mb-5 flex flex-col gap-3 px-4 md:px-8 xl:px-0" aria-labelledby="density-heading">
    <h2 id="density-heading" class="text-preset-2 mb-1.5 font-bold text-neutral-900 xl:mb-2 dark:text-neutral-200">
      Letter Density
    </h2>

    <p v-if="letterDensity.length === 0" class="text-preset-4 text-neutral-600 dark:text-neutral-200">
      No characters found. Start typing to see letter density.
    </p>

    <ul v-else class="flex flex-col gap-3" aria-live="polite">
      <li
        v-for="item in displayedDensity"
        :key="item.letter"
        class="text-preset-4 flex items-center gap-3.5 text-neutral-900 dark:text-neutral-200">
        <span class="w-4 font-medium">{{ item.letter }}</span>

        <div class="h-3 flex-1 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800" aria-hidden="true">
          <div
            class="h-full rounded-full bg-purple-500 transition-all duration-300"
            :style="{ width: `${item.percentage}%` }"></div>
        </div>

        <span class="w-24 text-right">
          {{ item.count }}
          <span class="font-light text-neutral-600 dark:text-neutral-400">({{ item.percentage }}%)</span>
        </span>
      </li>
    </ul>

    <button
      v-if="letterDensity.length > 5"
      @click="isExpanded = !isExpanded"
      type="button"
      :aria-expanded="isExpanded"
      class="text-preset-3 mt-1.5 flex cursor-pointer items-center gap-2 font-medium text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 xl:mt-2 dark:text-neutral-200">
      {{ isExpanded ? 'See less' : 'See more' }}
      <span
        aria-hidden="true"
        class="inline-block size-1.5 transform border-t-2 border-r-2 border-current transition-transform duration-300"
        :class="isExpanded ? 'rotate-315' : 'rotate-135'"></span>
    </button>
  </section>
</template>

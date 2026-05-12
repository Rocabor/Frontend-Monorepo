<script setup>
import { ref, computed } from 'vue';
import { MyFooter } from '@packages/ui';
import { onMounted, onUnmounted } from 'vue';

// Importación directa de archivos
import imageTanya from './assets/images/image-tanya.jpg';
import imageJohn from './assets/images/image-john.jpg';

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));

const currentIndex = ref(0);

const testimonials = [
  {
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    quote:
      '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',

    image: imageTanya,
  },
  {
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    quote:
      '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',

    image: imageJohn,
  },
];

const current = computed(() => testimonials[currentIndex.value]);
</script>

<template>
  <div class="xl:flex">
    <div
      role="region"
      aria-label="Testimonials slider"
      class="relative mx-auto h-[307.5px] w-[326.5px] bg-[url('./assets/images/pattern-bg.svg')] bg-cover bg-no-repeat px-9.25 py-7.5 md:h-122.5 md:w-130 md:px-14.25 md:py-12 xl:order-1 xl:h-164.25 xl:w-174.25 xl:px-16.25 xl:py-15.75">
      <img :src="current.image" :alt="current.name" class="shadow-img h-63.25 w-63.5 rounded-[5px] md:h-100.75 md:w-101.25 xl:size-135" />

      <div class="shadow-btn absolute bottom-1 left-1/2 flex h-10 w-20 -translate-x-1/2 rounded-[28px] bg-white md:bottom-3 md:h-14 md:w-28 xl:bottom-6 xl:left-46.25">
        <button
          @click="prev"
          type="button"
          aria-label="Previous testimony"
          class="flex w-10 cursor-pointer items-center justify-center rounded-l-[28px] hover:bg-gray-100 focus-visible:ring-3 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-75 md:w-14">
          <div class="size-3 bg-gray-400 mask-[url('./assets/images/icon-prev.svg')] mask-contain mask-center mask-no-repeat md:size-4"></div>
        </button>

        <button
          @click="next"
          type="button"
          aria-label="Next testimony"
          class="flex w-10 cursor-pointer items-center justify-center rounded-r-[28px] hover:bg-gray-100 focus-visible:ring-3 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-75 md:w-14">
          <div class="size-3 bg-gray-400 mask-[url('./assets/images/icon-next.svg')] mask-contain mask-center mask-no-repeat md:size-4"></div>
        </button>
      </div>
    </div>

    <!-- Testimonial Container -->
    <div class="relative mx-auto flex max-h-91 w-77.75 translate-y-[32.5px] flex-col items-center gap-4 md:w-158.75 md:gap-8 xl:z-1 xl:order-0 xl:translate-x-32.5 xl:translate-y-38.75 xl:items-start">
      <img src="./assets/images/pattern-quotes.svg" alt="" role="img" aria-hidden="true" class="absolute left-1/2 h-12.5 w-15 -translate-x-1/2 md:h-25 md:w-30 xl:-translate-x-53.75" />

      <div aria-live="polite" class="sr-only">
        {{ current.name }}, {{ current.role }}
      </div>

      <p class="preset-1 mt-6.25 text-center md:mt-18.5 xl:text-left">
        {{ current.quote }}
      </p>

      <div class="flex h-10 min-w-26.5 flex-col text-center md:flex-row md:gap-2">
        <p class="preset-2">{{ current.name }}</p>
        <p class="preset-2 font-medium text-gray-400">{{ current.role }}</p>
      </div>
    </div>
  </div>

  <img src="./assets/images/pattern-curve.svg" alt="" aria-hidden="true" class="absolute bottom-0 left-0 -z-10 w-71.25 xl:w-auto" />

  <MyFooter bg-color="transparent" text-color="var(--color-gradient-end)" hover-color="var(--color-pink-500)" focus-visible="var(--color-pink-500)" />
</template>

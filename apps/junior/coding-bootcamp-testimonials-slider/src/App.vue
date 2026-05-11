<script setup>
import { ref, computed } from 'vue';
import { MyFooter } from '@packages/ui';

const currentIndex = ref(0);

const testimonials = [
  {
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    quote:
      '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    // Usamos new URL para que Vite procese la imagen desde src/assets
    image: new URL('./assets/images/image-tanya.jpg', import.meta.url).href,
  },
  {
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    quote:
      '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    image: new URL('./assets/images/image-john.jpg', import.meta.url).href,
  },
];

// Lógica corregida para acceder al valor del índice
const current = computed(() => testimonials[currentIndex.value]);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};
</script>

<template>
  <div class="xl:flex">
  <div class="relative h-[307.5px] w-[326.5px] bg-[url('./assets/images/pattern-bg.svg')] bg-cover bg-no-repeat px-9.25 py-7.5 md:h-122.5 md:w-130 md:px-14.25 md:py-12 mx-auto xl:h-164.25 xl:w-174.25 xl:px-16.25 xl:py-15.75 xl:order-1">

    <img src="./assets/images/image-tanya.jpg" class="shadow-img h-63.25 w-63.5 rounded-[5px] md:h-100.75 md:w-101.25 xl:size-135" alt="" />

    <div class="shadow-btn absolute bottom-1 left-1/2 flex h-10 w-20 -translate-x-1/2 rounded-[28px] bg-white md:bottom-3 md:h-14 md:w-28 xl:bottom-6 xl:left-46.25">
      
      <button type="button" class="flex w-10 cursor-pointer items-center justify-center rounded-l-[28px] md:w-14">

        <div class="size-3 bg-gray-400 mask-[url('./assets/images/icon-prev.svg')] mask-contain mask-no-repeat mask-center md:size-4 "></div>
      </button>

      <button type="button" class="flex w-10 cursor-pointer items-center justify-center rounded-r-[28px] md:w-14">

        <div class="size-3 bg-gray-400 mask-[url('./assets/images/icon-next.svg')] mask-contain mask-no-repeat mask-center md:size-4"></div>
      </button>
    </div>
  </div>

  <!-- Testimonial Container -->
  <div class="relative mx-auto flex max-h-91 w-77.75 translate-y-[32.5px] flex-col items-center gap-4 md:w-158.75 md:gap-8 xl:order-0 xl:z-1 xl:items-start xl:translate-y-38.75 xl:translate-x-32.5">

    <img src="./assets/images/pattern-quotes.svg" alt="" class="absolute left-1/2 h-12.5 w-15 -translate-x-1/2 md:w-30 md:h-25 xl:-translate-x-53.75" />

    <p class="preset-1 mt-6.25 text-center md:mt-18.5 xl:text-left">
      “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”
    </p>

    <div class="flex h-10 min-w-26.5 flex-col text-center md:flex-row md:gap-2">
      <p class="preset-2">Tanya Sinclair</p>
      <p class="preset-2 font-medium text-gray-400">UX Engineer</p>
    </div>
  </div>
  </div>

  <img src="./assets/images/pattern-curve.svg" alt="" class="absolute bottom-0 left-0 -z-10 w-71.25 xl:w-auto" />
</template>

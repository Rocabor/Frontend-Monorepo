<script setup>

import InteractivePricing from './components/InteractivePricing.vue';

</script>

<template>
  <header class="h-100 bg-slate-50 bg-[url(./assets/images/bg-pattern.svg)] bg-bottom bg-no-repeat bg-auto xl:h-112.25 xl:bg-size-[100%_100%]">
    <div
      class="relative mx-auto flex w-81.5 translate-y-22.25 flex-col gap-2 bg-[url(images/pattern-circles.svg)] bg-center bg-no-repeat text-center before:absolute before:top-1/2 before:left-1/2 before:z-[-1] before:size-36.5 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[url(./assets/images/pattern-circles.svg)] before:content-[''] md:w-98.75 md:gap-3 
      md:translate-y-25">
      <h1 class="preset-1">
        Simple, traffic-based pricing
      </h1>

      <p class="preset-2">
        Sign-up for our 30-day trial.
        <br class="md:hidden">
        No credit card required.
      </p>
    </div>
  </header>

  <section class="absolute top-58.5 flex w-full xl:top-66.5">
    <InteractivePricing />
  </section>

  <footer>
    <nav class="attribution" aria-label="Attribution credits">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>
      • Coded by
      <a href="https://www.frontendmentor.io/profile/Rocabor">@Rocabor</a>
      <span class="year"> 2026</span>
    </nav>
  </footer>
</template>

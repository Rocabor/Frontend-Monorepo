<script setup>
import { ref } from 'vue';
import { MyFooter } from '@packages/ui';
import logoFull from './assets/images/logo-full.svg';
import patternTop from './assets/images/pattern-squiggly-line-top.svg';
import patternBottom from './assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import patternBotDesk from './assets/images/pattern-squiggly-line-bottom-desktop.svg';
import patternCircle from './assets/images/pattern-circle.svg';
import Form from './components/Form.vue';

const isTicketReady = ref(false);
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-between overflow-x-clip pb-20">
    <div>
      <header class="flex w-full items-center justify-center px-6 pt-8.25 pb-10 md:pt-10 md:pb-15">
        <div class="flex items-center">
          <img
            :src="logoFull"
            alt="Coding Conf Home"
            class="h-6.25 w-41 md:h-7.5 md:w-52.25">
        </div>
      </header>

      <main class="mx-4 flex h-auto max-w-222.75 flex-col items-center md:mx-7.75 xl:mx-auto">
        <div
          v-if="!isTicketReady"
          class="mb-4 flex flex-col gap-5">
          <h1 class="text-preset-1 text-center">
            Your Journey to Coding Conf 2026 Starts Here!
          </h1>
          <p class="text-preset-2 text-center text-neutral-300">
            Secure your spot at next year’s biggest coding conference.
          </p>
        </div>

        <Form @ticket-generated="isTicketReady = true" />
      </main>
    </div>

    <img
      :src="patternTop"
      alt=""
      class="pointer-events-none absolute top-6 right-0 -z-10 h-13 w-28 md:top-22 md:h-27 md:w-58 xl:h-52 xl:w-111.5">

    <picture class="pointer-events-none absolute bottom-0 left-0 -z-10">
      <source
        :srcset="patternBotDesk"
        media="(min-width:1440px)">
      <img
        :src="patternBottom"
        alt=""
        class="h-52.5 w-75.25 md:h-69 md:w-99 xl:h-100 xl:w-206.25">
    </picture>

    <img
      :src="patternCircle"
      alt=""
      class="pointer-events-none absolute -top-7.5 -left-5 -z-10 size-26.75 md:-top-21.75 md:-left-6.75 md:size-54.25 xl:-top-21.25 xl:left-11">

    <img
      :src="patternCircle"
      alt=""
      class="pointer-events-none absolute top-1/3 left-1/2 -z-10 size-26.75 translate-x-[125.5px] md:size-54.25 md:translate-x-71.25 xl:translate-x-54.5">

    <MyFooter
      bg-color="transparent"
      text-color="var(--color-orange-500)"
      text-color-attribution="white"
      position="absolute"
      font-family="var(--font-inconsolata)" />
  </div>
</template>

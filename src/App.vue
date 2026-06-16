<script setup>
import { MyFooter } from '@packages/ui';
import logoFull from './assets/images/logo-full.svg';
import patternTop from './assets/images/pattern-squiggly-line-top.svg';
import patternBottom from './assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import patternBotDesk from './assets/images/pattern-squiggly-line-bottom-desktop.svg';
import patternCircle from './assets/images/pattern-circle.svg';
import Form from './components/Form.vue';
</script>

<template>
  <header
    class="relative flex w-full items-center justify-center px-6 pt-8.25 pb-10 md:pt-10 md:pb-15">

    <!--* logo -->
    <div class="flex items-center">
      <img :src="logoFull" alt="Coding Conf Logo" class="h-6.25 w-41 md:w-52.25 md:h-7.5" />
    </div>

    <!--* líneas superiores -->
    <img :src="patternTop" alt="" class="absolute top-6 right-0 h-13 w-28 md:w-58 md:h-27 md:top-22 xl:w-111.5 xl:h-52" />

    <!--* líneas inferiores -->
    <picture>
      <source :srcset="patternBotDesk" media="(min-width:1440px)">
      <img :src="patternBottom" alt="" class="absolute -left-px top-196.25 -z-10 w-75.25 h-52.5 md:left-0 md:top-201 md:w-99 md:h-69 xl:w-206.25 xl:h-100 xl:top-156">
    </picture>

    <!--* patrones circulares -->
    <img :src="patternCircle" alt="" class="absolute size-26.75 -top-7.5 -left-5 md:size-54.25 md:-left-6.75 md:-top-21.75 xl:left-11 xl:-top-21.25">
    <img :src="patternCircle" alt="" class="absolute size-26.75 top-137 -right-11.25 md:size-54.25 md:top-138 md:-right-29.5 xl:left-234.5 xl:right-71.25">
  </header>

  <main
    class="flex flex-col items-center max-w-222.75 mx-4 md:mx-7.75 xl:mx-auto ">

    <div class="flex flex-col gap-5">
    <!--* Main Heading -->
    <h1
      class="text-preset-1 text-center">
      Your Journey to Coding Conf 2026 Starts Here!
    </h1>

    <!--* Subheading -->
    <p class="text-preset-2 text-center text-neutral-300 ">
      Secure your spot at next year’s biggest coding conference.
    </p>
    </div>

    <Form/>

  </main>
</template>

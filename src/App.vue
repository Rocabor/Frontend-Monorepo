<script setup>
import { MyFooter } from '@packages/ui';
import logoFull from './assets/images/logo-full.svg';
import patternSquiggly from './assets/images/pattern-squiggly-line-top.svg';
</script>

<template>
  <header
    class="relative flex w-full items-center justify-center px-6 pt-8.25 pb-10 md:pt-10 md:pb-15">

    <!--* logo -->
    <div class="flex items-center">
      <img :src="logoFull" alt="Coding Conf Logo" class="h-6.25 w-41 md:w-52.25 md:h-7.5" />
    </div>

    <img :src="patternSquiggly" alt="" class="absolute top-6 right-0 h-13 w-28 md:w-58 md:h-27 md:top-22 xl:w-111.5 xl:h-52" />
  </header>

  <main
    class="flex flex-col items-center max-w-222.75 mx-4 md:mx-7.75 xl:mx-auto">

    <div class="flex flex-col gap-5">
    <!--* Main Heading -->
    <h1
      class="text-preset-1 text-neutral-0 text-center">
      Your Journey to Coding Conf 2026 Starts Here!
    </h1>

    <!--* Subheading -->
    <p class="text-preset-2 text-center text-neutral-300 ">
      Secure your spot at next year’s biggest coding conference.
    </p>
    </div>

  </main>
</template>

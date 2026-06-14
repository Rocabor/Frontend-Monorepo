<script setup>
import { MyFooter } from '@packages/ui';
import logoFull from './assets/images/logo-full.svg';
import patternSquiggly from './assets/images/pattern-squiggly-line-top.svg'
</script>

<template>
  <header class="flex w-full max-w-[1440px] items-center justify-center px-6 py-[33px] md:px-10 md:py-8 lg:px-20 lg:py-10 relative">

    <div class="flex items-center">
      <img :src="logoFull" alt="Coding Conf Logo" class="h-6 w-[166px]" />
    </div>

    <img :src="patternSquiggly" alt="" class="absolute w-[112px] h-[52px] right-0 top-6">
  </header>

  <main></main>
</template>

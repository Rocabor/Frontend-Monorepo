<script setup>
import { MyFooter } from '@packages/ui';
import TheNavbar from './components/TheNavbar.vue';
import TheHero from './components/TheHero.vue';
</script>

<template>
  <div class="flex flex-col gap-12 md:gap-16 px-5 pt-6 md:px-[54px] md:pt-20 xl:px-[79px]">
    <TheNavbar />
    <TheHero/>
  </div>
</template>

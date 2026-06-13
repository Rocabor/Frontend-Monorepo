<script setup>
import { MyFooter } from '@packages/ui';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
</script>

<template>
  <div class="xl:mx-auto xl:w-247.5 xl:pt-8">
    <Header />
    <Main />
    <MyFooter
      bg-color="transparent"
      text-color="var(--color-yellow-500)"      
      text-color-attribution="var(--color-purple-500)"
      position="relative" />
  </div>
</template>

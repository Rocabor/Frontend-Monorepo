<script setup>
import { MyFooter } from '@packages/ui';
import Hero from './components/Hero.vue';
import Results from './components/Results.vue';
import Tips from './components/Tips.vue';
import LimitationsBMI from './components/LimitationsBMI.vue';

</script>

<template>
  <main>
    <Hero />
    <Results />
    <Tips />
    <LimitationsBMI />
    <MyFooter
      text-color="var(--color-blue-500)"
      bg-color="transparent"    
      font-family="var(--font-princ)"    
    />
  </main>
</template>

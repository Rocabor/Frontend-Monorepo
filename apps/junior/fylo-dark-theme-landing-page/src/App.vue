<script setup>
import { MyFooter } from '@packages/ui';
import TheNavbar from './components/TheNavbar.vue';
import TheHero from './components/TheHero.vue';
import FeaturesGrid from './components/FeaturesGrid.vue';
import ProductiveSection from './components/ProductiveSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import CtaSection from './components/CtaSection.vue';
import TheFooter from './components/TheFooter.vue';


</script>

<template>
  <main class="flex flex-col mb-81.25 md:mb-63.75 xl:mb-88.75 gap-12 md:gap-16 px-5 pt-6 md:px-13.5 md:pt-20 xl:px-19.75">
    <TheNavbar />
    <TheHero/>
    <FeaturesGrid/>
    <ProductiveSection/>
    <TestimonialsSection/>
    <CtaSection/>
  </main>
  <TheFooter/>
  <MyFooter
  text-color="white"
  bg-color="transparent"
  text-color-attribution="var(--color-blue-300)"  />
</template>

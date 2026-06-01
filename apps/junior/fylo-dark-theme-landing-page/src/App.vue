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
  <div class="flex flex-col mb-[325px] md:mb-[255px] xl:mb-[355px] gap-12 md:gap-16 px-5 pt-6 md:px-13.5 md:pt-20 xl:px-19.75">
    <TheNavbar />
    <TheHero/>
    <FeaturesGrid/>
    <ProductiveSection/>
    <TestimonialsSection/>
    <CtaSection/>
  </div>
  <TheFooter/>
</template>

<script setup>
import { MyFooter } from '@packages/ui';
import TheNavbar from './components/TheNavbar.vue';
import TheHero from './components/TheHero.vue';
import FeaturesGrid from './components/FeaturesGrid.vue';


</script>

<template>
  <div class="flex flex-col gap-12 md:gap-16 px-5 pt-6 md:px-13.5 md:pt-20 xl:px-19.75">
    <TheNavbar />
    <TheHero/>
    <FeaturesGrid/>
    

  </div>
</template>

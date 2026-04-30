<script setup>
import { reactive, ref } from 'vue';
import CardDisplay from './components/CardDisplay.vue';

const isComplete = ref(false);
const cardData = reactive({
  name: '',
  number: '',
  month: '',
  year: '',
  cvc: '',
});
</script>

<template>
  <main class="relative flex min-h-dvh flex-col lg:flex-row">

    <section class="bg-main h-60 w-full md:h-85 xl:min-h-dvh xl:w-120.75">

      <CardDisplay :cardData="cardData"/>

    </section>


  </main>
</template>

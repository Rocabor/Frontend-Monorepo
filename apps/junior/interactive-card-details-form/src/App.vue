<script setup>
import { reactive, ref } from 'vue';
import CardDisplay from './components/CardDisplay.vue';
import FormContainer from './components/FormContainer.vue';

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
  <main class="relative flex min-h-dvh flex-col xl:flex-row xl:gap-87.25">

    <!-- Card Container -->
    <section class="bg-main h-60 w-full md:h-85 xl:min-h-dvh xl:w-120.75">
      <CardDisplay :cardData="cardData" />
    </section>

    <!-- Form Container -->
    <section class="flex flex-col items-center justify-center pb-11[91px] md:pb-17.5 md:pt-36.25 xl:p-0">
      <FormContainer v-model:cardData="cardData" @complete="isComplete = true" />
    </section>
    
  </main>
</template>

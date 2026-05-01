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
    <section class="bg-main h-60 w-full md:h-85 xl:min-h-dvh xl:w-120.75 xl:z-1" aria-label="Vista previa de tarjeta">
      <CardDisplay :cardData="cardData" :isComplete="isComplete" />
    </section>

    <!-- Form Container -->
    <section class="flex flex-col items-center justify-center pb-11 pt-22.75 md:pb-17.5 md:pt-36.25 xl:p-0" aria-label="Formulario de pago">
      <FormContainer v-model:cardData="cardData" @complete="isComplete = true" />
    </section>
    
  </main>

   <footer>
      <nav class="attribution" aria-label="Attribution credits">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>
        • Coded by
        <a href="https://www.frontendmentor.io/profile/Rocabor">@Rocabor</a>
        <span class="year"> 2026</span>
      </nav>
    </footer>
</template>

<script setup>
import { reactive, ref } from 'vue';
import CardDisplay from './components/CardDisplay.vue';

const isComplete = ref(false);
const cardData = reactive({
  name: '',
  number: '',
  month: '',
  year: '',
  cvc: ''
});
</script>



<template>
  <main class="min-h-screen flex flex-col lg:flex-row">
    <section class="h-[240px] lg:h-screen lg:w-1/3 relative flex items-center"
             style="background-image: var(--bg-main-desktop); background-size: cover;">
      <CardDisplay :cardData="cardData" />
    </section>

    <section class="flex-1 flex items-center justify-center p-6">
      <p class="text-gray-400">El formulario aparecerá aquí...</p>
    </section>
  </main>
</template>
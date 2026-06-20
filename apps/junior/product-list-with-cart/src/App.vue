<script setup>
import { ref, onMounted } from 'vue';
import Desserts from './components/Desserts.vue';

const products = ref([]);

onMounted(async () => {
  try {
    const data = await fetch('data.json');
    products.value = await data.json();
  } catch (error) {
    console.error('Error cargando los postres:', error);
  }
});



</script>

<template>
  <!-- * Main Content -->
  <main class="flex flex-col gap-8 m-6">
    <h1>Desserts</h1>
    <Desserts :products="products" />
  </main>
</template>

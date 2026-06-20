<script setup>
import { ref, onMounted } from 'vue';
import Desserts from './components/Desserts.vue';

const products = ref([]);

// Función mágica de Vite para resolver rutas dinámicas desde src/assets
const getURLImage = (pathInJson) => {
  const fileName = pathInJson.split('/').pop();
  return new URL(`./assets/images/${fileName}`, import.meta.url).href;
};

onMounted(async () => {
  try {
    const data = await fetch('data.json');
    const rawProducts = await data.json();

    // MAPEAMOS los productos para transformar los strings estáticos en URLs dinámicas de Vite
    products.value = rawProducts.map((product) => ({
      ...product,
      image: {
        thumbnail: getURLImage(product.image.thumbnail),
        mobile: getURLImage(product.image.mobile),
        tablet: getURLImage(product.image.tablet),
        desktop: getURLImage(product.image.desktop),
      },
    }));
  } catch (error) {
    console.error('Error cargando los postres:', error);
  }
});
</script>

<template>
  <!-- * Main Content -->
  <main class="m-6 flex flex-col gap-8">
    <h1>Desserts</h1>
    <Desserts :products="products" />
  </main>
</template>

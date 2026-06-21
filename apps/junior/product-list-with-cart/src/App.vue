<script setup>
import { ref, onMounted } from 'vue';
import Desserts from './components/Desserts.vue';
import Cart from './components/Cart.vue';

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
  <main class="my-6 mx-auto w-[327px] grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-6 md:w-[688px] xl:my-[88px] xl:grid-cols-[repeat(3,251px)_384px] xl:w-[1216px]">
    <h1 class="text-preset-1 md:col-span-3">
      Desserts
    </h1>
    <Desserts :products="products" />
    <Cart />
  </main>
</template>

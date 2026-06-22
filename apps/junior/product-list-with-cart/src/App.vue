<script setup>
import { MyFooter } from '@packages/ui';
import { ref, onMounted, watch, computed } from 'vue';
import Desserts from './components/Desserts.vue';
import Cart from './components/Cart.vue';
import OrderModal from './components/OrderModal.vue';

const products = ref([]);
const cart = ref([]);
const isModalOpen = ref(false);

// Calcular el precio total de la orden
const orderTotal = computed(() => {
  return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

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

// --- FUNCIONES DEL CARRITO ---
// Añadir o incrementar un producto
const addToCart = (product) => {
  const itemInCart = cart.value.find((item) => item.id === product.id);
  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};

// Decrementar la cantidad de un producto (o quitarlo si llega a 0)
const removeFromCart = (product) => {
  const itemInCart = cart.value.find((item) => item.id === product.id);
  if (itemInCart) {
    itemInCart.quantity--;
    if (itemInCart.quantity === 0) {
      cart.value = cart.value.filter((item) => item.id !== product.id);
    }
  }
};

// Eliminar un producto por completo pulsando la 'X' en el carrito
const deleteItem = (productName) => {
  cart.value = cart.value.filter((item) => item.name !== productName);
};

// Función para abrir el modal desde el botón de confirmar del carrito
const confirmOrder = () => {
  isModalOpen.value = true;
};

// Función para vaciar el carrito y resetear la aplicación
const startNewOrder = () => {
  cart.value = [];
  isModalOpen.value = false;
};

// Bloquear scroll del fondo cuando el modal esté abierto
watch(isModalOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});
</script>

<template>
  <!--* Main Content -->
  <main
    class="mx-auto my-6 grid w-81.75 grid-cols-1 gap-8 md:w-172 md:grid-cols-3 md:gap-x-6 xl:my-22 xl:w-304 xl:grid-cols-[repeat(3,251px)_384px]">
    <h1 class="text-preset-1 md:col-span-3">
      Desserts
    </h1>

    <Desserts
      :products="products"
      :cart="cart"
      @add-to-cart="addToCart"
      @remove-from-cart="removeFromCart" />

    <Cart
      :cart="cart"
      :order-total="orderTotal"
      @delete-item="deleteItem"
      @confirm-order="confirmOrder" />
  </main>

  <OrderModal
    :cart="cart"
    :is-open="isModalOpen"
    :order-total="orderTotal"
    @start-new-order="startNewOrder" />

  <MyFooter
    position="relative"
    bg-color="transparent"
    text-color="red"
    font-family="RedHatText" />
</template>

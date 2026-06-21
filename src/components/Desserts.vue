<script setup>
import iconAddtoCart from '../assets/images/icon-add-to-cart.svg';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
  },
});

// Definimos los eventos que le avisarán a App.vue cuando el usuario interactúe
defineEmits(['add-to-cart', 'remove-from-cart']);

// Función para obtener la cantidad actual de un postre en el carrito
const getProductQuantity = (productName) => {
  const item = props.cart.find((item) => item.name === productName);
  return item ? item.quantity : 0;
};
</script>

<template>
  <!--* DessertTarget -->
  <div
    v-for="product in products"
    :key="product.name"
    class="mb-2 flex flex-col gap-4 md:mb-0">
    <!--* Item Image and Add To Cart Button -->
    <div class="relative h-58.5 xl:h-65.5">
      <picture>
        <source
          media="(min-width:1440px)"
          :srcset="product.image.desktop">
        <source
          media="(min-width:768px)"
          :srcset="product.image.tablet">
        <img
          :src="product.image.mobile"
          alt=""
          class="h-53 rounded-lg xl:h-60"
          :class="getProductQuantity(product.name) > 0 ? 'border-red border-3' : 'border-transparent'">
      </picture>

      <button
        v-if="getProductQuantity(product.name) === 0"
        class="text-preset-2 absolute bottom-0 left-1/2 flex h-11 w-40 -translate-x-1/2 cursor-pointer items-center justify-center gap-2 rounded-full border border-rose-400 bg-white p-3 hover:border-2 hover:border-red hover:text-red"
        @click="$emit('add-to-cart', product)">
        <img
          :src="iconAddtoCart"
          alt="icon cart"
          class="inline size-5">
        Add to Cart
      </button>

      <div
        v-else
        class="text-preset-2 absolute bottom-0 left-1/2 flex h-11 w-40 -translate-x-1/2 items-center justify-between rounded-full bg-red px-3 py-2 text-white shadow-xs">
        <button 
          class="flex size-5 items-center justify-center rounded-full border border-white hover:bg-white hover:text-red transition-all cursor-pointer font-bold"
          :aria-label="`Decrease quantity of ${product.name}`"
          @click="$emit('remove-from-cart', product)">
          -
        </button>
        
        <span class="font-semibold">{{ getProductQuantity(product.name) }}</span>
        
        <button 
          class="flex size-5 items-center justify-center rounded-full border border-white hover:bg-white hover:text-red transition-all cursor-pointer font-bold"
          :aria-label="`Increase quantity of ${product.name}`"
          @click="$emit('add-to-cart', product)">
          +
        </button>
      </div>
    </div>

    <!-- * Item Info -->
    <div class="flex h-17.25 w-full flex-col gap-1">
      <p class="text-preset-2 font-normal text-rose-500">
        {{ product.category }}
      </p>
      <p class="text-preset-3">
        {{ product.name }}
      </p>
      <p class="text-preset-3 text-red">
        ${{ product.price.toFixed(2) }}
      </p>
    </div>
  </div>
</template>

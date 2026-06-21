<script setup>
import { computed } from 'vue';

const props = defineProps({
  cart: {
    type: Array,
    required: true,
  },
});

defineEmits(['delete-item']);

// Calcular el número total de artículos en el carrito (ej: "Your Cart (7)")
const totalItems = computed(() => {
  return props.cart.reduce((total, item) => total + item.quantity, 0);
});

// Calcular el precio total de la orden
const orderTotal = computed(() => {
  return props.cart.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>

<template>
  <div
    class="flex min-h-56.5 h-fit flex-col gap-6 rounded-xl bg-white p-6 md:col-span-3 xl:col-span-1 xl:col-start-4 xl:row-span-4 xl:row-start-1 xl:ml-2">
    <h2 class="text-preset-4">
      Your Cart ({{ totalItems }})
    </h2>

    <div
      v-if="cart.length === 0"
      class="flex min-h-48.75 flex-col items-center gap-4 py-4">
      <img
        src="../assets/images/illustration-empty-cart.svg"
        alt=""
        class="size-32">
      <p class="text-preset-2 text-rose-500">
        Your added items will appear here
      </p>
    </div>

    <div v-else class="flex flex-col gap-4">
      <div class=" overflow-y-auto flex flex-col divide-y divide-rose-100">
        <div 
          v-for="item in cart" 
          :key="item.name" 
          class="flex items-center justify-between py-4">
          <div class="flex flex-col gap-1">
            <p class="text-preset-2">
              {{ item.name }}
            </p>
            <div class="flex gap-2 items-center text-preset-2">
              <span class="text-red font-bold mr-2">{{ item.quantity }}x</span>
              <span class="text-rose-500 font-normal">@ ${{ item.price.toFixed(2) }}</span>
              <span class="text-rose-500">${{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
          </div>

          <button 
            class="flex size-5 items-center justify-center rounded-full border border-rose-300 text-rose-400 hover:border-rose-900 hover:text-rose-900 transition-colors cursor-pointer text-xs font-bold"
            @click="$emit('delete-item', item.name)">
            ✕
          </button>
        </div>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-rose-100">
        <span class="text-preset-2 text-rose-900 font-normal">Order Total</span>
        <span class="text-preset-1 text-rose-900 text-2xl font-bold">${{ orderTotal.toFixed(2) }}</span>
      </div>

      <div class="flex items-center justify-center gap-2 rounded-lg bg-rose-50 p-3 text-preset-2 font-normal text-rose-900">
        <span><img src="../assets/images/icon-carbon-neutral.svg" alt=""></span>
        <p>This is a <span class="font-semibold">carbon-neutral</span> delivery</p>
      </div>

      <button class="w-full bg-red text-white py-3 rounded-full hover:bg-rose-900 transition-colors duration-200 cursor-pointer text-preset-3 text-center">
        Confirm Order
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  cart: {
    type: Array,
    required: true,
  },
  orderTotal: { type: Number, required: true }
});

// Agregamos 'confirm-order' a los eventos que el carrito puede emitir
defineEmits(['delete-item', 'confirm-order']);

// Calcular el número total de artículos en el carrito (ej: "Your Cart (7)")
const totalItems = computed(() => {
  return props.cart.reduce((total, item) => total + item.quantity, 0);
});


</script>

<template>
  <div
    class="flex h-fit min-h-56.5 flex-col gap-6 rounded-xl bg-white p-6 md:col-span-3 xl:col-span-1 xl:col-start-4 xl:row-span-4 xl:row-start-1 xl:ml-2">
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

    <div
      v-else
      class="flex flex-col gap-4">
      <ul class="max-h-64 flex flex-col divide-y divide-rose-100 overflow-y-auto">
        <li
          v-for="item in cart"
          :key="item.name"
          class="flex items-center justify-between py-4">
          <div class="flex flex-col gap-1">
            <p class="text-preset-2">
              {{ item.name }}
            </p>
            <div class="text-preset-2 flex items-center gap-2">
              <span class="text-red mr-2 font-bold">{{ item.quantity }}x</span>
              <span class="font-normal text-rose-500">@ ${{ item.price.toFixed(2) }}</span>
              <span class="text-rose-500">${{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
          </div>

          <button
            class="flex size-5 cursor-pointer items-center justify-center rounded-full border border-rose-300 text-xs font-bold text-rose-400 transition-colors hover:border-rose-900 hover:text-rose-900"
            :aria-label="`Remove ${item.name} from cart`"
            @click="$emit('delete-item', item.name)">
            ✕
          </button>
        </li>
      </ul>

      <div class="flex items-center justify-between border-t border-rose-100 pt-4">
        <span class="text-preset-2 font-normal text-rose-900">Order Total</span>
        <span class="text-preset-1 text-2xl font-bold text-rose-900">${{ orderTotal.toFixed(2) }}</span>
      </div>

      <div
        class="text-preset-2 flex items-center justify-center gap-2 rounded-lg bg-rose-50 p-3 font-normal text-rose-900">
        <span>
          <img
            src="../assets/images/icon-carbon-neutral.svg"
            alt="">
        </span>
        <p>
          This is a
          <span class="font-semibold">carbon-neutral</span>
          delivery
        </p>
      </div>

      <button
        class="bg-red text-preset-3 w-full cursor-pointer rounded-full py-3 text-center text-white transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-red)_75%,black)]"
        @click="$emit('confirm-order')">
        Confirm Order
      </button>
    </div>
  </div>
</template>

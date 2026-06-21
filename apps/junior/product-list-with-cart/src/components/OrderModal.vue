<script setup>
import { computed } from 'vue';
import iconConfirmed from '../assets/images/icon-order-confirmed.svg';

const props = defineProps({
  cart: {
    type: Array,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});

defineEmits(['start-new-order']);

// Calcular el precio total de la orden
const orderTotal = computed(() => {
  return props.cart.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-end justify-center bg-black/50 md:items-center p-0 md:p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title">
    <div
      class="w-full md:w-172 xl:w-148 rounded-t-2xl md:rounded-2xl bg-white p-6 md:p-10 flex flex-col gap-8 overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div class="flex flex-col gap-4">
        <img :src="iconConfirmed" alt="Order Confirmed" class="size-10.5">
        <div class="flex flex-col gap-2">
          <h2 class="text-preset-1">
            Order Confirmed
          </h2>
          <p class="text-preset-3 font-normal text-rose-500">
            We hope you enjoy your food!
          </p>
        </div>
      </div>

      <div class="rounded-xl bg-rose-50 p-6 flex flex-col divide-y divide-rose-100">
        <div class="max-h-56 overflow-y-auto pr-1 flex flex-col divide-y divide-rose-100">
          <div
            v-for="item in cart"
            :key="item.name"
            class="flex items-center justify-between py-4 first:pt-0">
            <div class="flex items-center gap-4">
              <img :src="item.image.thumbnail" :alt="item.name" class="size-12 rounded-sm object-cover">
              
              <div class="flex flex-col gap-2 min-w-41">
                <p class="text-preset-2 font-semibold text-rose-900 truncate max-w-45">
                  {{ item.name }}
                </p>
                <div class="flex gap-2 text-sm">
                  <span class="text-red font-bold">{{ item.quantity }}x</span>
                  <span class="text-rose-400">@ ${{ item.price.toFixed(2) }}</span>
                </div>
              </div>
            </div>

            <span class="text-preset-3 font-bold text-rose-900">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-6 mt-2">
          <span class="text-preset-2 text-rose-900 font-normal">Order Total</span>
          <span class="text-preset-1 text-rose-900 text-2xl font-bold">${{ orderTotal.toFixed(2) }}</span>
        </div>
      </div>

      <button
        class="w-full bg-red text-white py-4 rounded-full font-semibold hover:bg-[color-mix(in_srgb,var(--color-red)_75%,black)] transition-colors duration-200 cursor-pointer text-preset-3 text-center"
        @click="$emit('start-new-order')">
        Start New Order
      </button>
    </div>
  </div>
</template>
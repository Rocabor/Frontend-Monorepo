<script setup>
import iconAddtoCart from '../assets/images/icon-add-to-cart.svg';

defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <!--* DessertTarget -->
  <div
    v-for="product in products"
    :key="product.name"
    class="mb-2   gap-4 md:mb-0">
    <!--* Item Image and Add To Cart Button -->
    <div class="relative h-[234px] xl:h-[262px]">
      <picture>
        <source media="(min-width:1440px)" :srcset="product.image.desktop" />
        <source media="(min-width:768px)" :srcset="product.image.tablet" />
        <img
          :src="product.image.mobile"
          :alt="product.name"
          class="h-[212px] rounded-[8px] xl:h-[240px] " />
      </picture>

      <button
        class="text-preset-2 absolute bottom-0 left-1/2 flex h-[44px] w-[160px] -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-rose-400 bg-white p-3">
        <img
          :src="iconAddtoCart"
          alt="icon cart"
          class="inline size-5" />
        Add to Cart
      </button>
    </div>

    <!-- * Item Info -->
    <div class="flex h-[69px] w-full flex-col gap-1">
      <p class="text-preset-2 font-normal text-rose-500">
        {{ product.category }}
      </p>
      <p class="text-preset-3">
        {{ product.name }}
      </p>
      <p class="text-preset-3 text-red">${{ product.price.toFixed(2) }}</p>
    </div>
  </div>
</template>

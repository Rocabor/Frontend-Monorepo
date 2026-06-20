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
    class="flex flex-col items-center gap-4 mb-2">

    <!--* Item Image and Add To Cart Button -->
    <div class="relative h-[234px] ">
      <img
        :src="product.image.mobile"
        :alt="product.name"
        class="h-[212px] rounded-[8px]" />

      <button class="h-[44px] w-[160px] rounded-full border border-rose-400 bg-white p-3 absolute flex justify-center items-center bottom-0 left-1/2 -translate-x-1/2">
        <img
          :src="iconAddtoCart"
          alt="icon cart" 
          class="size-5 inline"/>
        Add to Cart
      </button>
    </div>

    <!-- * Item Info -->
    <div class="flex flex-col gap-1 w-full">
      <p>{{ product.category }}</p>
      <p>{{ product.name }}</p>
      <p>${{ product.price }}</p>
    </div>
  </div>
</template>

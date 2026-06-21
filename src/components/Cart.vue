<script setup></script>

<template>
  <div class="flex min-h-[226px] flex-col gap-6 rounded-[12px] bg-white p-6 md:col-span-3 xl:row-start-1 xl:col-start-4 xl:h-[299px] xl:row-span-4 xl:ml-2 xl:col-span-1">
    <h2 class="text-preset-4">Your Cart {{}}</h2>

    <div class="flex min-h-[195px] flex-col items-center gap-4 py-4">
      <img
        src="../assets/images/illustration-empty-cart.svg"
        alt=""
        class="size-[128px]" />
      <p class="text-preset-2 text-rose-500">Your added items will appear here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Form from './Form.vue';
</script>

<template>
  <!--* Hero -->
  <div class="relative h-282 md:h-207.25 xl:h-184.25">

    <!-- Container gradient-->
    <div
      class="from-gradient-start to-gradient-end absolute inset-0 h-162.25 rounded-b-[35px] bg-linear-to-r xl:h-184.25 xl:w-[70%]"></div>

    <!-- Container form-->
    <div
      class="absolute mx-6 my-8 grid grid-cols-1 place-items-center gap-8 text-center md:mx-10 md:gap-10 xl:left-1/2 xl:-translate-x-1/2 xl:my-22 xl:w-290 xl:mx-0 xl:grid-cols-2 xl:place-items-start xl:gap-x-8 xl:gap-y-6">

      <!-- game-icons:abstract-082 -->
      <img
        src="../assets/images/logo.svg"
        alt="Logo"
        class="size-10 md:size-9.25 xl:order-1 xl:col-span-2 xl:size-14.75" />

      <!-- Header -->
      <header class="flex flex-col gap-6 xl:order-2 xl:w-141 xl:gap-8 xl:pt-18">
        <h1 class="text-preset-2 xl:text-left">
          Body Mass
          <br class="hidden md:block" />
          Index
          <br class="md:hidden" />
          Calculator
        </h1>

        <p class="text-preset-6-regular xl:w-116.25 xl:text-left">
          Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI
          is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall
          health and well-being.
        </p>
      </header>

      <!-- Form -->
      <Form class="xl:order-3 xl:row-span-2" />
    </div>
  </div>
</template>

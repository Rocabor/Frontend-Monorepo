<script setup lang="ts">
import Form from './Form.vue';

</script>



<template>
  <!--* Hero -->
  <div class="h-[1128px] relative">

    <!-- Container -->
    <div class=" absolute inset-0 h-[649px] bg-linear-to-r from-gradient-start to-gradient-end rounded-b-[35px]" ></div>

    <!-- Container -->
     <div class="mx-6 my-8 absolute flex flex-col gap-8 text-center">

      <!-- game-icons:abstract-082 -->
       <img src="../assets/images/logo.svg" alt="Logo" class="size-10 self-center">

       <!-- Header -->
        <header class="flex flex-col gap-6">

          <h1 class="text-preset-2">Body Mass Index <br class="md:hidden">Calculator</h1>

          <p class="text-preset-6-regular">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
        </header>

        <!-- Form -->
         <Form/>

     </div>

  </div>
</template>

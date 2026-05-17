<script setup>
import { MyFooter } from '@packages/ui';
</script>

<template>
  <!--* Main Container -->
  <header class="h-[650px] bg-[url('./assets/images/mobile/image-hero.jpg')] bg-cover bg-no-repeat pt-10" >
    

    <!--* Header Container -->
    <div class="w-[327px] h-[383px] mx-auto flex flex-col justify-between">

      <!--* Header -->
      <nav class="flex justify-between items-center">
        <img src="./assets/images/logo.svg" alt="Logo" class="w-[144px] h-[24px]"/>

        <button type="button" class="cursor-pointer">
          <img src="./assets/images/icon-hamburger.svg" alt="Open menu"/>
        </button>
      </nav>

      <!--* Main Content Container -->
      <div class="border-white border-2 px-6 py-4">

        <h1 class="text-preset-1 text-white">Immersive experiences that deliver</h1>

      </div>
    </div>
  </header>
</template>

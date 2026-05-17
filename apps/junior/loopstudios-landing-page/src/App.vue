<script setup>
import { MyFooter } from '@packages/ui';
</script>

<template>
  <!--* Main Container -->
  <header class="h-[650px] bg-[url('./assets/images/mobile/image-hero.jpg')] bg-cover bg-no-repeat pt-10">

    <!--* Header Container -->
    <div class="mx-auto flex h-[383px] w-[327px] flex-col justify-between">

      <!--* Navigation Bar -->
      <nav class="flex items-center justify-between" aria-label="Main Navigation">

        <!-- logo -->
        <a href="/" class="focus:outline-2 focus:outline-white">
          <img src="./assets/images/logo.svg" alt="Loopstudios" class="h-[24px] w-[144px]" />
        </a>

        <!-- Botón con atributos de accesibilidad para lectores de pantalla y teclado -->
        <button type="button" class="cursor-pointer" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open main menu">
          <img src="./assets/images/icon-hamburger.svg" alt="" aria-hidden="true" />
        </button>
      </nav>

      <!--* Main Content Container -->
      <div class="border-2 border-white px-6 py-4">
        <h1 class="text-preset-1 text-white">Immersive experiences that deliver</h1>
      </div>
    </div>
  </header>
</template>

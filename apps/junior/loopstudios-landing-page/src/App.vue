<script setup>
import { MyFooter } from '@packages/ui';
</script>

<template>
  <!--* Main Container -->
  <header class="relative h-[650px] bg-[url('./assets/images/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat pt-10 md:bg-[url('./assets/images/desktop/image-hero.jpg')] md:bg-position-[-385px_0px] after:absolute after:inset-0 after:bg-black/40 xl:bg-position-[0px_0px]">
    

    <!--* Header Container -->
    <div class="mx-auto flex h-[383px] w-[327px] flex-col justify-between md:w-[608px] md:h-[440px]">

      <!--* Navigation Bar -->
      <nav class="flex items-center justify-between z-1" aria-label="Main Navigation">

        <!-- Logo principal -->
        <a href="/" class="focus-visible:outline-2 focus-visible:outline-white">
          <img src="./assets/images/logo.svg" alt="Loopstudios" class="h-[24px] w-[144px] md:w-[192px] md:h-8" />
        </a>

        <!-- Botón de menú accesible -->
        <button type="button" class="cursor-pointer" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open main menu">
          <img src="./assets/images/icon-hamburger.svg" alt="" aria-hidden="true" class="md:w-8 md:h-[21px]"/>
        </button>
      </nav>

      <!--* Main Content Container -->
      <div class="border-2 border-white px-6 py-4 md:p-10 z-1">
        <h1 class="text-preset-1 text-white">Immersive experiences that deliver</h1>
      </div>
    </div>
  </header>

  <main class="flex flex-col px-6 md:px-20">

    <!--* Image and Description Container -->
    <section class="flex flex-col gap-12 mt-[96px] items-center" aria-labelledby="interactive-title">
      <img src="./assets/images/mobile/image-interactive.jpg" alt="A person wearing a VR headset">

      <!--* Description Container -->
      <div class="flex flex-col gap-4 text-center w-[279px] md:w-full">
        <h2 id="interactive-title" class="text-preset-2">The leader in interactive VR</h2>
        <p class="text-preset-6 opacity-50">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </section>

    <!--* Creations Container -->    
    <section class="flex flex-col mt-[96px] items-center" aria-labelledby="creations-title">
      <h2 id="creations-title" class="text-preset-2 tracking-widest">OUR CREATIONS</h2>

      <!--* Creation Items Container -->
      <ul class="flex flex-col space-y-6 mt-12 mb-8 w-full">

        <!--* 1. Deep Earth -->
        <li class="relative group overflow-hidden">
          <a href="/" class="block relative focus-visible:outline-2 focus-visible:outline-white">
            <img src="./assets/images/mobile/image-deep-earth.jpg" alt="Deep Earth VR experience" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" aria-hidden="true"></div>
            <span class="absolute left-5 bottom-5 text-white text-preset-4 w-20 uppercase">
              Deep Earth
            </span>
          </a>
        </li>

        <!--* 2. Night Arcade -->
        <li class="relative group overflow-hidden">
          <a href="/" class="block relative focus-visible:outline-2 focus-visible:outline-white">
            <img src="./assets/images/mobile/image-night-arcade.jpg" alt="Night Arcade game experience" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" aria-hidden="true"></div>
            <span class="absolute left-5 bottom-5 text-white text-preset-4 w-[99px] uppercase">
              Night Arcade
            </span>
          </a>
        </li>

        <!--* 3. Soccer Team -->
        <li class="relative group overflow-hidden">
          <a href="/" class="block relative focus-visible:outline-2 focus-visible:outline-white">
            <img src="./assets/images/mobile/image-soccer-team.jpg" alt="Soccer Team VR simulation" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" aria-hidden="true"></div>
            <span class="absolute left-5 bottom-5 text-white text-preset-4 w-[108px] uppercase">
              Soccer Team VR
            </span>
          </a>
        </li>

        <!--* 4. The Grid -->
        <li class="relative group overflow-hidden">
          <a href="/" class="block relative focus-visible:outline-2 focus-visible:outline-white">
            <img src="./assets/images/mobile/image-grid.jpg" alt="The Grid racing game" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" aria-hidden="true"></div>
            <span class="absolute left-5 bottom-5 text-white text-preset-4 w-[58px] uppercase">
              The Grid
            </span>
          </a>
        </li>

        <!--* 5. From Up Above -->
        <li class="relative group overflow-hidden">
          <a href="/" class="block relative focus-visible:outline-2 focus-visible:outline-white">
            <img src="./assets/images/mobile/image-from-above.jpg" alt="From Up Above VR aerial view" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" aria-hidden="true"></div>
            <span class="absolute left-5 bottom-5 text-white text-preset-4 w-[123px] uppercase">
              From Up Above VR
            </span>
          </a>
        </li>

        <!--* 6. Pocket Borealis -->
        <li class="relative group overflow-hidden">
          <a href="/" class="block relative focus-visible:outline-2 focus-visible:outline-white">
            <img src="./assets/images/mobile/image-pocket-borealis.jpg" alt="Pocket Borealis northern lights" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" aria-hidden="true"></div>
            <span class="absolute left-5 bottom-5 text-white text-preset-4 w-[118px] uppercase">
              Pocket Borealis
            </span>
          </a>
        </li>

        <!--* 7. The Curiosity -->
        <li class="relative group overflow-hidden">
          <a href="/" class="block relative focus-visible:outline-2 focus-visible:outline-white">
            <img src="./assets/images/mobile/image-curiosity.jpg" alt="The Curiosity rover exploration" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" aria-hidden="true"></div>
            <span class="absolute left-5 bottom-5 text-white text-preset-4 w-[127px] uppercase">
              The Curiosity
            </span>
          </a>
        </li>

        <!--* 8. Make It Fisheye -->
        <li class="relative group overflow-hidden">
          <a href="/" class="block relative focus-visible:outline-2 focus-visible:outline-white">
            <img src="./assets/images/mobile/image-fisheye.jpg" alt="Make It Fisheye immersive lens" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" aria-hidden="true"></div>
            <span class="absolute left-5 bottom-5 text-white text-preset-4 w-[99px] uppercase">
              Make It Fisheye
            </span>
          </a>
        </li>
      </ul>

      <button type="button" class="text-preset-7 border px-[40.5px] py-[13px] cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 uppercase">See all</button>
    </section>
  </main>

  <footer class="bg-black p-14 mt-[98px] md:px-20 md:py-14">

  <!--* Footer Content Container -->
  <!-- Cambiado: Eliminado md:flex-row y md:h. Añadido md:grid-cols-2 y md:gap-y-6 -->
  <div class="flex flex-col gap-4 items-center md:grid md:grid-cols-2 md:gap-y-6 md:w-full max-w-6xl mx-auto">

    <!-- Celda 1: Logo (Arriba Izquierda) -->
    <a href="/" class="focus-visible:outline-2 focus-visible:outline-white md:justify-self-start">
      <img src="./assets/images/logo.svg" alt="Loopstudios" class="h-[24px] w-[144px]">
    </a>

    <!-- Celda 2: Redes Sociales (Arriba Derecha) -->
    <!-- Cambiado: md:justify-self-end para mandarlo a la derecha y md:mt-0 -->
    <nav aria-label="Social Media" class="flex gap-4 mt-6 md:mt-0 md:justify-self-end">
      <a href="#" aria-label="Facebook"><img src="./assets/images/icon-facebook.svg" alt="" aria-hidden="true"></a>
      <a href="#" aria-label="Twitter"><img src="./assets/images/icon-twitter.svg" alt="" aria-hidden="true"></a>
      <a href="#" aria-label="Pinterest"><img src="./assets/images/icon-pinterest.svg" alt="" aria-hidden="true"></a>
      <a href="#" aria-label="Instagram"><img src="./assets/images/icon-instagram.svg" alt="" aria-hidden="true"></a>
    </nav>

    <!-- Celda 3: Enlaces (Abajo Izquierda) -->
    <!-- Cambiado: md:justify-self-start y corregido md:mt-0 -->
    <ul aria-label="Footer Navigation" class="flex flex-col gap-4 items-center text-white mt-6 md:mt-0 md:flex-row md:justify-self-start">
      <li><a href="#" class="hover:underline">About</a></li>
      <li><a href="#" class="hover:underline">Careers</a></li>
      <li><a href="#" class="hover:underline">Events</a></li>
      <li><a href="#" class="hover:underline">Products</a></li>
      <li><a href="#" class="hover:underline">Support</a></li>
    </ul>

    <!-- Celda 4: Copyright (Abajo Derecha) -->
    <!-- Cambiado: md:justify-self-end y md:text-right -->
    <p class="text-preset-6 text-white opacity-50 mt-6 md:mt-0 text-center md:text-right md:justify-self-end">© 2021 Loopstudios. All rights reserved.</p>
  </div>
</footer>
</template>
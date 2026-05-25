<script setup>
import { MyFooter } from '@packages/ui';
import { ref } from 'vue';

import iconHamburger from './assets/images/icon-hamburger.svg';
import iconClose from './assets/images/icon-close.svg';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navLinks = ['About', 'Careers', 'Events', 'Products', 'Support'];
</script>

<template>
  <!--* Main Container -->
  <header
    class="relative h-[650px] bg-[url('./assets/images/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat pt-10 after:absolute after:inset-0 after:bg-black/40 md:bg-[url('./assets/images/desktop/image-hero.jpg')] md:bg-position-[-385px_0px] md:pt-16 xl:bg-position-[0px_0px]">
    <!--* Header Container -->
    <div class="mx-auto flex h-[383px] w-[327px] flex-col justify-between md:h-[440px] md:w-[608px] xl:w-full xl:max-w-[1110px]">
      <!--* Navigation Bar -->
      <nav class="z-20 flex items-center justify-between" aria-label="Main Navigation">
        <!-- Logo principal -->
        <a href="/" class="focus-visible:outline-2 focus-visible:outline-white">
          <img src="./assets/images/logo.svg" alt="Loopstudios" class="h-[24px] w-[144px] md:h-8 md:w-[192px]" />
        </a>

        <ul class="text-preset-6 hidden items-center gap-8 text-white xl:flex">
          <li v-for="item in navLinks" :key="item">
            <a
              href="#"
              class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
              {{ item }}
            </a>
          </li>
        </ul>

        <!-- Botón de menú accesible -->
        <button
          type="button"
          @click="toggleMenu"
          class="relative z-20 cursor-pointer p-2 focus-visible:outline-2 focus-visible:outline-white xl:hidden"
          :aria-expanded="isMenuOpen.toString()"
          aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? 'Close main menu' : 'Open main menu'">
          <img :src="isMenuOpen ? iconClose : iconHamburger" alt="" aria-hidden="true" class="h-4 w-6 object-contain md:h-5.25 md:w-8" />
        </button>
      </nav>

      <!--* Main Content Container -->
      <div class="z-10 border-2 border-white px-6 py-4 md:h-[278px] md:p-10 xl:w-[650px]">
        <h1 class="text-preset-1 text-white">Immersive experiences that deliver</h1>
      </div>
    </div>

    <transition
      enter-from-class="opacity-0 -translate-y-full"
      enter-active-class="transition ease-in-out duration-300"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in-out duration-300"
      leave-to-class="opacity-0 -translate-y-full">
      <div v-if="isMenuOpen" id="mobile-menu" class="fixed inset-0 z-10 bg-black px-6 pt-[183px] md:px-20 xl:hidden">
        <ul class="flex flex-col gap-6 text-[24px] font-light text-white uppercase">
          <li v-for="item in navLinks" :key="item">
            <a href="#" @click="isMenuOpen = false" class="hover:text-grey-200 focus-visible:outline-2 focus-visible:outline-white">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>

  <main class="mx-auto flex flex-col px-6 md:px-20 xl:px-[164px]">
    <!--* Image and Description Container -->
    <section class="relative mt-[96px] mb-24 flex max-w-[1111px] flex-col items-center text-center xl:mb-44 xl:items-start xl:text-left" aria-labelledby="leader-heading">
      <picture class="w-full xl:max-w-[731px]">
        <source media="(min-width: 1440px)" srcset="./assets/images/desktop/image-interactive.jpg" />
        <img src="./assets/images/mobile/image-interactive.jpg" alt="Persona usando gafas de realidad virtual" class="w-full object-cover" />
      </picture>

      <div class="bg-white pt-12 xl:absolute xl:right-0 xl:bottom-0 xl:max-w-[540px] xl:pt-24 xl:pl-24">
        <h2 id="leader-heading" class="font-josefin-sans mb-4 text-3xl leading-none font-light tracking-widest text-black uppercase md:mb-6 xl:text-5xl">The leader in interactive VR</h2>
        <p class="font-alata px-4 leading-relaxed text-gray-500 xl:px-0">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </section>

    <!--* Creations Container -->
    <section aria-labelledby="creations-heading">
      <div class="md:md-8 mb-12 flex flex-col items-center justify-between xl:mb-20 xl:flex-row">
        <h2 id="creations-heading" class="text-preset-2">Our creations</h2>
        <button
          class="font-alata hidden border-2 border-black px-10 py-3 tracking-[0.3em] uppercase transition-colors duration-300 hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-black xl:block">
          See all
        </button>
      </div>

      <div class="grid grid-cols-1 gap-6 xl:grid-cols-4">
        <div class="group relative h-[120px] cursor-pointer overflow-hidden xl:h-[450px]">
          <picture>
            <source media="(min-width: 640px)" srcset="./assets/images/desktop/image-deep-earth.jpg" />
            <img src="./assets/images/mobile/image-deep-earth.jpg" alt="Deep Earth" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </picture>
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition-all duration-300 group-hover:bg-grey-200/75 sm:bg-gradient-to-t sm:from-black/70 sm:to-transparent" aria-hidden="true"></div>
          <h3 class="font-josefin-sans absolute right-5 bottom-5 left-5 max-w-[150px] text-2xl leading-none font-light text-white uppercase transition-colors duration-300 group-hover:text-black md:bottom-10 md:left-10 md:text-3xl">
            <a href="#" class="after:absolute after:inset-0 focus:outline-none">Deep Earth</a>
          </h3>
        </div>

        <div class="group relative h-[120px] cursor-pointer overflow-hidden xl:h-[450px]">
          <picture>
            <source media="(min-width: 640px)" srcset="./assets/images/desktop/image-night-arcade.jpg" />
            <img src="./assets/images/mobile/image-night-arcade.jpg" alt="Night Arcade" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </picture>
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition-all duration-300 group-hover:bg-white/70 sm:bg-gradient-to-t sm:from-black/70 sm:to-transparent" aria-hidden="true"></div>
          <h3 class="font-josefin-sans absolute right-5 bottom-5 left-5 max-w-[150px] text-2xl leading-none font-light text-white uppercase transition-colors duration-300 group-hover:text-black md:bottom-10 md:left-10 md:text-3xl">
            <a href="#" class="after:absolute after:inset-0 focus:outline-none">Night Arcade</a>
          </h3>
        </div>

        <div class="group relative h-[120px] cursor-pointer overflow-hidden xl:h-[450px]">
          <picture>
            <source media="(min-width: 640px)" srcset="./assets/images/desktop/image-soccer-team.jpg" />
            <img src="./assets/images/mobile/image-soccer-team.jpg" alt="Soccer Team VR" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </picture>
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition-all duration-300 group-hover:bg-white/70 sm:bg-gradient-to-t sm:from-black/70 sm:to-transparent" aria-hidden="true"></div>
          <h3 class="font-josefin-sans absolute right-5 bottom-5 left-5 max-w-[150px] text-2xl leading-none font-light text-white uppercase transition-colors duration-300 group-hover:text-black md:bottom-10 md:left-10 md:text-3xl">
            <a href="#" class="after:absolute after:inset-0 focus:outline-none">Soccer Team VR</a>
          </h3>
        </div>

        <div class="group relative h-[120px] cursor-pointer overflow-hidden xl:h-[450px]">
          <picture>
            <source media="(min-width: 640px)" srcset="./assets/images/desktop/image-grid.jpg" />
            <img src="./assets/images/mobile/image-grid.jpg" alt="The Grid" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </picture>
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition-all duration-300 group-hover:bg-white/70 sm:bg-gradient-to-t sm:from-black/70 sm:to-transparent" aria-hidden="true"></div>
          <h3 class="font-josefin-sans absolute right-5 bottom-5 left-5 max-w-[150px] text-2xl leading-none font-light text-white uppercase transition-colors duration-300 group-hover:text-black md:bottom-10 md:left-10 md:text-3xl">
            <a href="#" class="after:absolute after:inset-0 focus:outline-none">The Grid</a>
          </h3>
        </div>

        <div class="group relative h-[120px] cursor-pointer overflow-hidden xl:h-[450px]">
          <picture>
            <source media="(min-width: 640px)" srcset="./assets/images/desktop/image-from-above.jpg" />
            <img src="./assets/images/mobile/image-from-above.jpg" alt="From Up Above VR" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </picture>
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition-all duration-300 group-hover:bg-white/70 sm:bg-gradient-to-t sm:from-black/70 sm:to-transparent" aria-hidden="true"></div>
          <h3 class="font-josefin-sans absolute right-5 bottom-5 left-5 max-w-[150px] text-2xl leading-none font-light text-white uppercase transition-colors duration-300 group-hover:text-black md:bottom-10 md:left-10 md:text-3xl">
            <a href="#" class="after:absolute after:inset-0 focus:outline-none">From Up Above VR</a>
          </h3>
        </div>

        <div class="group relative h-[120px] cursor-pointer overflow-hidden xl:h-[450px]">
          <picture>
            <source media="(min-width: 640px)" srcset="./assets/images/desktop/image-pocket-borealis.jpg" />
            <img src="./assets/images/mobile/image-pocket-borealis.jpg" alt="Pocket Borealis" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </picture>
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition-all duration-300 group-hover:bg-white/70 sm:bg-gradient-to-t sm:from-black/70 sm:to-transparent" aria-hidden="true"></div>
          <h3 class="font-josefin-sans absolute right-5 bottom-5 left-5 max-w-[150px] text-2xl leading-none font-light text-white uppercase transition-colors duration-300 group-hover:text-black md:bottom-10 md:left-10 md:text-3xl">
            <a href="#" class="after:absolute after:inset-0 focus:outline-none">Pocket Borealis</a>
          </h3>
        </div>

        <div class="group relative h-[120px] cursor-pointer overflow-hidden xl:h-[450px]">
          <picture>
            <source media="(min-width: 640px)" srcset="./assets/images/desktop/image-curiosity.jpg" />
            <img src="./assets/images/mobile/image-curiosity.jpg" alt="The Curiosity" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </picture>
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition-all duration-300 group-hover:bg-white/75 sm:bg-gradient-to-t sm:from-black/70 sm:to-transparent" aria-hidden="true"></div>
          <h3 class="font-josefin-sans absolute right-5 bottom-5 left-5 max-w-[150px] text-2xl leading-none font-light text-white uppercase transition-colors duration-300 group-hover:text-black md:bottom-10 md:left-10 md:text-3xl">
            <a href="#" class="after:absolute after:inset-0 focus:outline-none">The Curiosity</a>
          </h3>
        </div>

        <div class="group relative h-[120px] cursor-pointer overflow-hidden xl:h-[450px]">
          <picture>
            <source media="(min-width: 640px)" srcset="./assets/images/desktop/image-fisheye.jpg" />
            <img src="./assets/images/mobile/image-fisheye.jpg" alt="Make It Fisheye" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </picture>
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition-all duration-300 group-hover:bg-white/70 sm:bg-gradient-to-t sm:from-black/70 sm:to-transparent" aria-hidden="true"></div>
          <h3 class="font-josefin-sans absolute right-5 bottom-5 left-5 max-w-[150px] text-2xl leading-none font-light text-white uppercase transition-colors duration-300 group-hover:text-black md:bottom-10 md:left-10 md:text-3xl">
            <a href="#" class="after:absolute after:inset-0 focus:outline-none">Make It Fisheye</a>
          </h3>
        </div>
      </div>

      <div class="mt-10 text-center xl:hidden">
        <button class="font-alata w-full max-w-[200px] border-2 border-black px-10 py-3 tracking-[0.3em] uppercase transition-colors duration-300 hover:bg-black hover:text-white">See all</button>
      </div>
    </section>
  </main>

  <footer class="mt-[98px] bg-black p-14 md:px-20 md:py-14">
    <!--* Footer Content Container -->
    <!-- Cambiado: Eliminado md:flex-row y md:h. Añadido md:grid-cols-2 y md:gap-y-6 -->
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 md:grid md:w-full md:grid-cols-2 md:gap-y-6">
      <!-- Celda 1: Logo (Arriba Izquierda) -->
      <a href="/" class="focus-visible:outline-2 focus-visible:outline-white md:justify-self-start">
        <img src="./assets/images/logo.svg" alt="Loopstudios" class="h-[24px] w-[144px]" />
      </a>

      <!-- Celda 2: Redes Sociales (Arriba Derecha) -->
      <!-- Cambiado: md:justify-self-end para mandarlo a la derecha y md:mt-0 -->
      <nav aria-label="Social Media" class="mt-6 flex gap-4 md:mt-0 md:justify-self-end">
        <a href="#" aria-label="Facebook" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white"><img src="./assets/images/icon-facebook.svg" alt="" aria-hidden="true" /></a>
        <a href="#" aria-label="Twitter" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white"><img src="./assets/images/icon-twitter.svg" alt="" aria-hidden="true" /></a>
        <a href="#" aria-label="Pinterest" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white"><img src="./assets/images/icon-pinterest.svg" alt="" aria-hidden="true" /></a>
        <a href="#" aria-label="Instagram" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white"><img src="./assets/images/icon-instagram.svg" alt="" aria-hidden="true" /></a>
      </nav>

      <!-- Celda 3: Enlaces (Abajo Izquierda) -->
      <!-- Cambiado: md:justify-self-start y corregido md:mt-0 -->
      <ul aria-label="Footer Navigation" class="mt-6 flex flex-col items-center gap-4 text-white md:mt-0 md:flex-row md:justify-self-start">
        <li><a href="#" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">About</a></li>
        <li><a href="#" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">Careers</a></li>
        <li><a href="#" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">Events</a></li>
        <li><a href="#" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">Products</a></li>
        <li><a href="#" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">Support</a></li>
      </ul>

      <!-- Celda 4: Copyright (Abajo Derecha) -->
      <!-- Cambiado: md:justify-self-end y md:text-right -->
      <p class="text-preset-6 mt-6 text-center text-white opacity-50 md:mt-0 md:justify-self-end md:text-right">© 2021 Loopstudios. All rights reserved.</p>
    </div>
  </footer>
</template>

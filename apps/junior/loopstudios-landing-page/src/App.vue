<script setup>
import { MyFooter } from '@packages/ui';
import { ref } from 'vue'

import iconHamburger from './assets/images/icon-hamburger.svg';
import iconClose from './assets/images/icon-close.svg';

// Estado reactivo para controlar la apertura del menú móvil
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Enlaces de navegación reutilizables tanto para el header como para el footer
const navLinks = ['About', 'Careers', 'Events', 'Products', 'Support']

// Listado de creaciones optimizado para renderizarse dinámicamente con imágenes móvil/desktop
const creations = ref([
  { id: 1, title: 'Deep Earth', imgMobile: './assets/images/mobile/image-deep-earth.jpg', imgDesktop: './assets/images/desktop/image-deep-earth.jpg', widthClass: 'w-20' },
  { id: 2, title: 'Night Arcade', imgMobile: './assets/images/mobile/image-night-arcade.jpg', imgDesktop: './assets/images/desktop/image-night-arcade.jpg', widthClass: 'w-[99px]' },
  { id: 3, title: 'Soccer Team VR', imgMobile: './assets/images/mobile/image-soccer-team.jpg', imgDesktop: './assets/images/desktop/image-soccer-team.jpg', widthClass: 'w-[108px]' },
  { id: 4, title: 'The Grid', imgMobile: './assets/images/mobile/image-grid.jpg', imgDesktop: './assets/images/desktop/image-grid.jpg', widthClass: 'w-[58px]' },
  { id: 5, title: 'From Up Above VR', imgMobile: './assets/images/mobile/image-from-above.jpg', imgDesktop: './assets/images/desktop/image-from-above.jpg', widthClass: 'w-[123px]' },
  { id: 6, title: 'Pocket Borealis', imgMobile: './assets/images/mobile/image-pocket-borealis.jpg', imgDesktop: './assets/images/desktop/image-pocket-borealis.jpg', widthClass: 'w-[118px]' },
  { id: 7, title: 'The Curiosity', imgMobile: './assets/images/mobile/image-curiosity.jpg', imgDesktop: './assets/images/desktop/image-curiosity.jpg', widthClass: 'w-[127px]' },
  { id: 8, title: 'Make It Fisheye', imgMobile: './assets/images/mobile/image-fisheye.jpg', imgDesktop: './assets/images/desktop/image-fisheye.jpg', widthClass: 'w-[99px]' },
])
</script>

<template>
  <!--* Main Container -->
  <header class="relative h-[650px] bg-[url('./assets/images/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat pt-10 md:pt-16 md:bg-[url('./assets/images/desktop/image-hero.jpg')] md:bg-position-[-385px_0px] after:absolute after:inset-0 after:bg-black/40 xl:bg-position-[0px_0px]">
    

    <!--* Header Container -->
    <div class="mx-auto flex h-[383px] w-[327px] flex-col justify-between md:w-[608px] md:h-[440px] xl:w-full xl:max-w-[1110px] ">

      <!--* Navigation Bar -->
      <nav class="flex items-center justify-between z-20" aria-label="Main Navigation">

        <!-- Logo principal -->
        <a href="/" class="focus-visible:outline-2 focus-visible:outline-white">
          <img src="./assets/images/logo.svg" alt="Loopstudios" class="h-[24px] w-[144px] md:w-[192px] md:h-8" />
        </a>

        <ul class="hidden xl:flex items-center gap-8 text-white text-preset-6">
          <li v-for="item in navLinks" :key="item">
            <a href="#" class="relative py-2 after:absolute after:bottom-0 after:left-1/2 
            after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300  hover:after:-translate-x-1/2 hover:after:w-8 focus-visible:outline-2 focus-visible:outline-white">
              {{ item }}
            </a>
          </li>
        </ul>

        <!-- Botón de menú accesible -->
        <button type="button" 
        @click="toggleMenu" 
        class="cursor-pointer relative z-20 xl:hidden focus-visible:outline-2 focus-visible:outline-white p-2" 
          :aria-expanded="isMenuOpen.toString()" 
          aria-controls="mobile-menu" 
          :aria-label="isMenuOpen ? 'Close main menu' : 'Open main menu'">
          <img :src="isMenuOpen ? iconClose : iconHamburger" alt="" aria-hidden="true" class="w-6 h-4 md:w-8 md:h-5.25 object-contain"/>
        </button>
      </nav>

      <!--* Main Content Container -->
      <div class="border-2 border-white px-6 py-4 md:p-10 z-10 xl:w-[650px] md:h-[278px]">
        <h1 class="text-preset-1 text-white">Immersive experiences that deliver</h1>
      </div>
    </div>

    <transition
      enter-from-class="opacity-0 -translate-y-full"
      enter-active-class="transition ease-in-out duration-300"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in-out duration-300"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div v-if="isMenuOpen" id="mobile-menu" class="fixed inset-0 z-10 bg-black px-6 pt-[183px] xl:hidden md:px-20">        
        <ul class="flex flex-col gap-6 text-white text-[24px] uppercase font-light">
          <li v-for="item in navLinks" :key="item">
            <a href="#" @click="isMenuOpen = false" class="hover:text-grey-200 focus-visible:outline-2 focus-visible:outline-white">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>

  <main class="flex flex-col mx-auto px-6 md:px-20 xl:px-[164px]">

    <!--* Image and Description Container -->
    <section class="relative flex flex-col max-w-[1111px] items-center text-center xl:items-start xl:text-left mb-24 xl:mb-44 mt-[96px]" aria-labelledby="leader-heading">
        <picture class="w-full xl:max-w-[731px]">
          <source media="(min-width: 1440px)" srcset="./assets/images/desktop/image-interactive.jpg" />
          <img src="./assets/images/mobile/image-interactive.jpg" alt="Persona usando gafas de realidad virtual" class="w-full object-cover" />
        </picture>

        <div class="bg-white pt-12 xl:absolute xl:bottom-0 xl:right-0 xl:pt-24 xl:pl-24 xl:max-w-[540px]">
          <h2 id="leader-heading" class="font-josefin-sans text-3xl font-light uppercase tracking-widest text-black xl:text-5xl leading-none mb-4 md:mb-6">
            The leader in interactive VR
          </h2>
          <p class="font-alata text-gray-500 leading-relaxed px-4 xl:px-0">
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
          </p>
        </div>
      </section>

    <!--* Creations Container -->    
    <section aria-labelledby="creations-heading">
        <div class="flex flex-col items-center justify-between mb-12 md:md-8 xl:flex-row xl:mb-20">
          <h2 id="creations-heading" class="text-preset-2">
            Our creations
          </h2>
          <button class="hidden xl:block border-2 border-black px-10 py-3 uppercase tracking-[0.3em] font-alata hover:bg-black hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-black">
            See all
          </button>
        </div>

        <div class="grid grid-cols-1 gap-6 xl:grid-cols-4">
          <div 
            v-for="project in creations" 
            :key="project.id"
            class="group relative h-[120px] overflow-hidden cursor-pointer xl:h-[450px]"
          >
            <picture>
              <source media="(min-width: 640px)" :srcset="project.imgDesktop" />
              <img :src="project.imgMobile" :alt="`Proyecto ${project.title}`" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </picture>

            <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent sm:bg-gradient-to-t sm:from-black/70 sm:to-transparent group-hover:bg-white/70 transition-all duration-300" aria-hidden="true"></div>

            <h3 class="absolute bottom-5 left-5 right-5 font-josefin-sans text-2xl font-light uppercase text-white group-hover:text-black transition-colors duration-300 md:bottom-10 md:left-10 md:text-3xl leading-none max-w-[150px]">
              <a href="#" class="after:absolute after:inset-0 focus:outline-none">
                {{ project.title }}
              </a>
            </h3>
          </div>
        </div>

        <div class="mt-10 text-center xl:hidden">
          <button class="border-2 border-black px-10 py-3 uppercase tracking-[0.3em] font-alata hover:bg-black hover:text-white transition-colors duration-300 w-full max-w-[200px]">
            See all
          </button>
        </div>
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
<script setup>
import { MyFooter } from '@packages/ui';
import { ref } from 'vue';

const baseUrl = import.meta.env.BASE_URL;

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navLinks = ['About', 'Careers', 'Events', 'Products', 'Support'];

const creations = [
  { id: 1, title: 'Deep Earth', imgMobile: `${baseUrl}images/mobile/image-deep-earth.jpg`, imgDesktop: `${baseUrl}images/desktop/image-deep-earth.jpg` },
  { id: 2, title: 'Night Arcade', imgMobile: `${baseUrl}images/mobile/image-night-arcade.jpg`, imgDesktop: `${baseUrl}images/desktop/image-night-arcade.jpg` },
  { id: 3, title: 'Soccer Team VR', imgMobile: `${baseUrl}images/mobile/image-soccer-team.jpg`, imgDesktop: `${baseUrl}images/desktop/image-soccer-team.jpg` },
  { id: 4, title: 'The Grid', imgMobile: `${baseUrl}images/mobile/image-grid.jpg`, imgDesktop: `${baseUrl}images/desktop/image-grid.jpg` },
  { id: 5, title: 'From Up Above VR', imgMobile: `${baseUrl}images/mobile/image-from-above.jpg`, imgDesktop: `${baseUrl}images/desktop/image-from-above.jpg` },
  { id: 6, title: 'Pocket Borealis', imgMobile: `${baseUrl}images/mobile/image-pocket-borealis.jpg`, imgDesktop: `${baseUrl}images/desktop/image-pocket-borealis.jpg` },
  { id: 7, title: 'The Curiosity', imgMobile: `${baseUrl}images/mobile/image-curiosity.jpg`, imgDesktop: `${baseUrl}images/desktop/image-curiosity.jpg` },
  { id: 8, title: 'Make It Fisheye', imgMobile: `${baseUrl}images/mobile/image-fisheye.jpg`, imgDesktop: `${baseUrl}images/desktop/image-fisheye.jpg` },
];
</script>

<template>
  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:outline-2 focus:outline-black">
    Skip to main content
  </a>

  <!--* Main Container -->
  <header
    class="relative h-162.5 bg-[url('/images/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat pt-10 after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:to-black/60 md:bg-[url('/images/desktop/image-hero.jpg')] md:bg-position-[-385px_0px] md:pt-16 xl:bg-position-[0px_0px]">
    <!--* Header Container -->
    <div class="mx-auto flex h-95.75 w-81.75 flex-col justify-between md:h-110 md:w-152 xl:w-full xl:max-w-277.5">
      <!--* Navigation Bar -->
      <nav class="z-20 flex items-center justify-between" aria-label="Main Navigation">
        <!-- Logo principal -->
        <a href="/" class="focus-visible:outline-2 focus-visible:outline-white">
          <img src="/images/logo.svg" alt="Loopstudios" class="h-6 w-36 md:h-8 md:w-48" />
        </a>

        <ul class="text-preset-6 hidden items-center gap-8 text-white xl:flex">
          <li v-for="item in navLinks" :key="item">
            <a
              href="#"
              class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
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
          <img :src="baseUrl + (isMenuOpen ? 'images/icon-close.svg' : 'images/icon-hamburger.svg')" alt="" aria-hidden="true" class="h-4 w-6 object-contain md:h-5.25 md:w-8" />
        </button>
      </nav>

      <!--* Main Content Container -->
      <div class="z-10 border-2 border-white px-6 py-4 md:h-69.5 md:p-10 xl:w-162.5">
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
      <div v-if="isMenuOpen" id="mobile-menu" class="fixed inset-0 z-10 bg-black px-6 pt-45.75 md:px-20 xl:hidden">
        <ul class="font-josefin flex flex-col gap-6 text-[24px] font-light text-white uppercase">
          <li v-for="item in navLinks" :key="item">
            <a href="#" @click="isMenuOpen = false" class="hover:text-grey-200 focus-visible:outline-2 focus-visible:outline-white">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>

  <main id="main-content" tabindex="-1" class="mx-auto flex flex-col px-6 outline-none md:px-20 xl:px-41">
    <!--* Image and Description Container -->
    <section class="relative mt-24 mb-24 flex max-w-277.75 flex-col items-center text-center xl:mb-44 xl:items-start xl:text-left" aria-labelledby="leader-heading">
      <picture class="w-full xl:max-w-182.75">
        <source media="(min-width: 1440px)" srcset="/images/desktop/image-interactive.jpg" />
        <img src="/images/mobile/image-interactive.jpg" alt="Persona usando gafas de realidad virtual" class="w-full object-cover" />
      </picture>

      <div class="bg-white pt-12 xl:absolute xl:right-0 xl:bottom-0 xl:max-w-135 xl:pt-24 xl:pl-24">
        <h2 id="leader-heading" class="text-preset-2 mb-4 text-black md:mb-6">The leader in interactive VR</h2>
        <p class="text-preset-6 px-4 text-black/50 xl:px-0">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </section>

    <!--* Creations Container -->
    <section aria-labelledby="creations-heading">
      <div class="md:md-8 mb-12 flex flex-col items-center justify-between xl:mb-20 xl:flex-row">
        <h2 id="creations-heading" class="text-preset-2">Our creations</h2>
        <button
          class="text-preset-7 hidden border-2 border-black px-10 py-3 uppercase transition-colors duration-300 hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-black xl:block">
          See all
        </button>
      </div>

      <div class="grid grid-cols-1 gap-8 xl:grid-cols-4">
        <article v-for="project in creations" :key="project.id" class="group relative h-30 cursor-pointer overflow-hidden xl:h-112.5">
          <picture>
            <source media="(min-width: 1440px)" :srcset="project.imgDesktop" />
            <img :src="project.imgMobile" :alt="project.title" loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </picture>
          <div class="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent)] transition-all duration-300 group-hover:bg-white/70" aria-hidden="true"></div>
          <h3 class="text-preset-4 absolute right-5 bottom-5 left-5 max-w-41 text-white transition-colors duration-300 group-hover:text-black md:bottom-5 md:left-9.25">
            <a href="#" class="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-white">{{ project.title }}</a>
          </h3>
        </article>
      </div>

      <div class="mt-10 text-center xl:hidden">
        <button class="text-preset-7 w-full max-w-50 border-2 border-black px-10 py-3 uppercase transition-colors duration-300 hover:bg-black hover:text-white">See all</button>
      </div>
    </section>
  </main>

  <footer class="mt-24.5 bg-black p-14 md:px-20 md:py-14">
    <!--* Footer Content Container -->
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 md:grid md:w-full md:grid-cols-2 md:gap-y-6">
      <!-- Celda 1: Logo (Arriba Izquierda) -->
      <a href="/" class="focus-visible:outline-2 focus-visible:outline-white md:justify-self-start">
        <img src="/images/logo.svg" alt="Loopstudios" class="h-6 w-36" />
      </a>

      <!-- Celda 2: Redes Sociales (Arriba Derecha) -->
      <nav aria-label="Social Media" class="mt-6 flex gap-4 md:mt-0 md:justify-self-end">
        <a
          href="#"
          aria-label="Facebook"
          class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
          <img src="/images/icon-facebook.svg" alt="" aria-hidden="true" />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
          <img src="/images/icon-twitter.svg" alt="" aria-hidden="true" />
        </a>
        <a
          href="#"
          aria-label="Pinterest"
          class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
          <img src="/images/icon-pinterest.svg" alt="" aria-hidden="true" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-6 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
          <img src="/images/icon-instagram.svg" alt="" aria-hidden="true" />
        </a>
      </nav>

      <!-- Celda 3: Enlaces (Abajo Izquierda) -->
      <ul aria-label="Footer Navigation" class="mt-6 flex flex-col items-center gap-4 text-white md:mt-0 md:flex-row md:justify-self-start">
        <li>
          <a
            href="#"
            class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
            Events
          </a>
        </li>
        <li>
          <a
            href="#"
            class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
            Products
          </a>
        </li>
        <li>
          <a
            href="#"
            class="relative py-2 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8 hover:after:-translate-x-1/2 focus-visible:outline-2 focus-visible:outline-white">
            Support
          </a>
        </li>
      </ul>

      <!-- Celda 4: Copyright (Abajo Derecha) -->
      <p class="text-preset-6 mt-6 text-center text-white opacity-50 md:mt-0 md:justify-self-end md:text-right">© 2021 Loopstudios. All rights reserved.</p>
    </div>
  </footer>

  <MyFooter text-color="white" text-color-attribution="var(--color-grey-200)" bg-color="transparent" />
</template>

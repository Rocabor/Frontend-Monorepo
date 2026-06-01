<script setup>
// Mapeo dinámico para las clases de FontAwesome de tus redes sociales
const socialLinks = [
  { icon: 'fab fa-facebook-f', url: '#' },
  { icon: 'fab fa-twitter', url: '#' },
  { icon: 'fab fa-instagram', url: '#' },
];
</script>

<template>
  <footer class="bg-navy-950 text-preset-10F pt-64 pb-12 text-gray-400 xl:h-113 xl:pt-48">

    <div class="mx-auto px-6 md:px-14 xl:px-20">

      <img src="../assets/images/logo.svg" alt="Fylo Logo" class="mb-10 w-28" />

      <div class="grid grid-cols-1 items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
        
        <div class="flex items-start gap-4 md:w-94.75">

          <img src="../assets/images/icon-location.svg" alt="" class="mt-1 mr-2.5 h-4.5 w-3.5 shrink-0" />

          <p class="text-navy-50 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>

        <div class="text-preset-3F flex flex-col gap-4 md:items-end md:gap-6 ">

          <div class="flex items-center gap-4 md:-translate-x-2.5">
            <img src="../assets/images/icon-phone.svg" alt="" class="mr-2.5 h-4 w-3.5 object-contain md:size-4.5" />
            <span>+1-543-123-4567</span>
          </div>

          <div class="flex items-center gap-4">
            <img src="../assets/images/icon-email.svg" alt="" class="mr-1 h-4 w-5 object-contain" />
            <span>example@fylo.com</span>
          </div>
        </div>

        <div class="flex flex-col md:mt-10 md:w-153.75 md:flex-row md:justify-between xl:mt-0">

          <div class="text-preset-10F mt-10 grid grid-cols-1 gap-10 pl-0 text-nowrap md:mt-0 md:w-90.75 md:grid-cols-3 md:gap-x-20 md:gap-y-4 xl:w-57.5 xl:grid-cols-2 xl:translate-x-32">

            <div class="flex flex-col gap-4 md:contents">
              <a href="#" class="transition-all hover:font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:order-1">About Us</a>
              <a href="#" class="transition-all hover:font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:order-4 xl:order-3">Jobs</a>
              <a href="#" class="transition-all hover:font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:order-7 xl:order-5">Press</a>
              <a href="#" class="transition-all hover:font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:order-2 xl:order-7">Blog</a>
            </div>

            <div class="flex flex-col gap-4 md:contents">
              <a href="#" class="transition-all hover:font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:order-5 xl:order-2">Contact Us</a>
              <a href="#" class="transition-all hover:font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:order-3 xl:order-4">Terms</a>
              <a href="#" class="transition-all hover:font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:order-6 xl:order-6">Privacy</a>
            </div>
          </div>

          <div class="mt-8 flex justify-center gap-3 xl:gap-4 text-white md:mt-0 md:w-31.5 md:justify-end">
            <a
              v-for="(social, idx) in socialLinks"
              :key="idx"
              :href="social.url"
              class="flex h-8 w-8 items-center justify-center rounded-full border border-white transition-colors hover:border-blue-300 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <i :class="[social.icon, 'text-xs']"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

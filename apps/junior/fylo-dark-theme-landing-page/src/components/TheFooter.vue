<script setup>
// Mapeo dinámico para las clases de FontAwesome de tus redes sociales
const socialLinks = [
  { icon: 'fab fa-facebook-f', url: '#' },
  { icon: 'fab fa-twitter', url: '#' },
  { icon: 'fab fa-instagram', url: '#' }
]
</script>

<template>
  <footer class="bg-navy-950 pt-64 pb-16 text-gray-400 text-preset-10  -translate-y-20 md:-translate-y-42 ">

    <div class="mx-auto px-6 max-w-6xl md:px-14">
      <img src="../assets/images/logo.svg" alt="Fylo Logo" class="w-28 mb-10" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        
        <div class="flex gap-4 items-start md:w-[379px]">
          <img src="../assets/images/icon-location.svg" alt="" class="w-4 mt-1 flex-shrink-0" />

          <p class="leading-relaxed text-navy-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        
        <div class="flex flex-col gap-4 text-navy-50 md:items-end">

          <div class="flex gap-4 items-center">

            <img src="../assets/images/icon-phone.svg" alt="" class="w-4 h-4 object-contain" />
            <span>+1-543-123-4567</span>
          </div>

          <div class="flex gap-4 items-center">

            <img src="../assets/images/icon-email.svg" alt="" class="w-4 h-4 object-contain" />
            <span>example@fylo.com</span>
          </div>
        </div>

      <div class="flex flex-col md:flex-row md:w-[615px] md:justify-between md:mt-10 ">
        <div class="grid grid-cols-1 md:grid-cols-3  md:gap-x-16 md:gap-y-4 md:w-[363px] gap-10 mt-10 md:mt-0 pl-0">

          <div class="flex flex-col gap-4 md:contents">
            <a href="#" class="hover:text-white hover:underline transition-all md:order-1">About Us</a>
            <a href="#" class="hover:text-white hover:underline transition-all md:order-4">Jobs</a>
            <a href="#" class="hover:text-white hover:underline transition-all md:order-7">Press</a>
            <a href="#" class="hover:text-white hover:underline transition-all md:order-2">Blog</a>
          </div>

          <div class="flex flex-col gap-4 md:contents">
            <a href="#" class="hover:text-white hover:underline transition-all md:order-5">Contact Us</a>
            <a href="#" class="hover:text-white hover:underline transition-all md:order-3">Terms</a>
            <a href="#" class="hover:text-white hover:underline transition-all md:order-6">Privacy</a>
          </div>
        </div>

        <div class="flex justify-center mt-8 md:justify-end gap-3 text-white md:w-[126px] md:mt-0">
          <a 
            v-for="(social, idx) in socialLinks" 
            :key="idx"
            :href="social.url" 
            class="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:text-blue-300 hover:border-blue-300 transition-colors"
          >
            <i :class="[social.icon, 'text-xs']"></i>
          </a>
        </div>
      </div>

      </div>
    </div>
  </footer>
</template>


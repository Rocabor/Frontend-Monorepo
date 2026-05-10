<script setup>
import { ref, computed } from 'vue'
import { MyFooter } from '@packages/ui'; 

const currentIndex = ref(0)

const testimonials = [
  {
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    quote: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    // Usamos new URL para que Vite procese la imagen desde src/assets
    image: new URL('./assets/images/image-tanya.jpg', import.meta.url).href,
  },
  {
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    quote: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    image: new URL('./assets/images/image-john.jpg', import.meta.url).href,
  }
]

// Lógica corregida para acceder al valor del índice
const current = computed(() => testimonials[currentIndex.value])

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>

<template>

  <div class="bg-[url('./assets/images/pattern-bg.svg')] bg-no-repeat bg-cover w-[326.5px] h-[307.5px] px-[37px] py-[30px] relative border">

    <img src="./assets/images/image-tanya.jpg" class="w-[254px] h-[253px] rounded-[5px] shadow-img" alt="" >

    <div class="w-20 h-10 flex gap-8 px-4 bg-white rounded-[28px] absolute left-1/2 -translate-x-1/2 bottom-0">
      <button type="button" class="cursor-pointer">
        <img src="./assets/images/icon-prev.svg" alt="">
      </button>
      <button type="button" class="cursor-pointer">
        <img src="./assets/images/icon-next.svg" alt="">
      </button>
    </div>

  </div>   

  <img src="./assets/images/pattern-curve.svg" alt="" class="absolute bottom-0 left-0 
  w-[285px] -z-10 xl:w-auto" />   


</template>



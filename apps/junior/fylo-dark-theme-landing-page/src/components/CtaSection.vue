<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const email = ref('')
const error = ref(false)

const handleSubmit = () => {
  // Expresión regular estándar para validar correos electrónicos
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!emailRegex.test(email.value)) {
    error.value = true
  } else {
    error.value = false
    alert('¡Registro exitoso! Te hemos enviado un acceso temprano.')
    email.value = ''
  }
}
</script>

<template>
  <section id="sign-in" class="absolute w-[338px] top-[3170px] md:w-[480px] md:top-[3560px] inset-x-0 mx-auto xl:w-[863px] xl:top-[2925px]">

    <div class="bg-navy-850 px-6 py-10 md:px-10 md:py-12 rounded-[9px] text-center shadow-card 
    md:w-120 md:mx-auto xl:w-215.75 xl:px-20">

      <h2 class="text-preset-2 md:text-[clamp(1.25rem,calc(-0.179rem+2.976vw),2.50rem)] mb-4 xl:mb-2">Get early access today</h2>
      
      <p class="text-preset-3F max-w-2xl mx-auto mb-8 opacity-85">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
      </p>
      
      <form @submit.prevent="handleSubmit" class="flex flex-col xl:flex-row gap-6 md:gap-4 items-start w-full xl:gap-6">
        <div class="w-full flex-1">
          
          <input 
            v-model="email"
            type="text" 
            placeholder="email@example.com" 
            class="w-full py-4 px-8 text-preset-3F text-center md:text-left rounded-full bg-white text-navy-950 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-400"
          />
          <p v-if="error" class="text-red-500 text-left text-preset-9 font-bold mt-2 pl-6">
            Please enter a valid email address
          </p>
        </div>
        
        <BaseButton type="submit" class="w-full md:w-100 xl:w-50 text-[14px] leading-[1.2] xl:px-6">
          Get Started For Free
        </BaseButton>
      </form>
    </div>
  </section>
</template>


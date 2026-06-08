<script setup>
import iconEating from '../assets/images/icon-eating.svg'
import iconExercise from '../assets/images/icon-exercise.svg'
import iconSleep from '../assets/images/icon-sleep.svg'

const tips = [
  {
    iconSrc: iconEating,
    bg: 'bg-pink-50 text-pink-500',
    title: 'Healthy eating',
    desc: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'
  },
  {
    iconSrc: iconExercise,
    bg: 'bg-orange-50 text-orange-500',
    title: 'Regular exercise',
    desc: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'
  },
  {
    iconSrc: iconSleep,
    bg: 'bg-cyan-50 text-cyan-500',
    title: 'Adequate sleep',
    desc: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'
  }
]
</script>

<template>
  <section aria-labelledby="tips-title" class="bg-linear-90 from-gradient-start to-gradient-end/25 xl:rounded-[35px] px-6 py-12 md:px-9.75 md:py-12.5 xl:px-32 xl:py-24 grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-8 xl:mr-9.5 xl:m-2.5">
    
    <h2 id="tips-title" class="sr-only">Tips for a healthy lifestyle</h2>

    <div 
      v-for="(tip, index) in tips" 
      :key="index" 
      class="flex flex-col md:flex-row lg:flex-col items-start md:items-center xl:items-start text-center md:text-left gap-8"
    >
      <div :class="['w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm', tip.bg]">
        <img :src="tip.iconSrc" alt="">
      </div>
      
      <div class="space-y-6">
        <h3 class="text-preset-4 text-start">{{ tip.title }}</h3>
        <p class="text-preset-6-regular text-start ">{{ tip.desc }}</p>
      </div>
    </div>
    
  </section>
</template>
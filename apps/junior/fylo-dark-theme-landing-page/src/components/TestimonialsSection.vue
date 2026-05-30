<script setup>
import TestimonialCard from './TestimonialCard.vue'
import profile1 from '../assets/images/profile-1.jpg'
import profile2 from '../assets/images/profile-2.jpg'
import profile3 from '../assets/images/profile-3.jpg'

const testimonialsData = [
  { text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', name: 'Satish Patel', role: 'Founder & CEO, Huddle', image: profile1 },
  { text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', name: 'Bruce McKenzie', role: 'Founder & CEO, Huddle', image: profile2 },
  { text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', name: 'Iva Boyd', role: 'Founder & CEO, Huddle', image: profile3 }
]
</script>

<template>
  <section class=" mx-auto max-w-[1261px] relative mt-[102px] md:mt-23">

    <img src="../assets/images/bg-quotes.png" alt="" class="absolute top-0 left-1 md:-left-2 md:-top-4 w-8 md:w-[56px] " />

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 pt-5 md:gap-10">
      <TestimonialCard 
        v-for="(item, idx) in testimonialsData" :key="idx"
        :text="item.text"
        :name="item.name"
        :role="item.role"
        :image="item.image"
      />
    </div>
  </section>
</template>


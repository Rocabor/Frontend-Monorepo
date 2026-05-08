

<script setup>
defineProps({
  challengeLink: {
    type: String,
    default: 'https://www.frontendmentor.io?ref=challenge'
  },
  challengeText: {
    type: String,
    default: 'Frontend Mentor'
  },
  coderLink: {
    type: String,
    default: 'https://www.frontendmentor.io/profile/Rocabor'
  },
  coderName: {
    type: String,
    default: '@Rocabor'
  },
  year: {
    type: [String, Number],
    default: new Date().getFullYear()
  }
})
</script>

<template>
  <footer>
    <nav class="attribution" aria-label="Attribution credits">
      Challenge by
      <a :href="challengeLink" target="_blank" rel="noopener noreferrer">{{ challengeText }}</a>
      • Coded by
      <a :href="coderLink" target="_blank" rel="noopener noreferrer">{{ coderName }}</a>
      <span class="year">{{ year }}</span>
    </nav>
  </footer>
</template>

<style scoped>
.attribution {
  font-size: clamp(0.75rem, calc(0.511rem + 1.018vw), 1rem);
  @apply fixed inset-x-0 bottom-0 bg-white py-2 text-center;
}
.attribution a,
.year {
  @apply font-bold text-[#10d8c4] transition-all duration-300 ease-in-out hover:text-[#ff8c66] focus-visible:ring-2 focus-visible:outline-none;
}
</style>

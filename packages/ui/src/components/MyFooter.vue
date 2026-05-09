<script setup>
defineProps({
  challengeLink: { type: String, default: 'https://www.frontendmentor.io?ref=challenge' },
  challengeText: { type: String, default: 'Frontend Mentor' },
  coderLink: { type: String, default: 'https://www.frontendmentor.io/profile/Rocabor' },
  coderName: { type: String, default: '@Rocabor' },
  year: { type: [String, Number], default: new Date().getFullYear() },

  textColor: { type: String, default: '#000000' },
  hoverColor: { type: String, default: '#ff3e00' },
  bgColor: { type: String, default: '#ffffff' },
  focusVisible: { type: String, default: '#ff3e00' }
})
</script>

<template>
  <footer>
    <nav class="attribution" aria-label="Attribution credits">
      Challenge by 
      <a :href="challengeLink" target="_blank" rel="noopener noreferrer">
        {{ challengeText }}
      </a> 
      • Coded by 
      <a :href="coderLink" target="_blank" rel="noopener noreferrer">
        {{ coderName }} 
      </a>  
      <span class="year"> &copy;{{ year }}</span>    
          
    </nav>
    
  </footer>
</template>

<style scoped>
@reference "../reference.css";

.attribution {
  background-color: v-bind(bgColor);
  font-size: clamp(0.81rem, calc(0.634rem + 0.763vw), 1.00rem);
  @apply fixed inset-x-0 bottom-0 py-2 text-center;
}

.attribution a, 
.year {
  color: v-bind(textColor); 
  @apply font-bold transition-all duration-300 ease-in-out;
  @apply focus-visible:outline-none transition-all rounded-sm;
}

.attribution a:hover{
  color: v-bind(hoverColor);
}
.attribution a:focus-visible{
  color: v-bind(focusVisible);
  outline: 3px solid v-bind(focusVisible); 
  outline-offset: 2px;
}
</style>

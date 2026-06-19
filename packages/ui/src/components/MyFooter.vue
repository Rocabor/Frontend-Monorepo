<script setup>
defineProps({
  challengeLink: { type: String, default: 'https://www.frontendmentor.io?ref=challenge' },
  challengeText: { type: String, default: 'Frontend Mentor' },
  coderLink: { type: String, default: 'https://www.frontendmentor.io/profile/Rocabor' },
  coderName: { type: String, default: '@Rocabor' },
  year: { type: [String, Number], default: new Date().getFullYear() },

  textColor: { type: String, default: '#000000' },
  textColorAttribution: { type: String, default: '#000000' },
  hoverColor: { type: String, default: '#ff3e00' },
  bgColor: { type: String, default: '#ffffff' },
  focusVisible: { type: String, default: '#ff3e00' },
  fontFamily:{type: String, default: 'sans-serif'},
  position:{type: String,default:'absolute'}
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
  color: v-bind(textColorAttribution);
  background-color: v-bind(bgColor);
  font-family: v-bind(fontFamily);
  font-size: clamp(0.75rem, calc(0.511rem + 1.018vw), 1.00rem);
  position: v-bind(position);
  @apply inset-x-0 bottom-0 py-2 text-center;
}

nav{
  @apply font-bold;
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

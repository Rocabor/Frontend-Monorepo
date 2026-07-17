<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showTop = ref(false);
const onScroll = () => { showTop.value = window.scrollY > 400; };
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <transition name="top">
    <button v-if="showTop" class="back-to-top-fab" @click="scrollToTop" aria-label="Back to top">
      <svg class="top-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
      <span class="top-label">TOP</span>
    </button>
  </transition>
</template>

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
    <button
      v-if="showTop"
      class="fixed bottom-7 right-7 z-50 flex flex-col items-center gap-0.5 px-3.5 py-3.5 rounded-full bg-[rgba(15,20,24,0.85)] backdrop-blur-md border border-[rgba(142,213,255,0.3)] text-primary cursor-pointer transition hover:scale-110 active:scale-95 focus-visible:scale-95"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <svg class="animate-top-bounce" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
      <span class="font-mono text-[0.55rem] font-bold tracking-[0.15em] text-dim">TOP</span>
    </button>
  </transition>
</template>

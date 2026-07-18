<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useProjects } from '../composables/useProjects';

const { categoryMeta, activeCategory, selectCategory } = useProjects();
const menuOpen = ref(false);
const scrolled = ref(false);

const onScroll = () => { scrolled.value = window.scrollY > 20; };
onMounted(() => { window.addEventListener('scroll', onScroll); onScroll(); });
onUnmounted(() => window.removeEventListener('scroll', onScroll));

const onSelect = (cat) => {
  selectCategory(cat);
  menuOpen.value = false;
};
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-white/5 transition-all duration-300"
    :class="scrolled ? 'bg-[rgba(10,14,18,0.9)] shadow-[0_8px_30px_rgba(0,0,0,0.4)]' : 'bg-[rgba(15,20,24,0.7)]'"
  >
    <div class="max-w-[1280px] mx-auto h-[88px] px-6 flex items-center justify-between">
      <span class="tech-gradient font-display font-extrabold text-xl tracking-tight">My Frontend Journey</span>

      <nav class="hidden md:flex gap-9">
        <button
          v-for="(meta, cat) in categoryMeta"
          :key="cat"
          :class="[
            'bg-none border-0 cursor-pointer pb-0.5 font-display text-sm font-semibold tracking-wide transition-colors',
            activeCategory === cat ? 'text-primary border-b-2 border-primary' : 'text-dim hover:text-bright'
          ]"
          @click="selectCategory(cat)"
        >
          {{ cat }}
        </button>
      </nav>

      <button
        class="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 text-bright cursor-pointer transition hover:border-primary hover:text-primary"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Toggle categories menu"
      >
        <svg v-if="!menuOpen" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        <svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="header-border-glow bottom-0"></div>

    <transition name="top">
      <nav v-if="menuOpen" class="md:hidden border-t border-white/5 bg-[rgba(10,14,18,0.95)] backdrop-blur-md px-6 py-3 flex flex-col">
        <button
          v-for="(meta, cat) in categoryMeta"
          :key="cat"
          :class="[
            'text-left py-3 font-display text-sm font-semibold tracking-wide border-b border-white/5 transition-colors',
            activeCategory === cat ? 'text-primary' : 'text-dim hover:text-bright'
          ]"
          @click="onSelect(cat)"
        >
          {{ cat }}
        </button>
      </nav>
    </transition>
  </header>
</template>

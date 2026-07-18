<script setup>
import { onMounted, computed } from 'vue';
import { useViews } from '../composables/useViews';
import { useProjects } from '../composables/useProjects';

const { fetchTopViewed, topViewed } = useViews();
const { findProjectByHref, getImageUrl } = useProjects();

const topItems = computed(() =>
  topViewed.value.map((item, i) => {
    const project = findProjectByHref(item.href);
    return {
      rank: i,
      likes: item.views,
      project,
    };
  })
);

const emit = defineEmits(['open']);

onMounted(() => {
  fetchTopViewed(3);
});
</script>

<template>
  <section class="max-w-[1200px] mx-auto px-6 pt-4 pb-8 relative z-10">
    <div class="flex flex-wrap items-center justify-center gap-3 mb-5 text-center">
      <span class="font-display text-lg font-bold tracking-tight text-white">👁 Most Viewed</span>
      <span class="hidden sm:block h-px flex-1 min-w-[20px] bg-gradient-to-r from-[rgba(56,189,248,0.4)] to-transparent"></span>
      <span class="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[#cbd5e1]">Top visited by visitors</span>
    </div>

    <div v-if="topItems.length" class="flex flex-wrap justify-center gap-4">
      <template v-for="item in topItems" :key="item.project?.href || item.rank">
        <button
          v-if="item.project"
          @click="emit('open', item.project)"
          class="group flex items-center gap-3 text-left rounded-xl bg-[rgba(2,6,23,0.6)] border border-[rgba(30,41,59,0.9)] p-3 w-full sm:w-[280px] transition hover:border-[rgba(56,189,248,0.5)] hover:bg-[rgba(8,47,73,0.18)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(56,189,248,0.2)]"
        >
          <span class="text-xl leading-none w-8 text-center text-[#818cf8] font-bold">{{ item.rank + 1 }}</span>
          <div class="relative w-14 h-14 rounded-lg overflow-hidden bg-surface-lowest shrink-0">
            <img :src="getImageUrl(item.project.image)" :alt="item.project.title" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="font-mono text-[0.5rem] uppercase tracking-wider text-[#71717a] m-0">{{ item.project.difficulty || 'Challenge' }}</p>
            <h4 class="text-sm font-semibold text-bright m-0 truncate uppercase transition-colors group-hover:text-primary">{{ item.project.title }}</h4>
          </div>
          <span class="inline-flex items-center gap-1 font-mono text-[0.7rem] font-bold text-white shrink-0">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
            {{ item.views }}
          </span>
        </button>
      </template>
    </div>

    <p v-else class="font-mono text-[0.65rem] text-[#52525b] m-0 text-center">No views yet. Explore some projects! 👀</p>
  </section>
</template>

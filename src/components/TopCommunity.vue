<script setup>
import { onMounted, computed } from 'vue';
import { useLikes } from '../composables/useLikes';
import { useProjects } from '../composables/useProjects';

const { fetchTopLiked, topLiked } = useLikes();
const { findProjectByHref, getImageUrl } = useProjects();

const medals = ['🥇', '🥈', '🥉'];

const topItems = computed(() =>
  topLiked.value.map((item, i) => {
    const project = findProjectByHref(item.href);
    return {
      rank: i,
      medal: medals[i] || '',
      likes: item.likes,
      project,
    };
  })
);

const emit = defineEmits(['open']);

onMounted(() => {
  fetchTopLiked(3);
});
</script>

<template>
  <section class="max-w-300 mx-auto px-6 pt-4 pb-8 relative z-10">
    <div class="flex flex-wrap items-center justify-center gap-3 mb-3 text-center">
      <span class="font-display text-lg font-bold tracking-tight text-white">🔥 Community Favorites</span>
      <span class="hidden sm:block h-px flex-1 min-w-5 bg-linear-to-r from-[rgba(56,189,248,0.4)] to-transparent" />
    </div>
    <p class="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[#cbd5e1] m-0 mb-5 text-center">
      Top liked by visitors
    </p>

    <div v-if="topItems.length" class="flex flex-wrap justify-center gap-4">
      <template v-for="item in topItems" :key="item.project?.href || item.rank">
        <button
          v-if="item.project"
          type="button"
          :aria-label="`Open details for ${item.project.title}`"
          class="group flex items-center gap-3 text-left rounded-xl bg-[rgba(2,6,23,0.6)] border border-[rgba(30,41,59,0.9)] p-3 w-full sm:w-70 transition hover:border-[rgba(56,189,248,0.5)] hover:bg-[rgba(8,47,73,0.18)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(56,189,248,0.2)] active:scale-[0.98] focus-visible:scale-[0.98]"
          @click="emit('open', item.project)"
        >
          <span class="text-2xl leading-none w-8 text-center">{{ item.medal }}</span>
          <div class="relative w-14 h-14 rounded-lg overflow-hidden bg-surface-lowest shrink-0">
            <img :src="getImageUrl(item.project.image)" :alt="item.project.title" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
          </div>
          <div class="min-w-0 flex-1">
            <p class="font-mono text-[0.5rem] uppercase tracking-wider text-[#71717a] m-0">
              {{ item.project.difficulty || 'Challenge' }}
            </p>
            <h4 class="text-sm font-semibold text-bright m-0 truncate uppercase transition-colors group-hover:text-primary">
              {{ item.project.title }}
            </h4>
          </div>
          <span class="inline-flex items-center gap-1 font-mono text-[0.7rem] font-bold text-white shrink-0">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="#e1002d" stroke="#e1002d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
            {{ item.likes }}
          </span>
        </button>
      </template>
    </div>

    <p v-else class="font-mono text-[0.7rem] text-[#cbd5e1] m-0 text-center">
      No likes yet. Be the first to give some ❤!
    </p>
  </section>
</template>

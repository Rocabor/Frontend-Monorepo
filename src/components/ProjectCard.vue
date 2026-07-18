<script setup>
import { onMounted, computed } from 'vue';
import { useProjects } from '../composables/useProjects';
import { useLikes } from '../composables/useLikes';
import { useViews } from '../composables/useViews';
import { useReveal } from '../composables/useReveal';

const props = defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false },
  centered: { type: Boolean, default: false },
});

const emit = defineEmits(['open']);
const { getImageUrl } = useProjects();
const { isLiked, toggleLike, likeCount, topRank, initLikes } = useLikes();
const { viewCount, initViews } = useViews();
const { target, revealed } = useReveal();

const rank = computed(() => topRank(props.project.href));
const rankLabel = computed(() => ['🥇 TOP 1', '🥈 TOP 2', '🥉 TOP 3'][rank.value] || '');

onMounted(() => {
  initLikes([props.project.href]);
  initViews([props.project.href]);
});
</script>

<template>
  <div
    ref="target"
    class="group flex flex-col overflow-hidden text-left rounded-2xl bg-glass border border-line transition hover:-translate-y-1.5 hover:border-2 hover:border-primary hover:shadow-[0_12px_32px_rgba(142,213,255,0.35)] relative reveal"
    :class="{ 'w-full sm:w-[280px]': centered, 'is-visible': revealed }"
    @click="emit('open', project)"
  >
    <div class="relative h-[200px] overflow-hidden bg-surface-lowest">
      <img :src="getImageUrl(project.image)" :alt="project.title" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-[rgba(15,20,24,0.55)] to-transparent"></div>

      <span v-if="featured" class="absolute top-2.5 left-2.5 z-10 font-mono text-[0.55rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[rgba(142,213,255,0.1)] text-primary border border-[rgba(142,213,255,0.2)]">Featured</span>

      <span v-if="rank >= 0" class="absolute bottom-2.5 left-2.5 z-10 font-mono text-[0.55rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[rgba(251,191,36,0.12)] text-[#fbbf24] border border-[rgba(251,191,36,0.3)]">{{ rankLabel }}</span>

      <button
        class="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 px-2 py-1 rounded-full cursor-pointer border border-white/30 bg-[rgba(10,14,18,0.55)] text-white font-mono text-[0.62rem] font-bold backdrop-blur-md opacity-0 -translate-y-1 transition group-hover:opacity-100 group-hover:translate-y-0"
        @click.stop="toggleLike(project.href)"
        aria-label="Like"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="#e1002d" stroke="#e1002d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
        <span class="text-white">{{ likeCount(project.href) }}</span>
      </button>

      <div class="absolute left-0 right-0 bottom-0 z-2 p-4 flex flex-col gap-3 bg-gradient-to-t from-[rgba(10,14,18,0.92)] via-[rgba(10,14,18,0.55)] to-transparent opacity-0 translate-y-3 transition group-hover:opacity-100 group-hover:translate-y-0">
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="font-mono text-[0.55rem] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-bright border border-white/10 transition hover:-translate-y-0.5 hover:bg-newbie hover:text-[#04141b] hover:border-transparent hover:shadow-[0_6px_16px_rgba(6,182,212,0.35)]"
          >{{ tag }}</span>
        </div>
         <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-1.5 font-mono text-[0.6rem] font-bold tracking-wider text-primary">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z"/></svg>
            EXPLORE DEMO
          </span>
          <span class="inline-flex items-center gap-1 font-mono text-[0.6rem] font-bold tracking-wider text-dim">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
            {{ viewCount(project.href) }}
          </span>
          <div class="flex gap-2.5 text-dim">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-colors hover:text-primary cursor-pointer"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-colors hover:text-primary cursor-pointer"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 flex-1 flex items-center justify-center">
      <h3 class="text-center text-[0.95rem] font-bold text-bright m-0 uppercase transition-colors group-hover:text-primary">{{ project.title }}</h3>
    </div>
  </div>
</template>

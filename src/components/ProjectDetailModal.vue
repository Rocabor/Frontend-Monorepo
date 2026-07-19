<script setup>
import { watch, computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useProjects } from '../composables/useProjects';
import { useLikes } from '../composables/useLikes';
import { useViews } from '../composables/useViews';
import { useToast } from '../composables/useToast';

const props = defineProps({
  project: { type: Object, required: true },
});
const emit = defineEmits(['close']);
const { getImageUrl, getLiveUrl, getSourceUrl } = useProjects();
const { isLiked, toggleLike, likeCount, initLikes } = useLikes();
const { viewCount, trackView, initViews } = useViews();
const { push: pushToast } = useToast();

const copyToClipboard = (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.top = '0';
      ta.style.left = '0';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      ok ? resolve() : reject(new Error('execCommand failed'));
    } catch (e) {
      reject(e);
    }
  });
};

const shareProject = async () => {
  try {
    const url = getLiveUrl(project.href);
    console.log('[share] clicked, url=', url);
    const text = `Check out "${project.title}" on My Frontend Journey`;
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch && typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: project.title, text, url });
        return;
      } catch {
        // cancelado o falló -> copiar igual
      }
    }
    try {
      await copyToClipboard(url);
      pushToast('Link copied to clipboard!', 'success');
    } catch (e) {
      console.error('[share] copy failed:', e);
      window.prompt('Copy this link to share:', url);
    }
  } catch (err) {
    console.error('[share] unhandled:', err);
    pushToast('Could not share: ' + (err && err.message ? err.message : 'unknown error'), 'error');
  }
};

watch(
  () => props.project?.href,
  (href) => {
    if (href) {
      initLikes([href]);
      initViews([href]);
      trackView(href);
    }
  },
  { immediate: true }
);

const diff = computed(() => (props.project ? props.project.difficulty.toLowerCase() : ''));
const diffBadge = {
  newbie: 'bg-[rgba(6,182,212,0.12)] text-newbie border-[rgba(6,182,212,0.3)]',
  junior: 'bg-[rgba(52,211,153,0.12)] text-junior border-[rgba(52,211,153,0.3)]',
  intermediate: 'bg-[rgba(251,191,36,0.12)] text-inter border-[rgba(251,191,36,0.3)]',
  advanced: 'bg-[rgba(249,115,22,0.12)] text-advanced border-[rgba(249,115,22,0.3)]',
};
const diffTagHover = {
  newbie: 'hover:bg-newbie',
  junior: 'hover:bg-junior',
  intermediate: 'hover:bg-inter',
  advanced: 'hover:bg-advanced',
};

const dialogRef = ref(null);
const previouslyFocused = ref(null);

const onKeydown = (e) => {
  if (e.key === 'Escape') {
    emit('close');
  } else if (e.key === 'Tab') {
    const focusables = dialogRef.value?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables || !focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
};

onMounted(() => {
  previouslyFocused.value = document.activeElement;
  document.addEventListener('keydown', onKeydown);
  document.body.style.overflow = 'hidden';
  dialogRef.value?.focus();
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
  if (previouslyFocused.value && previouslyFocused.value.focus) {
    previouslyFocused.value.focus();
  }
});
</script>

<template>
  <div class="fixed inset-0 z-60 bg-[rgba(7,10,13,0.9)] backdrop-blur-md flex items-center justify-center p-6" @click.self="emit('close')">
    <div
      ref="dialogRef"
      role="dialog"
      aria-modal="true"
      :aria-label="project.title"
      tabindex="-1"
      class="modal-card-scale relative w-full max-w-[640px] max-h-[86vh] overflow-y-auto rounded-2xl border border-white/10 bg-surface shadow-[0_25px_50px_rgba(0,0,0,0.5)] outline-none"
    >
      <div class="flex items-center justify-between p-4 bg-surface-high border-b border-white/5">
        <div class="flex items-center gap-3">
          <span :class="['font-mono text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded border', diffBadge[diff]]">
            {{ project.difficulty }}
          </span>
          <h3 class="font-display text-lg font-bold text-bright m-0">{{ project.title }}</h3>
        </div>
        <button class="flex items-center justify-center w-9 h-9 rounded-full border-0 bg-transparent text-dim cursor-pointer transition hover:bg-white/5 hover:text-bright" @click="emit('close')" aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="p-6">
        <div class="relative aspect-video rounded-xl overflow-hidden bg-surface-lowest mb-5">
          <img :src="getImageUrl(project.image)" :alt="project.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-[rgba(15,20,24,0.55)] to-transparent"></div>
        </div>

        <div class="flex gap-2 flex-wrap justify-center mb-4">
          <span
            v-for="tag in project.tags"
            :key="tag"
            :class="['font-mono text-[0.55rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 text-dim border border-white/5 transition hover:-translate-y-0.5 hover:text-[#04141b] hover:border-transparent hover:shadow-[0_6px_16px_rgba(6,182,212,0.4)]', diffTagHover[diff]]"
          >{{ tag }}</span>
        </div>
        <ul class="list-none p-0 m-0 mb-6 flex flex-col gap-2">
          <li v-for="(item, i) in project.description" :key="i" class="flex items-start gap-2 text-dim leading-snug">
            <svg class="text-[#4ade80] shrink-0 mt-0.5" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="flex gap-2.5 flex-wrap mt-2">
          <a :href="getLiveUrl(project.href)" target="_blank" class="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 text-center px-3.5 py-2 rounded-lg no-underline font-semibold text-[0.72rem] bg-transparent border border-white/15 text-bright transition hover:border-primary hover:bg-primary hover:text-[#04141b]">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Live Preview
          </a>
          <a :href="getSourceUrl(project)" target="_blank" class="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 text-center px-3.5 py-2 rounded-lg no-underline font-semibold text-[0.72rem] bg-transparent border border-white/15 text-bright transition hover:border-primary hover:bg-primary hover:text-[#04141b]">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
            Source Code
          </a>
          <button type="button" @click="shareProject" aria-label="Share this project" class="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 text-center px-3.5 py-2 rounded-lg no-underline font-semibold text-[0.72rem] bg-transparent border border-white/15 text-bright cursor-pointer transition hover:border-primary hover:bg-primary hover:text-[#04141b]">
            <svg class="pointer-events-none" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v13"/></svg>
            Share
          </button>
        </div>
      </div>

      <div class="flex justify-between items-center px-6 py-3 bg-surface-high border-t border-white/5 font-mono text-[0.6rem] tracking-wider text-dim">
        <span class="inline-flex items-center gap-1.5 text-tertiary">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z"/></svg>
          PROJECT DETAILS
        </span>
        <span class="inline-flex items-center gap-1.5 text-dim">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
          {{ viewCount(project.href) }} views
        </span>
          <button
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer border border-white/30 bg-transparent text-white font-mono text-[0.6rem] uppercase tracking-wider transition"
          :class="{ '!opacity-100 !translate-y-0': isLiked(project.href) }"
          :aria-label="isLiked(project.href) ? 'Remove like' : 'Like this project'"
          :aria-pressed="isLiked(project.href)"
          @click="toggleLike(project.href)"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="#e1002d" stroke="#e1002d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          <span class="text-white">{{ likeCount(project.href) }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

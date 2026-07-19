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
    const url = getLiveUrl(props.project.href);
    const text = `Check out "${props.project.title}" on My Frontend Journey`;
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch && typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: props.project.title, text, url });
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
  { immediate: true },
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
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
  <div
    class="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(7,10,13,0.9)] p-6 backdrop-blur-md"
    @click.self="emit('close')">
    <div
      ref="dialogRef"
      role="dialog"
      aria-modal="true"
      :aria-label="project.title"
      tabindex="-1"
      class="modal-card-scale bg-surface relative max-h-[86vh] w-full max-w-160 overflow-y-auto rounded-2xl border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
      <div class="bg-surface-high flex items-center justify-between border-b border-white/5 p-4">
        <div class="flex items-center gap-3">
          <span
            :class="[
              'rounded border px-2.5 py-1 font-mono text-[0.6rem] font-bold tracking-wider uppercase',
              diffBadge[diff],
            ]">
            {{ project.difficulty }}
          </span>
          <h3 class="font-display text-bright m-0 text-lg font-bold">
            {{ project.title }}
          </h3>
        </div>
        <button
          class="text-dim hover:text-bright flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent transition hover:bg-white/5"
          aria-label="Close"
          @click="emit('close')">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="p-6">
        <div class="bg-surface-lowest relative mb-5 aspect-video overflow-hidden rounded-xl">
          <img
            :src="getImageUrl(project.image)"
            :alt="project.title"
            class="h-full w-full object-cover">
          <div class="absolute inset-0 bg-linear-to-t from-[rgba(15,20,24,0.55)] to-transparent" />
        </div>

        <div class="mb-4 flex flex-wrap justify-center gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            :class="[
              'text-dim rounded border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[0.55rem] font-bold tracking-wider uppercase transition hover:-translate-y-0.5 hover:border-transparent hover:text-[#04141b] hover:shadow-[0_6px_16px_rgba(6,182,212,0.4)]',
              diffTagHover[diff],
            ]">
            {{ tag }}
          </span>
        </div>
        <ul class="m-0 mb-6 flex list-none flex-col gap-2 p-0">
          <li
            v-for="(item, i) in project.description"
            :key="i"
            class="text-dim flex items-start gap-2 leading-snug">
            <svg
              class="mt-0.5 shrink-0 text-[#4ade80]"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="mt-2 flex flex-wrap gap-2.5">
          <a
            :href="getLiveUrl(project.href)"
            target="_blank"
            class="text-bright hover:border-primary hover:bg-primary inline-flex min-w-30 flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-transparent px-3.5 py-2 text-center text-[0.72rem] font-semibold no-underline transition hover:text-[#04141b]">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Live Preview
          </a>
          <a
            :href="getSourceUrl(project)"
            target="_blank"
            class="text-bright hover:border-primary hover:bg-primary inline-flex min-w-30 flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-transparent px-3.5 py-2 text-center text-[0.72rem] font-semibold no-underline transition hover:text-[#04141b]">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M16 18l6-6-6-6" />
              <path d="M8 6l-6 6 6 6" />
            </svg>
            Source Code
          </a>
          <button
            type="button"
            aria-label="Share this project"
            class="text-bright hover:border-primary hover:bg-primary inline-flex min-w-30 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-transparent px-3.5 py-2 text-center text-[0.72rem] font-semibold no-underline transition hover:text-[#04141b]"
            @click="shareProject">
            <svg
              class="pointer-events-none"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
              <path d="M16 6l-4-4-4 4" />
              <path d="M12 2v13" />
            </svg>
            Share
          </button>
        </div>
      </div>

      <div
        class="bg-surface-high text-dim flex items-center justify-between border-t border-white/5 px-6 py-3 font-mono text-[0.6rem] tracking-wider">
        <span class="text-tertiary inline-flex items-center gap-1.5">
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z" />
          </svg>
          PROJECT DETAILS
        </span>
        <span class="text-dim inline-flex items-center gap-1.5">
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
            <circle
              cx="12"
              cy="12"
              r="3" />
          </svg>
          {{ viewCount(project.href) }} views
        </span>
        <button
          class="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/30 bg-transparent px-3 py-1.5 font-mono text-[0.6rem] tracking-wider text-white uppercase transition"
          :class="{ 'translate-y-0! opacity-100!': isLiked(project.href) }"
          :aria-label="isLiked(project.href) ? 'Remove like' : 'Like this project'"
          :aria-pressed="isLiked(project.href)"
          @click="toggleLike(project.href)">
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="#e1002d"
            stroke="#e1002d"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path
              d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
          <span class="text-white">{{ likeCount(project.href) }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

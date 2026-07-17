<script setup>
import { useProjects } from '../composables/useProjects';
import { useLikes } from '../composables/useLikes';

const props = defineProps({
  project: { type: Object, required: true },
});
const emit = defineEmits(['close']);
const { getImageUrl, getLiveUrl, getSourceUrl } = useProjects();
const { isLiked, toggleLike, likeCount } = useLikes();
</script>

<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal-card glass-card">
      <div class="modal-header">
        <div class="modal-header-left">
          <span :class="['modal-cat-badge', project.difficulty.toLowerCase()]">
            {{ project.difficulty }}
          </span>
          <h3 class="modal-heading">{{ project.title }}</h3>
        </div>
        <button class="modal-close" @click="emit('close')" aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="modal-body">
        <div class="modal-img">
          <img :src="getImageUrl(project.image)" :alt="project.title" />
          <div class="card-img-gradient"></div>
        </div>

        <div class="modal-tags">
          <span v-for="tag in project.tags" :key="tag" class="modal-tag">{{ tag }}</span>
        </div>
        <ul class="modal-checklist">
          <li v-for="(item, i) in project.description" :key="i">
            <svg class="check" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="modal-actions">
          <a :href="getLiveUrl(project.href)" target="_blank" class="modal-btn primary">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Live Preview
          </a>
          <a :href="getSourceUrl(project)" target="_blank" class="modal-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
            Source Code
          </a>
        </div>
      </div>

      <div class="modal-footer-bar">
        <span class="modal-foot-left">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z"/></svg>
          STRICTLY ALIGNED TO STYLE MANDATES
        </span>
        <button
          class="modal-like"
          :class="{ liked: isLiked(props.project.href) }"
          @click="toggleLike(props.project.href)"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" :fill="isLiked(props.project.href) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          <span class="like-count">{{ likeCount(props.project.href) }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

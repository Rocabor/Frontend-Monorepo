<script setup>
import { useProjects } from '../composables/useProjects';

const props = defineProps({
  project: { type: Object, required: true },
});
const emit = defineEmits(['close']);
const { getImageUrl, getLiveUrl, getSourceUrl } = useProjects();
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
        <p class="modal-desc">{{ project.description }}</p>

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
        <span>EST. COGNITIVE LEVEL: SENIOR LOG</span>
      </div>
    </div>
  </div>
</template>

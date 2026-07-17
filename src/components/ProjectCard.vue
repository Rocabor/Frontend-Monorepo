<script setup>
import { useProjects } from '../composables/useProjects';

defineProps({
  project: { type: Object, required: true },
});

const emit = defineEmits(['open']);
const { getImageUrl } = useProjects();
</script>

<template>
  <button class="glass-card project-card" @click="emit('open', project)">
    <div class="card-img-container">
      <img :src="getImageUrl(project.image)" :alt="project.title" loading="lazy" />
      <div class="card-img-gradient"></div>
      <div class="card-overlay">
        <div class="card-tags">
          <span v-for="tag in project.tags" :key="tag" class="card-tag">{{ tag }}</span>
        </div>
        <div class="card-footer-bottom">
          <span class="explore-label">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z"/></svg>
            EXPLORE DEMO
          </span>
          <div class="card-footer-icons">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
          </div>
        </div>
      </div>
    </div>

    <div class="card-body">
      <h3 class="card-title">{{ project.title }}</h3>
    </div>
  </button>
</template>

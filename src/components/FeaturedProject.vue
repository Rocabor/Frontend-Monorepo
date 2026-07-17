<script setup>
import { useProjects } from '../composables/useProjects';

defineProps({
  project: { type: Object, required: true },
});
const emit = defineEmits(['open']);
const { getImageUrl } = useProjects();
</script>

<template>
  <button class="glass-card featured-card" @click="emit('open', project)">
    <div class="featured-img">
      <img :src="getImageUrl(project.image)" :alt="project.title" loading="lazy" />
      <div class="card-img-gradient"></div>
      <span class="badge-featured featured-float">Featured</span>
    </div>
    <div class="featured-info">
      <div class="featured-tags">
        <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="badge-tag">{{ tag }}</span>
      </div>
      <h3 class="featured-title">{{ project.title }}</h3>
      <ul class="card-checklist featured-desc">
        <li v-for="(item, i) in project.description" :key="i">
          <svg class="check" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          <span>{{ item }}</span>
        </li>
      </ul>
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
  </button>
</template>

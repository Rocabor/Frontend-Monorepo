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
    </div>
    <div class="featured-info">
      <div class="featured-tags">
        <span class="badge-featured">Featured</span>
        <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="badge-tag">{{ tag }}</span>
      </div>
      <h3 class="featured-title">{{ project.title }}</h3>
      <p class="featured-desc">{{ project.description }}</p>
      <div class="featured-actions">
        <span class="featured-link">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
          Live Preview
        </span>
        <span class="featured-link">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
          Source Code
        </span>
      </div>
    </div>
  </button>
</template>

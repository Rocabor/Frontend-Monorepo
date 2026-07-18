<script setup>
import { onMounted } from 'vue';
import { useProjects } from '../composables/useProjects';
import { useLikes } from '../composables/useLikes';

const props = defineProps({
  project: { type: Object, required: true },
});

const emit = defineEmits(['open']);
const { getImageUrl } = useProjects();
const { isLiked, toggleLike, likeCount, initLikes } = useLikes();

onMounted(() => {
  initLikes([props.project.href]);
});
</script>

<template>
  <!-- Cambiamos la etiqueta principal a 'div' para que tener botones dentro sea válido en HTML -->
  <div class="glass-card project-card" @click="emit('open', project)">
    <div class="card-img-container">
      <img :src="getImageUrl(project.image)" :alt="project.title" loading="lazy" />
      <div class="card-img-gradient"></div>

      <!-- LIKE en esquina superior derecha: visible en hover, sincronizado con el modal -->
      <button
        class="card-like"
        :class="{ liked: isLiked(project.href) }"
        @click.stop="toggleLike(project.href)"
        aria-label="Like"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" :fill="isLiked(project.href) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
        <span class="like-count">{{ likeCount(project.href) }}</span>
      </button>

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

    <!-- Sección inferior con el título centrado -->
    <div class="card-body flex items-center justify-between gap-4 p-4">
      <h3 class="card-title text-white font-medium m-0">{{ project.title }}</h3>
    </div>
  </div>
</template>

<style scoped>
/* Botón de like en esquina superior derecha de la imagen */
.card-like {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 9px;
  border-radius: 999px;
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(10, 14, 18, 0.55);
  color: var(--text-dim);
  font-family: 'Geist', monospace;
  font-size: 0.62rem;
  font-weight: 700;
  backdrop-filter: blur(6px);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}
.project-card:hover .card-like,
.project-card:focus-visible .card-like {
  opacity: 1;
  transform: translateY(0);
}
.card-like:hover {
  color: #e1002d;
  border-color: #e1002d;
}
.card-like.liked {
  color: #e1002d;
  border-color: #e1002d;
  background: rgba(225, 0, 45, 0.14);
  opacity: 1;
  transform: translateY(0);
}
</style>

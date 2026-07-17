<script setup>
import { ref, computed, watch } from 'vue';
import { useProjects } from '../composables/useProjects';
import FeaturedProject from './FeaturedProject.vue';
import ProjectCard from './ProjectCard.vue';

const emit = defineEmits(['open']);
const {
  activeCategory,
  sortOrder,
  activeProjects,
  featuredProject,
  regularProjects,
} = useProjects();

const PAGE_SIZE = 8;
const visibleCount = ref(PAGE_SIZE);

watch(activeCategory, () => { visibleCount.value = PAGE_SIZE; });

const visibleProjects = computed(() => regularProjects.value.slice(0, visibleCount.value));
const canLoadMore = computed(() => visibleCount.value < regularProjects.value.length);

const loadMore = () => {
  visibleCount.value = Math.min(visibleCount.value + PAGE_SIZE, regularProjects.value.length);
};
</script>

<template>
  <section id="journey-section" class="project-section">
    <div class="section-header">
      <h2 :class="['difficulty-title', activeCategory.toLowerCase()]">{{ activeCategory }}</h2>
      <span class="count-badge">{{ activeProjects.length }} projects completed</span>
      <div class="sort-buttons">
        <button :class="['sort-btn', { active: sortOrder === 'newest' }]" @click="sortOrder = 'newest'">Newest</button>
        <button :class="['sort-btn', { active: sortOrder === 'oldest' }]" @click="sortOrder = 'oldest'">Oldest</button>
      </div>
    </div>

    <transition name="grid" mode="out-in">
      <div class="project-grid" :key="activeCategory">
        <FeaturedProject
          v-if="featuredProject"
          :project="featuredProject"
          class="featured-in-grid"
          @open="emit('open', $event)"
        />

        <ProjectCard
          v-for="project in visibleProjects"
          :key="project.title"
          :project="project"
          @open="emit('open', $event)"
        />
      </div>
    </transition>

    <div v-if="canLoadMore" class="load-more-wrap">
      <button class="load-more-btn" @click="loadMore">Load More Projects</button>
    </div>
  </section>
</template>

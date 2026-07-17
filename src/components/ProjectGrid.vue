<script setup>
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
      <div class="project-list" :key="activeCategory">
        <FeaturedProject
          v-if="featuredProject"
          :project="featuredProject"
          @open="emit('open', $event)"
        />

        <div class="project-grid">
          <ProjectCard
            v-for="project in regularProjects"
            :key="project.title"
            :project="project"
            @open="emit('open', $event)"
          />
        </div>
      </div>
    </transition>
  </section>
</template>

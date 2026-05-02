<script setup>
import { ref, computed } from 'vue';
import { allProjects } from './data/index';

const baseUrl = import.meta.env.BASE_URL;

// Las rutas en datos son ./apps/newbie/... 
// Después del build unificado, los proyectos están en ./newbie/...
// Entonces siempre removemos ./apps/ de la ruta
const getProjectUrl = (href) => {
  return href.replace('./apps/', './');
};

const getImageUrl = (image) => baseUrl + image;

// 1. Estado para la categoría activa
const activeCategory = ref('Newbie');

const difficultyDetails = {
  Newbie: "The success foundation: Ultra-precise layout with semantic HTML5 and CSS3. Focused on visual detail and consistency.",
  Junior: "Real interactivity: Implementation of logic with JavaScript, DOM manipulation, and complex layouts using Flexbox and Grid.",
  Intermediate: "Architectural challenges: Integration of external APIs, state management, high-complexity dynamic components."
};

// 2. Función para cambiar de pestaña
const selectCategory = (diff) => {
  activeCategory.value = diff;
};

// 3. Propiedad computada para obtener solo los proyectos de la pestaña activa
const activeProjects = computed(() => {
  return allProjects[activeCategory.value] || [];
});
</script>

<template>
  <main class="app-container">
    <div class="bg-glow-1"></div>
    <div class="bg-glow-2"></div>

    <header class="hero">
      <h1 class="hero-title">My Frontend Journey</h1>
      
      <div class="hero-content">
        <div class="glass-card intro-box">
          <p>
            This portfolio showcases my technical evolution, organized under a <strong>monorepo</strong> structure. 
            Each <strong>Frontend Mentor</strong> challenge focuses on clean code and accessibility.
          </p>
        </div>

        <nav class="category-nav">
          <!-- Botones de navegación -->
          <button v-for="(list, diff) in allProjects" 
             :key="diff" 
             @click="selectCategory(diff)"
             :class="['glass-card', 'cat-card', diff.toLowerCase(), { 'active-filter': activeCategory === diff }]">
            <span class="cat-label">{{ diff }}</span>
            <p class="cat-text">{{ difficultyDetails[diff] }}</p>
          </button>
        </nav>
      </div>
    </header>

    <div class="main-content">
      <!-- TRANSICIÓN: Ahora solo tiene UN hijo (la etiqueta section) -->
      <transition name="fade" mode="out-in">
        <section 
          :key="activeCategory" 
          class="project-section"
        >
          <div class="section-header">
            <h2 :class="['difficulty-title', activeCategory.toLowerCase()]">
              {{ activeCategory }}
            </h2>
            <span class="count-badge">
              {{ activeProjects.length }} projects completed
            </span>
          </div>

<div class="project-grid">
            <a v-for="project in activeProjects" 
               :key="project.title" 
               :href="getProjectUrl(project.href)" 
               class="glass-card project-card"
               target="_blank">
               
              <div class="card-img-container">
                <img :src="getImageUrl(project.image)" :alt="project.title" loading="lazy" />
                <div class="card-hover-overlay">
                  <span>View Project</span>
                </div>
              </div>
              
              <div class="card-info">
                <h3>{{ project.title }}</h3>
                <div class="tech-stack">
                  <img v-for="tech in project.technologies" 
                       :key="tech" 
                       :src="`${baseUrl}icons/${tech}.png`"
                       :alt="tech" 
                       class="tech-icon"
                       loading="lazy"/>
                </div>
              </div>

              <div :class="['card-footer-tag', activeCategory.toLowerCase()]">
                {{ activeCategory }}
              </div>
            </a>
          </div>
        </section>
      </transition>
    </div>
  </main>
</template>

<style scoped>
/* Transiciones suaves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilo para el botón activo */
.active-filter {
  border-color: rgba(255, 255, 255, 0.45) !important;
  background: rgba(255, 255, 255, 0.1) !important;
  transform: translateY(-5px);
}

.cat-card {
  cursor: pointer;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  font-family: inherit;
  outline: none;
}
</style>
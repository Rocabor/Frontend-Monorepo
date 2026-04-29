<script setup>
import { allProjects } from './data/index';
</script>

<template>
  <div class="categories-section">
    <h1><strong>My Frontend Journey</strong></h1>
    <p>Challenges are categorized into difficulty levels:</p>

    <div class="categories-grid">
      <a v-for="(list, diff) in allProjects" :key="diff" :href="`#${diff.toLowerCase()}`" :class="['category-badge', diff.toLowerCase()]">
        <span class="category-name">{{ diff }}</span>
        <span class="category-desc">Proyectos nivel {{ diff }} para mejorar tus habilidades.</span>
      </a>
    </div>
  </div>

  <div id="projects-container">
    <div v-for="(projectsList, difficulty) in allProjects" :key="difficulty">
      
      <div v-if="projectsList.length > 0" :id="difficulty.toLowerCase()" class="section-header">
        <h2 :class="['section-title', difficulty.toLowerCase()]">{{ difficulty }}</h2>
        <span class="project-count">{{ projectsList.length }} projects</span>
      </div>

      <div class="grid">
        <a v-for="project in projectsList" 
           :key="project.title" 
           :href="project.href" 
           :class="['card', `card--${difficulty.toLowerCase()}`]">
          
          <div class="cont-img">
            <img :src="project.image" :alt="project.title" loading="lazy" />
          </div>
          
          <h2>{{ project.title }}</h2>

          <div class="tech-stack">
            <img v-for="tech in project.technologies" 
                 :key="tech" 
                 :src="`/icons/${tech}.png`" 
                 :alt="tech" 
                 :title="tech.toUpperCase()" />
          </div>

          <div :class="['footer-card', `footer-card--${difficulty.toLowerCase()}`]">
            <p class="dificulty">{{ project.difficulty }}</p>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>
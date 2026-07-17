<script setup>
import { useProjects } from '../composables/useProjects';

const { categoryMeta, activeCategory, selectCategory } = useProjects();
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <span class="brand tech-gradient">My Frontend Journey</span>
      <nav class="header-nav">
        <button
          v-for="(meta, cat) in categoryMeta"
          :key="cat"
          :class="['nav-link', { active: activeCategory === cat }]"
          @click="selectCategory(cat)"
        >
          {{ cat }}
        </button>
      </nav>
    </div>
  </header>
</template>

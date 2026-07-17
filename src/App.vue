<script setup>
import { ref } from 'vue';
import { useProjects } from './composables/useProjects';
import SiteHeader from './components/SiteHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectGrid from './components/ProjectGrid.vue';
import SiteFooter from './components/SiteFooter.vue';
import BackToTop from './components/BackToTop.vue';
import ProjectDetailModal from './components/ProjectDetailModal.vue';

useProjects();
const selectedProject = ref(null);
const openProject = (project) => { selectedProject.value = project; };
const closeProject = () => { selectedProject.value = null; };
</script>

<template>
  <main class="app-container">
    <div class="bg-glow-1"></div>
    <div class="bg-glow-2"></div>

    <SiteHeader />
    <HeroSection />

    <div class="main-content">
      <ProjectGrid @open="openProject" />
      <BackToTop />
      <SiteFooter />
    </div>

    <transition name="modal">
      <ProjectDetailModal
        v-if="selectedProject"
        :project="selectedProject"
        @close="closeProject"
      />
    </transition>
  </main>
</template>

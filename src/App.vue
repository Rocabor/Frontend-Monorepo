<script setup>
import { ref } from 'vue';
import { useProjects } from './composables/useProjects';
import SiteHeader from './components/SiteHeader.vue';
import ProjectGrid from './components/ProjectGrid.vue';
import SiteFooter from './components/SiteFooter.vue';
import TopCommunity from './components/TopCommunity.vue';
import TopViewed from './components/TopViewed.vue';
import BackToTop from './components/BackToTop.vue';
import ProjectDetailModal from './components/ProjectDetailModal.vue';
import BackgroundCanvas from './components/BackgroundCanvas.vue';
import ToastHost from './components/ToastHost.vue';

useProjects();
const selectedProject = ref(null);
const openProject = (project) => { selectedProject.value = project; };
const closeProject = () => { selectedProject.value = null; };
</script>

<template>
  <main class="relative z-1">
    <BackgroundCanvas />
    <div class="fixed inset-0 z-0 pointer-events-none bg-grid" />
    <div class="fixed rounded-full blur-[120px] -top-6 -left-6 w-100 h-100 bg-[rgba(142,213,255,0.06)] pointer-events-none z-0" />
    <div class="fixed rounded-full blur-[120px] -bottom-6 -right-6 w-100 h-100 bg-[rgba(56,189,248,0.06)] pointer-events-none z-0" />

    <SiteHeader />

    <div class="relative z-10">
      <ProjectGrid @open="openProject" />
      <TopCommunity @open="openProject" />
      <TopViewed @open="openProject" />
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

    <ToastHost />
  </main>
</template>

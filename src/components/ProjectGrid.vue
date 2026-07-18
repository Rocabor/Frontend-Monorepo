<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useProjects } from '../composables/useProjects';
import { useLikes } from '../composables/useLikes';
import { useCountUp } from '../composables/useCountUp';
import ProjectCard from './ProjectCard.vue';

const emit = defineEmits(['open']);
const {
  activeCategory,
  sortOrder,
  activeProjects,
} = useProjects();
const { initLikes, fetchTopLiked } = useLikes();
const { activeCount } = useProjects();
const { value: animatedCount } = useCountUp(activeCount);

const PAGE_SIZE = 8;
const STEP = 8;
const visibleCount = ref(PAGE_SIZE);

watch(activeCategory, () => { visibleCount.value = PAGE_SIZE; });

const visibleProjects = computed(() => {
  if (sortOrder.value === 'votes' || sortOrder.value === 'views') return activeProjects.value;
  return activeProjects.value.slice(0, visibleCount.value);
});
const canShowLess = computed(() => visibleCount.value >= activeProjects.value.length && activeProjects.value.length > PAGE_SIZE);
const canLoadMore = computed(() => visibleCount.value < activeProjects.value.length);

const loadCounts = () => {
  const hrefs = visibleProjects.value.map((p) => p.href);
  if (hrefs.length) initLikes(hrefs);
};

watch([visibleCount, activeCategory], loadCounts, { immediate: true });
onMounted(() => { fetchTopLiked(3); });

const toggleProjects = () => {
  if (canShowLess.value) {
    visibleCount.value = PAGE_SIZE;
  } else {
    visibleCount.value = Math.min(visibleCount.value + STEP, activeProjects.value.length);
  }
};
</script>

<template>
  <section id="journey-section" class="max-w-[1200px] mx-auto px-6 pt-36 pb-24 relative z-10">
    <div class="mb-11 flex flex-col items-center text-center">
      <h2 :class="['title-gradient font-display text-3xl md:text-4xl font-extrabold uppercase tracking-[5px] m-0', activeCategory.toLowerCase()]">{{ activeCategory }}</h2>
      <span class="inline-flex items-center gap-2 text-dim text-sm mt-2">
        <span class="live-dot"></span>
        <span class="opacity-90">{{ animatedCount }} projects completed</span>
      </span>
      <div class="flex flex-wrap gap-3 mt-5 justify-center">
        <button
          :class="[
            'px-5 py-2.5 rounded-lg border text-sm font-display font-bold cursor-pointer transition-all',
            sortOrder === 'newest' ? 'text-[#04141b] bg-gradient-to-br from-primary to-primary-dark border-transparent' : 'border-white/10 bg-surface text-bright hover:text-[#04141b] hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:border-transparent'
          ]"
          @click="sortOrder = 'newest'"
        >Newest</button>
        <button
          :class="[
            'px-5 py-2.5 rounded-lg border text-sm font-display font-bold cursor-pointer transition-all',
            sortOrder === 'oldest' ? 'text-[#04141b] bg-gradient-to-br from-primary to-primary-dark border-transparent' : 'border-white/10 bg-surface text-bright hover:text-[#04141b] hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:border-transparent'
          ]"
          @click="sortOrder = 'oldest'"
        >Oldest</button>
        <button
          :class="[
            'px-5 py-2.5 rounded-lg border text-sm font-display font-bold cursor-pointer transition-all inline-flex items-center gap-1.5',
            sortOrder === 'votes' ? 'text-[#04141b] bg-gradient-to-br from-primary to-primary-dark border-transparent' : 'border-white/10 bg-surface text-bright hover:text-[#04141b] hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:border-transparent'
          ]"
          @click="sortOrder = 'votes'"
        >
          <svg viewBox="0 0 24 24" width="13" height="13" fill="#e1002d" stroke="#e1002d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          Most Voted
        </button>
        <button
          :class="[
            'px-5 py-2.5 rounded-lg border text-sm font-display font-bold cursor-pointer transition-all inline-flex items-center gap-1.5',
            sortOrder === 'views' ? 'text-[#04141b] bg-gradient-to-br from-primary to-primary-dark border-transparent' : 'border-white/10 bg-surface text-bright hover:text-[#04141b] hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:border-transparent'
          ]"
          @click="sortOrder = 'views'"
        >
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
          Most Viewed
        </button>
      </div>
    </div>

    <transition name="grid" mode="out-in">
      <div
        :class="(sortOrder === 'votes' || sortOrder === 'views') ? 'flex flex-wrap gap-6 justify-center' : 'grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center'"
        :key="activeCategory + '-' + sortOrder"
      >
        <ProjectCard
          v-for="(project, i) in visibleProjects"
          :key="project.title"
          :project="project"
          :featured="i === 0"
          :centered="sortOrder === 'votes' || sortOrder === 'views'"
          @open="emit('open', $event)"
        />
      </div>
    </transition>

    <div v-if="canLoadMore || canShowLess" class="flex justify-center mt-9">
      <button
        class="px-7 py-3 rounded-lg cursor-pointer font-display text-sm font-bold tracking-wide text-[#04141b] bg-gradient-to-br from-primary to-primary-dark border-0 transition hover:brightness-110 hover:-translate-y-0.5"
        @click="toggleProjects"
      >
        {{ canShowLess ? 'Show Less Projects' : 'Load More Projects' }}
      </button>
    </div>
  </section>
</template>

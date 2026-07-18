import { ref, computed } from 'vue';
import { allProjects } from '../data/index';

const baseUrl = import.meta.env.BASE_URL;

// Singleton shared state (all components use the same instance)
const activeCategory = ref('Newbie');
const sortOrder = ref('newest');

const categoryMeta = {
  Newbie: { icon: '✨', count: `${allProjects.Newbie.length} PROJECTS` },
  Junior: { icon: '🧩', count: `${allProjects.Junior.length} PROJECTS` },
  Intermediate: { icon: '📚', count: `${allProjects.Intermediate.length} PROJECTS` },
  Advanced: { icon: '🏆', count: `${allProjects.Advanced.length} PROJECTS` },
};

const difficultyDetails = {
  Newbie: 'Perfect for beginners learning HTML and CSS basics.',
  Junior: 'Introduces more complex layouts and basic JavaScript.',
  Intermediate: 'Requires solid CSS skills and JavaScript functionality.',
  Advanced: 'Advanced - Complex applications with state management and APIs.',
};

const getProjectUrl = (href) => href.replace('./apps/', './');
const getImageUrl = (image) => baseUrl + image;
const getLiveUrl = (href) => {
  const clean = href.replace(/^\.\/apps\//, '').replace(/^\.\//, '');
  return baseUrl + clean;
};
const getSourceUrl = (project) => {
  const match = project.href.match(/\.\/apps\/([^/]+)\/([^/]+)\//);
  if (!match) return 'https://github.com/Rocabor/Frontend-Monorepo';
  return `https://github.com/Rocabor/Frontend-Monorepo/tree/main/apps/${match[1]}/${match[2]}`;
};

const activeProjects = computed(() => {
  const projects = allProjects[activeCategory.value] || [];
  const sorted = [...projects];
  if (sortOrder.value === 'newest') sorted.reverse();
  return sorted;
});

const featuredProject = computed(() => activeProjects.value[0] || null);
const regularProjects = computed(() => activeProjects.value.slice(1));

const totalProjects = computed(() =>
  Object.values(allProjects).reduce((acc, arr) => acc + (arr?.length || 0), 0)
);

const selectCategory = (diff) => {
  activeCategory.value = diff;
  document.getElementById('journey-section')?.scrollIntoView({ behavior: 'smooth' });
};

export function useProjects() {
  return {
    baseUrl,
    activeCategory,
    sortOrder,
    categoryMeta,
    difficultyDetails,
    activeProjects,
    featuredProject,
    regularProjects,
    totalProjects,
    selectCategory,
    getProjectUrl,
    getImageUrl,
    getLiveUrl,
    getSourceUrl,
  };
}

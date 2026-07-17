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
  Newbie: 'The success foundation: Ultra-precise layout with semantic HTML5 and CSS3. Focused on visual detail and consistency.',
  Junior: 'Real interactivity: Implementation of logic with JavaScript, DOM manipulation, and complex layouts using Flexbox and Grid.',
  Intermediate: 'Architectural challenges: Integration of external APIs, state management, high-complexity dynamic components.',
  Advanced: 'Production-grade mastery: Monorepos, design systems, testing, performance optimization and full architecture ownership.',
};

const getProjectUrl = (href) => href.replace('./apps/', './');
const getImageUrl = (image) => baseUrl + image;
const getLiveUrl = (href) => baseUrl + href.replace('./apps/', './');
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

const featuredProject = computed(() => activeProjects.value.find((p) => p.isFeatured) || null);
const regularProjects = computed(() => activeProjects.value.filter((p) => !p.isFeatured));

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

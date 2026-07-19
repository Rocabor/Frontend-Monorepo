import { ref, computed } from 'vue';
import { allProjects } from '../data/index';
import { useLikes } from './useLikes';
import { useViews } from './useViews';

const baseUrl = import.meta.env.BASE_URL;

// Origen de producción (GitHub Pages). Las sub-apps se sirven aquí,
// por lo que Live Preview/Share apuntan siempre a esta URL para que
// funcionen igual en móvil y desktop (incluido pnpm dev local).
const pagesOrigin = 'https://rocabor.github.io/Frontend-Monorepo';

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

const flatProjects = Object.values(allProjects).flat();

const { likeCount } = useLikes();
const { viewCount } = useViews();

const findProjectByHref = (rawHref) =>
  flatProjects.find((p) => {
    const norm = String(rawHref || '')
      .replace(/^\.\/apps\//, '')
      .replace(/^\.\//, '')
      .replace(/\/+$/, '') + '/';
    return String(p.href || '')
      .replace(/^\.\/apps\//, '')
      .replace(/^\.\//, '')
      .replace(/\/+$/, '') + '/' === norm;
  }) || null;

const getProjectUrl = (href) => href.replace('./apps/', './');
const getImageUrl = (image) => baseUrl + image;
const getLiveUrl = (href) => {
  const clean = href.replace(/^\.\/apps\//, '').replace(/^\.\//, '');
  return `${pagesOrigin}/${clean}`;
};
const getSourceUrl = (project) => {
  const match = project.href.match(/\.\/apps\/([^/]+)\/([^/]+)\//);
  if (!match) return 'https://github.com/Rocabor/Frontend-Monorepo';
  return `https://github.com/Rocabor/Frontend-Monorepo/tree/main/apps/${match[1]}/${match[2]}`;
};

const activeProjects = computed(() => {
  const projects = allProjects[activeCategory.value] || [];
  let sorted = [...projects];
  if (sortOrder.value === 'votes') {
    sorted = sorted.filter((p) => likeCount(p.href) > 0).sort((a, b) => likeCount(b.href) - likeCount(a.href));
  } else if (sortOrder.value === 'views') {
    sorted = sorted.filter((p) => viewCount(p.href) > 0).sort((a, b) => viewCount(b.href) - viewCount(a.href));
  } else if (sortOrder.value === 'newest') {
    sorted.reverse();
  }
  return sorted;
});

const activeCount = computed(() => (allProjects[activeCategory.value] || []).length);

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
    activeCount,
    totalProjects,
    selectCategory,
    getProjectUrl,
    findProjectByHref,
    getImageUrl,
    getLiveUrl,
    getSourceUrl,
  };
}

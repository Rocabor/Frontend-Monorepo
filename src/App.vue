<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { allProjects } from './data/index';

const baseUrl = import.meta.env.BASE_URL;

const getProjectUrl = (href) => {
  return href.replace('./apps/', './');
};

const getImageUrl = (image) => baseUrl + image;

const activeCategory = ref('Newbie');

const categoryMeta = {
  Newbie: { icon: '✨', count: `${allProjects.Newbie.length} PROJECTS` },
  Junior: { icon: '🧩', count: `${allProjects.Junior.length} PROJECTS` },
  Intermediate: { icon: '📚', count: `${allProjects.Intermediate.length} PROJECTS` },
  Advanced: { icon: '🏆', count: `${allProjects.Advanced.length} PROJECTS` },
};

const difficultyDetails = {
  Newbie: "The success foundation: Ultra-precise layout with semantic HTML5 and CSS3. Focused on visual detail and consistency.",
  Junior: "Real interactivity: Implementation of logic with JavaScript, DOM manipulation, and complex layouts using Flexbox and Grid.",
  Intermediate: "Architectural challenges: Integration of external APIs, state management, high-complexity dynamic components.",
  Advanced: "Production-grade mastery: Monorepos, design systems, testing, performance optimization and full architecture ownership."
};

const selectCategory = (diff) => {
  activeCategory.value = diff;
  document.getElementById('journey-section')?.scrollIntoView({ behavior: 'smooth' });
};

const sortOrder = ref('newest');

const activeProjects = computed(() => {
  const projects = allProjects[activeCategory.value] || [];
  const sorted = [...projects];
  if (sortOrder.value === 'newest') {
    sorted.reverse();
  }
  return sorted;
});

const featuredProject = computed(() => activeProjects.value.find((p) => p.isFeatured) || null);
const regularProjects = computed(() => activeProjects.value.filter((p) => !p.isFeatured));

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const totalProjects = computed(() =>
  Object.values(allProjects).reduce((acc, arr) => acc + (arr?.length || 0), 0)
);

// PROJECT DETAIL MODAL
const selectedProject = ref(null);

const openProject = (project) => {
  selectedProject.value = project;
};
const closeProject = () => {
  selectedProject.value = null;
};

// Derive live / source URLs from the project href (apps/<cat>/<slug>/)
const getLiveUrl = (href) => baseUrl + href.replace('./apps/', './');
const getSourceUrl = (project) => {
  const match = project.href.match(/\.\/apps\/([^/]+)\/([^/]+)\//);
  if (!match) return 'https://github.com/Rocabor/Frontend-Monorepo';
  return `https://github.com/Rocabor/Frontend-Monorepo/tree/main/apps/${match[1]}/${match[2]}`;
};

// BACK TO TOP (dynamic visibility)
const showTop = ref(false);
const onScroll = () => {
  showTop.value = window.scrollY > 400;
};
onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

// SOCIAL LINKS (inline SVG icons)
const ghIcon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>';
const liIcon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.5 2h-17C2.7 2 2 2.7 2 3.5v17c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-17C22 2.7 21.3 2 20.5 2zM8 19H5V9h3v10zM6.5 7.7c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.8 1.7-1.7 1.7zM19 19h-3v-5.3c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V9h3v1.4c.4-.6 1.2-1.5 2.9-1.5 2.1 0 3.7 1.4 3.7 4.3V19z"/></svg>';
const twIcon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.8 4.6a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 3.9c-.5.2-1.1.2-1.7.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.9a11.3 11.3 0 0 0 17.4-9.5c.8-.6 1.5-1.3 2-2.1z"/></svg>';
const fmIcon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2 1 7.5 12 13l9-5.5V15h2V7.5L12 2zM5 11.3V16c0 1.7 3.1 3.5 7 3.5s7-1.8 7-3.5v-4.7l-7 4.3-7-4.3z"/></svg>';

const socials = [
  { label: 'GitHub', url: 'https://github.com/Rocabor', icon: ghIcon },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/', icon: liIcon },
  { label: 'Twitter', url: 'https://twitter.com/', icon: twIcon },
  { label: 'FM Profile', url: 'https://www.frontendmentor.io/profile/Rocabor', icon: fmIcon },
];
</script>

<template>
  <main class="app-container">
    <div class="bg-glow-1"></div>
    <div class="bg-glow-2"></div>

    <!-- FIXED HEADER -->
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

    <!-- HERO -->
    <header class="hero">
      <div class="hero-content hero-grid">
        <div class="hero-details">
          <div class="hero-badge">
            <span>◆</span> PROFESSIONAL MONOREPO
          </div>
          <h1 class="hero-title">
            Crafting <span class="tech-gradient">High-Performance</span> Interfaces Through Intentional Growth.
          </h1>
          <p class="hero-text">
            This monorepo serves as a technical log of my frontend evolution. From foundational components
            to complex state-driven architectures, every line of code prioritizes scalability, clean patterns,
            and developer experience.
          </p>
        </div>

        <div class="hero-code glass-card">
          <div class="code-bar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="code-file">architecture.config.js</span>
          </div>
          <pre class="code-body"><span class="c-key">const</span> portfolio = {
  tech: [<span class="c-str">"Vue"</span>, <span class="c-str">"Tailwind"</span>, <span class="c-str">"Vite"</span>],
  focus: <span class="c-str">"Clean Architecture"</span>,
  patterns: [<span class="c-str">"Atomic Design"</span>, <span class="c-str">"TDD"</span>],
};</pre>
        </div>
      </div>

      <!-- CATEGORY CARDS -->
      <nav class="category-nav">
        <button
          v-for="(meta, diff) in categoryMeta"
          :key="diff"
          :class="['glass-card', 'cat-card', diff.toLowerCase(), { 'active-filter': activeCategory === diff }]"
          @click="selectCategory(diff)"
        >
          <div class="cat-ico">{{ meta.icon }}</div>
          <span class="cat-label">{{ diff }}</span>
          <p class="cat-text">{{ difficultyDetails[diff] }}</p>
          <div class="cat-count">
            <span>{{ meta.count }}</span>
            <span class="cat-arrow">→</span>
          </div>
        </button>
      </nav>
    </header>

    <div class="main-content">
      <section id="journey-section" class="project-section">
        <div class="section-header">
          <h2 :class="['difficulty-title', activeCategory.toLowerCase()]">
            {{ activeCategory }}
          </h2>
          <span class="count-badge">
            {{ activeProjects.length }} projects completed
          </span>
          <div class="sort-buttons">
            <button
              :class="['sort-btn', { active: sortOrder === 'newest' }]"
              @click="sortOrder = 'newest'"
            >
              Newest
            </button>
            <button
              :class="['sort-btn', { active: sortOrder === 'oldest' }]"
              @click="sortOrder = 'oldest'"
            >
              Oldest
            </button>
          </div>
        </div>

        <transition name="grid" mode="out-in">
          <div class="project-list" :key="activeCategory">
            <!-- FEATURED PROJECT -->
            <button
              v-if="featuredProject"
              class="glass-card featured-card"
              @click="openProject(featuredProject)"
            >
              <div class="featured-img">
                <img :src="getImageUrl(featuredProject.image)" :alt="featuredProject.title" loading="lazy" />
                <div class="card-img-gradient"></div>
              </div>
              <div class="featured-info">
                <div class="featured-tags">
                  <span class="badge-featured">Featured</span>
                  <span v-for="tag in featuredProject.tags.slice(0, 2)" :key="tag" class="badge-tag">{{ tag }}</span>
                </div>
                <h3 class="featured-title">{{ featuredProject.title }}</h3>
                <p class="featured-desc">{{ featuredProject.description }}</p>
                <div class="featured-actions">
                  <span class="featured-link">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                    Live Preview
                  </span>
                  <span class="featured-link">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
                    Source Code
                  </span>
                </div>
              </div>
            </button>

            <!-- REGULAR GRID -->
            <div class="project-grid">
              <button
                v-for="project in regularProjects"
                :key="project.title"
                class="glass-card project-card"
                @click="openProject(project)"
              >
                <div class="card-img-container">
                  <img :src="getImageUrl(project.image)" :alt="project.title" loading="lazy" />
                  <div class="card-img-gradient"></div>
                </div>

                <div class="card-body">
                  <h3 class="card-title">{{ project.title }}</h3>
                  <p class="card-desc">{{ project.description }}</p>
                </div>

                <div class="card-footer">
                  <div class="card-tags">
                    <span v-for="tag in project.tags" :key="tag" class="card-tag">{{ tag }}</span>
                  </div>
                  <div class="card-footer-bottom">
                    <span class="explore-label">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z"/></svg>
                      EXPLORE DEMO
                    </span>
                    <div class="card-footer-icons">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </transition>
      </section>

      <!-- BACK TO TOP (dynamic) -->
      <transition name="top">
        <button v-if="showTop" class="back-to-top-fab" @click="scrollToTop" aria-label="Back to top">
          <svg class="top-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
          <span class="top-label">TOP</span>
        </button>
      </transition>

      <!-- FOOTER BAR -->
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-bio">
            <span class="footer-brand tech-gradient">My Frontend Journey</span>
            <p class="footer-desc">
              A professional monorepo documenting my evolution as a frontend developer through
              Frontend Mentor challenges. From semantic HTML foundations to production-grade
              architectures built with Vue, Vite and Turborepo — every project prioritizes
              scalability, clean patterns and developer experience.
            </p>
            <div class="footer-stats">
              <div class="footer-stat">
                <span class="stat-num">{{ totalProjects }}</span>
                <span class="stat-label">Projects</span>
              </div>
              <div class="footer-stat">
                <span class="stat-num">4</span>
                <span class="stat-label">Levels</span>
              </div>
              <div class="footer-stat">
                <span class="stat-num">3</span>
                <span class="stat-label">Stacks</span>
              </div>
            </div>
          </div>

          <div class="footer-links">
            <span class="footer-links-title">Connect</span>
            <div class="footer-socials">
              <a
                v-for="s in socials"
                :key="s.label"
                :href="s.url"
                target="_blank"
                class="footer-social"
                :aria-label="s.label"
              >
                <span class="footer-social-icon" v-html="s.icon"></span>
                <span class="footer-social-label">{{ s.label }}</span>
              </a>
            </div>
            <p class="footer-handle">frontendmentor.io/profile/Rocabor</p>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 My Frontend Journey. Built for the modern web with premium standards.</span>
          <span>Built with Vue · Vite · Turbo</span>
        </div>
      </footer>
    </div>

    <!-- PROJECT DETAIL MODAL -->
    <transition name="modal">
      <div v-if="selectedProject" class="modal-overlay" @click.self="closeProject">
        <div class="modal-card glass-card">
          <div class="modal-header">
            <div class="modal-header-left">
              <span :class="['modal-cat-badge', selectedProject.difficulty.toLowerCase()]">
                {{ selectedProject.difficulty }}
              </span>
              <h3 class="modal-heading">{{ selectedProject.title }}</h3>
            </div>
            <button class="modal-close" @click="closeProject" aria-label="Close">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div class="modal-body">
            <div class="modal-img">
              <img :src="getImageUrl(selectedProject.image)" :alt="selectedProject.title" />
              <div class="card-img-gradient"></div>
            </div>

            <div class="modal-tags">
              <span
                v-for="tag in selectedProject.tags"
                :key="tag"
                class="modal-tag"
              >{{ tag }}</span>
            </div>
            <p class="modal-desc">{{ selectedProject.description }}</p>

            <div class="modal-actions">
              <a
                :href="getLiveUrl(selectedProject.href)"
                target="_blank"
                class="modal-btn primary"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                Live Preview
              </a>
              <a
                :href="getSourceUrl(selectedProject)"
                target="_blank"
                class="modal-btn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
                Source Code
              </a>
            </div>
          </div>

          <div class="modal-footer-bar">
            <span class="modal-foot-left">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z"/></svg>
              STRICTLY ALIGNED TO STYLE MANDATES
            </span>
            <span>EST. COGNITIVE LEVEL: SENIOR LOG</span>
          </div>
        </div>
      </div>
    </transition>
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

.bg-glow-1,
.bg-glow-2 {
  position: fixed;
  border-radius: 50%;
  filter: blur(120px);
  z-index: 0;
  pointer-events: none;
}
.bg-glow-1 {
  top: -100px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: rgba(142, 213, 255, 0.06);
}
.bg-glow-2 {
  bottom: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: rgba(56, 189, 248, 0.06);
}

.app-container {
  position: relative;
  z-index: 1;
}

/* --- FIXED HEADER --- */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background: rgba(15, 20, 24, 0.85);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 72px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  font-family: 'Geist', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
}
.header-nav {
  display: flex;
  gap: 28px;
}
.nav-link {
  background: none;
  border: none;
  color: var(--text-dim);
  font-family: 'Geist', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}
.nav-link:hover { color: var(--text-bright); }
.nav-link.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

/* --- HERO --- */
.hero {
  padding: 140px 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.hero-content {
  width: 100%;
  max-width: 1280px;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.hero-details { display: flex; flex-direction: column; gap: 24px; }
.hero-badge {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(142, 213, 255, 0.08);
  border: 1px solid rgba(142, 213, 255, 0.25);
  color: var(--color-primary);
  font-family: 'Geist', monospace;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}
.hero-title {
  font-family: 'Geist', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
  text-align: left;
}
.hero-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-dim);
  max-width: 560px;
  text-align: left;
  margin: 0;
}

/* Code mock card */
.hero-code {
  padding: 24px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}
.hero-code::before {
  content: '';
  position: absolute;
  inset: -20px;
  background: rgba(142, 213, 255, 0.05);
  filter: blur(40px);
  border-radius: 50%;
}
.code-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: rgba(239, 68, 68, 0.4); }
.dot.yellow { background: rgba(234, 179, 8, 0.4); }
.dot.green { background: rgba(34, 197, 94, 0.4); }
.code-file {
  margin-left: 8px;
  font-family: 'Geist', monospace;
  font-size: 0.6rem;
  color: rgba(189, 200, 209, 0.5);
}
.code-body {
  font-family: 'Geist', monospace;
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--text-dim);
  margin: 0;
  white-space: pre-wrap;
}
.c-key { color: var(--color-primary); }
.c-str { color: #bdc2ff; font-weight: 600; }

/* --- NAVEGACIÓN (TARJETAS DE FILTRO) --- */
.category-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.cat-card {
  text-align: left;
}

/* --- SECCIONES DE PROYECTOS --- */
.main-content {
  max-width: 1500px;
  margin: 0 auto;
  padding: 60px 24px 100px;
  position: relative;
  z-index: 1;
}
.project-section { margin-bottom: 80px; }
.section-header {
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.difficulty-title {
  font-family: 'Geist', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 0;
}
.count-badge {
  font-size: 0.95rem;
  color: var(--text-dim);
  margin-top: 8px;
  font-weight: 500;
  opacity: 0.9;
}
.section-header::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: var(--color-border);
  margin-top: 15px;
  border-radius: 2px;
}

/* --- SORT BUTTONS --- */
.sort-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  justify-content: center;
}
.sort-btn {
  padding: 10px 22px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: var(--color-surface-container);
  color: var(--text-bright);
  font-family: 'Geist', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}
.sort-btn:hover {
  color: #04141b;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-color: transparent;
}
.sort-btn.active {
  color: #04141b;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-color: transparent;
}

/* --- GRID DE PROYECTOS --- */
.project-list { display: flex; flex-direction: column; gap: 24px; }
.project-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
}

/* Featured card */
.featured-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: left;
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  transition: border-color 0.3s ease;
}
.featured-card:hover { border-color: rgba(142, 213, 255, 0.3); }
.featured-img {
  position: relative;
  height: 280px;
  overflow: hidden;
  background: var(--color-surface-container-lowest);
}
.featured-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}
.featured-card:hover .featured-img img { transform: scale(1.03); }
.featured-info {
  padding: 24px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.featured-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.badge-featured {
  font-size: 0.55rem;
  font-family: 'Geist', monospace;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(142, 213, 255, 0.1);
  color: var(--color-primary);
  border: 1px solid rgba(142, 213, 255, 0.2);
}
.badge-tag {
  font-size: 0.55rem;
  font-family: 'Geist', monospace;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-dim);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.featured-title {
  font-family: 'Geist', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-bright);
  margin: 0;
}
.featured-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-dim);
  margin: 0;
}
.featured-actions { display: flex; gap: 18px; margin-top: 4px; }
.featured-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--text-dim);
  transition: color 0.2s ease;
}
.featured-link:hover { color: var(--color-primary); }

/* Regular card */
.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: left;
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  transition: border-color 0.3s ease, transform 0.3s ease;
  position: relative;
}
.project-card:hover { transform: translateY(-6px); border-color: rgba(142, 213, 255, 0.3); }

.card-img-container {
  position: relative;
  height: 180px;
  overflow: hidden;
  background: var(--color-surface-container-lowest);
}
.card-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.project-card:hover .card-img-container img { transform: scale(1.04); }
.card-img-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 20, 24, 0.55), transparent);
}

.card-body {
  padding: 18px 18px 0;
  flex-grow: 1;
}
.card-title {
  font-size: 0.95rem;
  font-weight: 700;
  text-align: left;
  color: var(--text-bright);
  margin: 0 0 8px;
  transition: color 0.2s ease;
}
.project-card:hover .card-title { color: var(--color-primary); }
.card-desc {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--text-dim);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  margin-top: auto;
  padding: 16px 18px 18px;
}
.card-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
.card-tag {
  font-size: 0.55rem;
  font-family: 'Geist', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-dim);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 14px;
}
.explore-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Geist', monospace;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-primary);
}
.card-footer-icons {
  display: flex;
  gap: 10px;
  color: var(--text-dim);
}
.card-footer-icons svg { transition: color 0.2s ease; cursor: pointer; }
.card-footer-icons svg:hover { color: var(--color-primary); }

@media (min-width: 1100px) {
  .project-grid { grid-template-columns: repeat(4, 1fr); }
  .featured-card { flex-direction: row; }
  .featured-img { width: 58%; height: auto; min-height: 320px; }
  .featured-info { width: 42%; justify-content: center; }
}
@media (max-width: 900px) {
  .project-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .project-grid { grid-template-columns: 1fr; }
}

/* --- BACK TO TOP FAB --- */
.back-to-top-fab {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 14px;
  border-radius: 999px;
  background: rgba(15, 20, 24, 0.85);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(142, 213, 255, 0.3);
  color: var(--color-primary);
  cursor: pointer;
  transition: transform 0.2s ease;
}
.back-to-top-fab:hover { transform: scale(1.1); }
.top-arrow { animation: top-bounce 1.6s infinite; }
.top-label {
  font-family: 'Geist', monospace;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--text-dim);
}
.back-to-top-fab:hover .top-label { color: var(--color-primary); }
@keyframes top-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.top-enter-active,
.top-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.top-enter-from,
.top-leave-to { opacity: 0; transform: translateY(16px); }

/* --- FOOTER --- */
.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 40px 24px 28px;
  margin-top: 60px;
  background: var(--color-surface-container-lowest);
}
.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;
}
.footer-bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.footer-brand {
  font-family: 'Geist', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
}
.footer-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-dim);
  max-width: 560px;
  margin: 0;
}
.footer-stats {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}
.footer-stat { display: flex; flex-direction: column; gap: 2px; align-items: center; }
.stat-num {
  font-family: 'Geist', sans-serif;
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}
.stat-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-dim);
  font-weight: 600;
}
.footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.footer-links-title {
  font-family: 'Geist', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-bright);
}
.footer-socials {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}
.footer-social {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-dim);
  text-decoration: none;
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: all 0.2s ease;
}
.footer-social:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: rgba(142, 213, 255, 0.08);
  transform: translateY(-3px);
}
.footer-social-icon { display: flex; }
.footer-social-icon :deep(svg) { width: 22px; height: 22px; }
.footer-social-label {
  font-family: 'Geist', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
}
.footer-handle {
  font-size: 0.7rem;
  color: rgba(189, 200, 209, 0.45);
  font-family: 'Geist', monospace;
  margin: 0;
}
.footer-bottom {
  max-width: 1280px;
  margin: 32px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-dim);
  font-family: 'Geist', monospace;
}
.footer-bottom span:last-child { color: var(--text-bright); }

/* --- MODAL --- */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(7, 10, 13, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.modal-card {
  position: relative;
  width: min(900px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--color-surface-container);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: var(--color-surface-container-high);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.modal-header-left { display: flex; align-items: center; gap: 12px; }
.modal-cat-badge {
  font-family: 'Geist', monospace;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid transparent;
}
.modal-cat-badge.newbie { background: rgba(142, 213, 255, 0.1); color: var(--color-primary); border-color: rgba(142, 213, 255, 0.2); }
.modal-cat-badge.junior { background: rgba(189, 194, 255, 0.1); color: var(--color-secondary); border-color: rgba(189, 194, 255, 0.2); }
.modal-cat-badge.intermediate { background: rgba(255, 193, 118, 0.1); color: var(--color-tertiary); border-color: rgba(255, 193, 118, 0.2); }
.modal-cat-badge.advanced { background: rgba(255, 180, 171, 0.1); color: var(--color-error); border-color: rgba(255, 180, 171, 0.2); }
.modal-heading {
  font-family: 'Geist', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-bright);
  margin: 0;
}
.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--text-dim);
  cursor: pointer;
  transition: all 0.2s ease;
}
.modal-close:hover { background: rgba(255, 255, 255, 0.05); color: var(--text-bright); }
.modal-body { padding: 24px; }
.modal-img {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-surface-container-lowest);
  margin-bottom: 20px;
}
.modal-img img { width: 100%; height: 100%; object-fit: cover; }
.modal-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
.modal-tag {
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-dim);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.modal-desc {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-dim);
  margin: 0 0 24px;
}
.modal-actions { display: flex; gap: 14px; flex-wrap: wrap; }
.modal-btn {
  flex: 1;
  min-width: 160px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  background: var(--color-surface-container-highest);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--text-bright);
  transition: all 0.2s ease;
}
.modal-btn svg { flex-shrink: 0; }
.modal-btn:hover {
  border-color: var(--color-primary);
  background: rgba(142, 213, 255, 0.12);
  color: var(--color-primary);
}
.modal-btn.primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #04141b;
  border: none;
}
.modal-btn.primary:hover {
  color: #04141b;
  filter: brightness(1.08);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
}
.modal-footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: var(--color-surface-container-high);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-family: 'Geist', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.05em;
  color: var(--text-dim);
}
.modal-foot-left { display: inline-flex; align-items: center; gap: 6px; color: var(--color-tertiary); }

/* --- ANIMATIONS --- */
.grid-enter-active,
.grid-leave-active { transition: all 0.35s ease; }
.grid-enter-from { opacity: 0; transform: translateY(16px); }
.grid-leave-to { opacity: 0; transform: translateY(-16px); }

.modal-enter-active,
.modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-active .modal-card { transition: transform 0.25s ease; }
.modal-enter-from .modal-card { transform: scale(0.94); }

.active-filter {
  border-color: rgba(255, 255, 255, 0.45) !important;
  background: rgba(255, 255, 255, 0.1) !important;
}

/* --- RESPONSIVE --- */
@media (max-width: 1100px) {
  .hero-grid { grid-template-columns: 1fr; }
  .category-nav { grid-template-columns: repeat(2, 1fr); }
  .project-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 767px) {
  .header-nav { display: none; }
  .category-nav { grid-template-columns: 1fr; }
  .project-grid { grid-template-columns: 1fr; }
  .hero-title { text-align: center; }
  .hero-text { text-align: center; }
}
@media (min-width: 1401px) {
  .project-grid { grid-template-columns: repeat(5, 1fr); }
}
@media (min-width: 1101px) and (max-width: 1400px) {
  .project-grid { grid-template-columns: repeat(4, 1fr); }
}
</style>

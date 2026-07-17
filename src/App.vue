<script setup>
import { ref, computed } from 'vue';
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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
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

        <div class="project-grid">
          <a
            v-for="project in activeProjects"
            :key="project.title"
            :href="getProjectUrl(project.href)"
            class="glass-card project-card"
            target="_blank"
          >
            <div class="card-img-container">
              <img :src="getImageUrl(project.image)" :alt="project.title" loading="lazy" />
              <div class="card-hover-overlay">
                <span>View Project</span>
              </div>
            </div>

            <div class="card-info">
              <h3>{{ project.title }}</h3>
              <div class="tech-stack">
                <img
                  v-for="tech in project.technologies"
                  :key="tech"
                  :src="`${baseUrl}icons/${tech}.png`"
                  :alt="tech"
                  class="tech-icon"
                  loading="lazy"
                />
              </div>
            </div>

            <div :class="['card-footer-tag', activeCategory.toLowerCase()]">
              {{ activeCategory }}
            </div>
          </a>
        </div>
      </section>

      <div class="footer-nav">
        <a href="#" class="back-to-top" @click.prevent="scrollToTop">
          ↑ Back to top
        </a>
      </div>
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

/* --- GRID DE PROYECTOS --- */
.project-grid {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);
}
.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  height: 100%;
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: 15px;
  transition: transform 0.3s ease;
  position: relative;
}
.project-card:hover { transform: translateY(-8px); border-color: rgba(255,255,255,0.3); }

.card-img-container {
  position: relative;
  height: 140px;
  background: var(--color-surface-container-lowest);
}
.card-img-container img { width: 100%; height: 100%; object-fit: cover; }

.card-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s ease;
  font-weight: 800;
  color: #fff;
  font-size: 1rem;
  z-index: 2;
  backdrop-filter: blur(4px);
}
.project-card:hover .card-hover-overlay { opacity: 1; }

.card-info {
  padding: 20px 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.card-info h3 {
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  color: var(--text-bright);
  min-height: 2.8em;
  display: flex;
  align-items: center;
}
.tech-stack { display: flex; gap: 12px; justify-content: center; }
.tech-icon { width: 20px; height: 20px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }

.card-footer-tag {
  padding: 10px;
  font-size: 0.75rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}
.card-footer-tag.newbie { background: var(--diff-newbie); color: #000; }
.card-footer-tag.junior { background: var(--diff-junior); color: #000; }
.card-footer-tag.intermediate { background: var(--diff-inter); color: #000; }
.card-footer-tag.advanced { background: var(--diff-advanced); color: #000; }

/* --- FOOTER --- */
.footer-nav {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
.back-to-top {
  color: inherit;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;
  border-radius: 8px;
}
.back-to-top:hover { background: rgba(255, 255, 255, 0.1); }

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

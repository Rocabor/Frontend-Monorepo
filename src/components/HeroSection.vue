<script setup>
import { useProjects } from '../composables/useProjects';

const { categoryMeta, difficultyDetails } = useProjects();
</script>

<template>
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
</template>

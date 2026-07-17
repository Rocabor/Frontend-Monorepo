<script setup>
import { useProjects } from '../composables/useProjects';

const { totalProjects } = useProjects();

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
</template>

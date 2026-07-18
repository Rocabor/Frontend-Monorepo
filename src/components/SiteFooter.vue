<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- COLUMNA IZQUIERDA: Textos y Badges -->
      <div class="footer-bio">
        <h2 class="footer-title">
          My Frontend
          <span class="tech-gradient">Journey</span>
        </h2>

        <p class="footer-desc">
          A professional monorepo documenting my evolution as a frontend developer through
          <strong class="footer-strong">Frontend Mentor challenges</strong>.
          From semantic HTML foundations to production-grade architectures built with
          <span class="footer-accent">Vue</span>,
          <span class="footer-accent">Vite</span> and
          <span class="footer-accent-2">Turborepo</span> — every project prioritizes scalability, clean patterns and developer experience.
        </p>

        <div class="footer-badges">
          <div class="footer-badge">
            <span class="badge-ico">✨</span> Web Accessibility (A11y)
          </div>
          <div class="footer-badge">
            <span class="badge-ico">🔥</span> Fully Responsive Models
          </div>
          <div class="footer-badge">
            <span class="badge-ico">&lt;/&gt;</span> Clean Monorepo Structures
          </div>
        </div>
      </div>

      <!-- COLUMNA DERECHA: Tarjeta de Colaboración -->
      <div class="footer-links">
        <div class="footer-collab">
          <span class="footer-collab-title">Let's Collaborate</span>

          <div class="footer-socials">
            <!-- GitHub -->
            <a
              href="https://github.com/robertoborges"
              target="_blank"
              rel="noreferrer"
              class="footer-social"
              title="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>

            <!-- LinkedIn -->
            <a
              href="https://linkedin.com/in/robertoborges"
              target="_blank"
              rel="noreferrer"
              class="footer-social"
              title="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>

            <!-- Twitter / X -->
            <a
              href="https://twitter.com/robertoborges"
              target="_blank"
              rel="noreferrer"
              class="footer-social"
              title="Twitter Profile"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>

            <!-- Frontend Mentor -->
            <a
              href="https://frontendmentor.io/profile/robertoborges"
              target="_blank"
              rel="noreferrer"
              class="footer-social"
              title="Frontend Mentor Profile"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
            </a>

            <!-- Email -->
            <a
              href="mailto:robertoborgesjimez@gmail.com"
              class="footer-social"
              title="Email Me"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>

          <div class="footer-divider">
            <span class="footer-credit-block">
              <span>&copy; {{ currentYear }} My Frontend Journey</span>
              <span>Handcrafted with Vue, Vite &amp; Turborepo</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

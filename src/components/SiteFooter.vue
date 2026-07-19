<script setup>
import { onMounted, computed } from 'vue';
import { useLikes } from '../composables/useLikes';
import { useViews } from '../composables/useViews';
import { useProjects } from '../composables/useProjects';

const currentYear = new Date().getFullYear();
const { fetchTotalLikes, totalLikes } = useLikes();
const { fetchTotalViews, totalViews } = useViews();
const { totalProjects } = useProjects();

const stats = computed(() => [
  { label: 'Projects', value: totalProjects.value },
  { label: 'Likes', value: totalLikes.value },
  { label: 'Views', value: totalViews.value },
]);

onMounted(() => {
  fetchTotalLikes();
  fetchTotalViews();
});
</script>

<template>
  <footer class="relative mt-15 pt-16 pb-9 px-6 bg-linear-to-b from-[#020617] to-black overflow-hidden">
    <div class="absolute left-0 right-0 top-0 h-px header-border-glow" />
    <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-150 h-50 rounded-full bg-[rgba(56,189,248,0.08)] blur-[100px] pointer-events-none" />

    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
      <!-- COLUMNA IZQUIERDA -->
      <div class="flex flex-col gap-5 max-w-160 w-full items-center lg:items-start text-center lg:text-left">
        <h2 class="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-white m-0">
          My Frontend
          <span class="tech-gradient">Journey</span>
        </h2>

        <p class="text-base text-[#a8b3bd] leading-relaxed m-0 max-w-xl text-center lg:text-left">
          A professional monorepo documenting my evolution as a frontend developer through
          <strong class="text-[#e2e8f0] font-semibold">Frontend Mentor challenges</strong>.
          From semantic HTML foundations to production-grade architectures built with
          <span class="text-primary font-medium">Vue</span>,
          <span class="text-primary font-medium">Vite</span> and
          <span class="text-[#818cf8] font-medium">Turborepo</span> — every project prioritizes scalability, clean patterns and developer experience.
        </p>

        <div class="flex flex-wrap lg:flex-nowrap justify-center gap-3 pt-2 max-w-xl overflow-hidden">
          <div class="inline-flex items-center gap-2 bg-[rgba(2,6,23,0.4)] border border-[rgba(30,41,59,0.8)] rounded-full px-4 py-1.5 text-xs text-[#cbd5e1] font-medium transition-colors duration-300 cursor-default hover:border-[rgba(56,189,248,0.5)]" whitespace-nowrap max-w-40 truncate>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 0h24v24H0z" fill="none" /><path fill="#3ecf8e" d="M11 2.598V13.97H3.9c-.67 0-1.07-.784-.643-1.336zm2 5.433V2.333c0-1.811-2.297-2.624-3.418-1.171L1.673 11.41c-1.427 1.85-.125 4.559 2.227 4.559H11v5.698c0 1.811 2.296 2.624 3.418 1.171l7.908-10.249c1.427-1.849.126-4.558-2.227-4.558zm0 2h7.1c.669 0 1.069.784.643 1.336L13 21.402z" /></svg>
            Supabase
          </div>
          <div class="inline-flex items-center gap-2 bg-[rgba(2,6,23,0.4)] border border-[rgba(30,41,59,0.8)] rounded-full px-4 py-1.5 text-xs text-[#cbd5e1] font-medium transition-colors duration-300 cursor-default hover:border-[rgba(56,189,248,0.5)]" whitespace-nowrap max-w-40 truncate>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 0h24v24H0z" fill="none" /><path fill="#42b883" d="M14.5 3L12 7.156L9.857 3H2l10 18L22 3zM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021z" /></svg>
            <span class="text-[#64748b]">+</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 510 512" aria-hidden="true"><path d="M0 0h510v512H0z" fill="none" /><path fill="#646cff" d="M493.89 58.275L355.178 83.558L379.282 0L186.79 37.718l-2.999 50.64L15.145 58.214C3.53 57.538-3.238 65.879 1.558 77.46l244.056 427.983c5.253 8.575 17.347 8.91 22.65 0L507.575 77.419c5.4-9.676-2.874-21.018-13.685-19.144m-237 435.435L17.87 74.556l164.993 29.491l-7.778 131.365l67.632-15.608l-18.858 92.344l51.374-15.608l-25.495 123.397c-1.27 8.069 9.241 12.362 14.44.812l150.22-299.792l-74.135 14.308l10.086-34.962l140.91-25.684z" /></svg>
            Vue 3 + Vite
          </div>
          <div class="inline-flex items-center gap-2 bg-[rgba(2,6,23,0.4)] border border-[rgba(30,41,59,0.8)] rounded-full px-4 py-1.5 text-xs text-[#cbd5e1] font-medium transition-colors duration-300 cursor-default hover:border-[rgba(56,189,248,0.5)]" whitespace-nowrap max-w-40 truncate>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 0h24v24H0z" fill="none" /><path fill="#8ed5ff" d="M11.992 5.502A6.506 6.506 0 0 0 5.494 12a6.506 6.506 0 0 0 6.498 6.499A6.506 6.506 0 0 0 18.49 12a6.506 6.506 0 0 0-6.498-6.498m0 9.861a3.363 3.363 0 1 1 0-6.725a3.363 3.363 0 0 1 0 6.725" /><path fill="#8ed5ff" fill-rule="evenodd" d="M12.537 4.434V2.008C17.81 2.29 22 6.656 22 12s-4.19 9.709-9.463 9.992v-2.426C16.467 19.285 19.58 16 19.58 12s-3.113-7.285-7.043-7.566M6.26 16.962a7.56 7.56 0 0 1-1.833-4.417H2a9.97 9.97 0 0 0 2.543 6.134zm5.187 5.03v-2.426a7.55 7.55 0 0 1-4.419-1.834L5.312 19.45a9.96 9.96 0 0 0 6.134 2.542z" clip-rule="evenodd" /></svg>
            Turborepo
          </div>
          <div class="inline-flex items-center gap-2 bg-[rgba(2,6,23,0.4)] border border-[rgba(30,41,59,0.8)] rounded-full px-4 py-1.5 text-xs text-[#cbd5e1] font-medium transition-colors duration-300 cursor-default hover:border-[rgba(56,189,248,0.5)]" whitespace-nowrap max-w-40 truncate>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 0h24v24H0z" fill="none" /><path fill="none" stroke="#818cf8" stroke-dasharray="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" /></path><g fill="#818cf8"><path d="M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z" opacity="0"><animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.4s" to="1" /></path><path d="M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z" opacity="0"><animate fill="freeze" attributeName="opacity" begin="1.1s" dur="0.4s" to="1" /></path></g></svg>
            Premium Dark UI
          </div>
        </div>
      </div>

      <!-- COLUMNA DERECHA -->
      <div class="w-full max-w-105 mx-auto lg:mx-0">
        <div class="w-full bg-[rgba(2,6,23,0.6)] border border-[rgba(30,41,59,0.9)] rounded-2xl p-6 shadow-[0_0_24px_rgba(6,182,212,0.18)] transition-all duration-300 hover:border-[rgba(56,189,248,0.6)] hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] hover:-translate-y-1">
          <p class="font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#e2e8f0] text-center mb-3">
            Journey Stats
          </p>
          <div class="grid grid-cols-3 gap-3 mb-5">
            <div v-for="s in stats" :key="s.label" class="text-center rounded-xl bg-[rgba(15,23,42,0.5)] border border-[rgba(30,41,59,0.9)] py-3 px-2">
              <p class="font-mono text-[0.55rem] uppercase tracking-wider text-[#94a3b8] m-0 mb-1">
                {{ s.label }}
              </p>
              <p class="font-display text-xl font-extrabold text-primary m-0 leading-none">
                {{ s.value }}
              </p>
            </div>
          </div>

          <span class="block font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#e2e8f0] mb-4 text-center">Let's Collaborate</span>

          <div class="grid grid-cols-4 gap-3">
            <a href="https://github.com/rocabor" target="_blank" rel="noreferrer" title="GitHub Profile" aria-label="GitHub Profile" class="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(15,23,42,0.6)] border border-[rgba(30,41,59,0.9)] text-dim transition hover:text-[#22d3ee] hover:border-newbie hover:bg-[rgba(8,47,73,0.2)] hover:scale-105 active:scale-95 focus-visible:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="transition-transform duration-300 hover:scale-110"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
            </a>
            <a href="https://linkedin.com/in/robertoborges-dev" target="_blank" rel="noreferrer" title="LinkedIn Profile" aria-label="LinkedIn Profile" class="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(15,23,42,0.6)] border border-[rgba(30,41,59,0.9)] text-dim transition hover:text-[#22d3ee] hover:border-newbie hover:bg-[rgba(8,47,73,0.2)] hover:scale-105 active:scale-95 focus-visible:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="transition-transform duration-300 hover:scale-110"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>
            </a>
            <a href="https://x.com/Rocaborg" target="_blank" rel="noreferrer" title="Twitter Profile" aria-label="Twitter Profile" class="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(15,23,42,0.6)] border border-[rgba(30,41,59,0.9)] text-dim transition hover:text-[#22d3ee] hover:border-newbie hover:bg-[rgba(8,47,73,0.2)] hover:scale-105 active:scale-95 focus-visible:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" class="transition-transform duration-300 hover:scale-110"><path d="M0 0h16v16H0z" fill="none" /><path fill="currentColor" d="m9.237 7.004l4.84-5.505H12.93L8.727 6.28L5.371 1.5H1.5l5.075 7.228L1.5 14.499h1.147l4.437-5.047l3.545 5.047H14.5zM7.666 8.791l-.514-.72L3.06 2.344h1.762l3.302 4.622l.514.72l4.292 6.007h-1.761z" /></svg>
            </a>
            <a href="https://frontendmentor.io/profile/rocabor" target="_blank" rel="noreferrer" title="Frontend Mentor Profile" aria-label="Frontend Mentor Profile" class="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(15,23,42,0.6)] border border-[rgba(30,41,59,0.9)] text-dim transition hover:text-[#22d3ee] hover:border-newbie hover:bg-[rgba(8,47,73,0.2)] hover:scale-105 active:scale-95 focus-visible:scale-95">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 transition-transform duration-300 hover:scale-110"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
            </a>
          </div>

          <div class="border-t border-[rgba(15,23,42,0.9)] pt-4 text-center">
            <p class="font-mono text-[0.7rem] text-[#cbd5e1] m-0">
              &copy; {{ currentYear }} My Frontend Journey
            </p>
            <p class="font-mono text-[0.62rem] text-[#94a3b8] m-0 mt-1">
              Handcrafted with Vue, Vite &amp; Turborepo
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// Config propia del portal (no depende del cálculo de apps de baseConfig)
export default defineConfig({
  base: '/Frontend-Monorepo/',
  plugins: [vue(), typeof tailwindcss === 'function' ? tailwindcss() : tailwindcss.default()],
  build: {
    // el portal usa una carpeta propia para no pisar el dist/ de las apps
    outDir: 'dist-portal',
    emptyOutDir: true,
  },
});

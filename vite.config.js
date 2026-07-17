import { defineConfig } from 'vite';
import { baseConfig } from './packages/vite-config/index.mjs';

export default defineConfig({
  ...baseConfig(),
  base: '/Frontend-Monorepo/',
  build: {
    // el portal comparte el dist/ raíz con las apps, no debe vaciarlo
    emptyOutDir: false,
  },
});

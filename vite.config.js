import { defineConfig } from 'vite';
import { baseConfig } from './packages/vite-config/index.mjs';

export default defineConfig({
  ...baseConfig(),
  base: '/Frontend-Monorepo/',
  build: {
    // el portal usa una carpeta propia para no pisar el dist/ de las apps
    outDir: 'dist-portal',
    emptyOutDir: true,
  },
});

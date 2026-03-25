import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: './',
  build: {
    outDir: 'dist', // Asegúrate de que esto sea 'dist'
  },
});

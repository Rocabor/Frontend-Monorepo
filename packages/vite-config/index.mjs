import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export function baseConfig(plugins = []) {
  return {
    base: './',
    build: {
      outDir: 'dist',
    },
    plugins: [
      vue(), 
      typeof tailwindcss === 'function' ? tailwindcss() : tailwindcss.default()],
  };
}

export default defineConfig(baseConfig());
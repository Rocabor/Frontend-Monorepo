import { defineConfig } from 'vite'

export function baseConfig(plugins = []) {
  return {
    base: './',
    build: {
      outDir: 'dist',
    },
    plugins,
  }
}

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
})
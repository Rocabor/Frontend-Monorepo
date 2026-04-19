import { defineConfig } from 'vite'
import type { UserConfig, Plugin } from 'vite'

export function baseConfig(plugins: Plugin[] = []): UserConfig {
  return {
    base: './',
    build: {
      outDir: 'dist',
    },
    plugins,
  }
}

export default defineConfig(baseConfig())
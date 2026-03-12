import { defineConfig } from 'vite'

export default defineConfig({
  base: './',  // ← Esto es lo crítico
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',  // Mantiene el nombre
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
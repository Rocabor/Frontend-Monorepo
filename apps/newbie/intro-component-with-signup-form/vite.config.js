import tailwindcss from '@tailwindcss/vite'
import baseConfig from '@turborepo/vite-config'

export default {
  ...baseConfig,
  plugins: [tailwindcss()],
}
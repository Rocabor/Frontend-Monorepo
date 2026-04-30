import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

import { join, relative, sep } from 'path'; 

export function baseConfig(options = {}) {
  const { plugins = [] } = options;

  // Detectamos la ruta del proyecto actual
  const projectPath = process.cwd();

  // Buscamos la raíz del monorepo dividiendo por la carpeta 'apps'
  const rootPath = projectPath.split(`${sep}apps${sep}`)[0];

  // Base por defecto para el portal principal
  let dynamicBase = '/Frontend-Monorepo/';

  // Si el proyecto actual está dentro de /apps/, calculamos su subruta
  if (projectPath.includes(`${sep}apps${sep}`)) {
    const relativePath = relative(join(rootPath, 'apps'), projectPath);
    // Convertimos separadores de Windows (\) a URL (/) y limpiamos
    dynamicBase += `${relativePath.replace(/\\/g, '/')}/`;
  }

  return {
    // IMPORTANTE: Usamos dynamicBase si no se pasa una base manual
    base: options.base || dynamicBase,
    build: {
      outDir: 'dist',
      // se encarga de la limpieza cuando se ejecuta el build, carpetas "dist"
      emptyOutDir: false,
    },
    plugins: [vue(), typeof tailwindcss === 'function' ? tailwindcss() : tailwindcss.default(), ...plugins],
  };
}

export default defineConfig(baseConfig());

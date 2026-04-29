import { defineConfig } from 'vite';
import { baseConfig } from '@turborepo/vite-config';
// import Inspect from 'vite-plugin-inspect'; // Si quisieras añadir uno

export default defineConfig(
  baseConfig([
    // Inspect(), // Aquí pones plugins que SOLO use esta app
  ]),
);

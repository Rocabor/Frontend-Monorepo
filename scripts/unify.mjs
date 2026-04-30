import fs from 'fs-extra'; // Necesitarás instalar fs-extra: pnpm add -D fs-extra
import { join } from 'path';

const APP_DIR = './apps';
const DIST_DIR = './dist';

// Tipos de retos en tu monorepo
const categories = ['newbie', 'junior', 'intermediate'];

categories.forEach((category) => {
  const categoryPath = join(APP_DIR, category);

  if (fs.existsSync(categoryPath)) {
    const projects = fs.readdirSync(categoryPath);

    projects.forEach((project) => {
      const projectDist = join(categoryPath, project, 'dist');
      const targetDist = join(DIST_DIR, category, project);

      if (fs.existsSync(projectDist)) {
        fs.copySync(projectDist, targetDist);
        console.log(`✅ Copiado: ${project} -> ${targetDist}`);
      }
    });
  }
});

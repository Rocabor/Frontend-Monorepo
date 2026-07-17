import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const appsDir = path.join(root, 'apps');

// Limpia lineas que son solo badges/imagenes/enlaces de shields
const isNoiseLine = (line) => {
  const t = line.trim();
  if (!t) return true;
  if (t.startsWith('#')) return false; // titulo lo usamos aparte
  if (t.startsWith('![')) return true; // imagenes
  if (t.startsWith('![Static Badge]')) return true;
  if (/^!\[.*\]\(.*\)$/.test(t)) return true;
  if (t.startsWith('>')) return true;
  // lineas que son solo enlaces de shields
  if (t.includes('shields.io')) return true;
  if (/^\[!?\[.*\]\(.*\)\]\(.*\)$/.test(t)) return true;
  return false;
};

const cleanText = (text) => {
  return text
    .replace(/\!\[[^\]]*\]\([^)]*\)/g, '') // remueve imagenes markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // deja solo el texto del enlace
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const extractDescription = (raw) => {
  const lines = raw.split('\n');
  const title = lines.find((l) => l.startsWith('# ')) || '';
  const challengeName = title.replace(/^#\s*Frontend Mentor\s*-\s*/i, '').replace(/\s*solution$/i, '').trim();

  // 1) Bullets de "What I learned" (específicos por proyecto)
  const learnedIdx = lines.findIndex((l) => /^##\s*What I learned/i.test(l));
  if (learnedIdx !== -1) {
    const bullets = lines
      .slice(learnedIdx + 1, learnedIdx + 20)
      .map((l) => cleanText(l.replace(/^[-*]\s*/, '')))
      .filter((l) => l && !isNoiseLine('- ' + l) && l.length > 5)
      .slice(0, 2)
      .map(capitalize);
    if (bullets.length) {
      const base = challengeName ? `${challengeName}: ` : '';
      return (base + bullets.join(' ')).slice(0, 240);
    }
  }

  // 2) Fallback: bullets de "Users should be able to"
  const challengeIdx = lines.findIndex((l) => /#+\s*The challenge/i.test(l));
  if (challengeIdx !== -1) {
    const slice = lines.slice(challengeIdx + 1, challengeIdx + 30);
    const usersLine = slice.findIndex((l) => /Users should be able to/i.test(l));
    if (usersLine !== -1) {
      const bullets = slice
        .slice(usersLine + 1)
        .map((l) => cleanText(l.replace(/^[-*]\s*/, '')))
        .filter((l) => l && !isNoiseLine('- ' + l) && l.length > 3)
        .slice(0, 2)
        .map(capitalize);
      if (bullets.length) {
        const base = challengeName ? `${challengeName}: ` : '';
        return (base + bullets.join(' ')).slice(0, 240);
      }
    }
  }

  return challengeName ? capitalize(challengeName) : '';
};

const capitalize = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

const descriptions = {};
const cats = fs.readdirSync(appsDir, { withFileTypes: true }).filter((d) => d.isDirectory());

for (const cat of cats) {
  const catPath = path.join(appsDir, cat.name);
  const projects = fs.readdirSync(catPath, { withFileTypes: true }).filter((d) => d.isDirectory());
  for (const proj of projects) {
    const readme = path.join(catPath, proj.name, 'README.md');
    if (!fs.existsSync(readme)) continue;
    const raw = fs.readFileSync(readme, 'utf-8');
    const desc = extractDescription(raw);
    const key = `./apps/${cat.name}/${proj.name}/`;
    descriptions[key] = desc;
  }
}

const outPath = path.join(root, 'src', 'data', 'descriptions.json');
fs.writeFileSync(outPath, JSON.stringify(descriptions, null, 2));
console.log(`Extracted ${Object.keys(descriptions).length} project descriptions -> ${path.relative(root, outPath)}`);

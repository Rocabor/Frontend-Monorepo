const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const README_PATH = path.join(ROOT, 'README.md');
const APPS_PATH = path.join(ROOT, 'apps');

function countProjects() {
  const categories = ['newbie', 'junior', 'intermediate'];
  const counts = {};

  categories.forEach(cat => {
    const catPath = path.join(APPS_PATH, cat);
    if (fs.existsSync(catPath)) {
      const dirs = fs.readdirSync(catPath).filter(d => {
        return fs.statSync(path.join(catPath, d)).isDirectory();
      });
      counts[cat] = dirs.length;
    } else {
      counts[cat] = 0;
    }
  });

  return counts;
}

function updateReadme() {
  let content = fs.readFileSync(README_PATH, 'utf8');
  const counts = countProjects();

  const total = counts.newbie + counts.junior + counts.intermediate;

  content = content.replace(
    /\d+ projects(?!\s+across)/,
    `${total} projects`
  );

  content = content.replace(
    /Newbie Projects \((\d+)\)/,
    `Newbie Projects (${counts.newbie})`
  );

  content = content.replace(
    /Junior Projects \((\d+)\)/,
    `Junior Projects (${counts.junior})`
  );

  content = content.replace(
    /Intermediate Projects \((\d+)\)/,
    `Intermediate Projects (${counts.intermediate})`
  );

  content = content.replace(
    /\d+ completed challenges/,
    `${total} completed challenges`
  );

  content = content.replace(
    /NEWBIE-(\d+)%20projects/,
    `NEWBIE-${counts.newbie}%20projects`
  );

  content = content.replace(
    /JUNIOR-(\d+)%20projects/,
    `JUNIOR-${counts.junior}%20projects`
  );

  fs.writeFileSync(README_PATH, content);
  console.log(`Updated: ${counts.newbie} Newbie, ${counts.junior} Junior, ${counts.intermediate} Intermediate = ${total} total`);
}

updateReadme();

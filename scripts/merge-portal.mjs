import fs from 'fs-extra';

const PORTAL_DIST = './dist-portal';
const DIST = './dist';

if (fs.existsSync(PORTAL_DIST)) {
  fs.copySync(PORTAL_DIST, DIST);
  fs.removeSync(PORTAL_DIST);
  console.log('✅ Portal merged into dist/');
} else {
  console.log('⚠️ dist-portal not found, skipping merge');
}

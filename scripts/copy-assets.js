// scripts/copy-assets.js
const fs = require('fs');
const path = require('path');

const assetExtensions = [
  '.css', 
  '.svg', 
  '.png', 
  '.jpg', 
  '.jpeg', 
  '.gif', 
  '.woff', 
  '.woff2', 
  '.ttf', 
  '.eot',
  '.otf'
];

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    // Copy asset files
    const ext = path.extname(src).toLowerCase();
    if (assetExtensions.includes(ext)) {
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(src, dest);
      console.log(`Copied: ${path.relative(process.cwd(), src)}`);
    }
  }
}

// Copy all asset files from src to lib
const srcDir = path.join(__dirname, '../src');
const libDir = path.join(__dirname, '../lib');

console.log('Copying asset files (CSS, SVG, images, fonts)...');
copyRecursive(srcDir, libDir);
console.log('Asset copy complete!');
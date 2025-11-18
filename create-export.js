const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '.next');
const targetDir = path.join(__dirname, 'out');

// Create out directory
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy static files
const staticDir = path.join(sourceDir, 'static');
if (fs.existsSync(staticDir)) {
  const targetStaticDir = path.join(targetDir, '_next', 'static');
  fs.mkdirSync(path.join(targetDir, '_next'), { recursive: true });
  fs.cpSync(staticDir, targetStaticDir, { recursive: true });
  console.log('✓ Copied static files');
}

// Copy server/app HTML files
const serverAppDir = path.join(sourceDir, 'server', 'app');
if (fs.existsSync(serverAppDir)) {
  const files = fs.readdirSync(serverAppDir, { recursive: true });
  files.forEach(file => {
    const srcPath = path.join(serverAppDir, file);
    const stat = fs.statSync(srcPath);
    
    if (stat.isFile() && file.endsWith('.html')) {
      const targetPath = path.join(targetDir, file);
      const targetDirPath = path.dirname(targetPath);
      
      if (!fs.existsSync(targetDirPath)) {
        fs.mkdirSync(targetDirPath, { recursive: true });
      }
      
      fs.copyFileSync(srcPath, targetPath);
      console.log(`✓ Copied ${file}`);
    }
  });
}

// Copy public files
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const files = fs.readdirSync(publicDir, { recursive: true });
  files.forEach(file => {
    const srcPath = path.join(publicDir, file);
    const stat = fs.statSync(srcPath);
    
    if (stat.isFile()) {
      const targetPath = path.join(targetDir, file);
      const targetDirPath = path.dirname(targetPath);
      
      if (!fs.existsSync(targetDirPath)) {
        fs.mkdirSync(targetDirPath, { recursive: true });
      }
      
      fs.copyFileSync(srcPath, targetPath);
    }
  });
  console.log('✓ Copied public files');
}

console.log('\n✓ Static export created in /out directory');

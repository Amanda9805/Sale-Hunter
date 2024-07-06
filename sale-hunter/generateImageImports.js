// generateImageImports.js
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'images');
const outputFilePath = path.join(__dirname, 'src', 'imageImports.js');

fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Error reading the images directory:', err);
    return;
  }

  const importStatements = files
    .filter(file => /\.(jpg|jpeg|png)$/.test(file))
    .map((file, index) => `const image${index} = require('../images/${file}');`)
    .join('\n');

  const exportStatements = `export const images = [${files
    .filter(file => /\.(jpg|jpeg|png)$/.test(file))
    .map((_, index) => `image${index}`)
    .join(', ')}];`;

  const content = `${importStatements}\n\n${exportStatements}\n`;

  fs.writeFileSync(outputFilePath, content, 'utf8');
  console.log('Image imports generated successfully.');
});

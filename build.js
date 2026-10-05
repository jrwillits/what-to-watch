// Vercel build: wraps index.html (which is written for Claude artifacts, without
// <html>/<head>/<body>) in a full HTML document and copies everything into dist/.
const fs = require('fs');

const src = fs.readFileSync('index.html', 'utf8');
const split = src.indexOf('<div id="app"');
const head = src.slice(0, split);
const body = src.slice(split);

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
</head>
<body>
${body}
</body>
</html>
`;

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
fs.copyFileSync('catalog.json', 'dist/catalog.json');
console.log('Built dist/index.html and dist/catalog.json');

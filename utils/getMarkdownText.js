import fs from 'fs';
import path from 'path';

export default function getMarkdownText() {
  const data = fs.readFileSync(
    path.join('posts', 'portfolio', 'url-shortener-api', 'index.md'),
    'utf-8'
  );
  return data;
}

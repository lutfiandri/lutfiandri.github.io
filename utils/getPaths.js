// ! only run at server

import fs from 'fs';
import path from 'path';

export default function getPaths(...paths) {
  return fs.readdirSync(path.resolve(...paths));
}

export function getPortfolioPaths() {
  return getPaths('posts', 'portfolio');
}

export function getArticlePaths() {
  return getPaths('posts', 'article');
}

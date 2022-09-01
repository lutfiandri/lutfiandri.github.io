import fs from 'fs';
import path from 'path';
import frontmatter from 'front-matter';

function getMarkdownData(...paths) {
  const markdown = fs.readFileSync(path.join(...paths), 'utf-8');

  const { attributes, body } = frontmatter(markdown);

  return { meta: attributes, body };
}

export function getArticleData(slug) {
  return getMarkdownData('posts', 'article', slug + '.md');
}
export function getPortfolioData(slug) {
  return getMarkdownData('posts', 'portfolio', slug + '.md');
}

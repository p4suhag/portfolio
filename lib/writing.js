import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Writing posts are authored as markdown files in /writing. Each file's name is
// its URL slug; frontmatter carries the title and display date.
const WRITING_DIR = path.join(process.cwd(), 'writing');

export function getWritingSlugs() {
  return fs
    .readdirSync(WRITING_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

// Parses a single post into its frontmatter (`meta`) and rendered HTML (`html`).
export function getWritingPost(slug) {
  const raw = fs.readFileSync(path.join(WRITING_DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);
  return { slug, meta: data, html: marked.parse(content) };
}

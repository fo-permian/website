/**
 * News loader. Reads every markdown file under src/content/news/,
 * extracts frontmatter metadata, and exposes a sorted list + lookup.
 *
 * Filename convention: YYYY-MM-DD-slug.md
 * The slug part becomes the URL: /news/<slug>
 */

const modules = import.meta.glob('/src/content/news/*.md', { eager: true });

function parseFilename(path) {
  const filename = path.split('/').pop().replace(/\.md$/, '');
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
  if (match) return { date: match[1], slug: match[2] };
  return { date: null, slug: filename };
}

const all = Object.entries(modules)
  .map(([path, mod]) => {
    const { date, slug } = parseFilename(path);
    return {
      slug,
      date: mod.metadata?.date || date,
      title: mod.metadata?.title || slug,
      summary: mod.metadata?.summary || '',
      cover: mod.metadata?.cover || null,
      location: mod.metadata?.location || null,
      component: mod.default,
      ...mod.metadata
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getAllPosts() {
  return all.map(({ component, ...meta }) => meta);
}

export function getPost(slug) {
  return all.find((p) => p.slug === slug);
}

export function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

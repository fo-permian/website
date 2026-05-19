import { getAllPosts } from '$lib/data/news';
import { site } from '$lib/data/site';

export const prerender = true;

export function GET() {
  const posts = getAllPosts();
  const today = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'monthly', lastmod: today },
    { loc: '/news', priority: '0.8', changefreq: 'weekly', lastmod: today },
    ...posts.map((p) => ({
      loc: `/news/${p.slug}`,
      priority: '0.6',
      changefreq: 'yearly',
      lastmod: p.date || today
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${site.url}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
}

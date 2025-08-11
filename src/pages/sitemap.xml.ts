import { defineConfig } from 'astro/config';

export async function GET() {
  const baseUrl = 'https://alto-jardin.vercel.app';
  
  const pages = [
    {
      url: baseUrl,
      lastmod: new Date(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solicitar-cotizacion`,
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.8,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod.toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

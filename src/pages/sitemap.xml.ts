import type { APIRoute } from 'astro';

const pageModules = import.meta.glob('./**/*.astro');

const routes = Object.keys(pageModules)
  .filter((file) => !file.includes('[') && !/^\.\/(?:404|500)\.astro$/.test(file))
  .map((file) => {
    const route = file
      .replace(/^\.\//, '')
      .replace(/\.astro$/, '')
      .replace(/(?:^|\/)index$/, '');

    return route ? `/${route}/` : '/';
  })
  .sort();

const escapeXml = (value: string) =>
  value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      "'": '&apos;',
      '"': '&quot;',
    };

    return entities[character];
  });

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('The site option must be configured to generate sitemap.xml.');
  }

  const urls = routes
    .map((route) => `  <url><loc>${escapeXml(new URL(route, site).href)}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};

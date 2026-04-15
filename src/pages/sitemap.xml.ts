import type { APIRoute } from "astro";

export const prerender = true;

const paths = [
  "/",
  "/about/",
  "/services/",
  "/gallery/",
  "/contact/",
  "/book/",
  "/privacy/",
  "/terms/",
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.href.replace(/\/?$/, "/") ?? "https://example.com/";
  const urls = paths
    .map((path) => {
      const loc = new URL(path, base).href;
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

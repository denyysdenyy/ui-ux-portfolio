// TODO: замени на реальный домен при деплое
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

// TODO: замени на реальный домен при деплое
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/ua`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "uk-UA": `${SITE_URL}/ua`,
          "en-US": `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "uk-UA": `${SITE_URL}/ua`,
          "en-US": `${SITE_URL}/en`,
        },
      },
    },
  ];
}

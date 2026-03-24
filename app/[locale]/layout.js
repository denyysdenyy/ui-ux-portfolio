import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "800"],
});

// TODO: замени на реальный домен при деплое
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const metaByLocale = {
  ua: {
    title: "Karina Sevinyan — UI/UX дизайнер | Портфоліо",
    description:
      "Перетворюю складні ідеї на зрозумілі продукти. Проєктую шлях клієнта: від першого кліку до успішної покупки.",
    ogLocale: "uk_UA",
  },
  en: {
    title: "Karina Sevinyan — UI/UX Designer | Portfolio",
    description:
      "I turn complex ideas into understandable products. I design the customer journey: from the first click to a successful purchase.",
    ogLocale: "en_US",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const meta = metaByLocale[locale] || metaByLocale.ua;
  const url = `${SITE_URL}/${locale}`;

  return {
    title: meta.title,
    description: meta.description,
    authors: [{ name: "Karina Sevinyan" }],
    creator: "Karina Sevinyan",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "uk-UA": `${SITE_URL}/ua`,
        "en-US": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "Karina Sevinyan Portfolio",
      locale: meta.ogLocale,
      type: "website",
      // TODO: добавь OG-изображение 1200x630 в public/og-image.jpg и раскомментируй
      // images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      // TODO: раскомментируй после добавления OG-изображения
      // images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className={`${montserrat.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Karina Sevinyan",
              jobTitle: "UI/UX Designer",
              url: SITE_URL,
              // TODO: добавь реальные ссылки на соцсети
              sameAs: [
                // "https://instagram.com/...",
                // "https://t.me/...",
              ],
            }),
          }}
        />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-secondary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
          Skip to content
        </a>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
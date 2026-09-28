import type { Metadata, Viewport } from "next";
import { projects } from "@/data/projects";
import "./globals.css";

const siteUrl = "https://portfolio-dun-theta-9bkg4wabky.vercel.app";
const siteTitle = "Valera Masiuta — сайты, UI/UX, AI и автоматизация";
const siteDescription = "Портфолио Valera Masiuta: сайты, UI/UX, SaaS, AI-инструменты, Telegram-боты и автоматизация.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    locale: "ru_RU",
    siteName: "Valera Masiuta",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VALERA MASIUTA - WEB / UI / AI / AUTOMATION" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Valera Masiuta",
      url: siteUrl,
      jobTitle: "Web developer and digital product creator",
      knowsAbout: ["Web Development", "UI/UX", "AI", "Telegram Bots", "Automation"],
      sameAs: ["https://github.com/JohnnyChepania"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Valera Masiuta portfolio",
      url: siteUrl,
      inLanguage: "ru",
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      name: siteTitle,
      url: siteUrl,
      inLanguage: "ru",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      description: siteDescription,
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Реальные проекты Valera Masiuta",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.description,
        url: project.url,
      })),
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

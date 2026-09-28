import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valera Masiuta | Web, UI, AI & Automation",
  description: "Портфолио Valera Masiuta. Сайты, UI/UX, SaaS, AI-инструменты, Telegram-боты и автоматизация.",
  openGraph: {
    title: "Valera Masiuta | Web, UI, AI & Automation",
    description: "Сайты, интерфейсы, AI-инструменты и автоматизации от идеи до готового продукта.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valera Masiuta | Web, UI, AI & Automation",
    description: "Персональное digital-портфолио Valera Masiuta.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

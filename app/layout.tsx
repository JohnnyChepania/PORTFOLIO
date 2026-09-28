import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

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
    <html lang="ru" className={`${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

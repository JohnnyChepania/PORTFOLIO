export type ProjectCategory = "Web" | "SaaS" | "AI" | "UI/UX" | "Bots" | "Automation";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  subcategory: string;
  description: string;
  stack: string[];
  url: string;
  github?: string;
  image: string;
  alt: string;
  status: "live" | "concept" | "demo";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "vanta-athletics",
    title: "VANTA ATHLETICS",
    category: "Web",
    subcategory: "Landing",
    description: "Премиальный сайт фитнес-клуба, разработанный на Next.js.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://vanta-athletics-johnny-chepania.vercel.app/",
    image: "https://picsum.photos/seed/vanta-athletics/1400/920",
    alt: "Превью сайта VANTA ATHLETICS",
    status: "live",
    featured: true,
  },
  {
    id: "aurelia-residences",
    title: "AURELIA RESIDENCES",
    category: "Web",
    subcategory: "Real Estate / Landing",
    description: "Сайт жилого проекта с акцентом на презентацию недвижимости.",
    stack: ["Tilda"],
    url: "https://aurelia-residences-iota.vercel.app/",
    image: "https://picsum.photos/seed/aurelia-residences/1200/1000",
    alt: "Превью сайта AURELIA RESIDENCES",
    status: "live",
    featured: true,
  },
  {
    id: "nexa-ai",
    title: "NEXA AI",
    category: "AI",
    subcategory: "Landing",
    description: "Концептуальный сайт AI-продукта, созданный во Framer.",
    stack: ["Framer"],
    url: "https://heavenly-project-184875.framer.app/",
    image: "https://picsum.photos/seed/nexa-ai/1200/900",
    alt: "Превью сайта NEXA AI",
    status: "concept",
    featured: true,
  },
  {
    id: "nexora",
    title: "NEXORA",
    category: "SaaS",
    subcategory: "Web App",
    description: "SaaS-платформа для задач, командной работы, AI и автоматизации.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    url: "https://nexora-lilac-iota.vercel.app/",
    github: "https://github.com/JohnnyChepania/NEXORA",
    image: "https://picsum.photos/seed/nexora-dashboard/1400/960",
    alt: "Превью SaaS-интерфейса NEXORA",
    status: "live",
    featured: true,
  },
  {
    id: "clientradar",
    title: "CLIENTRADAR",
    category: "Bots",
    subcategory: "Telegram / Automation",
    description: "Telegram-бот для работы с вакансиями и автоматизации клиентского потока.",
    stack: ["Telegram", "Automation"],
    url: "https://t.me/clientradar_jobs_bot",
    image: "https://picsum.photos/seed/clientradar-bot/1200/900",
    alt: "Telegram-бот ClientRadar",
    status: "demo",
  },
  {
    id: "veritas-law",
    title: "VERITAS LAW",
    category: "Web",
    subcategory: "Legal Company",
    description: "Сайт юридической компании с деловой структурой и презентацией услуг.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://veritas-law-kappa.vercel.app/",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80",
    alt: "Тематическое превью юридической компании Veritas Law",
    status: "live",
  },
  {
    id: "ardea-objects",
    title: "ARDEA OBJECTS",
    category: "Web",
    subcategory: "E-commerce",
    description: "Интернет-магазин предметов интерьера с каталогом и витриной товаров.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://ardea-objects.vercel.app/",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80",
    alt: "Тематическое превью магазина предметов интерьера Ardea Objects",
    status: "live",
  },
  {
    id: "atelier-nord",
    title: "ATELIER NORD",
    category: "Web",
    subcategory: "WordPress",
    description: "Сайт архитектурно-интерьерной тематики, собранный на WordPress.",
    stack: ["WordPress"],
    url: "https://ateliernord.byethost15.com/",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    alt: "Тематическое превью архитектурно-интерьерного сайта Atelier Nord",
    status: "live",
  },
  {
    id: "nexa-flow",
    title: "NEXA FLOW",
    category: "AI",
    subcategory: "AI Service",
    description: "AI-сервис для работы с контентом и смежными рабочими задачами.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://nexa-flow-amber.vercel.app/",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    alt: "Тематическое превью AI-сервиса Nexa Flow",
    status: "live",
  },
  {
    id: "wedding-invitation",
    title: "WEDDING INVITATION",
    category: "Web",
    subcategory: "Invitation",
    description: "Свадебное приглашение с программой дня и информацией для гостей.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://wedding-invitation-demo-three.vercel.app/",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    alt: "Тематическое превью свадебного приглашения Wedding Invitation",
    status: "live",
  },
];

export const futureProjects: Project[] = [
  { id: "goal-planner", title: "GOAL PLANNER BOT", category: "Bots", subcategory: "Telegram", description: "Будущий бот для планирования целей и регулярных действий.", stack: ["Telegram", "AI"], url: "#", image: "https://picsum.photos/seed/goal-planner/800/600", alt: "Концепт Telegram-бота Goal Planner", status: "concept" },
  { id: "ai-bot", title: "AI BOT", category: "AI", subcategory: "Assistant", description: "Будущий интерфейс для локального AI-помощника.", stack: ["AI", "Web App"], url: "#", image: "https://picsum.photos/seed/ai-bot/800/600", alt: "Концепт AI-инструмента", status: "concept" },
  { id: "parser-bot", title: "PARSER BOT", category: "Automation", subcategory: "Telegram", description: "Будущий бот для сбора и структурирования данных.", stack: ["Telegram", "Parser"], url: "#", image: "https://picsum.photos/seed/parser-bot/800/600", alt: "Концепт Telegram Parser Bot", status: "concept" },
  { id: "content-automation", title: "CONTENT AUTOMATION", category: "Automation", subcategory: "Workflow", description: "Будущая система для ускорения контентных процессов.", stack: ["AI", "Automation"], url: "#", image: "https://picsum.photos/seed/content-automation/800/600", alt: "Концепт системы автоматизации контента", status: "concept" },
  { id: "lead-bot", title: "LEAD BOT", category: "Bots", subcategory: "Telegram", description: "Будущий бот для первичной квалификации обращений.", stack: ["Telegram", "CRM"], url: "#", image: "https://picsum.photos/seed/lead-bot/800/600", alt: "Концепт Telegram Lead Bot", status: "concept" },
];

export const allProjects = [...projects, ...futureProjects];

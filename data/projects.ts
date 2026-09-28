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
  status: "live" | "concept" | "demo";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "vanta-athletics",
    title: "VANTA ATHLETICS",
    category: "Web",
    subcategory: "Landing",
    description: "Премиальный сайт фитнес-клуба с акцентом на визуальный стиль, структуру услуг и конверсионные сценарии.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://vanta-athletics-johnny-chepania.vercel.app/",
    image: "https://picsum.photos/seed/vanta-athletics/1400/920",
    status: "live",
    featured: true,
  },
  {
    id: "aurelia-residences",
    title: "AURELIA RESIDENCES",
    category: "Web",
    subcategory: "Real Estate / Landing",
    description: "Премиальный сайт жилого проекта с акцентом на презентацию объекта и визуальную иерархию.",
    stack: ["Tilda"],
    url: "https://aurelia-residences-iota.vercel.app/",
    image: "https://picsum.photos/seed/aurelia-residences/1200/1000",
    status: "live",
    featured: true,
  },
  {
    id: "nexa-ai",
    title: "NEXA AI",
    category: "AI",
    subcategory: "Landing",
    description: "Концептуальный сайт AI-продукта с современным digital-интерфейсом.",
    stack: ["Framer"],
    url: "https://heavenly-project-184875.framer.app/",
    image: "https://picsum.photos/seed/nexa-ai/1200/900",
    status: "concept",
    featured: true,
  },
  {
    id: "nexora",
    title: "NEXORA",
    category: "SaaS",
    subcategory: "Web App",
    description: "SaaS-интерфейс для управления задачами, командной работой, AI и автоматизацией.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    url: "https://nexora-lilac-iota.vercel.app/",
    github: "https://github.com/JohnnyChepania/NEXORA",
    image: "https://picsum.photos/seed/nexora-dashboard/1400/960",
    status: "live",
    featured: true,
  },
  {
    id: "lumea-clinic",
    title: "LUMÉA CLINIC",
    category: "UI/UX",
    subcategory: "Healthcare / Website",
    description: "Концепт premium-сайта клиники эстетической косметологии.",
    stack: ["Wix"],
    url: "https://valeramasiuta.wixsite.com/a-clinic",
    image: "https://picsum.photos/seed/lumea-clinic/1200/1000",
    status: "concept",
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
    status: "demo",
  },
];

export const futureProjects: Project[] = [
  { id: "goal-planner", title: "GOAL PLANNER BOT", category: "Bots", subcategory: "Telegram", description: "Будущий бот для планирования целей и регулярных действий.", stack: ["Telegram", "AI"], url: "#", image: "https://picsum.photos/seed/goal-planner/800/600", status: "concept" },
  { id: "ai-bot", title: "AI BOT", category: "AI", subcategory: "Assistant", description: "Будущий интерфейс для локального AI-помощника.", stack: ["AI", "Web App"], url: "#", image: "https://picsum.photos/seed/ai-bot/800/600", status: "concept" },
  { id: "parser-bot", title: "PARSER BOT", category: "Automation", subcategory: "Telegram", description: "Будущий бот для сбора и структурирования данных.", stack: ["Telegram", "Parser"], url: "#", image: "https://picsum.photos/seed/parser-bot/800/600", status: "concept" },
  { id: "content-automation", title: "CONTENT AUTOMATION", category: "Automation", subcategory: "Workflow", description: "Будущая система для ускорения контентных процессов.", stack: ["AI", "Automation"], url: "#", image: "https://picsum.photos/seed/content-automation/800/600", status: "concept" },
  { id: "lead-bot", title: "LEAD BOT", category: "Bots", subcategory: "Telegram", description: "Будущий бот для первичной квалификации обращений.", stack: ["Telegram", "CRM"], url: "#", image: "https://picsum.photos/seed/lead-bot/800/600", status: "concept" },
];

export const allProjects = [...projects, ...futureProjects];

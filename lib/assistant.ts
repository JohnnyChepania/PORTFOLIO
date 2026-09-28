import { allProjects, Project, ProjectCategory } from "@/data/projects";

export type AssistantReply = {
  text: string;
  projects: Project[];
};

const categoryKeywords: Record<ProjectCategory, string[]> = {
  Web: ["сайт", "сайты", "лендинг", "web", "веб"],
  SaaS: ["saas", "сервис", "dashboard", "дашборд", "продукт"],
  AI: ["ai", "ии", "нейросет", "искусственный интеллект"],
  "UI/UX": ["ui", "ux", "интерфейс", "дизайн"],
  Bots: ["бот", "боты", "telegram", "телеграм"],
  Automation: ["автоматиза", "интеграци", "workflow", "процесс"],
};

export function getAssistantReply(query: string): AssistantReply {
  const normalized = query.toLowerCase();
  const matchedCategory = (Object.entries(categoryKeywords) as [ProjectCategory, string[]][]).find(([, keywords]) =>
    keywords.some((keyword) => normalized.includes(keyword)),
  )?.[0];

  if (normalized.includes("умеешь") || normalized.includes("можешь")) {
    return {
      text: "Покажу релевантные кейсы и помогу сориентироваться: сайты, SaaS, AI-инструменты, Telegram-боты и автоматизация процессов.",
      projects: allProjects.filter((project) => project.featured).slice(0, 3),
    };
  }

  if (matchedCategory) {
    const result = allProjects.filter((project) => project.category === matchedCategory).filter((project) => project.status !== "concept").slice(0, 3);
    const fallback = allProjects.filter((project) => project.category === matchedCategory).slice(0, 3);
    const projects = result.length > 0 ? result : fallback;
    return {
      text: projects.length
        ? `Для запроса «${query}» подходят ${projects.map((project) => project.title).join(", ")}. Откройте кейс, чтобы посмотреть детали.`
        : "Пока в этой категории нет опубликованных кейсов, но я добавлю их сюда позже.",
      projects,
    };
  }

  return {
    text: "Попробуйте спросить про лендинг, SaaS, AI-проект, Telegram-бота или автоматизацию.",
    projects: allProjects.filter((project) => project.featured).slice(0, 2),
  };
}

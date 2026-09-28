# VALERA MASIUTA Portfolio

Персональное digital-портфолио Valera Masiuta на Next.js, TypeScript, Tailwind CSS и Motion.

## Запуск

```bash
npm install
npm run dev
```

## Проверка

```bash
npm run lint
npm run build
```

## Архитектура

- `app/` - App Router, layout, SEO и страница портфолио.
- `components/portfolio/` - интерактивные секции и reusable UI.
- `data/projects.ts` - единый массив проектов.
- `lib/assistant.ts` - локальная логика AI-помощника.
- `public/media/` - визуальные ассеты.

Новый проект добавляется объектом в `data/projects.ts`. Реальный AI API пока не подключён.

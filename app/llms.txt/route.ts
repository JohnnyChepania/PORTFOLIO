const siteUrl = "https://portfolio-dun-theta-9bkg4wabky.vercel.app";

const body = `# Valera Masiuta

Valera Masiuta creates websites and digital products focused on Web Development, UI/UX, AI, Telegram Bots, and Automation.

## Portfolio

This site is a portfolio of real projects. Published projects:

- VANTA ATHLETICS: premium fitness club website built with Next.js. ${siteUrl}/#projects
  Project: https://vanta-athletics-johnny-chepania.vercel.app/
- AURELIA RESIDENCES: residential real estate presentation website. ${siteUrl}/#projects
  Project: https://aurelia-residences-iota.vercel.app/
- NEXA AI: conceptual AI product website created in Framer. ${siteUrl}/#projects
  Project: https://heavenly-project-184875.framer.app/
- NEXORA: SaaS platform for tasks, team collaboration, AI, and automation. ${siteUrl}/#projects
  Project: https://nexora-lilac-iota.vercel.app/
- CLIENTRADAR: Telegram bot for vacancy workflows and client-flow automation. ${siteUrl}/#ai
  Project: https://t.me/clientradar_jobs_bot

## Contact

Contact Valera Masiuta on Telegram: https://t.me/valery_masiuta
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

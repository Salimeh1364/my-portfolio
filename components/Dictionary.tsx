export type Language = "de" | "en";

export interface Project {
  id: string;
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const dictionary = {
  de: {
    nav: { work: "Arbeiten", about: "Über mich", contact: "Kontakt" },
    subtitle: "FRONTEND ENTWICKLERIN & DESIGNERIN",
    title: "KREATIVE DIGITALE ERLEBNISSE",
    desc: "Ich erstelle ästhetische, moderne und funktionale Webseiten mit warmen Farben, klaren Linien und Eleganz.",
    btnWork: "PROJEKTE SEHEN",
    btnContact: "KONTAKT",
    projectsTitle: "AUSGEWÄHLTE ARBEITEN",
    aboutTitle: "ÜBER MICH",
    aboutDesc: "Mit einem Auge für Design und Präzision im Code entwickle ich maßgeschneiderte Webseiten für Marken, die auffallen wollen.",
    modalBtnDemo: "LIVE DEMO ANSEHEN",
    modalBtnGithub: "GITHUB CODE",
    modalClose: "Schließen",
    projects: [
      {
        id: "ecommerce",
        title: "E-Commerce Plattform",
        tag: "Next.js / Tailwind",
        shortDesc: "Moderne Online-Shop Benutzeroberfläche mit Warenkorb.",
        fullDesc: "Eine performante E-Commerce-Anwendung mit responsivem Design, Produktfiltern, animiertem Warenkorb und schnellen Ladezeiten.",
        techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "/Salimeh.png", // بعداً عکس پروژه واقعی رو بگذار
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        id: "portfolio-brand",
        title: "Portfolio & Brand Design",
        tag: "React / UI Design",
        shortDesc: "Minimalistisches Portfolio für digitale Designer.",
        fullDesc: "Ein maßgeschneidertes Portfolio-Design fokussiert auf Typografie, sanfte Übergänge und perfekte Barrierefreiheit.",
        techStack: ["React", "Tailwind CSS", "Framer Motion"],
        image: "/Salimeh.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        id: "minimal-app",
        title: "Minimalistische Web-App",
        tag: "TypeScript / Web",
        shortDesc: "Produktivitäts-Dashboard mit klaren Strukturen.",
        fullDesc: "Eine elegante Web-App zur Verwaltung von Aufgaben und Projekten mit intuitiver Benutzeroberfläche und Dark Mode Support.",
        techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
        image: "/Salimeh.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ] as Project[],
  },
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    subtitle: "FRONTEND DEVELOPER & DESIGNER",
    title: "CREATIVE DIGITAL EXPERIENCES",
    desc: "Crafting aesthetic, modern, and functional websites with warm palettes, clean lines, and elegance.",
    btnWork: "VIEW WORK",
    btnContact: "GET IN TOUCH",
    projectsTitle: "SELECTED WORKS",
    aboutTitle: "ABOUT ME",
    aboutDesc: "Combining an eye for design with precision in code, I create bespoke websites for brands that want to stand out.",
    modalBtnDemo: "VIEW LIVE DEMO",
    modalBtnGithub: "GITHUB REPO",
    modalClose: "Close",
    projects: [
      {
        id: "ecommerce",
        title: "E-Commerce Platform",
        tag: "Next.js / Tailwind",
        shortDesc: "Modern online store UI with dynamic cart system.",
        fullDesc: "A high-performance e-commerce application featuring responsive layouts, product filtering, interactive cart state, and fast load times.",
        techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "/Salimeh.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        id: "portfolio-brand",
        title: "Portfolio & Brand Design",
        tag: "React / UI Design",
        shortDesc: "Minimalist portfolio showcasing creative design.",
        fullDesc: "A bespoke portfolio design with high emphasis on typography, smooth motion transitions, and accessibility.",
        techStack: ["React", "Tailwind CSS", "Framer Motion"],
        image: "/Salimeh.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        id: "minimal-app",
        title: "Minimalist Web App",
        tag: "TypeScript / Web",
        shortDesc: "Productivity dashboard with clean UX.",
        fullDesc: "An elegant productivity web app for task and workflow management, designed with clean aesthetics and dark mode support.",
        techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
        image: "/Salimeh.png",
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ] as Project[],
  },
};
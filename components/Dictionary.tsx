export type Language = "de" | "en";

export interface Project {
  id: string;
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  image?: string;
  video?: string;
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
    readMore: "Mehr lesen",
    projects: [
      {
        id: "designlens",
        title: "DesignLens",
        tag: "Next.js / Tailwind / Gemini API / Puppeteer",
        shortDesc:
          "KI-gestützter UI-Reviewer für visuelle Hierarchie, Kontrast und Typografie.",
        fullDesc:
          "DesignLens ist ein KI-gestützter UI-Reviewer. Ein Screenshot oder eine öffentliche URL genügt, und die Anwendung analysiert visuelle Hierarchie, Kontrast, Abstände und Typografie. Jede Bewertung liefert einen Gesamtscore, Scores je Achse und Hinweise darauf, was nicht stimmt, was sich ändern sollte und wo der Beleg auf dem Screen liegt. Screenshots werden direkt geprüft. Öffentliche URLs öffnet Puppeteer im Headless-Browser, danach formuliert die Gemini API die Kritik. Die Oberfläche ist auf Deutsch und Englisch verfügbar, und der API-Schlüssel verlässt den Server nicht.",
        techStack: ["Next.js", "Tailwind", "Gemini API", "Puppeteer"],
        video: "/designlens-demo.mp4",
        githubUrl: "https://github.com/Salimeh1364/design-lens",
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
    readMore: "Read More",
    projects: [
      {
        id: "designlens",
        title: "DesignLens",
        tag: "Next.js / Tailwind / Gemini API / Puppeteer",
        shortDesc:
          "AI-Powered UI Reviewer analyzing visual hierarchy, contrast, and typography.",
        fullDesc:
          "DesignLens is an AI-powered UI reviewer. Upload a screenshot or paste a public URL, and it analyzes visual hierarchy, contrast, spacing, and typography. Each review returns an overall score, scores for each axis, and notes on what is off, what to change, and where the evidence sits on the screen. Screenshots are reviewed directly. Public URLs are opened in a headless browser with Puppeteer, then critiqued by the Gemini API. The interface is available in English and German, and the API key never leaves the server.",
        techStack: ["Next.js", "Tailwind", "Gemini API", "Puppeteer"],
        video: "/designlens-demo.mp4",
        githubUrl: "https://github.com/Salimeh1364/design-lens",
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
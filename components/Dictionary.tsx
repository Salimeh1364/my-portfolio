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
  status?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  meta: string;
  points: string[];
}

const skillItems = {
  frontend: [
    "React",
    "JavaScript (ES6+)",
    "TypeScript",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "responsive design",
  ],
  apis: ["REST APIs", "Axios", "Context API", "Redux (basic)"],
  ui: ["Material UI", "Ant Design", "Bootstrap", "Figma"],
  tools: ["Git", "GitHub", "Postman", "npm", "VS Code", "Agile/Scrum"],
  ai: [
    "AI coding tools for implementation support, debugging and code refinement",
  ],
  testing: [
    "Currently building hands-on experience with automated testing and GitHub Actions",
  ],
  additional: ["WordPress (CMS basics)"],
};

const experiences: Experience[] = [
  {
    role: "Gastronomy Staff (Part-Time)",
    meta: "Intercity Hotel, Berlin, Germany | May 2025 – Present",
    points: [
      "Support day-to-day kitchen operations in a fast-paced team environment, communicating in German.",
    ],
  },
  {
    role: "Relocation to Germany",
    meta: "Feb 2025",
    points: [],
  },
  {
    role: "Frontend Developer",
    meta: "Anamis Electronic Vira Co., Iran | Feb 2024 – Aug 2024",
    points: [
      "Built and maintained a React dashboard for a vehicle license-plate recognition platform using Material UI and Ant Design.",
      "Integrated REST APIs with Axios for data synchronization; implemented location-based filtering and frontend flows for secure payment functionality.",
      "Tech: React, JavaScript, Material UI, Ant Design, Axios, REST APIs",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    meta: "Remote, Iran | Dec 2022 – Jan 2024",
    points: [
      "Developed a React single-page application for a virtual restaurant platform.",
      "Built responsive, mobile-first interfaces with Bootstrap and Ant Design, connected to backend services for dynamic menu updates and order processing.",
      "Tech: React, JavaScript, Bootstrap, Ant Design, REST APIs",
    ],
  },
  {
    role: "Frontend Developer",
    meta: "Space Time Hormozgan Co., Iran | Sep 2020 – Nov 2022",
    points: [
      "Developed responsive React features and reusable UI components, including API communication and state handling.",
      "Translated Figma mockups into maintainable frontend code in collaboration with UI/UX designers.",
      "Tech: React, JavaScript, Figma, REST APIs",
    ],
  },
  {
    role: "IT Support Assistant",
    meta: "Iran Insurance Company, Iran | Jan 2017 – Feb 2020",
    points: [
      "Provided hardware and software support in Windows environments, including user account onboarding and troubleshooting.",
    ],
  },
];

const education = [
  "MSc in Information Technology Management — Berlin School of Business and Innovation (BSBI), Berlin | Oct 2024 – Aug 2026 (first term online from Iran); official certificate pending",
  "MSc in Computer Cognition Technology — University of Mysore, India | 2011 – Jun 2013",
  "Bachelor's in Computer Software Engineering — University of Science and Application, Iran",
  "Vocational Training in Web Development",
];

const languages = [
  "Persian / Farsi: Native",
  "English: Fluent",
  "German: B1 (intermediate)",
];

const designLensEn: Project = {
  id: "designlens",
  title: "DesignLens",
  tag: "Next.js / TypeScript / Tailwind CSS",
  shortDesc:
    "Responsive frontend with reusable components and an English/German language switch.",
  fullDesc:
    "Responsive frontend application with reusable components and an English/German language switch, built with AI-assisted development and iterative refinement.",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  video: "/designlens-demo.mp4",
  demoUrl: "https://designlens-app.vercel.app/",
  githubUrl: "https://github.com/Salimeh1364",
};

const designLensDe: Project = {
  ...designLensEn,
  shortDesc:
    "Responsives Frontend mit wiederverwendbaren Komponenten und Sprachwechsel Englisch/Deutsch.",
  fullDesc:
    "Responsive Frontend-Anwendung mit wiederverwendbaren Komponenten und einem Sprachwechsel zwischen Englisch und Deutsch, entstanden mit KI-gestützter Entwicklung und schrittweiser Verfeinerung.",
};

const galleryDescriptionEn =
  "An interactive 3D art gallery featuring immersive environments, smooth animations, and engaging visual experiences.";

const applyFlowDescriptionEn =
  "A personal job application tracker to organize applications, monitor progress, and visualize job search statistics.";

const galleryDe: Project = {
  id: "portfolio-brand",
  title: "Immersive 3D Gallery",
  tag: "Next.js / TypeScript / Three.js / React Three Fiber",
  status: "In Arbeit",
  shortDesc:
    "Eine interaktive 3D-Kunstgalerie mit immersiven Umgebungen, flüssigen Animationen und ansprechenden visuellen Erlebnissen.",
  fullDesc:
    "Eine interaktive 3D-Kunstgalerie mit immersiven Umgebungen, flüssigen Animationen und ansprechenden visuellen Erlebnissen.",
  techStack: ["Next.js", "TypeScript", "Three.js", "React Three Fiber"],
};

const applyFlowDe: Project = {
  id: "minimal-app",
  title: "ApplyFlow",
  tag: "Next.js / TypeScript / Supabase / Recharts",
  status: "Demnächst",
  shortDesc:
    "Ein persönlicher Bewerbungstracker, um Bewerbungen zu organisieren, den Fortschritt zu verfolgen und Statistiken zur Jobsuche sichtbar zu machen.",
  fullDesc:
    "Ein persönlicher Bewerbungstracker, um Bewerbungen zu organisieren, den Fortschritt zu verfolgen und Statistiken zur Jobsuche sichtbar zu machen.",
  techStack: ["Next.js", "TypeScript", "Supabase", "Recharts"],
};

const galleryEn: Project = {
  id: "portfolio-brand",
  title: "Immersive 3D Gallery",
  tag: "Next.js / TypeScript / Three.js / React Three Fiber",
  status: "In Progress",
  shortDesc: galleryDescriptionEn,
  fullDesc: galleryDescriptionEn,
  techStack: ["Next.js", "TypeScript", "Three.js", "React Three Fiber"],
};

const applyFlowEn: Project = {
  id: "minimal-app",
  title: "ApplyFlow",
  tag: "Next.js / TypeScript / Supabase / Recharts",
  status: "Coming Soon",
  shortDesc: applyFlowDescriptionEn,
  fullDesc: applyFlowDescriptionEn,
  techStack: ["Next.js", "TypeScript", "Supabase", "Recharts"],
};

export const dictionary = {
  de: {
    nav: { work: "Arbeiten", about: "Über mich", contact: "Kontakt" },
    name: "Salimeh Miranipour",
    role: "Frontend Developer | React · JavaScript · TypeScript",
    location: "Berlin, Germany",
    subtitle: "Frontend Developer | React · JavaScript · TypeScript",
    title: "Salimeh Miranipour",
    desc: "Frontend-Entwicklerin mit fast vier Jahren Erfahrung im Aufbau von React-Dashboards, Single-Page-Applications und wiederverwendbaren UI-Komponenten, mit REST-API-Anbindung und Umsetzung von Figma in Code.",
    btnWork: "PROJEKTE SEHEN",
    btnContact: "KONTAKT",
    projectsTitle: "AUSGEWÄHLTE ARBEITEN",
    aboutTitle: "ÜBER MICH",
    aboutDesc:
      "Frontend-Entwicklerin mit fast vier Jahren Erfahrung im Aufbau von React-Dashboards, Single-Page-Applications und wiederverwendbaren UI-Komponenten, mit REST-API-Anbindung und Umsetzung von Figma in Code. Zurzeit vertiefe ich TypeScript, Testing und CI/CD in eigenen Projekten und setze KI-Werkzeuge ein, um die Entwicklung zu beschleunigen, wobei ich den gesamten Code prüfe. MSc in IT Management (BSBI Berlin, Aug 2026). Fließendes Englisch, Deutsch B1.",
    skillsTitle: "KENNTNISSE",
    experienceTitle: "BERUFSERFAHRUNG",
    educationTitle: "AUSBILDUNG",
    languagesTitle: "SPRACHEN",
    modalBtnDemo: "LIVE DEMO ANSEHEN",
    modalBtnGithub: "GITHUB",
    modalClose: "Schließen",
    readMore: "Mehr lesen",
    skillGroups: [
      { title: "Frontend", items: skillItems.frontend },
      { title: "APIs & State", items: skillItems.apis },
      { title: "UI & Design", items: skillItems.ui },
      { title: "Tools & Workflow", items: skillItems.tools },
      { title: "KI-gestützte Entwicklung", items: skillItems.ai },
      { title: "Testing & CI/CD", items: skillItems.testing },
      { title: "Weiteres", items: skillItems.additional },
    ] as SkillGroup[],
    experiences,
    education,
    languages,
    projects: [designLensDe, galleryDe, applyFlowDe] as Project[],
  },
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    name: "Salimeh Miranipour",
    role: "Frontend Developer | React · JavaScript · TypeScript",
    location: "Berlin, Germany",
    subtitle: "Frontend Developer | React · JavaScript · TypeScript",
    title: "Salimeh Miranipour",
    desc: "Frontend Developer with almost four years of experience building React dashboards, single-page applications and reusable UI components, with REST API integration and Figma-to-code work.",
    btnWork: "VIEW WORK",
    btnContact: "GET IN TOUCH",
    projectsTitle: "SELECTED WORKS",
    aboutTitle: "ABOUT ME",
    aboutDesc:
      "Frontend Developer with almost four years of experience building React dashboards, single-page applications and reusable UI components, with REST API integration and Figma-to-code work. Currently deepening TypeScript, testing and CI/CD through hands-on projects, and using AI tools to speed up development while reviewing all code. MSc in IT Management (BSBI Berlin, Aug 2026). Fluent English, German B1.",
    skillsTitle: "SKILLS",
    experienceTitle: "EXPERIENCE",
    educationTitle: "EDUCATION",
    languagesTitle: "LANGUAGES",
    modalBtnDemo: "VIEW LIVE DEMO",
    modalBtnGithub: "GITHUB",
    modalClose: "Close",
    readMore: "Read More",
    skillGroups: [
      { title: "Frontend", items: skillItems.frontend },
      { title: "APIs & State", items: skillItems.apis },
      { title: "UI & Design", items: skillItems.ui },
      { title: "Tools & Workflow", items: skillItems.tools },
      { title: "AI-assisted development", items: skillItems.ai },
      { title: "Testing & CI/CD", items: skillItems.testing },
      { title: "Additional", items: skillItems.additional },
    ] as SkillGroup[],
    experiences,
    education,
    languages,
    projects: [designLensEn, galleryEn, applyFlowEn] as Project[],
  },
};

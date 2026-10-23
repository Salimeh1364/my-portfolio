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
  apis: ["REST APIs", "Axios", "Context API", "Gemini API (DesignLens)"],
  ui: ["Material UI", "Ant Design", "Bootstrap", "Figma"],
  tools: ["Git", "GitHub", "Postman", "npm", "VS Code", "Agile/Scrum"],
  testing: [
    "Automated testing and GitHub Actions CI (in current portfolio projects)",
  ],
  ai: [
    "AI coding tools for implementation support, debugging and code refinement",
  ],
};

const experiences: Experience[] = [
  {
    role: "Self-study & Portfolio Projects",
    meta: "Aug 2026 – Present",
    points: [
      "Building and extending portfolio projects, including a 3D gallery and new features for DesignLens.",
      "Adding automated testing and GitHub Actions CI to these projects.",
      "Preparing for the telc German B1 exam; B2 course planned.",
    ],
  },
  {
    role: "Frontend Developer",
    meta: "Anamis Electronic Vira Co., Iran | Feb 2024 – Aug 2024",
    points: [
      "Built and maintained the React dashboard of a traffic-control platform that detects vehicle license plates, using Material UI and Ant Design.",
      "Connected the dashboard to REST APIs (Axios) to keep data in sync, and added location-based filtering.",
      "Implemented frontend flows for secure payments.",
      "Tech: React, JavaScript, Material UI, Ant Design, Axios, REST APIs",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    meta: "Remote, Iran | Dec 2022 – Jan 2024",
    points: [
      "Built a React single-page app for a virtual restaurant platform, with responsive, mobile-first design.",
      "Connected the app to backend services for menu updates and order processing.",
      "Tech: React, JavaScript, Bootstrap, Ant Design, REST APIs",
    ],
  },
  {
    role: "Frontend Developer",
    meta: "Space Time Hormozgan Co., Iran | Sep 2020 – Nov 2022",
    points: [
      "Built responsive React features and reusable UI components for a waste-collection management web panel for a client company, including a location map, separate views for managers and drivers, and a scheduling table to register and send collection requests and track their status.",
      "Handled API communication and state handling; turned Figma designs into clean frontend code together with UI/UX designers.",
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
  {
    role: "Family period (childcare)",
    meta: "2013 – 2017",
    points: [],
  },
];

const additionalExperiences: Experience[] = [
  {
    role: "Gastronomy Staff (Part-Time)",
    meta: "Intercity Hotel, Berlin, Germany | May 2025 – Present",
    points: [
      "Support day-to-day kitchen operations in a fast-paced team, communicating with colleagues in German.",
      "Reliable, organized work with clear time management during busy shifts.",
    ],
  },
];

const education = [
  "MSc in Information Technology Management — Berlin School of Business and Innovation (BSBI), Berlin | Oct 2024 – Aug 2026 | First term online from Iran, moved to Berlin in Feb 2025 | Official certificate pending",
  "MSc in Computer Cognition Technology — University of Mysore, India | 2011 – Jun 2013",
  "BSc in Computer Software Engineering — University of Science and Application, Iran | 2007 – 2010",
];

const certificates = [
  "Web Development Course (54 hours) | Certificate: 27 Jan 2020",
];

const languages = [
  "Persian / Farsi: Native",
  "English: Fluent",
  "German: B1 (telc exam upcoming, B2 planned)",
];

const designLensEn: Project = {
  id: "designlens",
  title: "DesignLens",
  tag: "Next.js / TypeScript / Tailwind CSS",
  shortDesc:
    "An AI-powered UI/UX design critique tool that helps improve website layouts and user experiences through actionable feedback.",
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
    "Ein KI-gestütztes UI/UX-Design-Kritik-Tool, das Website-Layouts und Nutzererlebnisse durch umsetzbares Feedback verbessert.",
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
    availability:
      "Berechtigt zur Vollzeitbeschäftigung in Deutschland | Offen für einen Umzug innerhalb Deutschlands",
    subtitle: "Frontend Developer | React · JavaScript · TypeScript",
    title: "Salimeh Miranipour",
    desc: "Frontend-Entwicklerin mit 4 Jahren Erfahrung im Aufbau von React-Dashboards, Single-Page-Applications und wiederverwendbaren UI-Komponenten, mit REST-API-Anbindung und Umsetzung von Figma in Code.",
    btnWork: "PROJEKTE SEHEN",
    btnContact: "KONTAKT",
    projectsTitle: "AUSGEWÄHLTE ARBEITEN",
    aboutTitle: "ÜBER MICH",
    aboutDesc:
      "Frontend-Entwicklerin mit 4 Jahren Erfahrung im Aufbau von React-Dashboards, Single-Page-Applications und wiederverwendbaren UI-Komponenten, mit REST-API-Anbindung und Umsetzung von Figma in Code. DesignLens ist eine zweisprachige (EN/DE) Next.js- und TypeScript-Anwendung, die die Gemini API für KI-basierte UI-Kritik nutzt; weitere Portfolio-Projekte, darunter eine 3D-Galerie, sind in Arbeit. MSc in IT Management (BSBI Berlin, 2026). Fließendes Englisch, Deutsch B1 (telc-Prüfung steht bevor, B2 geplant).",
    skillsTitle: "KENNTNISSE",
    experienceTitle: "BERUFSERFAHRUNG",
    additionalExperienceTitle: "WEITERE BERUFSERFAHRUNG",
    educationTitle: "AUSBILDUNG",
    certificatesTitle: "ZERTIFIKATE & KURSE",
    languagesTitle: "SPRACHEN",
    modalBtnDemo: "LIVE DEMO ANSEHEN",
    modalBtnGithub: "GITHUB",
    modalClose: "Schließen",
    readMore: "Mehr lesen",
    backToTop: "Nach oben",
    skillGroups: [
      { title: "Frontend", items: skillItems.frontend },
      { title: "APIs & State", items: skillItems.apis },
      { title: "UI & Design", items: skillItems.ui },
      { title: "Tools & Workflow", items: skillItems.tools },
      { title: "Testing & CI/CD", items: skillItems.testing },
      { title: "KI-gestützte Entwicklung", items: skillItems.ai },
    ] as SkillGroup[],
    experiences,
    additionalExperiences,
    education,
    certificates,
    languages,
    projects: [designLensDe, galleryDe, applyFlowDe] as Project[],
  },
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    name: "Salimeh Miranipour",
    role: "Frontend Developer | React · JavaScript · TypeScript",
    location: "Berlin, Germany",
    availability:
      "Authorized for full-time work in Germany | Open to relocation within Germany",
    subtitle: "Frontend Developer | React · JavaScript · TypeScript",
    title: "Salimeh Miranipour",
    desc: "Frontend Developer with 4 years of experience building React dashboards, single-page applications and reusable UI components, with REST API integration and Figma-to-code work.",
    btnWork: "VIEW WORK",
    btnContact: "GET IN TOUCH",
    projectsTitle: "SELECTED WORKS",
    aboutTitle: "ABOUT ME",
    aboutDesc:
      "Frontend Developer with 4 years of experience building React dashboards, single-page applications and reusable UI components, with REST API integration and Figma-to-code work. Built DesignLens, a bilingual (EN/DE) Next.js and TypeScript app that uses the Gemini API for AI-based UI critique, and currently working on further portfolio projects, including a 3D gallery. MSc in IT Management (BSBI Berlin, 2026). Fluent English, German B1 (telc exam upcoming, B2 planned).",
    skillsTitle: "SKILLS",
    experienceTitle: "EXPERIENCE",
    additionalExperienceTitle: "ADDITIONAL WORK EXPERIENCE",
    educationTitle: "EDUCATION",
    certificatesTitle: "CERTIFICATES & COURSES",
    languagesTitle: "LANGUAGES",
    modalBtnDemo: "VIEW LIVE DEMO",
    modalBtnGithub: "GITHUB",
    modalClose: "Close",
    readMore: "Read More",
    backToTop: "Back to top",
    skillGroups: [
      { title: "Frontend", items: skillItems.frontend },
      { title: "APIs & State", items: skillItems.apis },
      { title: "UI & Design", items: skillItems.ui },
      { title: "Tools & Workflow", items: skillItems.tools },
      { title: "Testing & CI/CD", items: skillItems.testing },
      { title: "AI-assisted development", items: skillItems.ai },
    ] as SkillGroup[],
    experiences,
    additionalExperiences,
    education,
    certificates,
    languages,
    projects: [designLensEn, galleryEn, applyFlowEn] as Project[],
  },
};

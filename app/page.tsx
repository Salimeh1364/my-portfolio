'use client';

import Link from 'next/link';
import { useState } from 'react';

// TypeScript interface supporting bilingual content (English and German)
interface Project {
  id: number;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

// Projects database with multi-language support
const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: {
      en: "Crypto Analytics Dashboard",
      de: "Krypto-Analyse-Dashboard"
    },
    description: {
      en: "Real-time cryptocurrency monitoring dashboard with interactive charts and custom dark theme.",
      de: "Echtzeit-Kryptowährungs-Monitoring-Dashboard mit interaktiven Diagrammen und individuellem Dark Theme."
    },
    tags: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: {
      en: "Weather Forecast App",
      de: "Wettervorhersage-App"
    },
    description: {
      en: "Weather forecast application with smart city search and live API data integration.",
      de: "Wettervorhersage-Anwendung mit intelligenter Stadtsuche und Live-API-Datenintegration."
    },
    tags: ["React", "REST API", "Tailwind"],
    githubUrl: "https://github.com"
  }
];

export default function Home() {
  // State to manage current active language ('en' or 'de')
  const [lang, setLang] = useState<'en' | 'de'>('en');

  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f7]">
      
      {/* =========================================================
          1. HEADER & NAVIGATION SECTION
         ========================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111111]/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo Brand */}
          <Link href="/" className="text-lg font-black tracking-widest text-[#ffcc00]">
            ADRI<span className="text-white">.DEV</span>
          </Link>

          {/* Navigation links based on active language */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider text-slate-400">
            <Link href="#work" className="hover:text-[#ffcc00] transition-colors">
              {lang === 'en' ? 'WORK' : 'PROJEKTE'}
            </Link>
            <Link href="#skills" className="hover:text-[#ffcc00] transition-colors">
              {lang === 'en' ? 'SKILLS' : 'FÄHIGKEITEN'}
            </Link>
            <Link href="#contact" className="hover:text-[#ffcc00] transition-colors">
              {lang === 'en' ? 'CONTACT' : 'KONTAKT'}
            </Link>
          </nav>

          {/* Language Switcher and CTA Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              className="text-xs font-mono font-bold bg-slate-800 text-[#ffcc00] px-3 py-1.5 rounded-sm border border-slate-700 hover:border-[#ffcc00] transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'DE' : 'EN'}
            </button>

            <a 
              href="#contact" 
              className="border border-slate-700 px-4 py-2 text-xs font-bold text-slate-200 hover:border-[#ffcc00] hover:text-[#ffcc00] transition-all rounded-sm"
            >
              {lang === 'en' ? "LET'S TALK" : 'KONTAKTIEREN'}
            </a>
          </div>

        </div>
      </header>

      {/* =========================================================
          2. HERO SECTION
         ========================================================= */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="inline-flex items-center space-x-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse" />
          <p className="text-[#ffcc00] tracking-widest text-xs font-bold uppercase">
            {lang === 'en' ? 'Frontend Developer' : 'Frontend Entwickler'}
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none mb-6 text-white uppercase">
          {lang === 'en' ? 'BUILDING FAST' : 'SCHNELLE WEB-'} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff6600]">
            {lang === 'en' ? 'WEB INTERFACES' : 'INTERFACES BAUEN'}
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-light mb-8">
          {lang === 'en' 
            ? 'Frontend developer focused on building fast and scalable web applications using React, Next.js, and Tailwind CSS.'
            : 'Frontend-Entwickler mit Fokus auf die Entwicklung schneller und skalierbarer Webanwendungen mit React, Next.js und Tailwind CSS.'
          }
        </p>
      </main>

      {/* =========================================================
          3. PROJECTS SECTION (Rendered dynamically using .map)
         ========================================================= */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-800/80">
        <h2 className="text-2xl font-black uppercase text-white mb-8">
          {lang === 'en' ? 'Featured Projects' : 'Ausgewählte Projekte'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <article 
              key={project.id} 
              className="bg-slate-900/40 border border-slate-800 p-6 rounded-sm hover:border-[#ffcc00]/50 transition-all"
            >
              {/* Thumbnail Placeholder */}
              <div className="bg-[#18181b] aspect-video rounded-sm mb-4 border border-slate-800 flex items-center justify-center text-slate-500 text-xs font-mono">
                [ {project.title.en} PREVIEW ]
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-[10px] font-mono bg-slate-800 text-[#ffcc00] px-2 py-1 rounded-sm border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Dynamic Project Title and Description based on active language */}
              <h3 className="text-xl font-bold text-white mb-2">{project.title[lang]}</h3>
              <p className="text-slate-400 text-sm font-light mb-6">{project.description[lang]}</p>

              {/* Action Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/60">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-300 hover:text-[#ffcc00]">
                  GITHUB CODE ↗
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold bg-[#ffcc00] text-[#111111] px-3 py-1.5 rounded-sm">
                    LIVE DEMO
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
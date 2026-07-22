"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { dictionary, Language } from "./Dictionary";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export default function Navbar({ lang, onLanguageChange }: NavbarProps) {
  const t = dictionary[lang].nav;

  return (
    <nav className="flex justify-between items-center px-8 py-8 max-w-6xl mx-auto border-b border-[#E8DFC8] dark:border-[#3A3430]">
      <span className="text-xl font-light tracking-[0.2em] text-[#2C2825] dark:text-[#F3ECE4] uppercase">
        SALIMEH
      </span>

      <div className="flex items-center gap-6 md:gap-10 font-sans text-xs tracking-widest uppercase text-[#5C534E] dark:text-[#D1C7BD]">
        <div className="hidden md:flex gap-8">
          <a
            href="#work"
            className="hover:text-[#C86D51] dark:hover:text-[#E07A5F] transition-colors"
          >
            {t.work}
          </a>
          <a
            href="#about"
            className="hover:text-[#C86D51] dark:hover:text-[#E07A5F] transition-colors"
          >
            {t.about}
          </a>
          <a
            href="#contact"
            className="hover:text-[#C86D51] dark:hover:text-[#E07A5F] transition-colors"
          >
            {t.contact}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} onLanguageChange={onLanguageChange} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
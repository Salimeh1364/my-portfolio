"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import About from "../components/About";
import Contact from "../components/Contact";
import { Language } from "../components/Dictionary";

export default function Home() {
  const [lang, setLang] = useState<Language>("de");

  // Update document title based on selected language
  useEffect(() => {
    if (lang === "de") {
      document.title = "Salimeh | Frontend Entwicklerin";
    } else {
      document.title = "Salimeh | Frontend Developer";
    }
  }, [lang]);

  return (
    <div lang={lang} translate="no" className="notranslate">
      <main className="min-h-screen bg-[#F9F5F0] dark:bg-[#1A1817] text-[#2C2825] dark:text-[#EFE8DF] font-serif transition-colors duration-300">
        <Navbar lang={lang} onLanguageChange={setLang} />
        <Hero lang={lang} />
        <SelectedWorks lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}
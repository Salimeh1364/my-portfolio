"use client";

import { useEffect, useState } from "react";
import { dictionary, Language } from "./Dictionary";

interface BackToTopProps {
  lang: Language;
}

export default function BackToTop({ lang }: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const label = dictionary[lang].backToTop;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#B05B41] px-3.5 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#9A4E38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C2825] dark:focus-visible:outline-[#F3ECE4] sm:px-4 md:bottom-8 md:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M10 15V5M5.5 9.5 10 5l4.5 4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

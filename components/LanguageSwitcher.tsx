"use client";

import { Language } from "./Dictionary";

interface LanguageSwitcherProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export default function LanguageSwitcher({
  lang,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div className="flex gap-1 text-[11px] font-medium border border-[#D8C7B8] rounded-full p-1 bg-[#EFE8DF] z-50">
      <button
        type="button"
        onClick={() => onLanguageChange("de")}
        className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
          lang === "de"
            ? "bg-[#C86D51] text-white shadow-sm"
            : "text-[#5C534E] hover:text-[#2C2825]"
        }`}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => onLanguageChange("en")}
        className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
          lang === "en"
            ? "bg-[#C86D51] text-white shadow-sm"
            : "text-[#5C534E] hover:text-[#2C2825]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
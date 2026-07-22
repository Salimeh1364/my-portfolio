"use client";

import { dictionary, Language } from "./Dictionary";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = dictionary[lang];

  return (
    <section id="about" className="bg-[#EFE5DC] py-24 mt-10 border-t border-[#E5D5C8]">
      <div className="max-w-4xl mx-auto px-8 text-center space-y-6">
        <h2 className="text-3xl font-light tracking-widest uppercase text-[#2C2825]">
          {t.aboutTitle}
        </h2>
        <p className="font-sans text-lg text-[#5C534E] leading-relaxed max-w-2xl mx-auto font-light">
          {t.aboutDesc}
        </p>
      </div>
    </section>
  );
}
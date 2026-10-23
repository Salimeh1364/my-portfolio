"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { dictionary, Language } from "./Dictionary";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = dictionary[lang];

  return (
    <section className="max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-8"
      >
        {/* Subtitle */}
        <p className="font-sans text-xs tracking-[0.2em] text-[#C86D51] dark:text-[#E07A5F] font-semibold">
          {t.role}
        </p>

        <h1 className="text-5xl md:text-7xl font-normal leading-[1.15] tracking-tight text-[#2C2825] dark:text-[#F3ECE4]">
          {t.name}
        </h1>

        <div className="font-sans text-sm tracking-wide text-[#6B6059] dark:text-[#D1C7BD] space-y-1">
          <p>{t.location}</p>
          <p>{t.availability}</p>
        </div>

        <p className="font-sans text-[#6B6059] dark:text-[#D1C7BD] text-base leading-relaxed max-w-md font-light">
          {t.desc}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex gap-4 font-sans text-xs tracking-widest uppercase">
          <a
            href="#work"
            className="bg-[#C86D51] text-white px-8 py-4 rounded-full hover:bg-[#B05B41] transition shadow-md font-medium"
          >
            {t.btnWork}
          </a>
          <a
            href="#contact"
            className="border border-[#2C2825] dark:border-[#F3ECE4] text-[#2C2825] dark:text-[#F3ECE4] px-8 py-4 rounded-full hover:bg-[#EFE8DF] dark:hover:bg-[#322E2B] transition font-medium"
          >
            {t.btnContact}
          </a>
        </div>
      </motion.div>

      {/* Photo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-[320px] h-[400px] rounded-[30px] border-2 border-[#E5D5C8] dark:border-[#3A3430] bg-[#EFE5DC] dark:bg-[#2A2624] shadow-sm overflow-hidden relative shrink-0"
      >
        <Image
          src="/Salimeh.png"
          alt="Salimeh Miranipour, Frontend Developer"
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover object-[center_top]"
          priority
        />
      </motion.div>
    </section>
  );
}
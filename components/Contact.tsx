"use client";

import { motion } from "framer-motion";
import { dictionary, Language } from "./Dictionary";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const isDe = lang === "de";
  const t = dictionary[lang];

  return (
    <section id="contact" className="bg-[#EFE5DC] py-24 border-t border-[#E5D5C8]">
      <div className="max-w-4xl mx-auto px-8 text-center space-y-8 font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C86D51]">
            {isDe ? "LASS UNS REDEN" : "LET'S CONNECT"}
          </span>
          <h2 className="text-4xl font-serif text-[#2C2825]">
            {isDe ? "Kontakt aufnehmen" : "Get In Touch"}
          </h2>
          <p className="text-[#5C534E] text-base leading-relaxed max-w-lg mx-auto font-light">
            {isDe
              ? "Haben Sie ein Projekt im Sinn oder möchten Sie einfach Hallo sagen? Schreiben Sie mir gerne eine Nachricht!"
              : "Have a project in mind or just want to say hi? Feel free to reach out to me!"}
          </p>
        </motion.div>

        {/* Action Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 pt-4 text-xs tracking-widest uppercase font-semibold"
        >
          <a
            href="mailto:s.miranipour@gmail.com"
            className="bg-[#2C2825] text-white px-8 py-4 rounded-full hover:bg-[#C86D51] transition duration-300 shadow-md"
          >
            {isDe ? "E-Mail Senden" : "Send an Email"}
          </a>
          <a
            href={t.phoneHref}
            className="border border-[#2C2825] text-[#2C2825] px-8 py-4 rounded-full hover:bg-[#E2D5C8] transition"
          >
            {t.phone}
          </a>
          <a
            href="https://www.linkedin.com/in/salimeh-miranipour/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2C2825] text-[#2C2825] px-8 py-4 rounded-full hover:bg-[#E2D5C8] transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Salimeh1364"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2C2825] text-[#2C2825] px-8 py-4 rounded-full hover:bg-[#E2D5C8] transition"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project, dictionary, Language } from "./Dictionary";

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  lang,
  onClose,
}: ProjectModalProps) {
  const t = dictionary[lang];

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop (Backdrop with blur & animation) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#2C2825]/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#F9F5F0] rounded-[32px] border border-[#E5D5C8] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-[#EFE5DC] border border-[#D8C7B8] flex items-center justify-center text-[#2C2825] hover:bg-[#C86D51] hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto p-6 md:p-10 space-y-8 font-sans">
              {/* Image Preview */}
              <div className="relative w-full h-[240px] md:h-[300px] rounded-[20px] overflow-hidden bg-[#EFE5DC] border border-[#E0D2C5]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & Tag */}
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-[#C86D51] uppercase">
                  {project.tag}
                </span>
                <h3 className="text-3xl font-serif text-[#2C2825]">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#5C534E] text-base leading-relaxed font-light">
                {project.fullDesc}
              </p>

              {/* Tech Stack Chips */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#2C2825]">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#EFE5DC] border border-[#D8C7B8] text-[#5C534E] text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 text-xs tracking-widest uppercase">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C86D51] text-white px-6 py-3.5 rounded-full hover:bg-[#B05B41] transition shadow-md font-semibold"
                  >
                    {t.modalBtnDemo}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#2C2825] text-[#2C2825] px-6 py-3.5 rounded-full hover:bg-[#EFE8DF] transition font-semibold"
                  >
                    {t.modalBtnGithub}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
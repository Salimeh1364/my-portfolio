"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { dictionary, Language, Project } from "./Dictionary";
import ProjectModal from "./ProjectModal";

interface SelectedWorksProps {
  lang: Language;
}

export default function SelectedWorks({ lang }: SelectedWorksProps) {
  const t = dictionary[lang];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="max-w-6xl mx-auto px-8 py-20 border-t border-[#E8DFC8] dark:border-stone-800">
      {/* تیتر اصلی: اضافه شدن dark:text-[#EFE5DC] */}
      <h2 className="text-2xl font-light tracking-widest text-center uppercase mb-16 text-[#2C2825] dark:text-[#EFE5DC]">
        {t.projectsTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
        {t.projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer h-full flex flex-col"
          >
            <div className="w-full h-[360px] bg-[#EFE5DC] rounded-[28px] border border-[#E0D2C5] mb-4 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center text-[#9E8B7E] text-xs uppercase tracking-widest overflow-hidden relative">
              {project.video ? (
                <div className="w-full h-full overflow-hidden rounded-[2rem] bg-[#f2ebd9]">
                  <video
                    ref={(node) => {
                      if (node) node.muted = true;
                    }}
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label={`${project.title} demo`}
                    className="w-full h-full object-fill rounded-[2rem] block"
                  />
                </div>
              ) : (
                <span className="group-hover:scale-105 transition-transform duration-300">
                  [ {project.title} Preview ]
                </span>
              )}
              {project.status && (
                <span className="absolute top-4 left-4 z-10 rounded-full border border-[#D8C7B8] bg-[#F9F5F0]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#5C534E]">
                  {project.status}
                </span>
              )}
            </div>
            {/* عنوان پروژه: اضافه شدن dark:text-[#EFE5DC] */}
            <h3 className="text-lg font-serif text-[#2C2825] dark:text-[#EFE5DC] group-hover:text-[#C86D51] dark:group-hover:text-[#C86D51] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-[#C86D51] font-semibold uppercase tracking-wider mt-1">
              {project.tag}
            </p>
            <p className="text-sm text-[#5C534E] dark:text-[#C9BDB4] font-light leading-relaxed mt-2">
              {project.shortDesc}
            </p>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedProject(project);
              }}
              className="mt-4 self-start text-xs tracking-widest uppercase text-[#C86D51] border border-[#C86D51] px-4 py-2 rounded-full hover:bg-[#C86D51] hover:text-white transition-colors cursor-pointer"
            >
              {t.readMore}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Project Modal Component */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
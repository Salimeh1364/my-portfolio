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
            className="group cursor-pointer"
          >
            <div className="w-full h-[360px] bg-[#EFE5DC] rounded-[28px] border border-[#E0D2C5] mb-4 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center text-[#9E8B7E] text-xs uppercase tracking-widest overflow-hidden relative">
              <span className="group-hover:scale-105 transition-transform duration-300">
                [ {project.title} Preview ]
              </span>
            </div>
            {/* عنوان پروژه: اضافه شدن dark:text-[#EFE5DC] */}
            <h3 className="text-lg font-serif text-[#2C2825] dark:text-[#EFE5DC] group-hover:text-[#C86D51] dark:group-hover:text-[#C86D51] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-[#C86D51] font-semibold uppercase tracking-wider mt-1">
              {project.tag}
            </p>
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
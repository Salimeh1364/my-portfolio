"use client";

import { dictionary, Language } from "./Dictionary";

interface ProfileSectionsProps {
  lang: Language;
}

export default function ProfileSections({ lang }: ProfileSectionsProps) {
  const t = dictionary[lang];

  return (
    <>
      <section
        id="skills"
        aria-labelledby="skills-title"
        className="max-w-6xl mx-auto px-8 py-20 border-t border-[#E8DFC8] dark:border-stone-800"
      >
        <h2
          id="skills-title"
          className="text-2xl font-light tracking-widest text-center uppercase mb-16 text-[#2C2825] dark:text-[#EFE5DC]"
        >
          {t.skillsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans">
          {t.skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C86D51] mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 bg-[#EFE5DC] border border-[#D8C7B8] text-[#5C534E] text-xs rounded-full font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-title"
        className="bg-[#EFE5DC] py-24 border-t border-[#E5D5C8]"
      >
        <div className="max-w-3xl mx-auto px-8">
          <h2
            id="experience-title"
            className="text-3xl font-light tracking-widest uppercase text-center text-[#2C2825] mb-16"
          >
            {t.experienceTitle}
          </h2>
          <ol className="space-y-12 font-sans">
            {t.experiences.map((job) => (
              <li key={`${job.role}-${job.meta}`}>
                <article>
                  <h3 className="text-xl font-serif text-[#2C2825]">{job.role}</h3>
                  <p className="text-sm text-[#C86D51] mt-1">{job.meta}</p>
                  {job.points.length > 0 && (
                    <ul className="mt-4 space-y-2 text-[#5C534E] text-base leading-relaxed font-light list-disc pl-5">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            ))}
          </ol>
          <h3 className="text-xl font-light tracking-widest uppercase text-center text-[#2C2825] mt-20 mb-12">
            {t.additionalExperienceTitle}
          </h3>
          <ol className="space-y-12 font-sans">
            {t.additionalExperiences.map((job) => (
              <li key={`${job.role}-${job.meta}`}>
                <article>
                  <h3 className="text-xl font-serif text-[#2C2825]">{job.role}</h3>
                  <p className="text-sm text-[#C86D51] mt-1">{job.meta}</p>
                  {job.points.length > 0 && (
                    <ul className="mt-4 space-y-2 text-[#5C534E] text-base leading-relaxed font-light list-disc pl-5">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="education"
        aria-labelledby="education-title"
        className="max-w-6xl mx-auto px-8 py-20 border-t border-[#E8DFC8] dark:border-stone-800"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="education-title"
            className="text-2xl font-light tracking-widest text-center uppercase mb-16 text-[#2C2825] dark:text-[#EFE5DC]"
          >
            {t.educationTitle}
          </h2>
          <ul className="space-y-4 font-sans text-[#5C534E] dark:text-[#D1C7BD] text-base leading-relaxed font-light">
            {t.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-[#C86D51] mt-16 mb-4">
            {t.certificatesTitle}
          </h3>
          <ul className="space-y-2 font-sans text-[#5C534E] dark:text-[#D1C7BD] text-base leading-relaxed font-light">
            {t.certificates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3
            id="languages-title"
            className="text-xs font-sans font-semibold tracking-widest uppercase text-[#C86D51] mt-16 mb-4"
          >
            {t.languagesTitle}
          </h3>
          <ul
            aria-labelledby="languages-title"
            className="space-y-2 font-sans text-[#5C534E] dark:text-[#D1C7BD] text-base leading-relaxed font-light"
          >
            {t.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

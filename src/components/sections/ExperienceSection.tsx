"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, Briefcase, GraduationCap, MapPin, Users } from "lucide-react";
import { TechTag } from "@/components/ui/TechTag";
import { education, experiences, organizations } from "@/data/experience";
import { certifications } from "@/data/skills";

/**
 * Swiss 12-column Experience, Education, Organizations, and Certifications section.
 */
export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-20 section-gap">
      {/* Section Header */}
      <div className="border-b border-swiss-grey/30 pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-swiss-taupe">
          02 // EXPERIENCE &amp; BACKGROUND
        </p>
        <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-bold tracking-tight text-swiss-black md:text-4xl">
            Professional Experience
          </h2>
          <p className="max-w-md text-sm text-swiss-grey">
            Full stack banking systems, freelance backend architecture, airport
            telemetry dashboards, and academic instruction.
          </p>
        </div>
      </div>

      {/* Work Experience Timeline */}
      <div className="divide-y divide-swiss-grey/30">
        {experiences.map((item, index) => (
          <motion.article
            key={item.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-12 lg:gap-8"
          >
            {/* Left Meta Column */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-medium text-swiss-black">
                  {item.period}
                </span>
                {item.isCurrent && (
                  <span className="border border-swiss-taupe bg-swiss-beige px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-swiss-black">
                    Current
                  </span>
                )}
              </div>

              <div className="flex items-start gap-2 text-sm font-semibold text-swiss-black">
                <Briefcase
                  className="mt-0.5 h-4 w-4 shrink-0 text-swiss-taupe"
                  strokeWidth={1.75}
                />
                <span>{item.company}</span>
              </div>

              {item.employmentContext && (
                <p className="font-mono text-xs text-swiss-grey">
                  {item.employmentContext}
                </p>
              )}

              <div className="flex items-center gap-1.5 font-mono text-xs text-swiss-grey">
                <MapPin className="h-3.5 w-3.5 text-swiss-grey" strokeWidth={1.75} />
                <span>{item.location}</span>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-8">
              <h3 className="text-xl font-bold tracking-tight text-swiss-black">
                {item.role}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-swiss-black/80">
                {item.summary}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-swiss-black/85">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-swiss-taupe"
                    />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.techStack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Education & Training */}
      <div className="mt-12 border-t border-swiss-grey/30 pt-12">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-swiss-taupe" strokeWidth={1.75} />
          <p className="font-mono text-xs uppercase tracking-widest text-swiss-taupe">
            EDUCATION &amp; TRAINING
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
          {education.map((edu, index) => (
            <article
              key={edu.id}
              className={
                index === 0
                  ? "md:col-span-12 lg:col-span-6 border border-swiss-grey/40 bg-swiss-beige/35 p-6"
                  : "md:col-span-6 lg:col-span-3 border border-swiss-grey/40 bg-swiss-white p-6"
              }
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-swiss-taupe">
                  {edu.period}
                </span>
                {edu.gpa && (
                  <span className="font-mono text-xs font-medium text-swiss-black">
                    GPA {edu.gpa} {edu.honors ? `• ${edu.honors}` : ""}
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-lg font-bold tracking-tight text-swiss-black">
                {edu.institution}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-swiss-grey">
                {edu.degree}
              </p>

              {edu.finalProject && (
                <p className="mt-3 border-l-2 border-swiss-taupe pl-3 text-xs leading-relaxed text-swiss-black/80">
                  <span className="font-mono uppercase tracking-wider text-swiss-grey">
                    Final Project:{" "}
                  </span>
                  {edu.finalProject}
                </p>
              )}

              <ul className="mt-4 space-y-1.5 text-xs leading-relaxed text-swiss-black/80">
                {edu.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1 w-1 shrink-0 bg-swiss-black"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {edu.areaOfInterest && edu.areaOfInterest.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {edu.areaOfInterest.map((area) => (
                    <TechTag key={area}>{area}</TechTag>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Organizations & Certifications */}
      <div className="mt-10 grid grid-cols-1 gap-6 border-t border-swiss-grey/30 pt-10 md:grid-cols-12">
        {/* Organizations */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-swiss-taupe" strokeWidth={1.75} />
            <p className="font-mono text-xs uppercase tracking-widest text-swiss-taupe">
              ORGANIZATIONS
            </p>
          </div>
          <div className="mt-4 space-y-4">
            {organizations.map((org) => (
              <div
                key={org.id}
                className="border border-swiss-grey/40 bg-swiss-white p-5"
              >
                <p className="font-mono text-xs text-swiss-grey">{org.period}</p>
                <h3 className="mt-1 text-base font-bold text-swiss-black">
                  {org.role}
                </h3>
                <p className="text-xs font-medium text-swiss-taupe">
                  {org.organization}
                </p>
                <ul className="mt-3 space-y-1 text-xs leading-relaxed text-swiss-black/80">
                  {org.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="md:col-span-7">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-swiss-taupe" strokeWidth={1.75} />
            <p className="font-mono text-xs uppercase tracking-widest text-swiss-taupe">
              CERTIFICATIONS ({certifications.length})
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="border border-swiss-grey/40 bg-swiss-beige/25 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-swiss-taupe">
                    {cert.provider}
                  </span>
                  <span className="font-mono text-[10px] text-swiss-grey">
                    {cert.focus}
                  </span>
                </div>
                <p className="mt-1.5 text-xs font-medium leading-snug text-swiss-black">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

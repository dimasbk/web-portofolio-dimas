"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Server } from "lucide-react";
import type { Project } from "@/types";
import { TechTag } from "@/components/ui/TechTag";
import { cn } from "@/lib/utils";

interface ProjectsShowcaseProps {
  projects: Project[];
}

type FilterKey = "all" | "brilink" | "industry" | "academic";

const filterOptions: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Systems" },
  { key: "brilink", label: "BRILink Production" },
  { key: "industry", label: "Freelance & Intern" },
  { key: "academic", label: "Academic & Cloud" },
];

function matchesFilter(project: Project, filter: FilterKey): boolean {
  if (filter === "all") return true;
  if (filter === "brilink") {
    return project.organization.includes("Bank Rakyat Indonesia");
  }
  if (filter === "industry") {
    return (
      project.organization.includes("Angkasa Pura") ||
      project.organization.includes("Borongboil")
    );
  }
  return (
    project.organization.includes("Udayana") ||
    project.organization.includes("Bangkit") ||
    project.organization.includes("Timedoor")
  );
}

/**
 * Interactive project showcase with tech distribution chart and filterable case studies.
 */
export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [projects, activeFilter]
  );

  const techDistribution = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of projects) {
      for (const tech of project.techStack) {
        counts.set(tech, (counts.get(tech) ?? 0) + 1);
      }
    }
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
  }, [projects]);

  const maxTechCount = techDistribution[0]?.[1] ?? 1;
  const productionCount = projects.filter((p) => p.status === "Production").length;
  const completedCount = projects.filter((p) => p.status === "Completed").length;

  return (
    <div className="space-y-12">
      {/* Visual Overview: Tech Stack Distribution & Status Breakdown */}
      <section
        aria-label="Stack distribution and system status"
        className="grid grid-cols-1 gap-6 border border-swiss-grey/40 bg-swiss-white p-6 lg:grid-cols-12"
      >
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between border-b border-swiss-grey/30 pb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-swiss-taupe" strokeWidth={1.75} />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-swiss-black">
                STACK FREQUENCY ({projects.length} SYSTEMS)
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {techDistribution.map(([tech, count]) => {
              const widthPercent = Math.round((count / maxTechCount) * 100);
              return (
                <div key={tech} className="space-y-1">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-medium text-swiss-black">{tech}</span>
                    <span className="text-swiss-grey">
                      {count} {count === 1 ? "system" : "systems"}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-swiss-beige">
                    <motion.div
                      initial={shouldReduceMotion ? false : { width: 0 }}
                      animate={{ width: `${widthPercent}%` }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="h-full bg-swiss-black"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status Summary Cells */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-3 border-t border-swiss-grey/30 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="border border-swiss-grey/30 bg-swiss-beige/30 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-swiss-grey">
              Production Systems
            </p>
            <p className="mt-1 font-mono text-2xl font-bold text-swiss-black">
              {productionCount}
            </p>
          </div>
          <div className="border border-swiss-grey/30 bg-swiss-beige/30 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-swiss-grey">
              Completed Projects
            </p>
            <p className="mt-1 font-mono text-2xl font-bold text-swiss-black">
              {completedCount}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-swiss-grey/30 py-4">
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by category">
          {filterOptions.map((option) => {
            const count = projects.filter((p) => matchesFilter(p, option.key)).length;
            const active = activeFilter === option.key;
            return (
              <button
                key={option.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(option.key)}
                className={cn(
                  "inline-flex items-center gap-2 border px-3.5 py-2 font-mono text-xs transition-colors duration-200",
                  active
                    ? "border-swiss-black bg-swiss-black text-swiss-white"
                    : "border-swiss-grey/40 bg-swiss-white text-swiss-black hover:border-swiss-black"
                )}
              >
                <span>{option.label}</span>
                <span
                  className={cn(
                    "text-[10px]",
                    active ? "text-swiss-taupe" : "text-swiss-grey"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            layout={!shouldReduceMotion}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.03 }}
            className={cn(
              "flex flex-col justify-between border border-swiss-grey/40 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-colors duration-200",
              index % 2 === 0 ? "md:col-span-7 bg-swiss-white" : "md:col-span-5 bg-swiss-beige/30"
            )}
          >
              <div>
                {/* Top Metadata Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-swiss-taupe">
                    {project.ecosystem}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 border border-swiss-grey/40 bg-swiss-white px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-swiss-black">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          project.status === "Production"
                            ? "bg-emerald-600"
                            : "bg-swiss-taupe"
                        )}
                      />
                      {project.status}
                    </span>
                    <span className="font-mono text-xs text-swiss-grey">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Title & Role */}
                <h2 className="mt-3 text-xl font-bold tracking-tight text-swiss-black">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-swiss-grey">
                  {project.subtitle}
                </p>

                <div className="mt-3 flex items-center gap-2 font-mono text-xs text-swiss-black/75">
                  <Server className="h-3.5 w-3.5 text-swiss-taupe" strokeWidth={1.75} />
                  <span>
                    {project.role} — {project.organization}
                  </span>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm leading-relaxed text-swiss-black/85">
                  {project.summary}
                </p>

                {/* Key Highlights */}
                <ul className="mt-4 space-y-1.5 border-l-2 border-swiss-taupe/60 pl-3 text-xs leading-relaxed text-swiss-black/80">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Bottom Metrics & Tech Stack */}
              <div className="mt-6 space-y-4">
                {project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="border border-swiss-grey/30 bg-swiss-white/80 px-2.5 py-2"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-wider text-swiss-grey">
                          {metric.label}
                        </p>
                        <p className="mt-0.5 text-xs font-semibold text-swiss-black">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 border-t border-swiss-grey/25 pt-4">
                  {project.techStack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
      </div>
    </div>
  );
}

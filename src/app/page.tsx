import { ArrowRight, Server } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TechTag } from "@/components/ui/TechTag";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const currentRole = experiences[0];

  return (
    <div className="swiss-container">
      {/* Foundational Swiss 12-Column Grid Preview */}
      <section className="section-gap border-b border-swiss-grey/30">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-swiss-taupe">
                {profile.statusLabel}
              </p>
              <h1 className="hero-title mt-4 text-swiss-black">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-[72ch] text-base leading-relaxed text-swiss-grey">
                {profile.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="/projects" variant="primary">
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Button>
              <Button href={`mailto:${profile.email}`} variant="secondary">
                <span>Contact via Email</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Structured System Status Card */}
          <div className="lg:col-span-5">
            <div className="border border-swiss-grey/40 bg-swiss-beige/40 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between border-b border-swiss-grey/30 pb-4">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-swiss-taupe" strokeWidth={1.75} />
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-swiss-black">
                    CURRENT ASSIGNMENT
                  </span>
                </div>
                <span className="font-mono text-xs text-swiss-grey">
                  {currentRole.period}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm font-bold text-swiss-black">
                    {currentRole.role}
                  </p>
                  <p className="text-xs text-swiss-grey">
                    {currentRole.company} — {currentRole.employmentContext}
                  </p>
                </div>

                <div className="border-t border-swiss-grey/20 pt-3">
                  <p className="label-caps text-swiss-grey">Core Stack</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {currentRole.techStack.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>

                <div className="border-t border-swiss-grey/20 pt-3">
                  <p className="label-caps text-swiss-grey">
                    Active Systems ({featuredProjects.length})
                  </p>
                  <ul className="mt-2 space-y-1.5 font-mono text-xs text-swiss-black">
                    {featuredProjects.map((project) => (
                      <li key={project.id} className="flex items-center justify-between">
                        <span>{project.title}</span>
                        <span className="text-swiss-taupe">{project.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />
    </div>
  );
}

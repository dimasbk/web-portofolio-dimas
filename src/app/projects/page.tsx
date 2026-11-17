import { projects } from "@/data/projects";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";

export default function ProjectsPage() {
  return (
    <div className="swiss-container section-gap">
      <div className="border-b border-swiss-grey/30 pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-swiss-taupe">
          ARCHIVE // {projects.length} SYSTEMS
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-swiss-black">
          Projects &amp; Enterprise Systems
        </h1>
        <p className="mt-3 max-w-[72ch] text-base text-swiss-grey">
          Production banking platforms within the BRILink ecosystem alongside
          freelance, airport operations, and cloud engineering projects.
        </p>
      </div>

      <div className="mt-10">
        <ProjectsShowcase projects={projects} />
      </div>
    </div>
  );
}

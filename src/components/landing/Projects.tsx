import Link from "next/link";

import { projects } from "@/config/projects";
import ProjectCard from "@/components/projects/ProjectCard";

const PREVIEW_COUNT = 2;

export default function Projects() {
  const preview = projects.slice(0, PREVIEW_COUNT);

  return (
    <section id="projects">
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
        Projects
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {preview.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {projects.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="rounded-md border px-6 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Show all projects
          </Link>
        </div>
      )}
    </section>
  );
}
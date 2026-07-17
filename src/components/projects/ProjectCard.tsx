import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { Project } from "@/config/projects";
import Github from "@/components/svgs/Github";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex min-h-60 flex-col rounded-xl border p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40">
      {project.image && (
        <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <h3 className="pt-4 text-lg font-medium">{project.title}</h3>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
        >
          <Github className="size-3.5" />
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
        >
          <ExternalLink className="size-3.5" />
          Live site
        </a>
      </div>
    </article>
  );
}

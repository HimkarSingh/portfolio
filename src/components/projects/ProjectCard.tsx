import { Project } from "@/config/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>
    </>
  );

  if (project.href) {
    return (
        <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-60 flex-col rounded-xl border p-5 transition-colors hover:bg-muted/40"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="flex min-h-60 flex-col rounded-xl border p-5">
      {content}
    </article>
  );
}
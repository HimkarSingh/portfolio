import { projects } from "@/config/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium text-muted-foreground">Selected work</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="flex min-h-60 flex-col rounded-xl border p-5">
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

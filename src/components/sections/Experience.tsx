import { experiences } from "@/config/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-y bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-sm font-medium text-muted-foreground">Background</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
        <div className="mt-10 space-y-4">
          {experiences.map((experience) => (
            <article key={experience.role} className="rounded-xl border bg-card p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div><h3 className="font-medium">{experience.role}</h3><p className="text-sm text-muted-foreground">{experience.organization}</p></div>
                <p className="text-sm text-muted-foreground">{experience.period} · {experience.location}</p>
              </div>
              <p className="mt-5 leading-7 text-muted-foreground">{experience.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => <span key={technology} className="rounded-full border px-3 py-1 text-xs">{technology}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

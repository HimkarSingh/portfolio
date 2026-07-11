import { skillGroups } from "@/config/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-y bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-sm font-medium text-muted-foreground">Expertise</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

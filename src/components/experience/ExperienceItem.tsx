import {Experience} from "@/config/experience";

export default function ExperienceItem({experience}: {experience: Experience}) {
  return (
    <article className="grid gap-3 sm:grid-cols-[1fr_auto] sm:gap-8">
      <div>
        <h3 className="font-semibold">{experience.role}</h3>
        <p className="mt-1 text-muted-foreground">{experience.organization}</p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
          {experience.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {experience.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
      <p className="text-sm leading-6 text-muted-foreground sm:text-right">
        {experience.period}
        <br />
        {experience.location}
      </p>
    </article>
  );
}

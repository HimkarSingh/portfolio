import { about } from "@/config/about";

export default function About() {
  return (
    <section id="about">
      <p className="text-sm font-medium text-muted-foreground">{about.eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-2xl">
        {about.heading}
      </h2>
      <div className="mt-2">
        <p className="leading-7 text-muted-foreground">{about.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Areas of focus">
          {about.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border px-3 py-1 text-sm text-muted-foreground"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

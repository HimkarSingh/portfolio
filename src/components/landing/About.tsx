import { about } from "@/config/about";

export default function About() {
  return (
    <section id="about">
      <p className="text-sm font-medium text-muted-foreground">{about.eyebrow}</p>
      <div className="mt-3 grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {about.heading}
        </h2>
        <div className="mt-4">
          <p className="leading-7 text-muted-foreground">{about.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas of focus">
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
      </div>
    </section>
  );
}

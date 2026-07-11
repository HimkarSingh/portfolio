import { about } from "@/config/about";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium text-muted-foreground">{about.eyebrow}</p>
      <div className="mt-4 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {about.heading}
        </h2>
        <div>
          <p className="leading-7 text-muted-foreground">{about.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {about.highlights.map((highlight) => (
              <span key={highlight} className="rounded-full border px-3 py-1 text-sm">
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

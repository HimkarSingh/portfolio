import { certificates } from "@/config/certificates";

export default function Certifications() {
  return (
    <section id="certifications">
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">Certifications</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {certificates.map((certificate) => (
          <article key={certificate.title} className="rounded-xl border p-5">
            <div className="flex items-start justify-between gap-4"><h3 className="font-medium">{certificate.title}</h3><span className="shrink-0 rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">{certificate.status}</span></div>
            <p className="mt-2 text-sm text-muted-foreground">{certificate.issuer}</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{certificate.focus}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

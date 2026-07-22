import { socialLinks } from "@/config/social";

export default function Contact() {
  return (
    <section id="contact">
      <p className="text-sm font-medium text-muted-foreground">Get in touch</p>
      <div className="mt-3 flex flex-col justify-between gap-6 border-t border-zinc-800 pt-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-2xl">
            Let&apos;s build something thoughtful.
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
            Have a project, opportunity, or security problem to discuss?
            I&apos;d be glad to hear from you.
          </p>
        </div>
        <a
          href={socialLinks.cal}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
}

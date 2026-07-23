import {siteConfig} from "@/config/site";
import {socialLinks} from "@/config/social";
import Image from "next/image";
import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";
import TryHackMe from "@/components/svgs/TryHackMe";
import ScrambledIP from "@/components/common/ScrambledIP";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex items-center gap-5">
        <div className="shrink-0">
          <Image
            src="/assets/logo.avif"
            alt={siteConfig.fullName}
            width={96}
            height={96}
            className="rounded-full ring-4 ring-border"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {siteConfig.fullName}
          </h1>
          <p className="mt-1 text-muted-foreground">
            {siteConfig.title} · {siteConfig.subtitle}
          </p>
          <ScrambledIP />
        </div>
      </div>

      <p className="mt-7 max-w-2xl leading-7 text-muted-foreground">
        {siteConfig.description}
      </p>

      <div className="mt-6 flex items-center gap-2">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="size-5" />
        </a>

        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex size-5 items-center justify-center overflow-hidden text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="block h-full w-full [&>svg]:h-full [&>svg]:w-full">
            <LinkedIn />
          </span>
        </a>

        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noreferrer"
          aria-label="X / Twitter"
          className="flex size-5 items-center justify-center overflow-hidden text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="block h-full w-full [&>svg]:h-full [&>svg]:w-full">
            <X />
          </span>
        </a>

        <a
          href={socialLinks.tryhackme}
          target="_blank"
          rel="noreferrer"
          aria-label="TryHackMe"
          className="flex size-5 items-center justify-center overflow-hidden text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="block h-full w-full [&>svg]:h-full [&>svg]:w-full">
            <TryHackMe />
          </span>
        </a>

        <a
          href={socialLinks.email}
          aria-label="Email"
          className="flex size-5 items-center justify-center overflow-hidden text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="block h-full w-full [&>svg]:h-full [&>svg]:w-full">
            <Mail />
          </span>
        </a>

      </div>
    </section>
  );
}

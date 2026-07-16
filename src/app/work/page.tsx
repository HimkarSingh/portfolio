import {Metadata} from "next";

import Container from "@/components/common/Container";
import ExperienceItem from "@/components/experience/ExperienceItem";
import {experiences} from "@/config/experience";
import {siteConfig} from "@/config/site";

export const metadata: Metadata = {
  title: `Work Experience | ${siteConfig.fullName}`,
  description: `${siteConfig.fullName}'s work experience, in one place.`,
};

export default function WorkPage() {
  return (
    <Container className="pt-8 pb-10">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Work Experience
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Roles, research, and projects I&apos;ve worked on.
      </p>

      <div className="mt-6 space-y-5">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.role} experience={experience} />
        ))}
      </div>
    </Container>
  );
}

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
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Work Experience
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Roles, research, and projects I&apos;ve worked on.
      </p>

      <div className="mt-10 space-y-7">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.role} experience={experience} />
        ))}
      </div>
    </Container>
  );
}

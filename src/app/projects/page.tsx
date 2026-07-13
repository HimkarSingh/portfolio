import {Metadata} from "next";
import Container from "@/components/common/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import {projects} from "@/config/projects";
import {siteConfig} from "@/config/site";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.fullName}`,
  description: `All of ${siteConfig.fullName}'s projects, in one place.`,
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <p className="text-sm font-medium text-muted-foreground">Selected work</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Projects
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Everything I&apos;ve built, from security tooling to AI experiments and
        full-stack apps.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Container>
  );
}

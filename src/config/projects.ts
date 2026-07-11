export interface Project {
  title: string;
  description: string;
  technologies: readonly string[];
  href?: string;
}

export const projects = [
  {
    title: "Security Tooling",
    description:
      "Practical tools that help identify, understand, and reduce application-security risk.",
    technologies: ["TypeScript", "Next.js", "Security"],
  },
  {
    title: "AI Security Experiments",
    description:
      "Explorations at the intersection of generative AI, secure workflows, and developer productivity.",
    technologies: ["AI", "Python", "APIs"],
  },
  {
    title: "Modern Web Experiences",
    description:
      "Fast, accessible interfaces built with a focus on clear product design and robust engineering.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
] as const satisfies readonly Project[];

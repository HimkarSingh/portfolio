export interface SkillGroup {
  title: string;
  skills: readonly string[];
}

export const skillGroups = [
  {
    title: "Security",
    skills: ["Application Security", "Threat Modeling", "Secure Code Review"],
  },
  {
    title: "Development",
    skills: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    title: "AI & Cloud",
    skills: ["Generative AI", "API Design", "Cloud Fundamentals"],
  },
] as const satisfies readonly SkillGroup[];

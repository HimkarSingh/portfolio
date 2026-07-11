export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  technologies: readonly string[];
}

export const experiences = [
  {
    role: "Computer Science Student",
    organization: "Independent Learning & Projects",
    period: "Present",
    location: "India",
    description:
      "Developing a foundation in application security, AI, and full-stack engineering through focused study and hands-on projects.",
    technologies: ["Application Security", "AI", "Next.js"],
  },
] as const satisfies readonly Experience[];

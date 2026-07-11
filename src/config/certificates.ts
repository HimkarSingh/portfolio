export interface Certificate {
  title: string;
  issuer: string;
  focus: string;
  status: "In progress" | "Planned" | "Completed";
}

export const certificates = [
  {
    title: "Application Security Learning Path",
    issuer: "Independent Study",
    focus: "Secure development and web application security",
    status: "In progress",
  },
  {
    title: "Cloud Security Fundamentals",
    issuer: "Independent Study",
    focus: "Cloud platforms, identity, and security practices",
    status: "Planned",
  },
] as const satisfies readonly Certificate[];

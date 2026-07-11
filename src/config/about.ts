import { siteConfig } from "./site";

export const about = {
  eyebrow: "About",
  heading: "Building thoughtfully, securing by design.",
  description: siteConfig.longDescription,
  highlights: [
    "Application security",
    "AI-powered tools",
    "Full-stack development",
  ],
} as const;

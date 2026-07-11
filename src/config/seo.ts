import {siteConfig} from "./site";

export const seo = {
  home: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },

  projects: {
    title: "Projects",
    description: "Projects built by Himkar Singh.",
  },

  blog: {
    title: "Blog",
    description: "Thoughts on AppSec, AI, and Software Engineering.",
  },

  contact: {
    title: "Contact",
    description: "Get in touch with Himkar.",
  },
};

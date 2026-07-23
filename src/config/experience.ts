export type ExperiencePositionItemType = {
  id: string;
  title: string;
  employmentPeriod: {start: string; end?: string};
  employmentType?: string;
  location?: string;
  description?: string;
  skills?: string[];
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  id: string;
  companyName: string;
  companyLogo?: string;
  companyWebsite?: string;
  positions: ExperiencePositionItemType[];
  isCurrentEmployer?: boolean;
};

export const experiences: ExperienceItemType[] = [
  {
    id: "independent-learning",
    companyName: "Independent Learning & Projects",
    isCurrentEmployer: true,
    positions: [
      {
        id: "vulnerability-researcher",
        title: "Vulnerability Researcher",
        // TODO: set your actual start — using year-only as a placeholder
        employmentPeriod: {start: "2025"},
        location: "India",
        description:
          "Finding and learning about vulnerabilities in various applications, understanding their impact, and exploring mitigation techniques.",
        skills: ["Application Security", "AI", "Python"],
      },
    ],
  },
];

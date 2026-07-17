export interface Project {
  title: string;
  description: string;
  technologies: readonly string[];
  image?: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects = [
  {
    title: "Beacon",
    description:
      "An AI-powered application security platform that combines secure code review, API security analysis, vulnerability detection, and intelligent remediation into a single developer-focused workflow.",
    technologies: [
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "PostgreSQL",
      "AI",
    ],
    githubUrl: "https://github.com/your-username/beacon",
    liveUrl: "https://beacon.example.com",
  },
  {
    title: "CrackRank",
    description:
      "A coding interview preparation platform featuring online code execution, curated problems, AI-assisted learning, authentication, and progress tracking.",
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Monaco Editor",
      "Judge0 API",
    ],
    image: "/project/crackrank.png",
    githubUrl: "https://github.com/himkarr/crackrank-0",
    liveUrl: "https://crackrank.vercel.capp",
  },
  {
    title: "RasterCam",
    description:
      "A modern AI-powered camera application that enhances images with intelligent processing, real-time filters, and an intuitive interface designed for creators and photography enthusiasts.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI",
      "Vercel",
    ],
    image: "/project/raster.png",
    githubUrl: "https://github.com/your-username/rastercam",
    liveUrl: "https://rastercam.example.com",
  },
  {
    title: "Anonymous Chat Platform",
    description:
      "A privacy-first real-time chat application focused on anonymous communication, secure messaging, and a clean user experience.",
    technologies: ["React", "Node.js", "Express", "WebSockets", "PostgreSQL"],
    githubUrl: "https://github.com/your-username/anonymous-chat",
    liveUrl: "https://anonymous-chat.example.com",
  },
] as const satisfies readonly Project[];

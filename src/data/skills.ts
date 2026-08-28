import type { SkillCategory } from "@/types/skill";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building typed, responsive interfaces with modern React and Next.js patterns.",
    skills: [
      { id: "html", name: "HTML5", tier: "primary" },
      { id: "css", name: "CSS3", tier: "primary" },
      { id: "javascript", name: "JavaScript", tier: "primary" },
      { id: "typescript", name: "TypeScript", tier: "primary" },
      { id: "react", name: "React", tier: "primary" },
      { id: "nextjs", name: "Next.js", tier: "primary" },
      { id: "tailwind", name: "Tailwind CSS", tier: "primary" },
      { id: "tanstack-query", name: "TanStack Query", tier: "primary" },
      { id: "react-hook-form", name: "React Hook Form", tier: "supporting" },
      { id: "zod", name: "Zod", tier: "supporting" },
    ],
  },
  {
    id: "backend-apis",
    title: "Backend and APIs",
    description: "Creating server-side application logic and structured HTTP API layers.",
    skills: [
      { id: "nodejs", name: "Node.js", tier: "primary" },
      { id: "express", name: "Express.js", tier: "primary" },
      { id: "rest-apis", name: "REST APIs", tier: "primary" },
      { id: "jwt-authentication", name: "JWT authentication", tier: "supporting" },
      { id: "firebase-admin", name: "Firebase Admin", tier: "supporting" },
    ],
  },
  {
    id: "database-authentication",
    title: "Database and Authentication",
    description: "Working with document data models and application identity workflows.",
    skills: [
      { id: "mongodb", name: "MongoDB", tier: "primary" },
      { id: "mongoose", name: "Mongoose", tier: "primary" },
      { id: "firebase-authentication", name: "Firebase Authentication", tier: "primary" },
      { id: "jwt-cookies", name: "JWT cookies", tier: "supporting" },
    ],
  },
  {
    id: "tools-deployment",
    title: "Tools and Deployment",
    description: "Supporting development, source control, API testing, and web deployment workflows.",
    skills: [
      { id: "git", name: "Git", tier: "primary" },
      { id: "github", name: "GitHub", tier: "primary" },
      { id: "pnpm", name: "pnpm", tier: "primary" },
      { id: "vercel", name: "Vercel", tier: "primary" },
      { id: "vscode", name: "VS Code", tier: "supporting" },
      { id: "npm", name: "npm", tier: "supporting" },
      { id: "postman", name: "Postman", tier: "supporting" },
      { id: "render", name: "Render", tier: "supporting" },
    ],
  },
] as const satisfies readonly SkillCategory[];

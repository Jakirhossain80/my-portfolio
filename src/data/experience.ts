import type { ExperienceEntry } from "@/types/experience";

export const professionalExperience = {
  employment: {
    id: "sunman-group-shipping",
    label: "Current employment",
    title: "Deputy Manager (Shipping)",
    context: "Sunman Group",
    summary:
      "This management background provides professional context for coordination, communication, documentation, deadline awareness, and understanding how structured work supports wider business needs.",
    highlights: [
      {
        title: "Coordination and communication",
        description:
          "An established workplace perspective shaped by organized follow-through and clear professional communication.",
      },
      {
        title: "Documentation and structure",
        description:
          "A careful approach to information, responsibilities, and work that benefits from consistent organization.",
      },
      {
        title: "Deadline and business awareness",
        description:
          "Attention to priorities, time-sensitive work, and the practical context surrounding business requirements.",
      },
    ],
  },
  development: {
    id: "independent-web-development",
    label: "Independent project experience",
    title: "MERN Stack & Next.js Development",
    context: "Practical learning and portfolio projects",
    summary:
      "Building a professional web-development path through independent full-stack learning and verified project work, with CareerBridge as the primary in-development portfolio project.",
    highlights: [
      {
        title: "Frontend development",
        description:
          "Building typed, responsive interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
      },
      {
        title: "Full-stack project work",
        description:
          "Connecting frontend application flows with REST APIs, Node.js, Express, MongoDB, and authentication patterns in project code.",
      },
      {
        title: "Structured problem-solving",
        description:
          "Separating verified implementation from incomplete or planned work and documenting project status clearly.",
      },
    ],
  },
} as const satisfies Record<"development" | "employment", ExperienceEntry>;

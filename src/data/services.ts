import type { Service } from "@/types/service";

export const services = [
  {
    id: "responsive-interfaces",
    name: "Responsive React and Next.js Interfaces",
    clientProblem:
      "You need a clear, maintainable interface that works comfortably across phones, tablets, and desktops.",
    deliverables: [
      "Reusable React and Next.js screens",
      "Mobile-first responsive layouts",
      "Accessible interaction and content states",
    ],
    technologyIds: ["react", "nextjs", "typescript", "tailwind"],
    icon: "interface",
  },
  {
    id: "mern-development",
    name: "MERN Full-Stack Application Development",
    clientProblem:
      "You need a focused web application feature that connects a usable frontend, server logic, and persistent data.",
    deliverables: [
      "Feature-focused frontend and API implementation",
      "MongoDB data models and application logic",
      "Clear client and server boundaries",
    ],
    technologyIds: ["react", "nextjs", "nodejs", "express", "mongodb", "mongoose"],
    icon: "full-stack",
  },
  {
    id: "rest-api-development",
    name: "REST API Development",
    clientProblem:
      "Your frontend or integration needs structured endpoints for application data and business workflows.",
    deliverables: [
      "Resource-focused REST endpoints",
      "Input validation and consistent error handling",
      "Authentication and authorization hooks where required",
    ],
    technologyIds: ["nodejs", "express", "rest-apis", "zod"],
    icon: "api",
  },
  {
    id: "authentication",
    name: "Firebase and JWT Authentication",
    clientProblem:
      "Your application needs sign-in and protected access flows connected to its existing frontend and backend.",
    deliverables: [
      "Firebase email and password authentication flows",
      "Token verification and protected routes",
      "Role-aware access foundations where needed",
    ],
    technologyIds: [
      "firebase-authentication",
      "firebase-admin",
      "jwt-authentication",
      "jwt-cookies",
    ],
    icon: "authentication",
  },
  {
    id: "api-integration",
    name: "API Integration",
    clientProblem:
      "Your interface needs to exchange data reliably with an internal service or documented third-party API.",
    deliverables: [
      "Typed request and response integration",
      "Loading, empty, and error-state handling",
      "Query, mutation, and data-mapping workflows",
    ],
    technologyIds: ["typescript", "react", "nextjs", "tanstack-query", "rest-apis"],
    icon: "integration",
  },
  {
    id: "bug-fixing",
    name: "React and MERN Bug Fixing",
    clientProblem:
      "A React or MERN feature is behaving incorrectly and needs a careful, scoped investigation.",
    deliverables: [
      "Reproduction and root-cause investigation",
      "Focused frontend, API, or data-flow fixes",
      "Relevant regression checks and a clear handoff",
    ],
    technologyIds: ["react", "nextjs", "nodejs", "express", "mongodb"],
    icon: "repair",
  },
] as const satisfies readonly Service[];

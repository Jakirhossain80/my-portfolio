import type { Project } from "@/types/project";

export const projects = [
  {
    id: "careerbridge",
    slug: "careerbridge",
    title: "CareerBridge",
    category: "Job portal",
    projectType: "Role-based job-platform portfolio project",
    summary:
      "CareerBridge is an in-development, role-based job-platform project with separate Next.js and Express applications. Repository-backed functionality is distinguished from workflows that still require runtime verification.",
    description:
      "CareerBridge brings public job discovery and role-specific recruitment workflows into a full-stack application. Its repository contains a Next.js App Router client, an Express REST API, MongoDB models, Firebase identity verification, and separate experiences for job seekers, employers, administrators, and super administrators.",
    featured: true,
    status: {
      value: "in-development",
      label: "In development",
      detail:
        "Source-backed implementation exists, while final feature completion and deployed end-to-end behavior remain under verification.",
    },
    technologyIds: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "tanstack-query",
      "react-hook-form",
      "zod",
      "nodejs",
      "express",
      "rest-apis",
      "mongodb",
      "mongoose",
      "firebase-authentication",
      "firebase-admin",
    ],
    featuredTechnologyIds: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "nodejs",
      "express",
      "mongodb",
      "firebase-authentication",
    ],
    liveUrl: "https://careerbridge-client.vercel.app",
    repositoryUrl: "https://github.com/Jakirhossain80/careerbridge",
    features: [
      {
        title: "Public job discovery",
        description:
          "Source includes public job-listing and job-detail routes with corresponding client queries and server modules.",
        status: "implemented",
        evidence: "repository-verified",
      },
      {
        title: "Email and password authentication",
        description:
          "Source includes Firebase registration, login, logout, password-reset, and identity-token handling.",
        status: "implemented",
        evidence: "repository-verified",
      },
      {
        title: "Role-aware access",
        description:
          "Source includes client access checks, server identity-token verification, account-status lookup, and reusable role middleware.",
        status: "implemented",
        evidence: "repository-verified",
      },
      {
        title: "Job-seeker workflows",
        description:
          "Profile, résumé, application, saved-job, alert, interview, and notification areas exist in source; completion and integration require validation.",
        status: "in-progress",
        evidence: "pending-verification",
      },
      {
        title: "Employer workflows",
        description:
          "Company, job, applicant, interview, analytics, and settings areas exist in source; end-to-end behavior requires validation.",
        status: "in-progress",
        evidence: "pending-verification",
      },
      {
        title: "Administrative workflows",
        description:
          "Administrative routes and API modules exist in source; completed operations and permissions require targeted validation.",
        status: "in-progress",
        evidence: "pending-verification",
      },
    ],
    roles: ["super_admin", "admin", "employer", "job_seeker"],
    architecture: [
      {
        title: "Next.js client",
        description:
          "App Router client organized around routes, components, hooks, services, and TanStack Query data flows.",
        status: "implemented",
        evidence: "repository-verified",
      },
      {
        title: "Versioned Express API",
        description:
          "Express API mounted at /api/v1 with middleware, routes, controllers, services, validation, and data models.",
        status: "implemented",
        evidence: "repository-verified",
      },
      {
        title: "MongoDB data layer",
        description:
          "Mongoose models represent users, jobs, companies, applications, and related recruitment concepts.",
        status: "implemented",
        evidence: "repository-verified",
      },
      {
        title: "Deployment integration",
        description:
          "The frontend URL is confirmed; the current backend host and complete deployed integration still require verification.",
        status: "in-progress",
        evidence: "pending-verification",
      },
    ],
    thumbnail: {
      src: "/images/projects/careerbridge/careerbridge-homepage.jpg",
      alt: "CareerBridge public homepage with a job-search interface",
      width: 753,
      height: 471,
    },
    screenshots: [],
    caseStudy: {
      problem: { status: "planned" },
      solution: { status: "planned" },
      challenges: { status: "planned" },
      outcomes: { status: "planned" },
    },
    metadata: {
      title: "CareerBridge Case Study | Md. Jakir Hossain",
      description:
        "An honest case-study foundation for CareerBridge, an in-development role-based job-platform project with a Next.js client and Express/MongoDB backend.",
    },
  },
] as const satisfies readonly Project[];

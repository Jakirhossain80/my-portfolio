import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "careerbridge",
    title: "CareerBridge",
    projectType: "Job-portal portfolio project",
    status: "verification-pending",
    statusLabel: "Status pending verification",
    summary:
      "CareerBridge is a job-portal project with separate frontend and backend applications. Detailed feature and deployment claims remain pending verification.",
    metadata: {
      title: "CareerBridge Case Study | Md. Jakir Hossain",
      description:
        "CareerBridge project case-study foundation for the portfolio of Md. Jakir Hossain.",
    },
    links: [
      {
        label: "View CareerBridge live site",
        href: "https://careerbridge-client.vercel.app",
      },
      {
        label: "View CareerBridge source",
        href: "https://github.com/Jakirhossain80/careerbridge",
      },
    ],
  },
] as const satisfies readonly Project[];

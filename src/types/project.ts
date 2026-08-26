export type ProjectStatus = "verification-pending" | "in-development" | "complete";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  projectType: string;
  status: ProjectStatus;
  statusLabel: string;
  summary: string;
  metadata: {
    title: string;
    description: string;
  };
  links: readonly ProjectLink[];
};

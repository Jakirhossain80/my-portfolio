import type { SkillId } from "@/types/skill";

export type ProjectLifecycleStatus = "in-development" | "complete" | "planned";

export type ProjectContentStatus = "implemented" | "in-progress" | "planned";

export type ProjectEvidenceStatus =
  | "confirmed"
  | "repository-verified"
  | "pending-verification";

export type ProjectStatus = {
  value: ProjectLifecycleStatus;
  label: string;
  detail: string;
};

export type StatusAwareProjectItem = {
  title: string;
  description: string;
  status: ProjectContentStatus;
  evidence: ProjectEvidenceStatus;
};

export type ProjectContentSection<T> =
  | {
      status: Exclude<ProjectContentStatus, "planned">;
      content: T;
    }
  | {
      status: "planned";
    };

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectMetadata = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  projectType: string;
  summary: string;
  description: string;
  featured: boolean;
  status: ProjectStatus;
  technologyIds: readonly SkillId[];
  liveUrl: string;
  repositoryUrl: string;
  features: readonly StatusAwareProjectItem[];
  roles: readonly string[];
  architecture: readonly StatusAwareProjectItem[];
  thumbnail?: ProjectImage;
  screenshots: readonly ProjectImage[];
  caseStudy: {
    problem: ProjectContentSection<string>;
    solution: ProjectContentSection<string>;
    challenges: ProjectContentSection<readonly StatusAwareProjectItem[]>;
    outcomes: ProjectContentSection<readonly StatusAwareProjectItem[]>;
  };
  metadata: ProjectMetadata;
};

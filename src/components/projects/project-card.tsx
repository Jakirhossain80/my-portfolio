import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="project-card">
      <p className="project-meta">{project.projectType}</p>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <p className="project-status">{project.statusLabel}</p>
      <Link className="text-link" href={`/projects/${project.slug}`}>
        View {project.title} case study
      </Link>
    </li>
  );
}

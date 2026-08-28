import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCaseStudyProps = {
  project: Project;
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <div className="route-shell">
      <article className="route-content">
        <Link className="text-link" href="/projects">
          Back to all projects
        </Link>
        <header className="route-header">
          <p className="foundation-label">Project case study</p>
          <h1>{project.title}</h1>
          <p className="route-introduction">{project.summary}</p>
          <p className="project-status">{project.statusLabel}</p>
        </header>

        <section aria-labelledby="case-study-status" className="route-panel">
          <h2 id="case-study-status">Case study foundation</h2>
          <p>
            This route is ready for verified case-study content. Detailed features, outcomes,
            screenshots, and completion claims will be added only after review and approval.
          </p>
          <div className="route-actions">
            {project.links.map((link) => (
              <a
                className="text-link"
                href={link.href}
                key={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

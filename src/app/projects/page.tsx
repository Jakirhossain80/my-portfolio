import type { Metadata } from "next";
import Link from "next/link";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Md. Jakir Hossain",
  description: "Verified portfolio projects and case studies by Md. Jakir Hossain.",
};

export default function ProjectsPage() {
  return (
    <main className="route-shell" id="main-content">
      <div className="route-content">
        <Link className="text-link" href="/">
          Back to portfolio
        </Link>
        <header className="route-header">
          <p className="foundation-label">Portfolio projects</p>
          <h1>Projects</h1>
          <p className="route-introduction">
            Explore verified project work. Detailed claims are added only after their current status
            and supporting evidence have been reviewed.
          </p>
        </header>

        <ul className="project-grid">
          {projects.map((project) => (
            <li className="project-card" key={project.slug}>
              <p className="project-meta">{project.projectType}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <p className="project-status">{project.statusLabel}</p>
              <Link className="text-link" href={`/projects/${project.slug}`}>
                View {project.title} case study
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

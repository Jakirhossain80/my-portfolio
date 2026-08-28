import type { Metadata } from "next";
import Link from "next/link";

import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Md. Jakir Hossain",
  description: "Verified portfolio projects and case studies by Md. Jakir Hossain.",
};

export default function ProjectsPage() {
  return (
    <div className="route-shell">
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
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
}

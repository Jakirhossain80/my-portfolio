import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.metadata.title,
    description: project.metadata.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="route-shell" id="main-content">
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
    </main>
  );
}

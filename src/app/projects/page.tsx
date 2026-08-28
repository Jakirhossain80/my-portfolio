import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/projects/project-card";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { getAbsoluteUrl, getCanonicalMetadata } from "@/lib/seo";

const title = "Web Development Projects | Md. Jakir Hossain";
const description =
  "Explore verified web development projects and case studies by MERN Stack and Next.js developer Md. Jakir Hossain.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...getCanonicalMetadata("/projects"),
  openGraph: {
    type: "website",
    title,
    description,
    ...(getAbsoluteUrl("/projects") ? { url: getAbsoluteUrl("/projects") } : {}),
  },
  twitter: { card: "summary", title, description },
};

export default function ProjectsPage() {
  return (
    <>
      <Section spacing="compact" surface="alternate">
        <Container size="lg">
          <Link className={buttonClassName({ size: "sm", variant: "secondary" })} href="/">
            <span aria-hidden="true">←</span>
            Back to portfolio
          </Link>

          <header className="mt-10 max-w-[var(--container-md)] sm:mt-14">
            <p className="font-mono text-sm font-semibold tracking-[var(--letter-spacing-label)] text-primary-hover uppercase">
              Portfolio directory
            </p>
            <h1 className="mt-3 text-[var(--font-size-display)]">Projects</h1>
            <p className="mt-5 text-lg leading-[var(--line-height-body)] text-muted-foreground sm:text-xl">
              A growing collection of web development work, presented with clear project status,
              verified technologies, and direct links to supporting evidence.
            </p>
          </header>
        </Container>
      </Section>

      <Section aria-labelledby="project-list-heading">
        <Container size="lg">
          <div className="mb-8 flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-sm font-semibold tracking-[var(--letter-spacing-label)] text-primary-hover uppercase">
                Verified work
              </p>
              <h2
                className="mt-2 text-3xl leading-[var(--line-height-heading)] font-bold tracking-[var(--letter-spacing-tight)] text-foreground"
                id="project-list-heading"
              >
                Project collection
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              {projects.length} {projects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          {projects.length > 0 ? (
            <ul className="list-none space-y-6 p-0">
              {projects.map((project, index) => (
                <ProjectCard
                  imageLoading={index === 0 ? "eager" : "lazy"}
                  key={project.id}
                  project={project}
                />
              ))}
            </ul>
          ) : (
            <Card>
              <h3 className="text-xl font-bold text-foreground">No projects published yet</h3>
              <p className="mt-3 max-w-[var(--container-sm)] text-muted-foreground">
                Verified projects will appear here after their content and supporting evidence are
                ready.
              </p>
            </Card>
          )}
        </Container>
      </Section>
    </>
  );
}

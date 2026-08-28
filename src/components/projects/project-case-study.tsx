import Link from "next/link";

import { ExternalLink } from "@/components/common/external-link";
import { ProjectImage } from "@/components/projects/project-image";
import { TechnologyBadge } from "@/components/common/technology-badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import type { BadgeVariant } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type {
  Project,
  ProjectContentStatus,
  ProjectEvidenceStatus,
  StatusAwareProjectItem,
} from "@/types/project";
import { getSkillById } from "@/utils/skills";

type ProjectCaseStudyProps = {
  project: Project;
};

const contentStatusPresentation: Record<
  ProjectContentStatus,
  { label: string; variant: BadgeVariant }
> = {
  implemented: { label: "Implemented in source", variant: "success" },
  "in-progress": { label: "In progress", variant: "accent" },
  planned: { label: "Planned", variant: "neutral" },
};

const evidenceLabels: Record<ProjectEvidenceStatus, string> = {
  confirmed: "Confirmed",
  "pending-verification": "Runtime verification pending",
  "repository-verified": "Repository verified",
};

function StatusAwareList({ items }: { items: readonly StatusAwareProjectItem[] }) {
  return (
    <ul className="mt-6 grid list-none gap-4 p-0 md:grid-cols-2">
      {items.map((item) => {
        const status = contentStatusPresentation[item.status];

        return (
          <li key={item.title}>
            <Card className="h-full">
              <div className="flex flex-wrap gap-2">
                <Badge variant={status.variant}>{status.label}</Badge>
                <Badge variant="neutral">{evidenceLabels[item.evidence]}</Badge>
              </div>
              <h3 className="mt-4 text-xl leading-[var(--line-height-heading)] font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[var(--line-height-body)] text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

function SectionTitle({ children, id }: { children: string; id: string }) {
  return (
    <h2
      className="text-3xl leading-[var(--line-height-heading)] font-bold tracking-[var(--letter-spacing-tight)] text-foreground sm:text-4xl"
      id={id}
    >
      {children}
    </h2>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const hasPendingNarrative = Object.values(project.caseStudy).some(
    (section) => section.status === "planned",
  );

  return (
    <article>
      <Section spacing="compact" surface="alternate">
        <Container size="lg">
          <Link className={buttonClassName({ size: "sm", variant: "secondary" })} href="/projects">
            <span aria-hidden="true">←</span>
            All projects
          </Link>

          <header className="mt-10 sm:mt-14">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary">Project case study</Badge>
              <Badge variant="accent">{project.status.label}</Badge>
              <Badge variant="neutral">{project.category}</Badge>
            </div>

            <div className="mt-5 max-w-[var(--container-md)]">
              <p className="font-mono text-sm text-subtle-foreground">{project.projectType}</p>
              <h1 className="mt-3 text-[var(--font-size-display)]">{project.title}</h1>
              <p className="mt-5 text-lg leading-[var(--line-height-body)] text-muted-foreground sm:text-xl">
                {project.summary}
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ExternalLink
                className={buttonClassName({ className: "w-full sm:w-auto" })}
                href={project.liveUrl}
                style={{ color: "var(--primary-foreground)" }}
              >
                View live site
              </ExternalLink>
              <ExternalLink
                className={buttonClassName({
                  className: "w-full sm:w-auto",
                  variant: "secondary",
                })}
                href={project.repositoryUrl}
                style={{ color: "var(--foreground)" }}
              >
                View GitHub repository
              </ExternalLink>
            </div>

            {project.thumbnail ? (
              <div className="mt-10 overflow-hidden rounded-xl border border-border bg-muted shadow-md">
                <ProjectImage
                  className="aspect-[8/5] h-auto w-full object-cover object-top"
                  image={project.thumbnail}
                  sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 4rem), 64rem"
                />
              </div>
            ) : null}
          </header>
        </Container>
      </Section>

      <Section aria-labelledby="project-overview-heading">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.55fr)] lg:items-start">
            <div>
              <SectionTitle id="project-overview-heading">Project overview</SectionTitle>
              <p className="mt-5 max-w-[var(--container-md)] text-lg leading-[var(--line-height-body)] text-muted-foreground">
                {project.description}
              </p>
            </div>

            <Card>
              <h2 className="font-mono text-sm font-semibold tracking-[var(--letter-spacing-label)] text-foreground uppercase">
                Current status
              </h2>
              <p className="mt-3 font-semibold text-primary-hover">{project.status.label}</p>
              <p className="mt-2 text-sm leading-[var(--line-height-body)] text-muted-foreground">
                {project.status.detail}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="technology-heading" surface="alternate">
        <Container size="lg">
          <SectionTitle id="technology-heading">Technology stack</SectionTitle>
          <p className="mt-4 max-w-[var(--container-md)] text-muted-foreground">
            Technologies represented in the project repository and linked through the portfolio’s
            verified skills inventory.
          </p>
          <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
            {project.technologyIds.map((technologyId) => {
              const technology = getSkillById(technologyId);

              return (
                <li key={technology.id}>
                  <TechnologyBadge name={technology.name} />
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="features-heading">
        <Container size="lg">
          <SectionTitle id="features-heading">Feature evidence</SectionTitle>
          <p className="mt-4 max-w-[var(--container-md)] text-muted-foreground">
            Source-backed implementation is separated from workflows whose complete runtime
            behavior still needs verification.
          </p>
          <StatusAwareList items={project.features} />
        </Container>
      </Section>

      <Section aria-labelledby="architecture-heading" surface="alternate">
        <Container size="lg">
          <SectionTitle id="architecture-heading">Architecture</SectionTitle>
          <p className="mt-4 max-w-[var(--container-md)] text-muted-foreground">
            A concise view of the application structure supported by repository evidence.
          </p>
          <StatusAwareList items={project.architecture} />
        </Container>
      </Section>

      <Section aria-labelledby="roles-heading">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionTitle id="roles-heading">Application roles</SectionTitle>
              <p className="mt-4 text-muted-foreground">
                The project source defines these role-specific application areas.
              </p>
              <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
                {project.roles.map((role) => (
                  <li key={role}>
                    <Badge className="font-mono" variant="primary">
                      {role.replaceAll("_", " ")}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            {hasPendingNarrative ? (
              <Card>
                <h2 className="text-xl font-bold text-foreground">Case-study development note</h2>
                <p className="mt-3 leading-[var(--line-height-body)] text-muted-foreground">
                  The detailed problem, solution, challenges, and outcomes narrative is not yet
                  published. It will be added only after the remaining evidence and first-hand
                  project context are reviewed.
                </p>
              </Card>
            ) : null}
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <Link className={buttonClassName({ variant: "secondary" })} href="/projects">
              Explore all projects
            </Link>
          </div>
        </Container>
      </Section>
    </article>
  );
}

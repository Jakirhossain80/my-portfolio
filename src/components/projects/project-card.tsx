import Link from "next/link";

import { ExternalLink } from "@/components/common/external-link";
import { ProjectImage } from "@/components/projects/project-image";
import { TechnologyBadge } from "@/components/common/technology-badge";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/project";
import { getSkillById } from "@/utils/skills";

type ProjectCardProps = {
  headingLevel?: 2 | 3;
  project: Project;
};

export function ProjectCard({ headingLevel = 2, project }: ProjectCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const TechnologyHeading = headingLevel === 2 ? "h3" : "h4";

  return (
    <li className="group h-full transition-transform duration-[var(--duration-fast)] ease-standard hover:-translate-y-1 focus-within:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
      <Card
        className="grid h-full overflow-hidden lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
        padding="none"
      >
        <div className="overflow-hidden border-b border-border bg-muted lg:border-r lg:border-b-0">
          {project.thumbnail ? (
            <ProjectImage
              className="aspect-[8/5] h-auto w-full object-cover object-top transition-transform duration-[var(--duration-normal)] ease-standard group-hover:scale-[1.02] group-focus-within:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
              image={project.thumbnail}
              sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 4rem), (max-width: 1199px) 45vw, 34rem"
            />
          ) : (
            <div className="flex aspect-[8/5] min-h-48 items-center justify-center p-6 text-center text-sm text-muted-foreground">
              Approved project image pending
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-center gap-2">
            {project.featured ? <Badge variant="primary">Featured project</Badge> : null}
            <Badge variant="accent">{project.status.label}</Badge>
          </div>

          <p className="mt-5 font-mono text-sm text-subtle-foreground">{project.projectType}</p>
          <Heading className="mt-2 text-2xl leading-[var(--line-height-heading)] font-bold tracking-[var(--letter-spacing-tight)] text-foreground sm:text-3xl">
            {project.title}
          </Heading>
          <p className="mt-4 text-base leading-[var(--line-height-body)] text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-6">
            <TechnologyHeading className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-foreground uppercase">
              Main technologies
            </TechnologyHeading>
            <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
              {project.featuredTechnologyIds.map((technologyId) => {
                const technology = getSkillById(technologyId);

                return (
                  <li className="max-w-full" key={technology.id}>
                    <TechnologyBadge name={technology.name} />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-auto pt-7">
            <Link
              className={buttonClassName({ className: "w-full sm:w-auto" })}
              href={`/projects/${project.slug}`}
            >
              View case study
            </Link>

            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <ExternalLink href={project.liveUrl}>Live Site</ExternalLink>
              <ExternalLink href={project.repositoryUrl}>GitHub Repository</ExternalLink>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
}

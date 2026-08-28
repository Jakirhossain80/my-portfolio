import Link from "next/link";

import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/projects/project-card";
import { buttonClassName } from "@/components/ui/button";
import { getFeaturedProjects } from "@/utils/projects";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Section aria-labelledby="featured-projects-heading" id="featured-projects">
      <Container>
        <SectionHeading
          description="Verified portfolio work presented with transparent project status and direct links to supporting evidence."
          eyebrow="Selected work"
          title="Featured project"
          titleId="featured-projects-heading"
        />

        <ul className="mt-10 list-none space-y-6 p-0">
          {featuredProjects.map((project) => (
            <ProjectCard headingLevel={3} key={project.id} project={project} />
          ))}
        </ul>

        <div className="mt-8">
          <Link className={buttonClassName({ variant: "secondary" })} href="/projects">
            View all projects
          </Link>
        </div>
      </Container>
    </Section>
  );
}

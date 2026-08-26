import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { projects } from "@/data/projects";
import { getProjectBySlug } from "@/utils/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Md. Jakir Hossain",
      description: "The requested portfolio project case study is not available.",
      robots: { index: false, follow: false },
    };
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

  return <ProjectCaseStudy project={project} />;
}

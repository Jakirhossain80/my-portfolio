import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StructuredData } from "@/components/common/structured-data";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { projects } from "@/data/projects";
import { getAbsoluteUrl, getCanonicalMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getProjectBySlug } from "@/utils/projects";

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
    return {
      title: { absolute: "Project Not Found | Md. Jakir Hossain" },
      description: "The requested portfolio project case study is not available.",
      robots: { index: false, follow: false },
    };
  }

  const pathname = `/projects/${project.slug}`;

  return {
    title: { absolute: project.metadata.title },
    description: project.metadata.description,
    ...getCanonicalMetadata(pathname),
    openGraph: {
      type: "article",
      title: project.metadata.title,
      description: project.metadata.description,
      ...(getAbsoluteUrl(pathname) ? { url: getAbsoluteUrl(pathname) } : {}),
    },
    twitter: {
      card: "summary",
      title: project.metadata.title,
      description: project.metadata.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const pathname = `/projects/${project.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.metadata.description,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
    ...(getAbsoluteUrl(pathname) ? { url: getAbsoluteUrl(pathname) } : {}),
    sameAs: [project.liveUrl, project.repositoryUrl],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <ProjectCaseStudy project={project} />
    </>
  );
}

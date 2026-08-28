import type { Metadata } from "next";

import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { getAbsoluteUrl, getCanonicalMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  ...getCanonicalMetadata("/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    ...(getAbsoluteUrl("/") ? { url: getAbsoluteUrl("/") } : {}),
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <FeaturedProjects />
      <Experience />
      <Process />
    </>
  );
}

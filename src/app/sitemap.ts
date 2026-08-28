import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { getAbsoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/projects", ...projects.map(({ slug }) => `/projects/${slug}`)];

  return paths.flatMap((path) => {
    const url = getAbsoluteUrl(path);

    return url ? [{ url }] : [];
  });
}

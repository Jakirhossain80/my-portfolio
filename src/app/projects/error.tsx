"use client";

import { RouteError } from "@/components/common/route-error";

export default function ProjectsError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <RouteError
      error={error}
      retry={retry}
      returnHref="/projects"
      returnLabel="Return to projects"
    />
  );
}

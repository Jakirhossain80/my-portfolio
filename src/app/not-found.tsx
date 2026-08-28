import Link from "next/link";

import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="route-shell">
      <div className="route-content">
        <p className="foundation-label">Page not found</p>
        <h1>This page is not available.</h1>
        <p className="route-introduction">
          The address may be incorrect, or the page may not have been published yet.
        </p>
        <div className="route-actions">
          <Link className="text-link inline-flex min-h-11 items-center" href="/">
            Return to the portfolio homepage
          </Link>
          <Link className="text-link inline-flex min-h-11 items-center" href="/projects">
            Browse available projects
          </Link>
          <a className="text-link inline-flex min-h-11 items-center" href={siteConfig.emailHref}>
            Email {siteConfig.name}
          </a>
        </div>
      </div>
    </div>
  );
}

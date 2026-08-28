import Link from "next/link";

import { ExternalLink } from "@/components/common/external-link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-alt">
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 text-sm text-muted-foreground">
          © {currentYear} {siteConfig.name}. {siteConfig.professionalTitle}.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex list-none flex-wrap items-center gap-x-5 gap-y-2 p-0">
            <li>
              <Link
                className="cursor-pointer rounded-sm font-semibold text-primary-hover underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-[var(--duration-fast)] ease-standard hover:text-primary hover:decoration-current motion-reduce:transition-none"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            {siteConfig.socialLinks.map((link) => (
              <li key={link.href}>
                <ExternalLink href={link.href}>{link.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

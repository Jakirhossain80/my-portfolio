import Link from "next/link";

import { ExternalLink } from "@/components/common/external-link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const footerLinkClassName =
    "inline-flex min-h-11 cursor-pointer items-center rounded-sm font-semibold text-primary-hover underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-[var(--duration-fast)] ease-standard hover:text-primary hover:decoration-current active:opacity-80 motion-reduce:transition-none";

  return (
    <footer className="border-t border-border bg-surface-alt">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 border-b border-border pb-8 md:grid-cols-[minmax(0,1.2fr)_minmax(12rem,0.8fr)_minmax(14rem,0.8fr)] md:gap-10">
          <div className="max-w-md">
            <Link
              className="inline-flex min-h-11 cursor-pointer items-center rounded-md text-xl font-bold tracking-tight text-foreground no-underline transition-colors duration-[var(--duration-fast)] ease-standard hover:text-primary-hover motion-reduce:transition-none"
              href="/"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteConfig.professionalTitle}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-foreground uppercase">
              Navigation
            </h2>
            <ul className="mt-3 flex list-none flex-wrap gap-x-5 gap-y-1 p-0 md:flex-col md:items-start">
              {siteConfig.navigation.map((link) => (
                <li key={link.href}>
                  <Link className={footerLinkClassName} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact-heading">
            <h2
              className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-foreground uppercase"
              id="footer-contact-heading"
            >
              Contact
            </h2>
            <ul className="mt-3 flex list-none flex-wrap gap-x-5 gap-y-1 p-0 md:flex-col md:items-start">
              <li>
                <a className={footerLinkClassName} href={siteConfig.emailHref}>
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.socialLinks.map((link) => (
                <li key={link.href}>
                  <ExternalLink className="min-h-11" href={link.href}>
                    {link.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="m-0 pt-6 text-sm text-muted-foreground">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

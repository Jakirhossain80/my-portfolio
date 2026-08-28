import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PrimaryNavigation } from "@/components/layout/primary-navigation";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background shadow-sm">
      <Container className="relative flex min-h-18 items-center gap-4 py-3">
        <Link
          className="inline-flex min-h-11 w-fit cursor-pointer items-center rounded-md text-lg leading-tight font-bold tracking-tight text-foreground no-underline transition-colors duration-[var(--duration-fast)] ease-standard hover:text-primary-hover motion-reduce:transition-none"
          href="/"
        >
          {siteConfig.name}
        </Link>

        <PrimaryNavigation />
      </Container>
    </header>
  );
}

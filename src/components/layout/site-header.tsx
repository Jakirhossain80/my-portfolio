import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background">
      <Container className="flex flex-col gap-3 py-3 sm:min-h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <Link
          className="w-fit cursor-pointer rounded-md text-lg leading-tight font-bold tracking-tight text-foreground no-underline transition-colors duration-[var(--duration-fast)] ease-standard hover:text-primary-hover motion-reduce:transition-none"
          href="/"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary navigation" className="w-full sm:w-auto">
          <ul className="flex list-none flex-wrap items-center justify-between gap-2 p-0 sm:justify-end">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex min-h-11 cursor-pointer items-center rounded-lg px-3 py-2 font-semibold text-muted-foreground no-underline transition-[background-color,color] duration-[var(--duration-fast)] ease-standard hover:bg-muted hover:text-primary-hover active:bg-surface-alt motion-reduce:transition-none"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

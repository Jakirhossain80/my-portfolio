"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button, buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

type RouteErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
  returnHref?: string;
  returnLabel?: string;
};

export function RouteError({
  error,
  retry,
  returnHref = "/",
  returnLabel = "Return to the homepage",
}: RouteErrorProps) {
  useEffect(() => {
    console.error("A route failed to render.", error);
  }, [error]);

  return (
    <Section spacing="compact">
      <Container size="md">
        <Card padding="lg" role="alert">
          <p className="font-mono text-sm font-semibold tracking-[var(--letter-spacing-label)] text-error uppercase">
            Unable to load this page
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Something went wrong.</h1>
          <p className="mt-5 text-lg leading-[var(--line-height-body)] text-muted-foreground">
            The page could not be displayed. You can try again, return to a working page, or contact
            me if the problem continues.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button onClick={retry}>Try again</Button>
            <Link className={buttonClassName({ variant: "secondary" })} href={returnHref}>
              {returnLabel}
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Contact alternative:{" "}
            <a className="text-link" href={siteConfig.emailHref}>
              {siteConfig.email}
            </a>
          </p>
        </Card>
      </Container>
    </Section>
  );
}

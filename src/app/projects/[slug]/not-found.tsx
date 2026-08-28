import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProjectNotFound() {
  return (
    <Section spacing="compact">
      <Container size="md">
        <Card padding="lg">
          <p className="font-mono text-sm font-semibold tracking-[var(--letter-spacing-label)] text-primary-hover uppercase">
            Project not found
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">This case study is not available.</h1>
          <p className="mt-5 text-lg leading-[var(--line-height-body)] text-muted-foreground">
            The project may not exist, or its verified case study may not have been published yet.
          </p>
          <Link className={buttonClassName({ className: "mt-7" })} href="/projects">
            View available projects
          </Link>
        </Card>
      </Container>
    </Section>
  );
}

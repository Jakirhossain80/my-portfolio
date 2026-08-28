import Link from "next/link";

import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { professionalExperience } from "@/data/experience";
import { getProjectBySlug } from "@/utils/projects";

function ExperienceHighlights({ entryId }: { entryId: "development" | "employment" }) {
  const entry = professionalExperience[entryId];

  return (
    <dl className="mt-6 space-y-5">
      {entry.highlights.map((highlight) => (
        <div className="border-l-2 border-accent pl-4" key={highlight.title}>
          <dt className="font-semibold text-foreground">{highlight.title}</dt>
          <dd className="mt-1 text-sm leading-[var(--line-height-body)] text-muted-foreground sm:text-base">
            {highlight.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Experience() {
  const development = professionalExperience.development;
  const employment = professionalExperience.employment;
  const careerBridge = getProjectBySlug("careerbridge");

  return (
    <Section
      aria-labelledby="experience-heading"
      className="section-reveal"
      id="experience"
      surface="alternate"
    >
      <Container>
        <SectionHeading
          description="Independent technical development supported by the reliability, structure, and business awareness developed in an established professional environment."
          eyebrow="Professional experience"
          title="Technical growth backed by workplace maturity"
          titleId="experience-heading"
        />

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <Card className="border-primary/25" padding="lg">
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">{development.label}</Badge>
              {careerBridge ? <Badge variant="accent">{careerBridge.status.label}</Badge> : null}
            </div>
            <p className="mt-5 font-mono text-sm text-subtle-foreground">{development.context}</p>
            <h3 className="mt-2 text-2xl leading-[var(--line-height-heading)] font-bold tracking-[var(--letter-spacing-tight)] text-foreground sm:text-3xl">
              {development.title}
            </h3>
            <p className="mt-4 leading-[var(--line-height-body)] text-muted-foreground">
              {development.summary}
            </p>

            <ExperienceHighlights entryId="development" />

            {careerBridge ? (
              <Link
                className={buttonClassName({ className: "mt-7 w-full sm:w-auto" })}
                href={`/projects/${careerBridge.slug}`}
              >
                Review CareerBridge evidence
              </Link>
            ) : null}
          </Card>

          <Card padding="lg">
            <Badge variant="neutral">{employment.label}</Badge>
            <p className="mt-5 font-mono text-sm text-subtle-foreground">{employment.context}</p>
            <h3 className="mt-2 text-2xl leading-[var(--line-height-heading)] font-bold tracking-[var(--letter-spacing-tight)] text-foreground">
              {employment.title}
            </h3>
            <p className="mt-4 leading-[var(--line-height-body)] text-muted-foreground">
              {employment.summary}
            </p>

            <ExperienceHighlights entryId="employment" />

            <p className="mt-6 border-t border-border pt-5 text-sm leading-[var(--line-height-body)] text-subtle-foreground">
              Employment dates and detailed role responsibilities are intentionally omitted until
              they are confirmed.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

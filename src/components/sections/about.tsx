import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <Section aria-labelledby="about-heading" id="about" surface="alternate">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-16">
          <div>
            <SectionHeading
              description={siteConfig.about.introduction}
              eyebrow="About me"
              title="A practical path into web development"
              titleId="about-heading"
            />

            <div className="mt-6 max-w-[var(--container-md)] space-y-4 text-base leading-[var(--line-height-body)] text-muted-foreground sm:text-lg">
              {siteConfig.about.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2" aria-label="Professional context">
              <Badge variant="primary">{siteConfig.professionalTitle}</Badge>
              <Badge>{siteConfig.location}</Badge>
            </div>
          </div>

          <Card className="lg:mt-8" padding="lg">
            <h3 className="text-xl leading-[var(--line-height-heading)] font-semibold text-foreground">
              How I approach the work
            </h3>
            <dl className="mt-5 space-y-5">
              {siteConfig.about.strengths.map((strength) => (
                <div className="border-l-2 border-accent pl-4" key={strength.title}>
                  <dt className="font-semibold text-foreground">{strength.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {strength.description}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

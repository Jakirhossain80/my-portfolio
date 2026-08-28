import Link from "next/link";

import { SectionHeading } from "@/components/common/section-heading";
import { ServiceIcon } from "@/components/common/service-icon";
import { TechnologyBadge } from "@/components/common/technology-badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";
import { getSkillById } from "@/utils/skills";

export function Services() {
  return (
    <Section
      aria-labelledby="services-heading"
      className="section-reveal"
      id="services"
      surface="alternate"
    >
      <Container>
        <SectionHeading
          description="Focused development support for building, connecting, and repairing modern web application features. Scope and deliverables are agreed before work begins."
          eyebrow="Services"
          title="How I can support your project"
          titleId="services-heading"
        />

        <ul className="mt-10 grid list-none gap-5 p-0 md:grid-cols-2 xl:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <li className="h-full" key={service.id}>
              <Card className="flex h-full flex-col" padding="lg">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary-hover">
                  <ServiceIcon name={service.icon} />
                </div>

                <h3 className="mt-5 text-xl leading-[var(--line-height-heading)] font-semibold text-foreground">
                  {service.name}
                </h3>

                <div className="mt-5">
                  <h4 className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-foreground uppercase">
                    Client need
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.clientProblem}
                  </p>
                </div>

                <div className="mt-5">
                  <h4 className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-foreground uppercase">
                    Typical deliverables
                  </h4>
                  <ul className="mt-2 space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.deliverables.map((deliverable) => (
                      <li className="pl-1 marker:text-accent" key={deliverable}>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <h4 className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-foreground uppercase">
                    Related technologies
                  </h4>
                  <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                    {service.technologyIds.map((technologyId) => {
                      const technology = getSkillById(technologyId);

                      return (
                        <li className="max-w-full" key={technology.id}>
                          <TechnologyBadge name={technology.name} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link className={buttonClassName({ variant: "secondary" })} href="/projects">
            Review project work
          </Link>
        </div>
      </Container>
    </Section>
  );
}

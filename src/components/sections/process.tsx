import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <Section aria-labelledby="process-heading" className="section-reveal" id="process">
      <Container>
        <SectionHeading
          description="A structured path from the first conversation to an agreed delivery, with decisions and expectations made clear at each stage."
          eyebrow="Development process"
          title="How a project moves forward"
          titleId="process-heading"
        />

        <ol className="mt-10 grid list-none gap-5 p-0 md:grid-cols-2 xl:grid-cols-3 lg:gap-6">
          {processSteps.map((step, index) => (
            <li className="h-full" key={step.id}>
              <Card className="flex h-full flex-col" padding="lg">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 font-mono text-sm font-bold text-primary-hover"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-subtle-foreground uppercase">
                    Step {index + 1}
                  </p>
                </div>

                <h3 className="mt-5 text-xl leading-[var(--line-height-heading)] font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 leading-[var(--line-height-body)] text-muted-foreground">
                  {step.summary}
                </p>

                <ul className="mt-5 space-y-2 border-t border-border pt-5 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.details.map((detail) => (
                    <li className="pl-1 marker:text-accent" key={detail}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

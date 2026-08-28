import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type RouteLoadingProps = {
  label: string;
};

export function RouteLoading({ label }: RouteLoadingProps) {
  return (
    <Section aria-busy="true" aria-live="polite" spacing="compact">
      <Container size="lg">
        <p className="font-mono text-sm font-semibold tracking-[var(--letter-spacing-label)] text-primary-hover uppercase">
          Loading
        </p>
        <p className="mt-3 text-2xl font-bold text-foreground">{label}</p>
        <div aria-hidden="true" className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="loading-placeholder h-32 rounded-xl border border-border bg-surface" />
          <div className="loading-placeholder h-32 rounded-xl border border-border bg-surface" />
        </div>
        <span className="sr-only">Please wait while the content loads.</span>
      </Container>
    </Section>
  );
}

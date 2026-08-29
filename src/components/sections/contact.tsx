import { ExternalLink } from "@/components/common/external-link";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

const fieldClassName =
  "mt-2 min-h-11 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-foreground shadow-sm placeholder:text-subtle-foreground disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:opacity-80";

export function Contact() {
  return (
    <Section
      aria-labelledby="contact-heading"
      className="section-reveal"
      id="contact"
      surface="alternate"
      tabIndex={-1}
    >
      <Container>
        <SectionHeading
          description="For project discussions, professional opportunities, or technical conversations, use one of the direct contact options below."
          eyebrow="Contact"
          title="Let’s start a conversation"
          titleId="contact-heading"
        />

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
          <Card padding="lg">
            <h3 className="text-xl leading-[var(--line-height-heading)] font-semibold text-foreground">
              Contact information
            </h3>
            <p className="mt-3 leading-[var(--line-height-body)] text-muted-foreground">
              Email or call directly, or connect through a professional profile.
            </p>

            <dl className="mt-6 divide-y divide-border">
              <div className="py-4 first:pt-0">
                <dt className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-subtle-foreground uppercase">
                  Name
                </dt>
                <dd className="mt-1 font-semibold text-foreground">{siteConfig.name}</dd>
                <dd className="mt-1 text-sm text-muted-foreground sm:text-base">
                  {siteConfig.professionalTitle}
                </dd>
              </div>
              <div className="py-4">
                <dt className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-subtle-foreground uppercase">
                  Location
                </dt>
                <dd className="mt-1 text-foreground">{siteConfig.location}</dd>
              </div>
              <div className="py-4">
                <dt className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-subtle-foreground uppercase">
                  Cell
                </dt>
                <dd className="mt-1">
                  <a className="text-link inline-flex min-h-11 items-center" href={siteConfig.phoneHref}>
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-subtle-foreground uppercase">
                  Email
                </dt>
                <dd className="mt-1 break-words">
                  <a className="text-link inline-flex min-h-11 items-center" href={siteConfig.emailHref}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div className="pt-4">
                <dt className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-subtle-foreground uppercase">
                  Professional profiles
                </dt>
                <dd className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                  {siteConfig.socialLinks.map((link) => (
                    <ExternalLink className="min-h-11" href={link.href} key={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </dd>
              </div>
            </dl>
          </Card>

          <Card padding="lg">
            <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-primary-hover uppercase">
                  Interface preview
                </p>
                <h3 className="mt-2 text-xl leading-[var(--line-height-heading)] font-semibold text-foreground">
                  Send a message
                </h3>
              </div>
              <span className="w-fit rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs font-semibold text-muted-foreground">
                Delivery unavailable
              </span>
            </div>

            <p
              className="mt-6 rounded-lg border border-primary/25 bg-primary/10 p-4 text-sm leading-relaxed text-foreground sm:text-base"
              id="contact-form-status"
            >
              Online form delivery is not available in this initial release. Please email{` `}
              <a className="text-link" href={siteConfig.emailHref}>
                {siteConfig.email}
              </a>{` `}
              or use one of the direct contact options.
            </p>

            <form aria-describedby="contact-form-status" className="mt-6">
              <fieldset disabled>
                <legend className="sr-only">Contact form preview</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="font-semibold text-foreground" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      autoComplete="name"
                      className={fieldClassName}
                      id="contact-name"
                      name="name"
                      placeholder="Your name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-foreground" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      autoComplete="email"
                      className={fieldClassName}
                      id="contact-email"
                      name="email"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="font-semibold text-foreground" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    className={fieldClassName}
                    id="contact-subject"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    type="text"
                  />
                </div>

                <div className="mt-5">
                  <label className="font-semibold text-foreground" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    className={`${fieldClassName} min-h-36 resize-y`}
                    id="contact-message"
                    name="message"
                    placeholder="Share a brief overview of your enquiry"
                    rows={5}
                  />
                </div>

                <Button className="mt-6 w-full sm:w-auto" disabled type="submit">
                  Online delivery unavailable
                </Button>
              </fieldset>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

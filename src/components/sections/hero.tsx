import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "@/components/common/external-link";
import { TechnologyBadge } from "@/components/common/technology-badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <Section
      aria-labelledby="hero-heading"
      className="hero-section flex min-h-[calc(100svh-var(--sticky-header-offset))] items-center overflow-hidden"
      id="hero"
      spacing="none"
    >
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:gap-12 xl:gap-16">
          <div className="max-w-[var(--container-lg)]">
            <Badge className="hero-reveal hero-reveal-1 mb-5" variant="primary">
              {siteConfig.location}
            </Badge>

            <h1 className="hero-reveal hero-reveal-2" id="hero-heading">
              {siteConfig.name}
            </h1>

            <p className="hero-reveal hero-reveal-3 mt-4 max-w-3xl text-xl leading-[var(--line-height-heading)] font-semibold text-primary-hover sm:text-2xl lg:text-3xl">
              {siteConfig.professionalTitle}
            </p>

            <ul
              aria-label="Primary technologies"
              className="hero-reveal hero-reveal-4 mt-6 flex list-none flex-wrap gap-2 p-0"
            >
              {siteConfig.hero.technologies.map((technology) => (
                <li key={technology}>
                  <TechnologyBadge name={technology} />
                </li>
              ))}
            </ul>

            <div className="hero-reveal hero-reveal-5 mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <Link className={buttonClassName({ size: "lg" })} href="/projects">
                Projects
              </Link>
              <Link
                className={buttonClassName({ size: "lg", variant: "secondary" })}
                href={siteConfig.contact.href}
              >
                Contact
              </Link>
            </div>

            <nav
              aria-label="Professional profiles"
              className="hero-reveal hero-reveal-6 mt-7 flex flex-wrap gap-x-6 gap-y-3"
            >
              {siteConfig.socialLinks.map((link) => (
                <ExternalLink href={link.href} key={link.href}>
                  {link.label}
                </ExternalLink>
              ))}
            </nav>
          </div>

          <figure className="hero-reveal hero-reveal-7 mx-auto w-full max-w-64 sm:max-w-80 lg:max-w-md">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-lg">
              <Image
                alt="Portrait of Md. Jakir Hossain"
                className="h-auto w-full"
                height={950}
                loading="eager"
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 20rem, 16rem"
                src="/images/profile/md-jakir-hossain-profile.webp"
                width={900}
              />
            </div>
          </figure>
        </div>
      </Container>
    </Section>
  );
}

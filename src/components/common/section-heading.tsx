import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { classNames } from "@/utils/class-names";

const alignmentClasses = {
  center: "mx-auto text-center",
  left: "text-left",
} as const;

type SectionHeadingProps = Omit<ComponentPropsWithoutRef<"div">, "title"> & {
  align?: keyof typeof alignmentClasses;
  description?: ReactNode;
  eyebrow?: ReactNode;
  headingLevel?: 2 | 3;
  title: ReactNode;
  titleId?: string;
};

export function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  headingLevel = 2,
  title,
  titleId,
  ...props
}: SectionHeadingProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div
      className={classNames("max-w-[var(--container-md)]", alignmentClasses[align], className)}
      {...props}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-sm font-semibold tracking-[var(--letter-spacing-label)] text-primary-hover uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className="text-3xl leading-[var(--line-height-heading)] font-bold tracking-[var(--letter-spacing-tight)] text-foreground sm:text-4xl"
        id={titleId}
      >
        {title}
      </Heading>
      {description ? (
        <div className="mt-4 text-base leading-[var(--line-height-body)] text-muted-foreground sm:text-lg">
          {description}
        </div>
      ) : null}
    </div>
  );
}

import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/utils/class-names";

const spacingClasses = {
  compact: "section-spacing-compact",
  none: "",
  standard: "section-spacing",
} as const;

const surfaceClasses = {
  alternate: "bg-surface-alt",
  default: "bg-background",
  none: "",
  surface: "bg-surface",
} as const;

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: keyof typeof spacingClasses;
  surface?: keyof typeof surfaceClasses;
};

export function Section({
  className,
  spacing = "standard",
  surface = "none",
  ...props
}: SectionProps) {
  return (
    <section
      className={classNames(spacingClasses[spacing], surfaceClasses[surface], className)}
      {...props}
    />
  );
}

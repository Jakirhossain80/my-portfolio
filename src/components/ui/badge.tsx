import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/utils/class-names";

const variantClasses = {
  accent: "border-accent bg-accent text-accent-foreground",
  error: "border-error/35 bg-error/10 text-error",
  neutral: "border-border bg-muted text-muted-foreground",
  primary: "border-primary/30 bg-primary/10 text-primary-hover",
  success: "border-success/35 bg-success/10 text-success",
} as const;

export type BadgeVariant = keyof typeof variantClasses;

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={classNames(
        "inline-flex min-h-7 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs leading-none font-semibold",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

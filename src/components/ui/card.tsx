import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/utils/class-names";

const paddingClasses = {
  lg: "p-6 sm:p-8",
  md: "p-5 sm:p-6",
  sm: "p-4 sm:p-5",
} as const;

type CardProps = ComponentPropsWithoutRef<"div"> & {
  padding?: keyof typeof paddingClasses;
};

export function Card({ className, padding = "md", ...props }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-xl border border-border bg-surface shadow-sm",
        paddingClasses[padding],
        className,
      )}
      {...props}
    />
  );
}

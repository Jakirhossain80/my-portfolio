import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/utils/class-names";

const maxWidthClasses = {
  sm: "max-w-[var(--container-sm)]",
  md: "max-w-[var(--container-md)]",
  lg: "max-w-[var(--container-lg)]",
  xl: "max-w-[var(--container-xl)]",
} as const;

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: keyof typeof maxWidthClasses;
};

export function Container({ className, size = "xl", ...props }: ContainerProps) {
  return (
    <div
      className={classNames(
        "mx-auto w-full px-[var(--page-gutter)]",
        maxWidthClasses[size],
        className,
      )}
      {...props}
    />
  );
}

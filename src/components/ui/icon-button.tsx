import type { ButtonHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/utils/class-names";

const sizeClasses = {
  sm: "size-10",
  md: "size-11",
  lg: "size-12",
} as const;

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label" | "children"> & {
  "aria-label": string;
  icon: ReactNode;
  size?: keyof typeof sizeClasses;
};

export function IconButton({
  "aria-label": ariaLabel,
  className,
  icon,
  size = "md",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className={classNames(
        "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface text-foreground shadow-sm transition-[background-color,border-color,color,transform] duration-[var(--duration-fast)] ease-standard hover:border-primary hover:text-primary-hover active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        className,
      )}
      type={type}
      {...props}
    >
      <span aria-hidden="true" className="flex size-5 items-center justify-center">
        {icon}
      </span>
    </button>
  );
}

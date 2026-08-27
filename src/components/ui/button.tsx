import type { ButtonHTMLAttributes } from "react";

import { classNames } from "@/utils/class-names";

const buttonVariants = {
  primary:
    "border-primary bg-primary text-primary-foreground hover:border-primary-hover hover:bg-primary-hover active:brightness-90",
  secondary:
    "border-border bg-surface text-foreground shadow-sm hover:border-primary hover:text-primary-hover active:bg-muted",
  subtle:
    "border-transparent bg-muted text-foreground hover:bg-surface-alt hover:text-primary-hover active:brightness-95",
} as const;

const buttonSizes = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-base",
  lg: "min-h-12 px-6 py-3 text-lg",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export function buttonClassName({
  className,
  size = "md",
  variant = "primary",
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
} = {}) {
  return classNames(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border font-semibold no-underline transition-[background-color,border-color,color,filter,box-shadow] duration-[var(--duration-fast)] ease-standard motion-reduce:transition-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export function Button({ className, size, type = "button", variant, ...props }: ButtonProps) {
  return (
    <button className={buttonClassName({ className, size, variant })} type={type} {...props} />
  );
}

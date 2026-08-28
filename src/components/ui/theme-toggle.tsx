"use client";

import { themes, useTheme } from "@/components/providers/theme-provider";
import { classNames } from "@/utils/class-names";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();
  const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length] ?? "system";

  return (
    <button
      aria-label={`Theme: ${theme}. Switch to ${nextTheme} theme.`}
      className={classNames(
        "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 font-semibold text-foreground shadow-sm transition-[background-color,border-color,color] duration-[var(--duration-fast)] ease-standard hover:border-primary hover:text-primary-hover active:bg-muted motion-reduce:transition-none",
        className,
      )}
      onClick={() => setTheme(nextTheme)}
      type="button"
    >
      <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
      <span>Theme: {theme[0].toUpperCase() + theme.slice(1)}</span>
    </button>
  );
}

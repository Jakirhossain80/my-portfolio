"use client";

import { themes, useTheme } from "@/components/providers/theme-provider";
import { classNames } from "@/utils/class-names";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();

  return (
    <label
      className={classNames(
        "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 font-semibold text-foreground shadow-sm transition-[background-color,border-color,color] duration-[var(--duration-fast)] ease-standard hover:border-primary motion-reduce:transition-none",
        className,
      )}
    >
      <span>Theme</span>
      <select
        aria-label="Theme preference"
        className="cursor-pointer rounded-md border-0 bg-transparent py-0.5 text-foreground outline-none"
        onChange={(event) => {
          const selectedTheme = themes.find((availableTheme) => availableTheme === event.target.value);

          if (selectedTheme) {
            setTheme(selectedTheme);
          }
        }}
        value={theme}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </label>
  );
}

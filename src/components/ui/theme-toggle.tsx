"use client";

import type { Theme } from "@/components/providers/theme-provider";
import { useTheme } from "@/components/providers/theme-provider";
import { IconButton } from "@/components/ui/icon-button";
import { classNames } from "@/utils/class-names";

type ThemeToggleProps = {
  className?: string;
};

const themeDetails = {
  system: { label: "System", next: "light" },
  light: { label: "Light", next: "dark" },
  dark: { label: "Dark", next: "system" },
} as const satisfies Record<Theme, { label: string; next: Theme }>;

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "light") {
    return (
      <span className="relative block size-3.5 rounded-full border-2 border-current before:absolute before:top-1/2 before:left-1/2 before:h-5 before:w-0.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-current after:absolute after:top-1/2 after:left-1/2 after:h-0.5 after:w-5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-current" />
    );
  }

  if (theme === "dark") {
    return <span className="block size-4 rounded-full border-2 border-current shadow-[inset_5px_-3px_0_-2px_currentColor]" />;
  }

  return (
    <span className="relative block h-3.5 w-5 rounded-[0.2rem] border-2 border-current after:absolute after:top-full after:left-1/2 after:h-1.5 after:w-2.5 after:-translate-x-1/2 after:border-x-2 after:border-b-2 after:border-current" />
  );
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();
  const currentTheme = themeDetails[theme];

  return (
    <IconButton
      aria-label={`${currentTheme.label} theme active. Switch to ${themeDetails[currentTheme.next].label} theme`}
      className={classNames("relative", className)}
      icon={<ThemeIcon theme={theme} />}
      onClick={() => setTheme(currentTheme.next)}
      title={`${currentTheme.label} theme — switch to ${themeDetails[currentTheme.next].label}`}
    />
  );
}

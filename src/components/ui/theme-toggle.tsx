"use client";

import { useSyncExternalStore } from "react";

import { classNames } from "@/utils/class-names";

const themeStorageKey = "portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";
const themes = ["system", "light", "dark"] as const;

type Theme = (typeof themes)[number];

function isTheme(value: string | null): value is Theme {
  return themes.some((theme) => theme === value);
}

function getThemeSnapshot(): Theme {
  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    return isTheme(storedTheme) ? storedTheme : "system";
  } catch {
    return "system";
  }
}

function getServerThemeSnapshot(): Theme {
  return "system";
}

function subscribeToTheme(onStoreChange: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === themeStorageKey) {
      const theme = isTheme(event.newValue) ? event.newValue : "system";
      setDocumentTheme(theme);
      onStoreChange();
    }
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(themeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(themeChangeEvent, onStoreChange);
  };
}

function setDocumentTheme(theme: Theme) {
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.dataset.theme = theme;
  }
}

function applyTheme(theme: Theme) {
  setDocumentTheme(theme);

  try {
    window.localStorage.setItem(themeStorageKey, theme);
  } catch {
    // The active document can still use the selected theme when storage is unavailable.
  }

  window.dispatchEvent(new Event(themeChangeEvent));
}

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
  const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length] ?? "system";

  return (
    <button
      aria-label={`Theme: ${theme}. Switch to ${nextTheme} theme.`}
      className={classNames(
        "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 font-semibold text-foreground shadow-sm transition-[background-color,border-color,color] duration-[var(--duration-fast)] ease-standard hover:border-primary hover:text-primary-hover active:bg-muted motion-reduce:transition-none",
        className,
      )}
      onClick={() => applyTheme(nextTheme)}
      type="button"
    >
      <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
      <span>Theme: {theme[0].toUpperCase() + theme.slice(1)}</span>
    </button>
  );
}

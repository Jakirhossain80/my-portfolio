"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const themeStorageKey = "portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";

export const themes = ["system", "light", "dark"] as const;

export type Theme = (typeof themes)[number];

type ThemeContextValue = {
  setTheme: (theme: Theme) => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

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

function setDocumentTheme(theme: Theme) {
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.dataset.theme = theme;
  }
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

function persistTheme(theme: Theme) {
  setDocumentTheme(theme);

  try {
    window.localStorage.setItem(themeStorageKey, theme);
  } catch {
    // The active document can still use the selected theme when storage is unavailable.
  }

  window.dispatchEvent(new Event(themeChangeEvent));
}

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  return <ThemeContext value={{ setTheme: persistTheme, theme }}>{children}</ThemeContext>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.");
  }

  return context;
}

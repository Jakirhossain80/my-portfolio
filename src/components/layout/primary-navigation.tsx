"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { buttonClassName } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { classNames } from "@/utils/class-names";

let observedSectionId: string | null = null;
const homepageNavigation = [...siteConfig.homepageNavigation, siteConfig.contact];

function getHashSectionId() {
  return window.location.pathname === "/" && window.location.hash
    ? decodeURIComponent(window.location.hash.slice(1))
    : null;
}

function getServerSectionId() {
  return null;
}

function subscribeToActiveSection(onStoreChange: () => void) {
  const sectionElements = homepageNavigation
    .map(({ sectionId }) => document.getElementById(sectionId))
    .filter((element): element is HTMLElement => element !== null);

  function handleLocationChange() {
    observedSectionId = getHashSectionId();
    onStoreChange();
  }

  const observer =
    sectionElements.length > 0 && "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            const visibleEntry = entries
              .filter((entry) => entry.isIntersecting)
              .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

            if (visibleEntry?.target.id && visibleEntry.target.id !== observedSectionId) {
              observedSectionId = visibleEntry.target.id;
              onStoreChange();
            }
          },
          {
            rootMargin: "-20% 0px -65%",
            threshold: [0, 0.25, 0.5, 0.75],
          },
        )
      : null;

  sectionElements.forEach((element) => observer?.observe(element));
  window.addEventListener("hashchange", handleLocationChange);
  window.addEventListener("popstate", handleLocationChange);

  return () => {
    observer?.disconnect();
    window.removeEventListener("hashchange", handleLocationChange);
    window.removeEventListener("popstate", handleLocationChange);
  };
}

function getActiveSectionSnapshot() {
  if (window.location.pathname !== "/") {
    return null;
  }

  const hashSectionId = getHashSectionId();

  if (hashSectionId) {
    return hashSectionId;
  }

  return observedSectionId && document.getElementById(observedSectionId)
    ? observedSectionId
    : null;
}

function navigationLinkClassName(isActive: boolean) {
  return classNames(
    "inline-flex min-h-11 cursor-pointer items-center rounded-lg px-3 py-2 font-semibold no-underline transition-[background-color,color] duration-[var(--duration-fast)] ease-standard hover:bg-muted hover:text-primary-hover active:bg-surface-alt motion-reduce:transition-none",
    isActive ? "bg-muted text-primary-hover" : "text-muted-foreground",
  );
}

export function PrimaryNavigation() {
  const pathname = usePathname();
  const activeSectionId = useSyncExternalStore(
    subscribeToActiveSection,
    getActiveSectionSnapshot,
    getServerSectionId,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const focusFrame = window.requestAnimationFrame(() => firstMobileLinkRef.current?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (
        target instanceof Node &&
        !mobileMenuRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function isRouteActive(href: string) {
    if (href === "/") {
      return pathname === "/" && activeSectionId === null;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const isContactActive = pathname === "/" && activeSectionId === siteConfig.contact.sectionId;

  return (
    <div className="ml-auto flex items-center gap-2">
      <nav aria-label="Primary navigation" className="hidden xl:block">
        <ul className="flex list-none items-center gap-1 p-0">
          {siteConfig.homepageNavigation.map((item) => {
            const isActive = pathname === "/" && activeSectionId === item.sectionId;

            return (
              <li key={item.href}>
                <Link
                  aria-current={isActive ? "location" : undefined}
                  className={navigationLinkClassName(isActive)}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          {siteConfig.navigation.map((item) => {
            const isActive = isRouteActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={navigationLinkClassName(isActive)}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link
              aria-current={isContactActive ? "location" : undefined}
              className={buttonClassName({ size: "sm" })}
              href={siteConfig.contact.href}
            >
              {siteConfig.contact.label}
            </Link>
          </li>
        </ul>
      </nav>

      <button
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface px-4 py-2 font-semibold text-foreground shadow-sm transition-[background-color,border-color,color] duration-[var(--duration-fast)] ease-standard hover:border-primary hover:text-primary-hover active:bg-muted motion-reduce:transition-none xl:hidden"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        ref={menuButtonRef}
        type="button"
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      <div
        className={classNames(
          "mobile-navigation-panel absolute top-full right-[var(--page-gutter)] left-[var(--page-gutter)] mt-px rounded-b-xl border border-t-0 border-border bg-surface p-4 shadow-lg xl:hidden",
        )}
        hidden={!isMenuOpen}
        id="mobile-navigation"
        ref={mobileMenuRef}
      >
        <nav aria-label="Mobile navigation">
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {siteConfig.homepageNavigation.map((item) => {
              const isActive = pathname === "/" && activeSectionId === item.sectionId;

              return (
                <li key={item.href}>
                  <Link
                    aria-current={isActive ? "location" : undefined}
                    className={classNames(navigationLinkClassName(isActive), "w-full")}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            {siteConfig.navigation.map((item, index) => {
              const isActive = isRouteActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={classNames(navigationLinkClassName(isActive), "w-full")}
                    href={item.href}
                    onClick={closeMenu}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                aria-current={isContactActive ? "location" : undefined}
                className={buttonClassName({ className: "w-full", size: "md" })}
                href={siteConfig.contact.href}
                onClick={closeMenu}
              >
                {siteConfig.contact.label}
              </Link>
            </li>
            <li className="border-t border-border pt-3">
              <ThemeToggle className="w-full justify-between" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/utils/class-names";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  showIndicator?: boolean;
};

export function ExternalLink({
  children,
  className,
  rel,
  showIndicator = true,
  target = "_blank",
  ...props
}: ExternalLinkProps) {
  const safeRel =
    target === "_blank"
      ? Array.from(new Set([...(rel?.split(" ") ?? []), "noopener", "noreferrer"])).join(" ")
      : rel;

  return (
    <a
      className={classNames(
        "inline-flex cursor-pointer items-center gap-1 font-semibold text-primary-hover underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-[var(--duration-fast)] ease-standard hover:text-primary hover:decoration-current active:opacity-80 motion-reduce:transition-none",
        className,
      )}
      rel={safeRel}
      target={target}
      {...props}
    >
      <span>{children}</span>
      {showIndicator ? <span aria-hidden="true">↗</span> : null}
      {target === "_blank" ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}

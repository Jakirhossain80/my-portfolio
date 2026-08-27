import type { AnchorHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/utils/class-names";

type SocialLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  icon: ReactNode;
  label: string;
};

export function SocialLink({ className, icon, label, rel, target = "_blank", ...props }: SocialLinkProps) {
  const safeRel =
    target === "_blank"
      ? Array.from(new Set([...(rel?.split(" ") ?? []), "noopener", "noreferrer"])).join(" ")
      : rel;

  return (
    <a
      className={classNames(
        "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-semibold text-muted-foreground transition-[background-color,color] duration-[var(--duration-fast)] ease-standard hover:bg-muted hover:text-primary-hover active:bg-surface-alt motion-reduce:transition-none",
        className,
      )}
      rel={safeRel}
      target={target}
      {...props}
    >
      <span aria-hidden="true" className="flex size-5 shrink-0 items-center justify-center">
        {icon}
      </span>
      <span>{label}</span>
    </a>
  );
}

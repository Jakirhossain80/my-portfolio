import type { AnchorHTMLAttributes } from "react";

import { classNames } from "@/utils/class-names";

type SkipToContentProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  targetId?: string;
};

export function SkipToContent({
  children = "Skip to main content",
  className,
  targetId = "main-content",
  ...props
}: SkipToContentProps) {
  return (
    <a className={classNames("skip-link", className)} href={`#${targetId}`} {...props}>
      {children}
    </a>
  );
}

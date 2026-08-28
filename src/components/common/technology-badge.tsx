import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import type { BadgeVariant } from "@/components/ui/badge";

type TechnologyBadgeProps = {
  icon?: ReactNode;
  name: string;
  variant?: BadgeVariant;
};

export function TechnologyBadge({ icon, name, variant = "neutral" }: TechnologyBadgeProps) {
  return (
    <Badge className="max-w-full font-mono text-[var(--font-size-xs)]" variant={variant}>
      {icon ? (
        <span aria-hidden="true" className="flex size-3.5 shrink-0 items-center justify-center">
          {icon}
        </span>
      ) : null}
      {name}
    </Badge>
  );
}

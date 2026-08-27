import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

type TechnologyBadgeProps = {
  icon?: ReactNode;
  name: string;
};

export function TechnologyBadge({ icon, name }: TechnologyBadgeProps) {
  return (
    <Badge className="font-mono text-[var(--font-size-xs)]" variant="neutral">
      {icon ? (
        <span aria-hidden="true" className="flex size-3.5 shrink-0 items-center justify-center">
          {icon}
        </span>
      ) : null}
      {name}
    </Badge>
  );
}

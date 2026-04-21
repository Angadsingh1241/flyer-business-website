import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  children?: ReactNode;
  muted?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  children,
  muted = false,
}: PageHeroProps) {
  return (
    <section className={cn("section-shell", muted && "bg-card")}>
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div className="space-y-6">
            {eyebrow ? <Badge variant="brand">{eyebrow}</Badge> : null}
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-balance text-foreground md:text-6xl">
                {title}
              </h1>
              <p className="max-w-2xl">{description}</p>
            </div>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {children ? <div>{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
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
    <section className={cn("border-b border-border/70 py-14 md:py-24", muted ? "bg-[#eee8dc]" : "paper-grain")}>
      <div className="container-shell">
        <div className={cn("grid gap-10", children && "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end")}>
          <div className="space-y-6">
            {eyebrow ? <p className="eyebrow text-[#a46612]">{eyebrow}</p> : null}
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl leading-[1.04] text-foreground md:text-7xl">{title}</h1>
              <p className="max-w-2xl text-lg leading-8">{description}</p>
            </div>
            {actions ? <div className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
          </div>
          {children ? <div>{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

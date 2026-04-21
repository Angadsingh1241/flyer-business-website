import Link from "next/link";

import { BrandMark } from "@/components/site/brand-mark";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 text-left", className)}
      aria-label={`${siteContent.business.name} home`}
    >
      <BrandMark className="h-12 w-12 shrink-0" />
      <span className="flex flex-col">
        <span className="font-heading text-base font-semibold tracking-[-0.03em] text-foreground md:text-lg">
          {siteContent.business.name}
        </span>
        <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Design, print, deliver
        </span>
      </span>
    </Link>
  );
}

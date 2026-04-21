import * as React from "react";

import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-2xl border border-border bg-input px-4 text-sm text-foreground placeholder:text-muted-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/70",
        className,
      )}
      {...props}
    />
  );
}

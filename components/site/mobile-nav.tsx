"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open ? (
        <div className="absolute inset-x-0 top-full z-40 border-y border-border bg-background/98 backdrop-blur">
          <nav className="container-shell flex flex-col gap-2 py-6">
            {siteContent.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-card",
                  pathname === item.href && "bg-card shadow-soft",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button asChild variant="brand">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={siteContent.business.whatsappHref}>Message on WhatsApp</a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

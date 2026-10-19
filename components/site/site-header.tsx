import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { MobileNav } from "@/components/site/mobile-nav";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/95 shadow-[0_3px_30px_rgba(13,42,82,0.04)] backdrop-blur-xl">
      <div className="border-b border-border/60 bg-[#f3f7fc]">
        <div className="container-shell flex items-center justify-between gap-4 py-2 text-xs text-muted-foreground">
          <span>Locally focused. Hamilton and surrounding areas.</span>
          <a href={siteContent.business.phoneHref} className="hidden font-semibold text-foreground transition hover:text-brand sm:inline">
            {siteContent.business.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="container-shell flex items-center justify-between gap-4 py-3">
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-8">
          {siteContent.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={siteContent.business.whatsappHref} className="text-sm font-semibold text-foreground transition hover:text-brand">
            WhatsApp
          </a>
          <Button asChild variant="brand">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { MobileNav } from "@/components/site/mobile-nav";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="border-b border-border/70 bg-white/55">
        <div className="container-shell flex items-center justify-between gap-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span>{siteContent.business.location} local flyer service</span>
          <span className="hidden md:inline">
            {siteContent.business.responsePromise}
          </span>
        </div>
      </div>
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {siteContent.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition hover:text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline">
            <Link href="/pricing">View Pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={siteContent.business.whatsappHref}>Message on WhatsApp</a>
          </Button>
          <Button asChild variant="brand">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

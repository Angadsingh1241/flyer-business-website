import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { MobileNav } from "@/components/site/mobile-nav";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd5c7] bg-[#f9f6ef]/95 backdrop-blur-xl">
      <div className="container-shell flex min-h-[74px] items-center justify-between gap-5 py-3">
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {siteContent.navigation.main.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-[#091e39]/80 underline-offset-8 transition-colors hover:text-[#b26b15] hover:underline focus-visible:rounded-sm">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={siteContent.business.phoneHref} className="text-sm font-semibold text-[#091e39] transition hover:text-[#b26b15]">
            {siteContent.business.phoneDisplay}
          </a>
          <Button asChild variant="brand" className="min-h-11">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

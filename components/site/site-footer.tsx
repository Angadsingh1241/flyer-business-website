import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  const featuredAreas = siteContent.serviceAreas.filter((area) => area.featured).slice(0, 4);

  return (
    <footer className="border-t border-border bg-white/70">
      <div className="container-shell section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-md">{siteContent.business.tagline}</p>
          <Badge variant="brand">Hamilton-based service</Badge>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            {siteContent.business.proofNote}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Pages</h2>
          <div className="grid gap-3">
            {siteContent.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Popular Areas</h2>
          <div className="grid gap-3">
            {featuredAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/contact?areas=${area.slug}`}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <div className="grid gap-3 text-sm text-muted-foreground">
            <a href={siteContent.business.phoneHref}>{siteContent.business.phoneDisplay}</a>
            <a href={siteContent.business.whatsappHref}>Message on WhatsApp</a>
            <a href={siteContent.business.textHref}>Text message</a>
            <a href={`mailto:${siteContent.business.email}`}>
              {siteContent.business.email}
            </a>
          </div>
          <p className="text-xs leading-6 text-muted-foreground">
            Service area coverage includes Hamilton and nearby communities. Area counts are approximate and used for quote planning only.
          </p>
        </div>
      </div>

      <div className="border-t border-border/80 py-5">
        <div className="container-shell flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>
            Copyright {new Date().getFullYear()} {siteContent.business.name}
          </span>
          <span>{siteContent.business.serviceRadius}</span>
        </div>
      </div>
    </footer>
  );
}

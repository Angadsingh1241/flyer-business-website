import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  const featuredAreas = siteContent.serviceAreas.filter((area) => area.featured).slice(0, 4);

  return (
    <footer className="bg-[#091e39] text-[#fffcf4]">
      <div className="container-shell grid gap-12 py-16 md:py-20 lg:grid-cols-[1.5fr_0.75fr_0.75fr_1fr]">
        <div className="space-y-5">
          <Link href="/" className="inline-block font-editorial text-3xl leading-tight text-white">
            Hamilton Flyer<br />Delivery.
          </Link>
          <p className="max-w-xs text-base leading-7 text-white/70">
            Local flyer marketing, designed, printed and delivered across Hamilton and nearby communities.
          </p>
          <p className="max-w-xs border-t border-white/15 pt-4 text-xs text-white/60">{siteContent.business.proofNote}</p>
        </div>
        <div>
          <h2 className="eyebrow text-[#f4a43a]">Explore</h2>
          <div className="mt-5 grid gap-3">
            {siteContent.navigation.main.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/75 transition hover:text-white">{item.label}</Link>
            ))}
            <Link href="/contact" className="text-sm text-white/75 transition hover:text-white">Get a Quote</Link>
          </div>
        </div>
        <div>
          <h2 className="eyebrow text-[#f4a43a]">Popular areas</h2>
          <div className="mt-5 grid gap-3">
            {featuredAreas.map((area) => (
              <Link key={area.slug} href={`/contact?areas=${area.slug}`} className="text-sm text-white/75 transition hover:text-white">
                {area.name}
              </Link>
            ))}
            <Link href="/areas-served" className="inline-flex items-center gap-1 text-sm text-[#f4a43a]">View all areas <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div>
          <h2 className="eyebrow text-[#f4a43a]">Get in touch</h2>
          <div className="mt-5 grid gap-3 text-sm">
            <a href={siteContent.business.phoneHref} className="text-white/80 hover:text-white">{siteContent.business.phoneDisplay}</a>
            <a href={siteContent.business.whatsappHref} className="text-white/80 hover:text-white">Message on WhatsApp</a>
            <a href={siteContent.business.textHref} className="text-white/80 hover:text-white">Text message</a>
            <a href={`mailto:${siteContent.business.email}`} className="break-all text-white/80 hover:text-white">{siteContent.business.email}</a>
          </div>
          <p className="mt-6 text-xs leading-6 text-white/60">Hamilton, Ontario. Approximate household counts are for initial route planning.</p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-shell flex flex-wrap justify-between gap-4 py-6 text-xs text-white/55">
          <span>© {new Date().getFullYear()} Hamilton Flyer Delivery. All rights reserved.</span>
          <span>Design. Print. Deliver. Prices in CAD per home.</span>
        </div>
      </div>
    </footer>
  );
}

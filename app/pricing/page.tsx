import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { PricingCard } from "@/components/site/pricing-card";
import { QuoteEstimator } from "@/components/site/quote-estimator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";
import { formatCurrency } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: `Pricing | ${siteContent.business.name}`,
  description:
    "See starting rates and example campaign packages for Hamilton flyer delivery and door hanger campaigns.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear pricing for flyer delivery and door hanger campaigns."
        description="Start with the delivery rate, then use the example packages to understand what a campaign could look like."
        actions={
          <>
            <Button asChild variant="brand" size="lg">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={siteContent.business.whatsappHref}>Message on WhatsApp</a>
            </Button>
          </>
        }
      />

      <section className="section-shell">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {siteContent.pricing.plans.map((plan) => (
            <PricingCard key={plan.slug} plan={plan} />
          ))}
        </div>
      </section>

      <section className="section-shell bg-white/60">
        <div className="container-shell space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl font-semibold text-foreground">Example campaign packages</h2>
            <p>{siteContent.pricing.disclaimer}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {siteContent.pricing.packages.map((pkg) => (
              <Card key={pkg.slug} className="h-full border-white/80 bg-white/92 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Example package
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">{pkg.title}</h3>
                <div className="mt-4 text-4xl font-semibold text-foreground">
                  {formatCurrency(pkg.priceFrom)}
                </div>
                <p className="mt-3">{pkg.summary}</p>
                <p className="mt-3 text-sm">{pkg.audience}</p>
                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-6 w-full">
                  <Link href="/contact">{pkg.ctaLabel}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell overflow-x-auto">
          <div className="min-w-[760px] overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft">
            <div className="grid grid-cols-3 gap-0 border-b border-border bg-[#f8fbff] text-sm font-semibold text-foreground">
              <div className="px-5 py-4">Feature</div>
              <div className="border-l border-border px-5 py-4">Standard flyer bundle</div>
              <div className="border-l border-border px-5 py-4">Door hanger delivery</div>
            </div>
            {siteContent.pricing.comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 gap-0 border-b border-border last:border-b-0"
              >
                <div className="px-5 py-4 text-sm font-medium text-foreground">{row.feature}</div>
                <div className="border-l border-border px-5 py-4 text-sm text-muted-foreground">
                  {row.standard}
                </div>
                <div className="border-l border-border px-5 py-4 text-sm text-muted-foreground">
                  {row.doorHanger}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-card">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold text-foreground">Quick estimate</h2>
            <p>
              Choose a delivery type, add areas, and get a rough starting estimate.
            </p>
          </div>
          <QuoteEstimator />
        </div>
      </section>

      <CtaBanner
        title="Want a tailored quote?"
        description="Send your target area, quantity, and service details. WhatsApp will open with everything prepared for you."
        primaryLabel="Get a Quote"
        secondaryLabel="Message on WhatsApp"
      />
    </>
  );
}

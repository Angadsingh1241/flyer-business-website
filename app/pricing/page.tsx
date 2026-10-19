import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, PackageCheck, Truck } from "lucide-react";

import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { PricingCard } from "@/components/site/pricing-card";
import { QuoteEstimator } from "@/components/site/quote-estimator";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";
import { formatCurrency } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: `Pricing | ${siteContent.business.name}`,
  description:
    "Standard flyers from $0.25 per home and door hangers from $0.45 per home, including design, print and delivery. Delivery-only rates also available.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Simple, transparent pricing"
        title="Great local reach. Clear per-home rates."
        description="Choose our complete design, print and delivery service, or save by supplying your own printed flyers. Compare both formats and estimate your campaign in seconds."
        actions={
          <>
            <Button asChild variant="brand" size="lg">
              <Link href="/contact">Get a Quote <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={siteContent.business.whatsappHref}>Ask us on WhatsApp</a>
            </Button>
          </>
        }
      />

      <section className="pb-4 pt-10 md:pt-14">
        <div className="container-shell grid gap-4 md:grid-cols-2">
          <Card className="flex gap-4 border-border bg-white p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <PackageCheck aria-hidden="true" className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-foreground">Complete service</h2>
              <p className="text-sm">We handle the flyer or hanger design, printing, route planning, and delivery for one per-home rate.</p>
            </div>
          </Card>
          <Card className="flex gap-4 border-border bg-white p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Truck aria-hidden="true" className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-foreground">Delivery only</h2>
              <p className="text-sm">Already have printed flyers or door hangers? Supply the materials and we handle distribution.</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Rates per home"
            title="Choose how you'd like to reach local homes."
            description="Every service has a complete-service rate and a delivery-only rate. Design and printing are already included in complete-service pricing."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {siteContent.pricing.plans.map((plan) => (
              <PricingCard key={plan.slug} plan={plan} />
            ))}
          </div>
          <p className="text-sm">{siteContent.pricing.disclaimer}</p>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Example campaign costs"
            title="What would 2,500 homes cost?"
            description="Four easy examples showing exactly how our per-home pricing adds up. Choose an example to start a matching quote request."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.pricing.packages.map((pkg) => (
              <Card key={pkg.slug} className="flex h-full flex-col border-border bg-[#f8fbff] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {pkg.fulfillment === "complete" ? "Design + Print + Delivery" : "Delivery Only"}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{pkg.title}</h3>
                <div className="mt-4 text-4xl font-semibold text-foreground">{formatCurrency(pkg.priceFrom)}</div>
                <p className="mt-1 text-sm">{pkg.summary}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-success" />{item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-6 w-full">
                  <Link href={`/contact?deliveryType=${pkg.deliveryType}&fulfillment=${pkg.fulfillment}&quantity=2500`}>
                    {pkg.ctaLabel} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell space-y-8">
          <SectionHeading
            eyebrow="At a glance"
            title="Standard flyers or door hangers?"
            description="Pick the format that works best for your message, budget, and target audience."
          />
          <div className="overflow-hidden rounded-[1.6rem] border border-border bg-white">
            <div className="grid grid-cols-[minmax(110px,1fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border bg-[#f0f5fb] text-sm font-semibold text-foreground">
              <div className="p-3 sm:p-5">Feature</div>
              <div className="border-l border-border p-3 sm:p-5">Standard flyers</div>
              <div className="border-l border-border p-3 sm:p-5">Door hangers</div>
            </div>
            {siteContent.pricing.comparisonRows.map((row) => (
              <div key={row.feature} className="grid grid-cols-[minmax(110px,1fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border last:border-b-0">
                <div className="p-3 text-xs font-semibold text-foreground sm:p-5 sm:text-sm">{row.feature}</div>
                <div className="border-l border-border p-3 text-xs text-muted-foreground sm:p-5 sm:text-sm">{row.standard}</div>
                <div className="border-l border-border p-3 text-xs text-muted-foreground sm:p-5 sm:text-sm">{row.doorHanger}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#eaf0f7]">
        <div className="container-shell grid items-start gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
          <div className="space-y-5 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Instant estimate"
              title="See your campaign budget before you contact us."
              description="Choose flyer or door hanger, complete service or delivery only, and enter the number of homes you want to reach."
            />
            <div className="space-y-3 border-t border-border pt-5">
              <div className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 text-success" /> Uses your selected per-home rate</div>
              <div className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 text-success" /> No extra design or printing fees added to complete packages</div>
              <div className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 text-success" /> Carry your choices into the quote form</div>
            </div>
          </div>
          <QuoteEstimator />
        </div>
      </section>

      <CtaBanner
        title="Ready to reach more local homes?"
        description="Choose your format and area and we'll help you plan your campaign. Your request opens in WhatsApp ready to send."
        primaryLabel="Get a Quote"
        secondaryLabel="Message on WhatsApp"
      />
    </>
  );
}

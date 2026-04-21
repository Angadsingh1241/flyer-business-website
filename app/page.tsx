import Link from "next/link";
import { MapPinned, MessageCircleMore, PhoneCall, Printer, SendToBack } from "lucide-react";

import { HeroVisual } from "@/components/site/hero-visual";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { PricingCard } from "@/components/site/pricing-card";
import { QuoteForm } from "@/components/site/quote-form";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";
import { formatCurrency, formatHomeCount } from "@/lib/utils";

const serviceIcons = [SendToBack, MapPinned, Printer, MessageCircleMore];

export const metadata = createPageMetadata({
  title: "Hamilton Flyer Delivery | Flyer Design, Print and Delivery",
  description: siteContent.seo.defaultDescription,
  path: "/",
});

export default function HomePage() {
  const featuredAreas = siteContent.serviceAreas.filter((area) => area.featured).slice(0, 4);

  return (
    <>
      <section className="section-shell overflow-hidden">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <Reveal className="space-y-8">
              <Badge variant="brand">{siteContent.home.hero.eyebrow}</Badge>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-balance text-foreground md:text-7xl">
                  {siteContent.home.hero.headline}
                </h1>
                <p className="max-w-2xl text-lg md:text-xl">
                  {siteContent.home.hero.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="brand" size="lg">
                  <Link href="/contact">{siteContent.home.hero.primaryCta}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/pricing">{siteContent.home.hero.secondaryCta}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={siteContent.business.whatsappHref}>
                    {siteContent.home.hero.tertiaryCta}
                  </a>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {siteContent.home.hero.supportingPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.25rem] border border-border bg-white px-4 py-4 text-sm font-medium text-foreground shadow-sm"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <a href={siteContent.business.phoneHref} className="inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-brand" />
                  {siteContent.business.phoneDisplay}
                </a>
                <span className="text-border">&bull;</span>
                <a href={siteContent.business.whatsappHref} className="inline-flex items-center gap-2">
                  <MessageCircleMore className="h-4 w-4 text-brand" />
                  Quick quote on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell space-y-12">
          <SectionHeading
            eyebrow={siteContent.home.servicesIntro.eyebrow}
            title={siteContent.home.servicesIntro.title}
            description={siteContent.home.servicesIntro.description}
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {siteContent.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? SendToBack;

              return (
                <Reveal key={service.slug} delay={index * 0.05}>
                  <Card className="h-full border-white/80 bg-white/92 p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-3">{service.summary}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/60">
        <div className="container-shell space-y-12">
          <SectionHeading
            eyebrow={siteContent.home.pricingIntro.eyebrow}
            title={siteContent.home.pricingIntro.title}
            description={siteContent.home.pricingIntro.description}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {siteContent.pricing.plans.map((plan, index) => (
              <Reveal key={plan.slug} delay={index * 0.05}>
                <PricingCard plan={plan} />
              </Reveal>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {siteContent.pricing.packages.map((pkg, index) => (
              <Reveal key={pkg.slug} delay={index * 0.05}>
                <Card className="h-full border-white/80 bg-white/92 p-6">
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
              </Reveal>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">{siteContent.pricing.disclaimer}</p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell space-y-12">
          <SectionHeading
            eyebrow={siteContent.home.areasIntro.eyebrow}
            title={siteContent.home.areasIntro.title}
            description={siteContent.home.areasIntro.description}
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "By city or area",
                description:
                  "Start with Hamilton, Ancaster, Dundas, Waterdown, Stoney Creek, or a major area like Hamilton Mountain.",
              },
              {
                title: "By postal code",
                description:
                  "Use postal prefixes like L8N, L9G, L8B, or L9H when you want tighter geographic targeting.",
              },
              {
                title: "Advanced targeting",
                description:
                  "Open advanced targeting only if you want to combine multiple neighbourhoods or narrow the route further.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-white/80 bg-white/92 p-6">
                <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredAreas.map((area) => (
              <Card key={area.slug} className="border-white/80 bg-white/92 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {formatHomeCount(area.homes)} homes
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">{area.name}</h3>
                <p className="mt-3">{area.notes}</p>
                <p className="mt-4 text-sm">Postal codes: {area.postalPrefixes.join(", ")}</p>
              </Card>
            ))}
          </div>

          <Button asChild variant="outline">
            <Link href="/areas-served">View all areas and map</Link>
          </Button>
        </div>
      </section>

      <section className="section-shell bg-white/60">
        <div className="container-shell space-y-12">
          <SectionHeading
            eyebrow={siteContent.home.samplesIntro.eyebrow}
            title={siteContent.home.samplesIntro.title}
            description={siteContent.home.samplesIntro.description}
          />
          <PortfolioGrid items={siteContent.portfolio.items} />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">{siteContent.portfolio.note}</p>
            <Button asChild variant="outline">
              <Link href="/templates">View all templates</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell space-y-12">
          <SectionHeading
            eyebrow={siteContent.home.howItWorksIntro.eyebrow}
            title={siteContent.home.howItWorksIntro.title}
            description={siteContent.home.howItWorksIntro.description}
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {siteContent.howItWorks.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <Card className="h-full border-white/80 bg-white/92 p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                    Step {step.number}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3">{step.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Get a quote"
              title={siteContent.home.finalCta.title}
              description={siteContent.home.finalCta.description}
            />
            <div className="grid gap-4">
              {[
                "Local Hamilton service",
                "Flyer delivery and door hangers",
                "Sample designs shown honestly while real assets are being added",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-border bg-white px-4 py-4 text-sm font-medium text-foreground shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <QuoteForm
            title="Fast quote request"
            description="Send the basics now. Optional details are there if you want to include them."
            submitLabel="Send on WhatsApp"
            source="homepage-form"
            variant="home"
          />
        </div>
      </section>
    </>
  );
}

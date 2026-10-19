import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPinned, MessageCircleMore, PhoneCall, Printer, SendToBack } from "lucide-react";

import { HeroVisual } from "@/components/site/hero-visual";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { PricingCard } from "@/components/site/pricing-card";
import { QuoteForm } from "@/components/site/quote-form";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";
import { formatHomeCount } from "@/lib/utils";

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
      <section className="relative isolate overflow-hidden bg-[#091e39] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-40 h-[480px] w-[480px] rounded-full bg-[#1f508a]/40 blur-[100px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-72 right-0 h-[500px] w-[500px] rounded-full bg-[#f4a43a]/10 blur-[100px]" />
        <div className="container-shell relative py-16 md:py-20 lg:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:gap-10">
            <Reveal className="relative z-10 space-y-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f7c37e]">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#f4a43a]" />
                {siteContent.home.hero.eyebrow}
              </span>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.065em] text-white sm:text-6xl xl:text-[4.6rem]">
                  {siteContent.home.hero.headline}
                </h1>
                <p className="max-w-xl text-lg leading-8 text-white/75 md:text-xl">
                  {siteContent.home.hero.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-[#f4a43a] text-[#091e39] hover:bg-[#ffbe66]">
                  <Link href="/contact">{siteContent.home.hero.primaryCta} <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" className="border border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <Link href="/pricing">{siteContent.home.hero.secondaryCta}</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
                {siteContent.home.hero.supportingPoints.map((point) => (
                  <span key={point} className="inline-flex items-center gap-2 text-sm text-white/85">
                    <Check aria-hidden="true" className="h-4 w-4 text-[#f4a43a]" />
                    {point}
                  </span>
                ))}
              </div>
              <div className="grid max-w-lg grid-cols-2 gap-3 border-t border-white/20 pt-6">
                <div>
                  <div className="text-3xl font-semibold text-white">$0.25 <span className="text-base font-normal text-white/70">/ home</span></div>
                  <p className="mt-1 text-sm leading-6 text-white/70">Standard flyers — design, print & delivery</p>
                </div>
                <div className="border-l border-white/20 pl-5">
                  <div className="text-3xl font-semibold text-white">$0.20 <span className="text-base font-normal text-white/70">/ home</span></div>
                  <p className="mt-1 text-sm leading-6 text-white/70">Standard flyer delivery only</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
                <a href={siteContent.business.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                  <PhoneCall aria-hidden="true" className="h-4 w-4 text-[#f4a43a]" />
                  {siteContent.business.phoneDisplay}
                </a>
                <a href={siteContent.business.whatsappHref} className="inline-flex items-center gap-2 hover:text-white">
                  <MessageCircleMore aria-hidden="true" className="h-4 w-4 text-[#f4a43a]" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}><HeroVisual /></Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="container-shell grid gap-3 py-6 text-center sm:grid-cols-3 sm:text-left">
          {[
            { title: "Target the right streets", detail: "Choose areas or postal codes" },
            { title: "Print-ready or done for you", detail: "Complete and delivery-only options" },
            { title: "One local point of contact", detail: "Clear quotes and campaign planning" },
          ].map((item) => (
            <div key={item.title} className="border-b border-border/60 pb-3 last:border-0 sm:border-b-0 sm:border-r sm:px-4 sm:pb-0 sm:first:pl-0">
              <div className="text-sm font-semibold text-foreground">{item.title}</div>
              <p className="mt-1 text-sm leading-6">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell space-y-9">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow={siteContent.home.servicesIntro.eyebrow}
              title="Everything your local campaign needs."
              description="Go from an idea to letterboxes and doorsteps with the services that fit your campaign."
            />
            <Button asChild variant="outline"><Link href="/services">Explore all services <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? SendToBack;
              return (
                <Reveal key={service.slug} delay={index * 0.04}>
                  <Card className="group h-full border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(13,42,82,0.10)]">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <h2 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h2>
                    <p className="mt-3 text-sm leading-7">{service.summary}</p>
                    <Link href="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
                      Learn more <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell space-y-9">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow={siteContent.home.pricingIntro.eyebrow}
              title={siteContent.home.pricingIntro.title}
              description={siteContent.home.pricingIntro.description}
            />
            <Button asChild variant="outline"><Link href="/pricing">Calculate your price <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {siteContent.pricing.plans.map((plan) => <PricingCard key={plan.slug} plan={plan} />)}
          </div>
          <p className="text-sm">{siteContent.pricing.disclaimer}</p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Local coverage"
              title="Reach the homes that matter to your business."
              description="Plan your campaign by neighbourhood or postal code. We can help you decide where to focus."
            />
            <Button asChild variant="outline"><Link href="/areas-served">Explore delivery areas <MapPinned aria-hidden="true" className="h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/contact?areas=${area.slug}`}
                className="group rounded-[1.4rem] border border-border bg-white px-5 py-5 transition hover:border-brand/40 hover:shadow-soft"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{formatHomeCount(area.homes)} estimated homes</span>
                <span className="mt-3 flex items-center justify-between gap-3 text-xl font-semibold text-foreground">
                  {area.name} <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-brand" />
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">{area.postalPrefixes.join(", ")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell space-y-9">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Flyer design inspiration"
              title="Make a lasting impression at the door."
              description="Browse sample flyer layouts and explore visual directions for your own campaign."
            />
            <Button asChild variant="outline"><Link href="/templates">View all flyer designs <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></Button>
          </div>
          <PortfolioGrid items={siteContent.portfolio.items.slice(0, 3)} />
          <p className="text-sm">{siteContent.portfolio.note}</p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell space-y-9">
          <SectionHeading
            eyebrow="How it works"
            title="From your idea to local doorsteps."
            description="A clear process, whether you need the complete package or delivery of ready-printed flyers."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {siteContent.howItWorks.steps.map((step) => (
              <Card key={step.number} className="h-full border-border bg-white p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a36a15]">Step {step.number}</div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#eaf0f7]">
        <div className="container-shell grid items-start gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
          <div className="space-y-5 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Let's get started"
              title="Tell us where you'd like to be seen."
              description="Share your area, format, and approximate quantity. We'll help you plan the next step."
            />
            <div className="space-y-3 border-t border-border pt-5">
              <div className="flex items-center gap-3 text-sm font-medium text-foreground"><Check className="h-4 w-4 text-success" /> Design, print & delivery available</div>
              <div className="flex items-center gap-3 text-sm font-medium text-foreground"><Check className="h-4 w-4 text-success" /> Delivery-only packages available</div>
              <div className="flex items-center gap-3 text-sm font-medium text-foreground"><Check className="h-4 w-4 text-success" /> Choose areas that fit your business</div>
            </div>
            <p className="text-sm">Prefer a quick chat? <a href={siteContent.business.whatsappHref} className="font-semibold text-brand underline">Message us on WhatsApp.</a></p>
          </div>
          <QuoteForm
            title="Request a campaign quote"
            description="Tell us about your campaign. Your request will open in WhatsApp ready to send."
            submitLabel="Send on WhatsApp"
            source="homepage-form"
            variant="home"
          />
        </div>
      </section>
    </>
  );
}

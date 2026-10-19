import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { QuoteForm } from "@/components/site/quote-form";
import { Reveal } from "@/components/site/reveal";
import { siteContent } from "@/lib/site-content";
import { formatCurrency } from "@/lib/utils";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hamilton Flyer Delivery | Flyer Design, Print and Delivery",
  description: siteContent.seo.defaultDescription,
  path: "/",
});

const examples = [
  { path: "/flyer-templates/spice-of-india-front.png", alt: "Sample restaurant flyer design", style: "left-[1%] top-[6%] w-[61%] -rotate-[8deg]" },
  { path: "/flyer-templates/real-estate-homeowner-front.png", alt: "Sample real estate flyer design", style: "right-[2%] top-[0%] w-[43%] rotate-[7deg]" },
  { path: "/flyer-templates/pressure-washing.png", alt: "Sample pressure washing flyer design", style: "bottom-[2%] left-[4%] w-[39%] rotate-[4deg]" },
  { path: "/flyer-templates/renovation-construction.png", alt: "Sample renovation flyer design", style: "bottom-0 right-[15%] w-[45%] -rotate-[3deg]" },
];

function FlyerStack() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]" aria-label="Examples of printed flyer design styles">
      {examples.map(({ path, alt, style }) => (
        <div key={path} className={`absolute overflow-hidden rounded-sm border-4 border-white bg-white shadow-paper transition-transform duration-300 hover:rotate-0 ${style}`}>
          <div className="relative aspect-[3/4]">
            <Image src={path} alt={alt} fill sizes="(max-width: 640px) 50vw, 285px" className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
}

const rates = [
  {
    number: "01",
    name: "Complete package",
    detail: "We handle design, printing, and door-to-door delivery.",
    standard: siteContent.pricing.plans[0].startingAt,
    hanger: siteContent.pricing.plans[1].startingAt,
  },
  {
    number: "02",
    name: "Delivery only",
    detail: "Already have printed flyers? We distribute them.",
    standard: siteContent.pricing.plans[0].deliveryOnlyAt,
    hanger: siteContent.pricing.plans[1].deliveryOnlyAt,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden paper-grain">
        <div className="container-shell grid items-center gap-7 py-16 md:grid-cols-[1.02fr_0.98fr] md:gap-10 md:py-24">
          <Reveal className="relative z-10">
            <p className="eyebrow text-[#a46612]">Hamilton, Ontario · Door-to-door flyer marketing</p>
            <h1 className="mt-6 max-w-[690px] text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-[5.3rem]">
              Your flyer, on <em className="font-normal text-[#b26b15]">every</em> doorstep that matters.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              We design, print and deliver flyers and door hangers across Hamilton — or deliver the ones you already have.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4a43a] px-7 text-sm font-bold text-[#091e39] shadow-paper transition hover:-translate-y-0.5 hover:bg-[#ffc16d]">
                Get a Free Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#091e39] px-7 text-sm font-bold text-[#091e39] transition hover:bg-[#091e39] hover:text-white">
                View Pricing
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-success" /> Design, print & delivery</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-success" /> Delivery-only available</span>
            </div>
            <p className="mt-7 border-t border-border pt-5 text-sm">
              Complete standard flyer packages from <strong className="text-foreground">{formatCurrency(siteContent.pricing.plans[0].startingAt)} per home</strong>, including design and print.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <FlyerStack />
            <p className="mt-4 text-center text-xs text-muted-foreground">Sample designs from our flyer gallery</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#091e39] text-white">
        <div className="container-shell py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-[#f4a43a]">Two ways to order</p>
              <h2 className="mt-4 max-w-2xl text-4xl leading-[1.1] text-white md:text-5xl">One simple price per home.</h2>
            </div>
            <Link href="/pricing" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#f4a43a] underline decoration-[#f4a43a] underline-offset-8 hover:text-white">
              Calculate your campaign <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0">
            {rates.map((item, index) => (
              <div key={item.number} className={`border-t border-white/20 pt-7 md:pr-12 ${index ? "md:border-l md:pl-12" : ""}`}>
                <p className="eyebrow text-[#f4a43a]">{item.number} / {item.name}</p>
                <h3 className="mt-4 text-3xl text-white md:text-4xl">{item.name}</h3>
                <p className="mt-3 text-base leading-7 text-white/70">{item.detail}</p>
                <dl className="mt-8 grid grid-cols-2 gap-5">
                  <div>
                    <dt className="text-sm text-white/60">Standard flyer</dt>
                    <dd className="mt-1 font-editorial text-4xl">{formatCurrency(item.standard)} <span className="font-sans text-sm text-white/60">/home</span></dd>
                  </div>
                  <div>
                    <dt className="text-sm text-white/60">Door hanger</dt>
                    <dd className="mt-1 font-editorial text-4xl">{formatCurrency(item.hanger)} <span className="font-sans text-sm text-white/60">/home</span></dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/60">Prices in CAD per home. Final routes, quantities, specifications and applicable taxes are confirmed in your quote.</p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20">
          <div>
            <p className="eyebrow text-[#a46612]">What we do</p>
            <h2 className="mt-5 max-w-lg text-4xl leading-[1.13] md:text-5xl">Everything your local campaign needs.</h2>
            <p className="mt-5 max-w-md">Whether you have a completed design or need help from the first idea, we make it easier to reach homes in your service area.</p>
            <Link href="/services" className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-foreground underline decoration-2 decoration-[#f4a43a] underline-offset-8">
              Explore our services <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {siteContent.services.map((service, index) => (
              <li key={service.slug} className="group flex items-start gap-5 py-6 md:gap-7">
                <span className="shrink-0 font-editorial text-lg text-[#ad711e]">{String(index + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <Link href="/services" className="group-hover:text-[#a46612]">
                    <h3 className="text-2xl leading-tight md:text-3xl">{service.title}</h3>
                  </Link>
                  <p className="mt-2 text-sm leading-6">{service.summary}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="mt-2 h-5 w-5 shrink-0 text-[#a46612]" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#eee8dc]">
        <div className="container-shell py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-[#a46612]">Local delivery coverage</p>
              <h2 className="mt-5 max-w-2xl text-4xl leading-tight md:text-5xl">Across the city, street by street.</h2>
            </div>
            <Link href="/areas-served" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-[#214467]">
              Explore delivery areas <MapPin aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-10 font-editorial text-2xl leading-relaxed text-foreground/85 md:text-3xl">
            {siteContent.serviceAreas.map((area, index) => (
              <span key={area.slug}><span className="whitespace-nowrap">{area.name}</span>{index < siteContent.serviceAreas.length - 1 ? <span aria-hidden="true" className="mx-3 text-[#be7a1c]">/</span> : null}{" "}</span>
            ))}
          </p>
          <p className="mt-6 text-sm">Choose areas or postal codes on our map to plan the most relevant campaign for your business.</p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-[#a46612]">Our design gallery</p>
              <h2 className="mt-5 max-w-2xl text-4xl leading-tight md:text-5xl">Built to be noticed at the door.</h2>
              <p className="mt-4 max-w-xl">Explore real sample layouts and see what kind of flyer could work for your next local campaign.</p>
            </div>
            <Link href="/templates" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-foreground underline decoration-[#f4a43a] decoration-2 underline-offset-8">
              Browse all designs <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12"><PortfolioGrid items={siteContent.portfolio.items.slice(0, 3)} /></div>
          <p className="mt-5 text-xs">{siteContent.portfolio.note}</p>
        </div>
      </section>

      <section className="section-shell border-t border-border bg-white/50">
        <div className="container-shell">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-[#a46612]">How it works</p>
              <h2 className="mt-5 max-w-3xl text-4xl leading-tight md:text-5xl">Four simple steps from your idea to local doorsteps.</h2>
            </div>
          </div>
          <div className="grid gap-5 border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.howItWorks.steps.map((step) => (
              <div key={step.number} className="border-b border-border pb-6 lg:border-b-0">
                <p className="eyebrow text-[#a46612]">Step {step.number}</p>
                <h3 className="mt-5 text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#eae2d6]">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-start lg:gap-16">
          <div className="space-y-6 lg:sticky lg:top-32">
            <p className="eyebrow text-[#a46612]">Get started</p>
            <h2 className="text-4xl leading-tight md:text-5xl">Tell us the neighbourhoods. We’ll plan the route.</h2>
            <p>Tell us your target location, quantity and flyer type. Your request opens in WhatsApp with the details ready to send.</p>
            <div className="space-y-3 border-t border-border pt-6">
              <p className="flex items-center gap-3 text-sm font-semibold text-foreground"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-success" /> Design, print and delivery available</p>
              <p className="flex items-center gap-3 text-sm font-semibold text-foreground"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-success" /> Delivery-only packages available</p>
              <p className="flex items-center gap-3 text-sm font-semibold text-foreground"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-success" /> Choose by area or postal code</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href={siteContent.business.phoneHref} className="inline-flex items-center gap-2 font-semibold underline underline-offset-4"><PhoneCall className="h-4 w-4" /> {siteContent.business.phoneDisplay}</a>
              <a href={siteContent.business.whatsappHref} className="inline-flex items-center gap-2 font-semibold underline underline-offset-4"><MessageCircleMore className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
          <QuoteForm title="Request your campaign quote" description="Share a few details. Optional campaign specifications are further down." submitLabel="Send on WhatsApp" source="homepage-form" variant="home" />
        </div>
      </section>
    </>
  );
}

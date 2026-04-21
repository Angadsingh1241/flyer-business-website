import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";

export const metadata = createPageMetadata({
  title: `Services | ${siteContent.business.name}`,
  description:
    "Flyer delivery, door hanger delivery, design + print, and targeted area distribution in Hamilton.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Flyer delivery services built for Hamilton businesses."
        description="Choose the service you need, keep the process simple, and build the campaign around the areas you want to reach."
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
        <div className="container-shell grid gap-6 xl:grid-cols-2">
          {siteContent.services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 2) * 0.05}>
              <ServiceCard service={service} showDetails />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell bg-white/60">
        <div className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Template gallery"
            title="Template previews are organized here so clients can browse flyer styles clearly."
            description={siteContent.portfolio.note}
          />
          <PortfolioGrid items={siteContent.portfolio.items.slice(0, 6)} />
        </div>
      </section>

      <CtaBanner
        title="Need help choosing the right service?"
        description="Tell us what you want to promote and where you want to deliver. We will help you choose the best option."
        primaryLabel="Get a Quote"
        secondaryLabel="Message on WhatsApp"
      />
    </>
  );
}

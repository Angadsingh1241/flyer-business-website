import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";

export const metadata = createPageMetadata({
  title: `Templates | ${siteContent.business.name}`,
  description:
    "Browse flyer templates, grouped front-and-back flyer designs, and service flyer layouts from Hamilton Flyer Delivery.",
  path: "/templates",
});

export default function TemplatesPage() {
  const groupedCount = siteContent.portfolio.items.filter(
    (item) => item.format === "Front + Back",
  ).length;
  const singleCount = siteContent.portfolio.items.filter(
    (item) => item.format === "Single-Sided",
  ).length;

  return (
    <>
      <PageHero
        eyebrow="Templates"
        title="A dedicated flyer template gallery for clients to browse."
        description="All uploaded templates are organized here. Front-and-back designs stay grouped together, and every template opens in a larger preview."
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
      >
        <Card className="p-6">
          <div className="grid gap-3">
            <div className="rounded-[1.25rem] border border-border bg-background px-4 py-4 text-sm text-foreground">
              {siteContent.portfolio.items.length} template entries
            </div>
            <div className="rounded-[1.25rem] border border-border bg-background px-4 py-4 text-sm text-foreground">
              {singleCount} single-sided templates
            </div>
            <div className="rounded-[1.25rem] border border-border bg-background px-4 py-4 text-sm text-foreground">
              {groupedCount} grouped front-and-back flyers
            </div>
          </div>
        </Card>
      </PageHero>

      <section className="section-shell">
        <div className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Template Gallery"
            title="All uploaded flyer templates"
            description={siteContent.portfolio.note}
          />
          <PortfolioGrid items={siteContent.portfolio.items} />
        </div>
      </section>

      <CtaBanner
        title="Want one of these flyer styles customized for your business?"
        description="Choose the template direction you like, send your business details, and we can build the campaign around it."
        primaryLabel="Get a Quote"
        secondaryLabel="Message on WhatsApp"
      />
    </>
  );
}

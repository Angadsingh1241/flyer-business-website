import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { ServiceAreaMapShell } from "@/components/site/service-area-map-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";

export const metadata = createPageMetadata({
  title: `Areas Served | ${siteContent.business.name}`,
  description:
    "Choose Hamilton flyer delivery by city, area, or postal code across Hamilton and nearby communities.",
  path: "/areas-served",
});

export default function AreasServedPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas"
        title="Choose where you want your flyers delivered."
        description="Start with city or area selection, switch to postal codes if you prefer, and use advanced targeting only when you need more detail."
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
              Choose by city or area
            </div>
            <div className="rounded-[1.25rem] border border-border bg-background px-4 py-4 text-sm text-foreground">
              Choose by postal code
            </div>
            <div className="rounded-[1.25rem] border border-border bg-background px-4 py-4 text-sm text-foreground">
              Open advanced targeting only if needed
            </div>
          </div>
        </Card>
      </PageHero>

      <section className="section-shell">
        <div className="container-shell">
          <ServiceAreaMapShell />
        </div>
      </section>

      <CtaBanner
        title="Need help picking the right areas?"
        description="Tell us who you want to reach and we will help you choose the best route."
        primaryLabel="Get a Quote"
        secondaryLabel="Message on WhatsApp"
      />
    </>
  );
}

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { siteContent } from "@/lib/site-content";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export function CtaBanner({
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: CtaBannerProps) {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-surface px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Ready to launch"
              title={title}
              description={description}
              inverse
            />
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <Link href="/contact">{primaryLabel}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={siteContent.business.whatsappHref}>{secondaryLabel}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

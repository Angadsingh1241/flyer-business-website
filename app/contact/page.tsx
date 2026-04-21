import { MessageCircleMore, MessageSquareText, PhoneCall } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";

export const metadata = createPageMetadata({
  title: `Get Quote | ${siteContent.business.name}`,
  description:
    "Request a quote for Hamilton flyer delivery, door hanger delivery, or design and print support.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams?: Promise<{
    areas?: string | string[];
    cities?: string | string[];
    postalCodes?: string | string[];
    deliveryType?: string | string[];
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialAreas = String(resolvedSearchParams?.areas ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const initialCities = String(resolvedSearchParams?.cities ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const initialPostalCodes = String(resolvedSearchParams?.postalCodes ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const initialDeliveryType =
    typeof resolvedSearchParams?.deliveryType === "string"
      ? resolvedSearchParams.deliveryType
      : undefined;

  return (
    <>
      <PageHero
        eyebrow="Get Quote"
        title={siteContent.contact.heading}
        description={siteContent.contact.description}
      />

      <section className="section-shell">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Direct contact"
              title="Prefer to talk first?"
              description="You can call, text, or message on WhatsApp directly. The form is best when you want to include target area and campaign details."
            />
            <div className="grid gap-4">
              {[
                {
                  label: "Call",
                  value: siteContent.business.phoneDisplay,
                  href: siteContent.business.phoneHref,
                  icon: PhoneCall,
                },
                {
                  label: "Text",
                  value: "Start a quick quote by text",
                  href: siteContent.business.textHref,
                  icon: MessageSquareText,
                },
                {
                  label: "WhatsApp",
                  value: "Send your target areas and timing",
                  href: siteContent.business.whatsappHref,
                  icon: MessageCircleMore,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <a key={item.label} href={item.href}>
                    <Card className="p-5 transition hover:-translate-y-0.5">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="mt-1 text-lg font-semibold text-foreground">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>

          <QuoteForm
            title="Fast quote request"
            description="Start with the basics. Optional campaign details are tucked below if you want to include them now."
            submitLabel="Send on WhatsApp"
            source="contact-page-form"
            initialAreas={initialAreas}
            initialCities={initialCities}
            initialPostalCodes={initialPostalCodes}
            initialDeliveryType={initialDeliveryType}
          />
        </div>
      </section>
    </>
  );
}

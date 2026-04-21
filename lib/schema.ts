import { type FAQ, siteContent } from "@/lib/site-content";
import { absoluteUrl } from "@/lib/metadata";

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteContent.business.name,
    url: absoluteUrl("/"),
    description: siteContent.seo.defaultDescription,
    inLanguage: "en-CA",
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#local-business"),
    name: siteContent.business.name,
    description: siteContent.seo.defaultDescription,
    url: absoluteUrl("/"),
    areaServed: siteContent.serviceAreas.map((area) => area.name),
    telephone: siteContent.business.phoneDisplay,
    email: siteContent.business.email,
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteContent.business.location,
      addressRegion: siteContent.business.region,
      addressCountry: "CA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteContent.business.phoneDisplay,
        email: siteContent.business.email,
        areaServed: "Hamilton, Ontario",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [siteContent.business.whatsappHref],
  };
}

export function getFaqSchema(items: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

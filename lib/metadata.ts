import type { Metadata } from "next";

import { siteContent } from "@/lib/site-content";

const defaultSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.business.siteUrl;

export function absoluteUrl(path = "/") {
  return new URL(path, defaultSiteUrl).toString();
}

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(defaultSiteUrl),
    title,
    description,
    keywords: [...siteContent.seo.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      locale: "en_CA",
      siteName: siteContent.business.name,
      type: "website",
      images: [absoluteUrl("/opengraph-image")],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

export const rootMetadata = createPageMetadata({
  title: siteContent.seo.defaultTitle,
  description: siteContent.seo.defaultDescription,
});

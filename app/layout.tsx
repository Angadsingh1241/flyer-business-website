import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "leaflet/dist/leaflet.css";
import "./globals.css";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StickyMobileCta } from "@/components/site/sticky-mobile-cta";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { rootMetadata } from "@/lib/metadata";
import { getLocalBusinessSchema, getWebsiteSchema } from "@/lib/schema";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [getWebsiteSchema(), getLocalBusinessSchema()];

  return (
    <html lang="en-CA" className="antialiased">
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <SiteFooter />
        <StickyMobileCta />
        <WhatsAppFloat />
        <Analytics />
        <script
          id="global-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </body>
    </html>
  );
}

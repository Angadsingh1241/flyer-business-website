import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteContent.navigation.main.map((item) => ({
    url: absoluteUrl(item.href),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}

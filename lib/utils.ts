import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteContent } from "@/lib/site-content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: value < 1 ? 2 : 0,
  }).format(value);
}

export function formatHomeCount(value: number) {
  return new Intl.NumberFormat("en-CA").format(value);
}

export function absoluteWhatsAppLink(message?: string) {
  return `https://wa.me/${siteContent.business.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
}

type QuoteLocationQuery = {
  areas?: string[];
  cities?: string[];
  postalCodes?: string[];
};

export function buildQuoteAreaQuery(location: QuoteLocationQuery | string[]) {
  const search = new URLSearchParams();
  const resolved =
    Array.isArray(location) ? { areas: location } : location;

  if (resolved.areas && resolved.areas.length > 0) {
    search.set("areas", resolved.areas.join(","));
  }

  if (resolved.cities && resolved.cities.length > 0) {
    search.set("cities", resolved.cities.join(","));
  }

  if (resolved.postalCodes && resolved.postalCodes.length > 0) {
    search.set("postalCodes", resolved.postalCodes.join(","));
  }

  return `/contact${search.size > 0 ? `?${search.toString()}` : ""}`;
}

export function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

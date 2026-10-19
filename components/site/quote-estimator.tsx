"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { estimateCampaign, type FulfillmentType } from "@/lib/estimate";
import { siteContent } from "@/lib/site-content";
import { cn, formatCurrency, formatHomeCount } from "@/lib/utils";

export function QuoteEstimator() {
  const [deliveryType, setDeliveryType] = useState("standard-bundle");
  const [fulfillment, setFulfillment] = useState<FulfillmentType>("complete");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [manualHomeCount, setManualHomeCount] = useState("2500");

  const areaHomeCount = useMemo(
    () => selectedAreas.reduce((total, slug) => {
      const area = siteContent.serviceAreas.find((item) => item.slug === slug);
      return total + (area?.homes ?? 0);
    }, 0),
    [selectedAreas],
  );

  const manualCount = Number(manualHomeCount);
  const homeCount = selectedAreas.length
    ? areaHomeCount
    : (Number.isFinite(manualCount) ? Math.max(0, Math.floor(manualCount)) : 0);

  const estimate = estimateCampaign({ deliveryType, homeCount, fulfillment });

  const quoteHref = useMemo(() => {
    const params = new URLSearchParams({
      deliveryType,
      fulfillment,
      quantity: String(estimate.homeCount),
    });
    if (selectedAreas.length) params.set("areas", selectedAreas.join(","));
    return `/contact?${params.toString()}`;
  }, [deliveryType, fulfillment, estimate.homeCount, selectedAreas]);

  function toggleArea(slug: string) {
    setSelectedAreas((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  }

  return (
    <Card className="overflow-hidden border-border bg-white shadow-[0_20px_70px_rgba(13,42,82,0.07)]">
      <CardHeader className="space-y-2">
        <CardTitle className="text-3xl">Estimate your campaign</CardTitle>
        <p>Choose a flyer type, package, and number of homes. The total updates instantly.</p>
      </CardHeader>
      <CardContent className="space-y-7">
        <div className="space-y-3">
          <Label>1. Select your format</Label>
          <div className="grid grid-cols-2 gap-3">
            {siteContent.pricing.plans.map((plan) => (
              <button
                key={plan.slug}
                type="button"
                onClick={() => setDeliveryType(plan.deliveryType)}
                aria-pressed={deliveryType === plan.deliveryType}
                className={cn(
                  "rounded-[1.2rem] border px-4 py-4 text-left text-sm font-semibold transition",
                  deliveryType === plan.deliveryType ? "border-brand bg-brand/10 text-brand" : "border-border bg-background text-foreground hover:border-brand/40",
                )}
              >
                {plan.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label>2. Choose what you need</Label>
          <div className="grid gap-3 sm:grid-cols-2">
            {([
              { value: "complete", label: "Complete service", detail: "Design, print & delivery" },
              { value: "delivery-only", label: "Delivery only", detail: "I have printed materials" },
            ] as const).map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={fulfillment === option.value}
                onClick={() => setFulfillment(option.value)}
                className={cn(
                  "rounded-[1.2rem] border px-4 py-4 text-left transition",
                  fulfillment === option.value ? "border-brand bg-brand/10" : "border-border bg-background hover:border-brand/40",
                )}
              >
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  {fulfillment === option.value ? <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" /> : null}
                  {option.label}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{option.detail}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="home-count">3. Approximate number of homes</Label>
          <Input
            id="home-count"
            type="number"
            min="1"
            step="1"
            inputMode="numeric"
            value={manualHomeCount}
            disabled={selectedAreas.length > 0}
            onChange={(event) => setManualHomeCount(event.target.value)}
            placeholder="2500"
          />
          <p className="text-sm">
            {selectedAreas.length > 0
              ? "Your selected areas determine the estimated home count. Clear selections to enter your own quantity."
              : "Enter your quantity, or choose a neighbourhood below to see an approximate household count."}
          </p>
        </div>

        <details className="rounded-[1.25rem] border border-border bg-[#f8fbff] px-4 py-4">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">
            Select a neighbourhood (optional)
          </summary>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {siteContent.serviceAreas.map((area) => (
              <button
                key={area.slug}
                type="button"
                aria-pressed={selectedAreas.includes(area.slug)}
                onClick={() => toggleArea(area.slug)}
                className={cn(
                  "rounded-xl border px-3 py-3 text-left text-sm transition",
                  selectedAreas.includes(area.slug) ? "border-brand bg-brand/10" : "border-border bg-white hover:border-brand/40",
                )}
              >
                <span className="block font-semibold text-foreground">{area.name}</span>
                <span className="mt-1 block text-xs text-muted-foreground">Approx. {formatHomeCount(area.homes)} homes</span>
              </button>
            ))}
          </div>
        </details>

        <div aria-live="polite" className="rounded-[1.5rem] bg-brand px-5 py-6 text-white sm:px-7">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
            Estimated campaign total
          </div>
          <div className="mt-2 text-5xl font-semibold tracking-tight">{formatCurrency(estimate.total)}</div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/85">
            <span>{formatHomeCount(estimate.homeCount)} homes</span>
            <span>{formatCurrency(estimate.rate)} per home</span>
            <span>{fulfillment === "complete" ? "Design + print + delivery" : "Delivery only"}</span>
          </div>
        </div>

        <Button asChild variant="brand" size="lg" className="w-full" disabled={estimate.homeCount === 0}>
          <Link href={quoteHref}>Continue to your quote <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </Button>
        <p className="text-xs leading-5 text-muted-foreground">
          Planning estimate in CAD. Exact coverage, specifications, and applicable taxes are confirmed in your custom quote.
        </p>
      </CardContent>
    </Card>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { estimateCampaign } from "@/lib/estimate";
import { siteContent } from "@/lib/site-content";
import { buildQuoteAreaQuery, formatCurrency, formatHomeCount } from "@/lib/utils";

export function QuoteEstimator() {
  const [deliveryType, setDeliveryType] = useState("standard-bundle");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [manualHomeCount, setManualHomeCount] = useState(
    String(siteContent.serviceAreas[0]?.homes ?? 2500),
  );
  const [includeDesign, setIncludeDesign] = useState(true);
  const [includePrinting, setIncludePrinting] = useState(true);

  const areaHomeCount = useMemo(
    () =>
      selectedAreas.reduce((total, slug) => {
        const area = siteContent.serviceAreas.find((item) => item.slug === slug);
        return total + (area?.homes ?? 0);
      }, 0),
    [selectedAreas],
  );

  const homeCount = areaHomeCount || Number(manualHomeCount || 0);
  const estimate = estimateCampaign({
    deliveryType,
    homeCount,
    includeDesign,
    includePrinting,
  });

  function toggleArea(slug: string) {
    setSelectedAreas((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Starting estimate</CardTitle>
        <p>
          This is a rough planning estimate only. Final pricing depends on area, quantity, design scope, print specs, and delivery details.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3">
            <Label htmlFor="delivery-type">Delivery type</Label>
            <select
              id="delivery-type"
              value={deliveryType}
              onChange={(event) => setDeliveryType(event.target.value)}
              className="h-12 w-full rounded-2xl border border-border bg-input px-4 text-sm text-foreground"
            >
              {siteContent.contact.deliveryTypes
                .filter((item) => item.value !== "not-sure")
                .map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
            </select>
          </div>
          <div className="space-y-3">
            <Label htmlFor="home-count">Approximate homes</Label>
            <Input
              id="home-count"
              inputMode="numeric"
              value={manualHomeCount}
              onChange={(event) => setManualHomeCount(event.target.value)}
              placeholder="3000"
            />
            <p className="text-sm">
              If you select areas below, the estimator will use their combined home
              count automatically.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Select areas</Label>
          <div className="grid gap-3 sm:grid-cols-2">
            {siteContent.serviceAreas.map((area) => {
              const active = selectedAreas.includes(area.slug);

              return (
                <button
                  key={area.slug}
                  type="button"
                  onClick={() => toggleArea(area.slug)}
                  className={`rounded-[1.25rem] border px-4 py-3 text-left transition ${
                    active
                      ? "border-brand bg-brand/10"
                      : "border-border bg-background hover:border-foreground/15"
                  }`}
                >
                  <div className="font-semibold text-foreground">{area.name}</div>
                  <p className="mt-1 text-sm">
                    Approx. {formatHomeCount(area.homes)} homes
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex items-center gap-3 rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm font-medium text-foreground">
            <input
              type="checkbox"
              checked={includeDesign}
              onChange={(event) => setIncludeDesign(event.target.checked)}
              className="h-4 w-4 rounded border-border"
            />
            Include design
          </label>
          <label className="flex items-center gap-3 rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm font-medium text-foreground">
            <input
              type="checkbox"
              checked={includePrinting}
              onChange={(event) => setIncludePrinting(event.target.checked)}
              className="h-4 w-4 rounded border-border"
            />
            Include printing
          </label>
        </div>

        <div className="rounded-[1.5rem] border border-border bg-muted/55 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Estimated starting total
              </div>
              <div className="mt-1 text-3xl font-semibold text-foreground">
                {formatCurrency(estimate.total)}
              </div>
            </div>
            <div className="rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground">
              {formatHomeCount(homeCount)} homes
            </div>
          </div>
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-2xl bg-card px-4 py-3">
              Delivery from {formatCurrency(estimate.deliveryCost)}
            </div>
            <div className="rounded-2xl bg-card px-4 py-3">
              Design from {formatCurrency(estimate.designCost)}
            </div>
            <div className="rounded-2xl bg-card px-4 py-3">
              Printing from {formatCurrency(estimate.printingCost)}
            </div>
          </div>
        </div>

        <Button asChild variant="brand" className="w-full">
          <Link href={buildQuoteAreaQuery(selectedAreas)}>Get a tailored quote</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Circle, MapContainer, TileLayer, Tooltip } from "react-leaflet";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteContent } from "@/lib/site-content";
import { buildQuoteAreaQuery, cn, formatHomeCount } from "@/lib/utils";

const hamiltonCenter: [number, number] = [43.2457, -79.8711];

type TargetMode = "areas" | "postalCodes";

export function ServiceAreaMap() {
  const [targetMode, setTargetMode] = useState<TargetMode>("areas");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([
    siteContent.serviceAreas.find((area) => area.featured)?.slug ?? "",
  ]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedPostalCodes, setSelectedPostalCodes] = useState<string[]>([]);

  const activeAreaSlugs = useMemo(() => {
    const cityAreaSlugs = siteContent.locationOptions.cities
      .filter((city) => selectedCities.includes(city.slug))
      .flatMap((city) => city.areaSlugs);
    const postalAreaSlugs = siteContent.locationOptions.postalCodes
      .filter((item) => selectedPostalCodes.includes(item.slug))
      .flatMap((item) => item.areaSlugs);

    return [...new Set([...selectedAreas, ...cityAreaSlugs, ...postalAreaSlugs])];
  }, [selectedAreas, selectedCities, selectedPostalCodes]);

  const activeHomes = useMemo(
    () =>
      activeAreaSlugs.reduce((total, slug) => {
        const area = siteContent.serviceAreas.find((item) => item.slug === slug);
        return total + (area?.homes ?? 0);
      }, 0),
    [activeAreaSlugs],
  );

  const selectedLabels = useMemo(() => {
    const areaLabels = siteContent.serviceAreas
      .filter((area) => selectedAreas.includes(area.slug))
      .map((area) => area.name);
    const cityLabels = siteContent.locationOptions.cities
      .filter((city) => selectedCities.includes(city.slug))
      .map((city) => city.name);
    const postalLabels = siteContent.locationOptions.postalCodes
      .filter((postal) => selectedPostalCodes.includes(postal.slug))
      .map((postal) => postal.prefix);

    return [...cityLabels, ...areaLabels, ...postalLabels];
  }, [selectedAreas, selectedCities, selectedPostalCodes]);

  function toggleArea(slug: string) {
    setSelectedAreas((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );
  }

  function toggleCity(slug: string) {
    setSelectedCities((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );
  }

  function togglePostalCode(slug: string) {
    setSelectedPostalCodes((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <Card className="overflow-hidden border-white/80 bg-white/92 p-3">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-[1.25rem] bg-[#f8fbff] px-4 py-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Service map
            </div>
            <div className="text-base font-semibold text-foreground">
              Hamilton and nearby delivery areas
            </div>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
            {formatHomeCount(activeHomes)} homes selected
          </div>
        </div>

        <MapContainer
          center={hamiltonCenter}
          zoom={11}
          scrollWheelZoom={false}
          className="h-[520px] w-full rounded-[1.5rem]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; CARTO'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {siteContent.serviceAreas.map((area) => {
            const active = activeAreaSlugs.includes(area.slug);

            return (
              <Circle
                key={area.slug}
                center={area.center}
                radius={area.radiusKm * 1000}
                eventHandlers={{ click: () => toggleArea(area.slug) }}
                pathOptions={{
                  color: active ? "#0d2a52" : "#c8d6e9",
                  fillColor: active ? "#f4a43a" : "#cfe0f4",
                  fillOpacity: active ? 0.25 : 0.12,
                  weight: active ? 2.2 : 1.2,
                }}
              >
                <Tooltip direction="top" opacity={1}>
                  <div className="space-y-1">
                    <div className="font-semibold">{area.name}</div>
                    <div>{formatHomeCount(area.homes)} homes</div>
                    <div className="text-xs text-slate-600">
                      Postal codes: {area.postalPrefixes.join(", ")}
                    </div>
                  </div>
                </Tooltip>
              </Circle>
            );
          })}
        </MapContainer>
      </Card>

      <div className="space-y-4">
        <Card className="border-white/80 bg-white/92 p-6">
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Targeting
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Start simple, then get more specific if needed.
            </h3>
            <p>
              Most campaigns can start with a city, area, or postal code. Advanced targeting is there if you want to narrow it down further.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 rounded-[1.25rem] bg-muted p-1">
            {[
              { value: "areas", label: "By city or area" },
              { value: "postalCodes", label: "By postal code" },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setTargetMode(item.value as TargetMode)}
                className={cn(
                  "rounded-[1rem] px-3 py-2 text-sm font-semibold transition",
                  targetMode === item.value
                    ? "bg-card text-foreground shadow-soft"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-5 space-y-5">
            {targetMode === "areas" ? (
              <>
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-foreground">Cities and towns</div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {siteContent.locationOptions.cities.map((city) => (
                      <button
                        key={city.slug}
                        type="button"
                        onClick={() => toggleCity(city.slug)}
                        className={cn(
                          "rounded-[1.25rem] border px-4 py-4 text-left transition",
                          selectedCities.includes(city.slug)
                            ? "border-brand bg-brand/10"
                            : "border-border bg-background hover:border-foreground/15",
                        )}
                      >
                        <div className="font-semibold text-foreground">{city.name}</div>
                        <p className="mt-1 text-sm">{city.note}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-semibold text-foreground">Popular areas</div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {siteContent.serviceAreas
                      .filter((area) => area.featured)
                      .map((area) => (
                        <button
                          key={area.slug}
                          type="button"
                          onClick={() => toggleArea(area.slug)}
                          className={cn(
                            "rounded-[1.25rem] border px-4 py-4 text-left transition",
                            selectedAreas.includes(area.slug)
                              ? "border-brand bg-brand/10"
                              : "border-border bg-background hover:border-foreground/15",
                          )}
                        >
                          <div className="font-semibold text-foreground">{area.name}</div>
                          <p className="mt-1 text-sm">
                            {formatHomeCount(area.homes)} homes
                          </p>
                        </button>
                      ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {siteContent.locationOptions.postalCodes.map((postal) => (
                  <button
                    key={postal.slug}
                    type="button"
                    onClick={() => togglePostalCode(postal.slug)}
                    className={cn(
                      "rounded-[1.25rem] border px-4 py-4 text-left transition",
                      selectedPostalCodes.includes(postal.slug)
                        ? "border-brand bg-brand/10"
                        : "border-border bg-background hover:border-foreground/15",
                    )}
                  >
                    <div className="font-semibold text-foreground">{postal.prefix}</div>
                    <p className="mt-1 text-sm">{postal.label}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          <details className="mt-5 rounded-[1.25rem] border border-border bg-[#f8fbff]">
            <summary className="cursor-pointer list-none px-4 py-4 text-sm font-semibold text-foreground">
              Advanced Targeting
            </summary>
            <div className="border-t border-border px-4 py-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {siteContent.serviceAreas.map((area) => (
                  <button
                    key={area.slug}
                    type="button"
                    onClick={() => toggleArea(area.slug)}
                    className={cn(
                      "rounded-[1.25rem] border px-4 py-4 text-left transition",
                      selectedAreas.includes(area.slug)
                        ? "border-brand bg-brand/10"
                        : "border-border bg-background hover:border-foreground/15",
                    )}
                  >
                    <div className="font-semibold text-foreground">{area.name}</div>
                    <p className="mt-1 text-sm">{area.notes}</p>
                  </button>
                ))}
              </div>
            </div>
          </details>

          <div className="mt-5 rounded-[1.25rem] border border-border bg-[#f8fbff] px-4 py-4">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Current selection
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedLabels.length > 0 ? (
                selectedLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full bg-white px-3 py-2 text-sm font-medium text-foreground shadow-sm"
                  >
                    {label}
                  </span>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">No areas selected yet.</span>
              )}
            </div>
          </div>

          <Button asChild variant="brand" className="mt-5 w-full">
            <Link
              href={buildQuoteAreaQuery({
                areas: selectedAreas,
                cities: selectedCities,
                postalCodes: selectedPostalCodes,
              })}
            >
              Use these selections in a quote
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}

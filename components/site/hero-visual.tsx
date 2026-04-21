import { ArrowRight, CheckCircle2, MapPinned, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SampleArtwork } from "@/components/site/sample-artwork";
import { siteContent } from "@/lib/site-content";

const icons = [MapPinned, ShieldCheck, CheckCircle2];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute inset-x-10 top-10 h-48 rounded-full bg-[#f4a43a]/20 blur-3xl" />
      <Card className="relative overflow-hidden border-white/70 bg-card/95 p-5 backdrop-blur">
        <div className="absolute right-4 top-4 z-10">
          <Badge variant="brand">Local service mockup</Badge>
        </div>
        <div className="grid gap-4 rounded-[1.6rem] border border-border bg-[#f8fbff] p-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[300px] overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-[#eff5fc] to-white p-4">
            <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2a52] shadow-sm">
              Design + Print + Delivery
            </div>
            <div className="absolute left-5 top-20 max-w-[15rem] text-3xl font-semibold leading-tight text-[#0d2a52]">
              Flyer campaigns built for real local reach
            </div>
            <div className="absolute right-4 top-14 w-[44%] rotate-[10deg]">
              <SampleArtwork variant="restaurant-flyer" compact />
            </div>
            <div className="absolute bottom-5 left-6 w-[46%] -rotate-[7deg]">
              <SampleArtwork variant="door-hanger-front" compact />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-[1.45rem] bg-[#0d2a52] p-5 text-white">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f7c37e]">
                Hamilton Flyer Delivery
              </div>
              <div className="text-2xl font-semibold leading-tight">
                Choose the area. Approve the flyer. Launch the campaign.
              </div>
              <p className="text-sm leading-6 text-white/75">
                Built for small business owners who want a clean process and a fast quote.
              </p>
            </div>
            <div className="rounded-[1.2rem] bg-white/10 px-4 py-3 text-sm font-medium text-white/90">
              Sample designs shown for demonstration
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#f7c37e]">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {siteContent.home.hero.stats.map((stat, index) => {
            const Icon = icons[index] ?? CheckCircle2;

            return (
              <div
                key={stat.label}
                className="rounded-[1.25rem] border border-border bg-background px-4 py-4"
              >
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Icon className="h-4 w-4 text-brand" />
                  {stat.label}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm leading-6">{stat.detail}</p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

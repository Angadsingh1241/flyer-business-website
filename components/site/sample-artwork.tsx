import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SampleArtworkVariant =
  | "restaurant-flyer"
  | "dental-flyer"
  | "realtor-flyer"
  | "home-services-flyer"
  | "coupon-flyer"
  | "promo-flyer"
  | "door-hanger-front"
  | "door-hanger-back"
  | "folded-brochure";

type SampleArtworkProps = {
  variant: SampleArtworkVariant;
  className?: string;
  compact?: boolean;
};

function Frame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border border-[#cfdcf0] bg-white shadow-[0_24px_60px_rgba(13,42,82,0.12)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,164,58,0.12),transparent_28%),linear-gradient(180deg,rgba(13,42,82,0.04),transparent_40%)]" />
      {children}
    </div>
  );
}

function Label({ text }: { text: string }) {
  return (
    <div className="absolute left-4 top-4 rounded-full bg-[#0d2a52] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
      {text}
    </div>
  );
}

export function SampleArtwork({
  variant,
  className,
  compact = false,
}: SampleArtworkProps) {
  const heightClass = compact ? "h-[240px]" : "h-[320px]";

  switch (variant) {
    case "restaurant-flyer":
      return (
        <Frame className={cn("p-5", heightClass, className)}>
          <Label text="Sample Design" />
          <div className="flex h-full flex-col justify-between rounded-[1.35rem] bg-[#0d2a52] p-5 text-white">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f7c37e]">
                Hamilton takeout offer
              </div>
              <div className="max-w-[11rem] text-3xl font-semibold leading-none">
                2 curries + naan + rice
              </div>
              <div className="inline-flex rounded-full bg-[#f4a43a] px-4 py-2 text-sm font-semibold text-[#0d2a52]">
                Pickup coupon $24.99
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-16 rounded-2xl bg-white/12 ring-1 ring-white/10"
                />
              ))}
            </div>
          </div>
        </Frame>
      );
    case "dental-flyer":
      return (
        <Frame className={cn("p-5", heightClass, className)}>
          <Label text="Sample Design" />
          <div className="grid h-full grid-rows-[auto_1fr_auto] rounded-[1.35rem] border border-[#d8e6f6] bg-[#eff6ff] p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2a52]">
                New patient offer
              </div>
              <div className="h-10 w-10 rounded-full bg-[#0d2a52]" />
            </div>
            <div className="space-y-4 pt-4">
              <div className="text-3xl font-semibold leading-tight text-[#0d2a52]">
                Family dental care with clear pricing
              </div>
              <div className="max-w-[12rem] rounded-[1.25rem] bg-white p-4 text-sm font-medium text-[#45607f] shadow-sm">
                Cleaning, exam, whitening, and preventive care.
              </div>
            </div>
            <div className="flex items-center justify-between rounded-[1.25rem] bg-white px-4 py-3 text-sm font-medium text-[#0d2a52] shadow-sm">
              <span>Book your first visit</span>
              <span className="rounded-full bg-[#f4a43a] px-3 py-1 font-semibold text-[#0d2a52]">
                L8N
              </span>
            </div>
          </div>
        </Frame>
      );
    case "realtor-flyer":
      return (
        <Frame className={cn("p-5", heightClass, className)}>
          <Label text="Example Campaign" />
          <div className="grid h-full rounded-[1.35rem] bg-white">
            <div className="rounded-[1.35rem_1.35rem_0_0] bg-[#dfe9f7] p-5">
              <div className="h-32 rounded-[1.25rem] bg-[linear-gradient(135deg,#b7cbe6,#edf4fb)]" />
            </div>
            <div className="space-y-4 px-5 pb-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5d7496]">
                Just listed in Hamilton
              </div>
              <div className="text-3xl font-semibold leading-tight text-[#0d2a52]">
                Modern family home near Ancaster
              </div>
              <div className="flex items-center justify-between rounded-[1.2rem] bg-[#0d2a52] px-4 py-3 text-white">
                <span className="text-sm">Open house this weekend</span>
                <span className="text-lg font-semibold">$849K</span>
              </div>
            </div>
          </div>
        </Frame>
      );
    case "home-services-flyer":
      return (
        <Frame className={cn("p-5", heightClass, className)}>
          <Label text="Sample Design" />
          <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-4 rounded-[1.35rem] bg-[#0d2a52] p-5 text-white">
            <div className="rounded-[1.2rem] bg-white/10 p-4">
              <div className="h-full rounded-[1rem] border border-white/20 border-dashed" />
            </div>
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f7c37e]">
                Roofing and exterior repairs
              </div>
              <div className="text-3xl font-semibold leading-tight">
                Fast local service for leaks, shingles, and storm damage
              </div>
              <div className="space-y-2 text-sm text-white/75">
                <div>Free estimate</div>
                <div>Hamilton and Stoney Creek</div>
                <div>Weekday and weekend bookings</div>
              </div>
              <div className="inline-flex rounded-full bg-[#f4a43a] px-4 py-2 text-sm font-semibold text-[#0d2a52]">
                Call for same-week service
              </div>
            </div>
          </div>
        </Frame>
      );
    case "coupon-flyer":
      return (
        <Frame className={cn("p-5", heightClass, className)}>
          <Label text="Sample Design" />
          <div className="grid h-full grid-rows-[auto_1fr_auto] rounded-[1.35rem] bg-[#fff7ed] p-5 text-[#0d2a52]">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b5c12]">
              Coupon offer
            </div>
            <div className="space-y-4 pt-4">
              <div className="text-5xl font-semibold leading-none">20% OFF</div>
              <div className="max-w-[13rem] text-lg font-medium leading-snug text-[#54657f]">
                First service call, limited-time neighbourhood promotion.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[1.2rem] bg-white px-4 py-3 text-sm font-medium shadow-sm">
                Coupon code HFD20
              </div>
              <div className="rounded-[1.2rem] border border-dashed border-[#e7b56c] px-4 py-3 text-sm font-medium">
                Valid in Hamilton Mountain
              </div>
            </div>
          </div>
        </Frame>
      );
    case "promo-flyer":
      return (
        <Frame className={cn("p-5", heightClass, className)}>
          <Label text="Example Campaign" />
          <div className="grid h-full grid-rows-[auto_1fr] rounded-[1.35rem] bg-white p-5">
            <div className="flex items-center justify-between rounded-[1.2rem] bg-[#0d2a52] px-4 py-3 text-white">
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Local promotion
              </span>
              <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-medium">
                Hamilton Flyer Delivery
              </span>
            </div>
            <div className="grid place-items-center gap-4 py-5">
              <div className="h-20 w-20 rounded-full bg-[#f4a43a]" />
              <div className="max-w-[12rem] text-center text-3xl font-semibold leading-tight text-[#0d2a52]">
                Grand opening weekend special
              </div>
              <div className="text-sm font-medium text-[#60738f]">
                Clean, direct, and easy to read
              </div>
            </div>
          </div>
        </Frame>
      );
    case "door-hanger-front":
      return (
        <Frame className={cn("p-5", heightClass, className)}>
          <Label text="Sample Design" />
          <div className="mx-auto h-full w-[68%] rounded-[1.8rem] border border-[#d2def0] bg-white p-4 shadow-[0_22px_50px_rgba(13,42,82,0.14)]">
            <div className="mx-auto h-10 w-10 rounded-full border-[7px] border-[#edf3fb] bg-white" />
            <div className="mt-4 flex h-[calc(100%-3.5rem)] flex-col rounded-[1.4rem] bg-[#0d2a52] p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f7c37e]">
                Door hanger front
              </div>
              <div className="mt-4 text-3xl font-semibold leading-tight">
                Visible at the door, easy to notice
              </div>
              <div className="mt-auto rounded-[1.2rem] bg-white/10 px-4 py-3 text-sm text-white/85">
                Good for roofing, landscaping, and premium local offers.
              </div>
            </div>
          </div>
        </Frame>
      );
    case "door-hanger-back":
      return (
        <Frame className={cn("p-5", heightClass, className)}>
          <Label text="Sample Design" />
          <div className="mx-auto h-full w-[68%] rounded-[1.8rem] border border-[#d2def0] bg-white p-4 shadow-[0_22px_50px_rgba(13,42,82,0.14)]">
            <div className="mx-auto h-10 w-10 rounded-full border-[7px] border-[#edf3fb] bg-white" />
            <div className="mt-4 flex h-[calc(100%-3.5rem)] flex-col rounded-[1.4rem] bg-[#f8fbff] p-5 text-[#0d2a52]">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#637a9a]">
                Door hanger back
              </div>
              <div className="mt-4 grid gap-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] bg-white px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-[#dce6f5]"
                  >
                    Service detail block {item}
                  </div>
                ))}
              </div>
              <div className="mt-auto rounded-[1.2rem] bg-[#f4a43a] px-4 py-3 text-sm font-semibold text-[#0d2a52]">
                Strong call to action and contact section
              </div>
            </div>
          </div>
        </Frame>
      );
    case "folded-brochure":
      return (
        <Frame className={cn("p-5", heightClass, className)}>
          <Label text="Example Campaign" />
          <div className="grid h-full grid-cols-3 gap-3">
            {[
              "Premium folded flyer",
              "Services and pricing",
              "Area targeting + contact",
            ].map((text, index) => (
              <div
                key={text}
                className={cn(
                  "flex flex-col justify-between rounded-[1.35rem] p-4",
                  index === 1 ? "bg-[#0d2a52] text-white" : "bg-[#f5f8fc] text-[#0d2a52]",
                )}
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] opacity-75">
                  Panel {index + 1}
                </div>
                <div className="text-xl font-semibold leading-tight">{text}</div>
                <div
                  className={cn(
                    "h-10 rounded-[0.9rem]",
                    index === 1 ? "bg-white/12" : "bg-white shadow-sm",
                  )}
                />
              </div>
            ))}
          </div>
        </Frame>
      );
  }
}

import { siteContent } from "@/lib/site-content";

export type FulfillmentType = "complete" | "delivery-only";

type EstimateInput = {
  deliveryType: string;
  homeCount: number;
  fulfillment: FulfillmentType;
};

export function estimateCampaign({ deliveryType, homeCount, fulfillment }: EstimateInput) {
  const plan = siteContent.pricing.plans.find((item) => item.deliveryType === deliveryType);
  const rate = fulfillment === "delivery-only"
    ? (plan?.deliveryOnlyAt ?? 0)
    : (plan?.startingAt ?? 0);
  const safeHomeCount = Number.isFinite(homeCount)
    ? Math.max(0, Math.floor(homeCount))
    : 0;

  return {
    rate,
    homeCount: safeHomeCount,
    total: Math.round(safeHomeCount * rate * 100) / 100,
    fulfillment,
  };
}

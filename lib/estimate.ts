import { siteContent } from "@/lib/site-content";

type EstimateInput = {
  deliveryType: string;
  homeCount: number;
  includeDesign: boolean;
  includePrinting: boolean;
};

function getRate(deliveryType: string) {
  if (deliveryType === "custom-targeted") {
    return siteContent.pricing.addOns.customTargetedStartingAt;
  }

  return (
    siteContent.pricing.plans.find((plan) => plan.deliveryType === deliveryType)
      ?.startingAt ?? siteContent.pricing.plans[0].startingAt
  );
}

export function estimateCampaign({
  deliveryType,
  homeCount,
  includeDesign,
  includePrinting,
}: EstimateInput) {
  const safeHomeCount = Number.isFinite(homeCount) ? Math.max(homeCount, 0) : 0;
  const deliveryCost = safeHomeCount * getRate(deliveryType);
  const designCost = includeDesign
    ? siteContent.pricing.addOns.designStartingAt
    : 0;
  const printingCost = includePrinting
    ? Math.max(
        siteContent.pricing.addOns.printMinimum,
        safeHomeCount * siteContent.pricing.addOns.printPerHomeEstimate,
      )
    : 0;

  return {
    deliveryCost,
    designCost,
    printingCost,
    total: deliveryCost + designCost + printingCost,
  };
}

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { PricingPlan } from "@/lib/site-content";
import { formatCurrency } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className="h-full overflow-hidden border-border bg-white shadow-[0_20px_70px_rgba(13,42,82,0.07)]">
      <CardHeader className="space-y-3 pb-4">
        <Badge variant="brand">Choose your package</Badge>
        <CardTitle className="text-3xl">{plan.title}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.4rem] bg-brand px-5 py-5 text-white">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-white/75">
              Complete package
            </div>
            <div className="mt-3 text-4xl font-semibold tracking-tight">
              {formatCurrency(plan.startingAt)}
              <span className="ml-1 text-sm font-medium text-white/75">/ home</span>
            </div>
            <div className="mt-3 text-sm leading-6 text-white/85">Design + printing + delivery included</div>
          </div>
          <div className="rounded-[1.4rem] border border-border bg-[#f3f7fc] px-5 py-5">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Delivery only
            </div>
            <div className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
              {formatCurrency(plan.deliveryOnlyAt)}
              <span className="ml-1 text-sm font-medium text-muted-foreground">/ home</span>
            </div>
            <div className="mt-3 text-sm leading-6 text-muted-foreground">You provide the printed materials</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">A great fit for</div>
          <p className="mt-2">{plan.idealFor}</p>
        </div>
        <ul className="grid gap-2 text-sm text-muted-foreground">
          {plan.includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-success" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button asChild variant="brand" className="w-full">
            <Link href={`/contact?deliveryType=${plan.deliveryType}&fulfillment=complete`}>
              Full service quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href={`/contact?deliveryType=${plan.deliveryType}&fulfillment=delivery-only`}>
              Delivery only quote
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

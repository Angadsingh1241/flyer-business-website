import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PricingPlan } from "@/lib/site-content";
import { formatCurrency } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{plan.title}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-[1.25rem] bg-muted/60 px-4 py-4">
          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Starting at
          </div>
          <div className="mt-1 text-4xl font-semibold text-foreground">
            {formatCurrency(plan.startingAt)}
            <span className="text-lg text-muted-foreground"> / home</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold text-foreground">Ideal for</div>
          <p>{plan.idealFor}</p>
        </div>
        <ul className="grid gap-2 text-sm text-muted-foreground">
          {plan.includes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="brand" className="w-full">
          <Link href={`/contact?deliveryType=${plan.deliveryType}`}>{plan.ctaLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

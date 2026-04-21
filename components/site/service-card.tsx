import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ServiceDetail } from "@/lib/site-content";

type ServiceCardProps = {
  service: ServiceDetail;
  showDetails?: boolean;
};

export function ServiceCard({
  service,
  showDetails = false,
}: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-foreground">Who it&apos;s for</div>
          <p>{service.whoItsFor}</p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold text-foreground">When to choose it</div>
          <p>{service.whenToChoose}</p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold text-foreground">What&apos;s included</div>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {service.whatIsIncluded.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {showDetails ? (
          <div className="space-y-2">
            <div className="text-sm font-semibold text-foreground">How it helps</div>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {service.howItHelps.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <Button asChild variant="ghost" className="px-0 text-sm">
          <Link href="/contact">
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

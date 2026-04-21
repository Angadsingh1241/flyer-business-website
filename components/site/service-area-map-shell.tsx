"use client";

import dynamic from "next/dynamic";

import { Card } from "@/components/ui/card";

const DynamicServiceAreaMap = dynamic(
  () =>
    import("@/components/site/service-area-map").then(
      (module) => module.ServiceAreaMap,
    ),
  {
    ssr: false,
    loading: () => (
      <Card className="p-10 text-center">
        <div className="text-lg font-semibold text-foreground">
          Loading service map...
        </div>
      </Card>
    ),
  },
);

export function ServiceAreaMapShell() {
  return <DynamicServiceAreaMap />;
}

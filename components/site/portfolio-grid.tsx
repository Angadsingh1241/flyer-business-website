"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioItem } from "@/lib/site-content";

type PortfolioGridProps = {
  items: PortfolioItem[];
};

function PreviewFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[5/7] overflow-hidden rounded-[1.1rem] bg-[#f7f9fc]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-contain object-center"
      />
    </div>
  );
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Dialog key={item.slug}>
          <Card className="overflow-hidden border-white/80 bg-white/90 transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,42,82,0.12)]">
            <div className="border-b border-border p-4">
              <div
                className={`grid gap-3 ${
                  item.sides.length > 1 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {item.sides.map((side, index) => (
                  <div key={side.label} className="space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {side.label}
                    </div>
                    <PreviewFrame
                      src={side.src}
                      alt={side.alt}
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            <CardContent className="space-y-4 pt-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <span>{item.category}</span>
                <span className="rounded-full bg-muted px-2 py-1 tracking-[0.12em] text-foreground">
                  {item.format}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p>{item.summary}</p>

              <DialogTrigger asChild>
                <button className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-foreground/15 hover:bg-muted">
                  View larger preview
                </button>
              </DialogTrigger>
            </CardContent>
          </Card>

          <DialogContent className="max-h-[90vh] max-w-6xl overflow-y-auto border-white/80 bg-white p-6 md:p-8">
            <DialogHeader className="pr-10">
              <DialogTitle>{item.title}</DialogTitle>
              <DialogDescription>{item.summary}</DialogDescription>
            </DialogHeader>

            <div
              className={`mt-6 grid gap-6 ${
                item.sides.length > 1 ? "lg:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {item.sides.map((side, index) => (
                <div key={side.label} className="space-y-3">
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {side.label}
                  </div>
                  <div className="relative aspect-[5/7] overflow-hidden rounded-[1.5rem] border border-border bg-[#f7f9fc]">
                    <Image
                      src={side.src}
                      alt={side.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

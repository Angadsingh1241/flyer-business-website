import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <Badge variant={inverse ? "surface" : "brand"}>{eyebrow}</Badge>
      ) : null}
      <div className="space-y-3">
        <h2
          className={cn(
            "text-3xl font-semibold tracking-[-0.04em] text-balance md:text-5xl",
            inverse ? "text-surface-foreground" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-2xl",
              inverse ? "text-surface-foreground/75" : "text-muted-foreground",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

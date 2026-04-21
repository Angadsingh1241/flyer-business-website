import Link from "next/link";
import {
  ClipboardList,
  MessageCircleMore,
  Phone,
  Tag,
} from "lucide-react";

import { siteContent } from "@/lib/site-content";

const actions = [
  {
    href: siteContent.business.phoneHref,
    label: "Call",
    icon: Phone,
  },
  {
    href: "/pricing",
    label: "Pricing",
    icon: Tag,
  },
  {
    href: siteContent.business.whatsappHref,
    label: "WhatsApp",
    icon: MessageCircleMore,
  },
  {
    href: "/contact",
    label: "Quote",
    icon: ClipboardList,
  },
];

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/96 backdrop-blur md:hidden">
      <div className="grid grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return action.href.startsWith("/") ? (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col items-center gap-1 px-2 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
            >
              <Icon className="h-4 w-4" />
              {action.label}
            </Link>
          ) : (
            <a
              key={action.label}
              href={action.href}
              className="flex flex-col items-center gap-1 px-2 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
            >
              <Icon className="h-4 w-4" />
              {action.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

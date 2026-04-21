import { MessageCircleMore } from "lucide-react";

import { siteContent } from "@/lib/site-content";

export function WhatsAppFloat() {
  return (
    <a
      href={siteContent.business.whatsappHref}
      className="fixed bottom-24 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-[1.03] md:bottom-6 md:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}

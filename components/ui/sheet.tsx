"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetPortal = DialogPrimitive.Portal;

export function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn("fixed inset-0 z-50 bg-black/30 backdrop-blur-sm", className)}
      {...props}
    />
  );
}

export function SheetContent({
  className,
  side = "right",
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  const sideStyles = {
    top: "inset-x-0 top-0 rounded-b-[1.75rem] border-b",
    right: "inset-y-0 right-0 h-full w-[min(92vw,24rem)] rounded-l-[1.75rem] border-l",
    bottom: "inset-x-0 bottom-0 rounded-t-[1.75rem] border-t",
    left: "inset-y-0 left-0 h-full w-[min(92vw,24rem)] rounded-r-[1.75rem] border-r",
  }[side];

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50 bg-card p-6 shadow-[0_24px_90px_rgba(17,17,17,0.16)]",
          sideStyles,
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-5 top-5 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
}

export function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-6 flex flex-col gap-2", className)} {...props} />;
}

export function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("text-xl font-semibold text-foreground", className)}
      {...props}
    />
  );
}

export function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm leading-6 text-muted-foreground", className)}
      {...props}
    />
  );
}

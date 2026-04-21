"use client";

import { useEffect, useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  formatQuoteWhatsAppMessage,
  quoteFormSchema,
  type QuoteFormValues,
} from "@/lib/quote";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type QuoteFormProps = {
  title?: string;
  description?: string;
  submitLabel?: string;
  source?: string;
  variant?: "home" | "full";
  className?: string;
  initialAreas?: string[];
  initialCities?: string[];
  initialPostalCodes?: string[];
  initialDeliveryType?: string;
};

type SubmitState =
  | { type: "idle" }
  | { type: "success" }
  | { type: "error"; message: string };

type TargetMode = "areas" | "postalCodes";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="text-sm font-medium text-[#9d3a2b]">{message}</p>;
}

function ToggleChip({
  active,
  onClick,
  title,
  description,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-[1.25rem] border px-4 py-3 text-left transition",
        active
          ? "border-brand bg-brand/10 text-foreground"
          : "border-border bg-background text-muted-foreground hover:border-foreground/15 hover:text-foreground",
      )}
    >
      <div className="font-semibold text-foreground">{title}</div>
      {description ? <p className="mt-1 text-sm">{description}</p> : null}
    </button>
  );
}

export function QuoteForm({
  title = "Get a quote",
  description = siteContent.contact.description,
  submitLabel = siteContent.contact.quoteButtonLabel,
  source = "website",
  variant = "full",
  className,
  initialAreas = [],
  initialCities = [],
  initialPostalCodes = [],
  initialDeliveryType,
}: QuoteFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>({ type: "idle" });
  const [targetMode, setTargetMode] = useState<TargetMode>("areas");

  const defaultValues = useMemo<QuoteFormValues>(
    () => ({
      name: "",
      businessName: "",
      phone: "",
      email: "",
      preferredContactMethod: "whatsapp",
      serviceNeeded: ["flyer-delivery"],
      needDesign: "yes",
      needPrinting: "yes",
      deliveryType:
        initialDeliveryType &&
        siteContent.contact.deliveryTypes.some(
          (item) => item.value === initialDeliveryType,
        )
          ? initialDeliveryType
          : "standard-bundle",
      quantity: "",
      targetAreas: initialAreas.filter((value) =>
        siteContent.serviceAreas.some((area) => area.slug === value),
      ),
      targetCities: initialCities.filter((value) =>
        siteContent.locationOptions.cities.some((city) => city.slug === value),
      ),
      targetPostalCodes: initialPostalCodes.filter((value) =>
        siteContent.locationOptions.postalCodes.some((item) => item.slug === value),
      ),
      timeline: "1-2-weeks",
      budgetRange: "not-sure",
      extraDetails: "",
      source,
    }),
    [initialAreas, initialCities, initialDeliveryType, initialPostalCodes, source],
  );

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues,
  });

  const selectedServices = useWatch({ control, name: "serviceNeeded" });
  const selectedAreas = useWatch({ control, name: "targetAreas" });
  const selectedCities = useWatch({ control, name: "targetCities" });
  const selectedPostalCodes = useWatch({ control, name: "targetPostalCodes" });
  const preferredContactMethod = useWatch({
    control,
    name: "preferredContactMethod",
  });
  const needDesign = useWatch({ control, name: "needDesign" });
  const needPrinting = useWatch({ control, name: "needPrinting" });

  useEffect(() => {
    setValue("source", source);
  }, [setValue, source]);

  function toggleValue(
    field: "serviceNeeded" | "targetAreas" | "targetCities" | "targetPostalCodes",
    value: string,
  ) {
    const currentValues = getValues(field);
    const nextValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    setValue(field, nextValues, { shouldValidate: true, shouldDirty: true });
  }

  function onSubmit(values: QuoteFormValues) {
    setSubmitState({ type: "idle" });

    try {
      const message = formatQuoteWhatsAppMessage(values);
      const whatsappUrl = `https://wa.me/${siteContent.business.whatsappNumber}?text=${encodeURIComponent(
        message,
      )}`;
      const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      if (!popup) {
        window.open(whatsappUrl, "_self");
      }

      setSubmitState({ type: "success" });

      reset({
        ...defaultValues,
        targetAreas: values.targetAreas,
        targetCities: values.targetCities,
        targetPostalCodes: values.targetPostalCodes,
        deliveryType: values.deliveryType,
        serviceNeeded: values.serviceNeeded,
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not open WhatsApp. Please use the WhatsApp button instead.",
      });
    }
  }

  return (
    <Card className={cn("border-white/80 bg-white/92", className)}>
      <CardHeader className={variant === "home" ? "pb-4" : undefined}>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("source")} />

          <div className="rounded-[1.35rem] border border-border bg-[#f8fbff] px-4 py-4 text-sm text-muted-foreground">
            Start with the basics. Optional campaign details are below if you want to include them now.
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" {...register("name")} />
              <FieldError message={errors.name?.message} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                placeholder="Business name"
                {...register("businessName")}
              />
              <FieldError message={errors.businessName?.message} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="(365) 555-1234"
                {...register("phone")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@business.ca"
                {...register("email")}
              />
            </div>
          </div>
          <FieldError message={errors.phone?.message || errors.email?.message} />

          <fieldset className="space-y-3">
            <Label>Service Needed</Label>
            <div className="grid gap-3 md:grid-cols-2">
              {siteContent.contact.serviceNeeds.map((service) => (
                <ToggleChip
                  key={service.value}
                  active={selectedServices.includes(service.value)}
                  onClick={() => toggleValue("serviceNeeded", service.value)}
                  title={service.label}
                />
              ))}
            </div>
            <FieldError message={errors.serviceNeeded?.message} />
          </fieldset>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              placeholder="Example: 2,500 homes"
              {...register("quantity")}
            />
            <FieldError message={errors.quantity?.message} />
          </div>

          <fieldset className="space-y-4">
            <div className="space-y-1">
              <Label>Target Area</Label>
              <p className="text-sm text-muted-foreground">
                Choose by city or area first. If you prefer, switch to postal code targeting.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-[1.25rem] bg-muted p-1">
              {[
                { value: "areas", label: "By city or area" },
                { value: "postalCodes", label: "By postal code" },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setTargetMode(item.value as TargetMode)}
                  className={cn(
                    "rounded-[1rem] px-3 py-2 text-sm font-semibold transition",
                    targetMode === item.value
                      ? "bg-card text-foreground shadow-soft"
                      : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {targetMode === "areas" ? (
              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {siteContent.locationOptions.cities.map((city) => (
                    <ToggleChip
                      key={city.slug}
                      active={selectedCities.includes(city.slug)}
                      onClick={() => toggleValue("targetCities", city.slug)}
                      title={city.name}
                      description={city.note}
                    />
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {siteContent.serviceAreas
                    .filter((area) => area.featured)
                    .map((area) => (
                      <ToggleChip
                        key={area.slug}
                        active={selectedAreas.includes(area.slug)}
                        onClick={() => toggleValue("targetAreas", area.slug)}
                        title={area.name}
                        description={`${area.postalPrefixes.join(", ")} • ${area.homes.toLocaleString("en-CA")} homes`}
                      />
                    ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {siteContent.locationOptions.postalCodes.map((postal) => (
                  <ToggleChip
                    key={postal.slug}
                    active={selectedPostalCodes.includes(postal.slug)}
                    onClick={() => toggleValue("targetPostalCodes", postal.slug)}
                    title={postal.prefix}
                    description={postal.label}
                  />
                ))}
              </div>
            )}

            <details className="rounded-[1.35rem] border border-border bg-[#f8fbff]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-sm font-semibold text-foreground">
                Advanced Targeting
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </summary>
              <div className="border-t border-border px-4 py-4">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {siteContent.serviceAreas.map((area) => (
                    <ToggleChip
                      key={area.slug}
                      active={selectedAreas.includes(area.slug)}
                      onClick={() => toggleValue("targetAreas", area.slug)}
                      title={area.name}
                      description={area.notes}
                    />
                  ))}
                </div>
              </div>
            </details>

            <FieldError message={errors.targetAreas?.message} />
          </fieldset>

          <details className="rounded-[1.35rem] border border-border bg-[#f8fbff]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-sm font-semibold text-foreground">
              Optional campaign details
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </summary>
            <div className="space-y-6 border-t border-border px-4 py-4">
              <fieldset className="space-y-3">
                <Label>Preferred Contact Method</Label>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {siteContent.contact.preferredContactMethods.map((method) => (
                    <ToggleChip
                      key={method.value}
                      active={preferredContactMethod === method.value}
                      onClick={() =>
                        setValue("preferredContactMethod", method.value, {
                          shouldValidate: true,
                        })
                      }
                      title={method.label}
                    />
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-6 lg:grid-cols-2">
                <fieldset className="space-y-3">
                  <Label>Design Needed</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["yes", "no"].map((value) => (
                      <ToggleChip
                        key={value}
                        active={needDesign === value}
                        onClick={() =>
                          setValue("needDesign", value as "yes" | "no", {
                            shouldValidate: true,
                          })
                        }
                        title={value === "yes" ? "Yes" : "No"}
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset className="space-y-3">
                  <Label>Printing Needed</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["yes", "no"].map((value) => (
                      <ToggleChip
                        key={value}
                        active={needPrinting === value}
                        onClick={() =>
                          setValue("needPrinting", value as "yes" | "no", {
                            shouldValidate: true,
                          })
                        }
                        title={value === "yes" ? "Yes" : "No"}
                      />
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="deliveryType">Delivery Type</Label>
                  <select
                    id="deliveryType"
                    className="h-12 w-full rounded-2xl border border-border bg-input px-4 text-sm text-foreground"
                    {...register("deliveryType")}
                  >
                    {siteContent.contact.deliveryTypes.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <select
                    id="timeline"
                    className="h-12 w-full rounded-2xl border border-border bg-input px-4 text-sm text-foreground"
                    {...register("timeline")}
                  >
                    {siteContent.contact.timelineOptions.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budgetRange">Budget</Label>
                  <select
                    id="budgetRange"
                    className="h-12 w-full rounded-2xl border border-border bg-input px-4 text-sm text-foreground"
                    {...register("budgetRange")}
                  >
                    {siteContent.contact.budgetRanges.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="extraDetails">Extra Details</Label>
                <Textarea
                  id="extraDetails"
                  placeholder="Optional: offer details, timing, streets, print size, or anything else that would help."
                  {...register("extraDetails")}
                />
                <FieldError message={errors.extraDetails?.message} />
              </div>
            </div>
          </details>

          {submitState.type === "success" ? (
            <div className="rounded-[1.25rem] border border-success/30 bg-success/10 px-4 py-4 text-sm text-foreground">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="h-4 w-4 text-success" />
                WhatsApp opened
              </div>
              <p className="mt-2 text-sm">
                Your quote request is ready. Step 2 is simple: press send in WhatsApp.
              </p>
            </div>
          ) : null}

          {submitState.type === "error" ? (
            <div className="rounded-[1.25rem] border border-[#d8b7ad] bg-[#fff2ee] px-4 py-4 text-sm text-[#7f3124]">
              {submitState.message}
            </div>
          ) : null}

          <Button type="submit" variant="brand" size="lg" className="w-full">
            {submitLabel}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

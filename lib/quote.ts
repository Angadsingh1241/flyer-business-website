import { z } from "zod";

import { siteContent } from "@/lib/site-content";

const contactMethodValues = siteContent.contact.preferredContactMethods.map(
  (item) => item.value,
);
const serviceValues = siteContent.contact.serviceNeeds.map((item) => item.value);
const deliveryTypeValues = siteContent.contact.deliveryTypes.map(
  (item) => item.value,
);
const timelineValues = siteContent.contact.timelineOptions.map(
  (item) => item.value,
);
const budgetValues = siteContent.contact.budgetRanges.map((item) => item.value);
const areaValues = siteContent.serviceAreas.map((area) => area.slug);
const cityValues = siteContent.locationOptions.cities.map((city) => city.slug);
const postalCodeValues = siteContent.locationOptions.postalCodes.map(
  (item) => item.slug,
);

function optionExists(options: string[], value: string) {
  return options.includes(value);
}

function labelForValue(
  options: ReadonlyArray<{ value: string; label: string }>,
  value: string,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export const quoteFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  businessName: z.string().trim().min(2, "Please enter your business name."),
  phone: z.string().trim().optional().or(z.literal("")),
  email: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: "Please enter a valid email address.",
    }),
  preferredContactMethod: z
    .string()
    .refine(
      (value) => optionExists(contactMethodValues, value),
      "Please choose a preferred contact method.",
    ),
  serviceNeeded: z
    .array(z.string())
    .min(1, "Choose at least one service.")
    .refine(
      (values) => values.every((value) => optionExists(serviceValues, value)),
      "Choose valid services.",
    ),
  needDesign: z.enum(["yes", "no"]),
  needPrinting: z.enum(["yes", "no"]),
  deliveryType: z
    .string()
    .refine(
      (value) => optionExists(deliveryTypeValues, value),
      "Choose a delivery type.",
    ),
  quantity: z.string().trim().min(1, "Enter an approximate quantity."),
  targetAreas: z
    .array(z.string())
    .refine(
      (values) => values.every((value) => optionExists(areaValues, value)),
      "Choose valid target areas.",
    ),
  targetCities: z
    .array(z.string())
    .refine(
      (values) => values.every((value) => optionExists(cityValues, value)),
      "Choose valid cities.",
    ),
  targetPostalCodes: z
    .array(z.string())
    .refine(
      (values) => values.every((value) => optionExists(postalCodeValues, value)),
      "Choose valid postal codes.",
    ),
  timeline: z
    .string()
    .refine(
      (value) => optionExists(timelineValues, value),
      "Choose a campaign timeline.",
    ),
  budgetRange: z
    .string()
    .refine(
      (value) => optionExists(budgetValues, value),
      "Choose a budget range.",
    ),
  extraDetails: z.string().trim().max(1500).optional().or(z.literal("")),
  source: z.string().trim().max(50).optional(),
}).superRefine((value, ctx) => {
  if (!value.phone?.trim() && !value.email?.trim()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Add a phone number or email address.",
      path: ["phone"],
    });
  }

  if (
    value.targetAreas.length === 0 &&
    value.targetCities.length === 0 &&
    value.targetPostalCodes.length === 0
  ) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Choose at least one area, city, or postal code.",
      path: ["targetAreas"],
    });
  }
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export function createLeadRecord(data: QuoteFormValues) {
  return {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    source: data.source ?? "website",
    contact: {
      name: data.name,
      businessName: data.businessName,
      phone: data.phone?.trim() || "",
      email: data.email?.trim() || "",
      preferredContactMethod: labelForValue(
        siteContent.contact.preferredContactMethods,
        data.preferredContactMethod,
      ),
    },
    request: {
      services: data.serviceNeeded.map((value) =>
        labelForValue(siteContent.contact.serviceNeeds, value),
      ),
      needDesign: data.needDesign === "yes",
      needPrinting: data.needPrinting === "yes",
      deliveryType: labelForValue(
        siteContent.contact.deliveryTypes,
        data.deliveryType,
      ),
      quantity: data.quantity,
      targetAreas: data.targetAreas.map(
        (value) =>
          siteContent.serviceAreas.find((area) => area.slug === value)?.name ?? value,
      ),
      targetCities: data.targetCities.map(
        (value) =>
          siteContent.locationOptions.cities.find((city) => city.slug === value)?.name ??
          value,
      ),
      targetPostalCodes: data.targetPostalCodes.map(
        (value) =>
          siteContent.locationOptions.postalCodes.find((item) => item.slug === value)
            ?.prefix ?? value,
      ),
      timeline: labelForValue(siteContent.contact.timelineOptions, data.timeline),
      budgetRange: labelForValue(
        siteContent.contact.budgetRanges,
        data.budgetRange,
      ),
      extraDetails: data.extraDetails?.trim() || null,
    },
  };
}

export function formatLeadEmail(record: ReturnType<typeof createLeadRecord>) {
  const subject = `New quote request from ${record.contact.businessName}`;
  const detailLines = [
    `Lead ID: ${record.id}`,
    `Submitted: ${record.submittedAt}`,
    `Source: ${record.source}`,
    ``,
    `Name: ${record.contact.name}`,
    `Business: ${record.contact.businessName}`,
    `Phone: ${record.contact.phone}`,
    `Email: ${record.contact.email}`,
    `Preferred contact: ${record.contact.preferredContactMethod}`,
    ``,
    `Services: ${record.request.services.join(", ")}`,
    `Need design: ${record.request.needDesign ? "Yes" : "No"}`,
    `Need printing: ${record.request.needPrinting ? "Yes" : "No"}`,
    `Delivery type: ${record.request.deliveryType}`,
    `Quantity: ${record.request.quantity}`,
    `Large areas: ${record.request.targetAreas.join(", ") || "None selected"}`,
    `Cities: ${record.request.targetCities.join(", ") || "None selected"}`,
    `Postal codes: ${record.request.targetPostalCodes.join(", ") || "None selected"}`,
    `Timeline: ${record.request.timeline}`,
    `Budget: ${record.request.budgetRange}`,
    `Extra details: ${record.request.extraDetails ?? "None provided"}`,
  ];

  return {
    subject,
    text: detailLines.join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #151515; line-height: 1.6;">
        <h2 style="margin-bottom: 12px;">New quote request</h2>
        <p><strong>Lead ID:</strong> ${record.id}</p>
        <p><strong>Submitted:</strong> ${record.submittedAt}</p>
        <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ded4c2;" />
        <p><strong>Name:</strong> ${record.contact.name}</p>
        <p><strong>Business:</strong> ${record.contact.businessName}</p>
        <p><strong>Phone:</strong> ${record.contact.phone}</p>
        <p><strong>Email:</strong> ${record.contact.email}</p>
        <p><strong>Preferred contact:</strong> ${record.contact.preferredContactMethod}</p>
        <p><strong>Services:</strong> ${record.request.services.join(", ")}</p>
        <p><strong>Need design:</strong> ${record.request.needDesign ? "Yes" : "No"}</p>
        <p><strong>Need printing:</strong> ${record.request.needPrinting ? "Yes" : "No"}</p>
        <p><strong>Delivery type:</strong> ${record.request.deliveryType}</p>
        <p><strong>Quantity:</strong> ${record.request.quantity}</p>
        <p><strong>Large areas:</strong> ${record.request.targetAreas.join(", ") || "None selected"}</p>
        <p><strong>Cities:</strong> ${record.request.targetCities.join(", ") || "None selected"}</p>
        <p><strong>Postal codes:</strong> ${record.request.targetPostalCodes.join(", ") || "None selected"}</p>
        <p><strong>Timeline:</strong> ${record.request.timeline}</p>
        <p><strong>Budget:</strong> ${record.request.budgetRange}</p>
        <p><strong>Extra details:</strong> ${record.request.extraDetails ?? "None provided"}</p>
      </div>
    `,
  };
}

export function formatQuoteWhatsAppMessage(data: QuoteFormValues) {
  const record = createLeadRecord(data);
  const phoneValue = record.contact.phone || "Not provided";
  const emailValue = record.contact.email || "Not provided";
  const designValue = record.request.needDesign ? "Yes" : "No";
  const printValue = record.request.needPrinting ? "Yes" : "No";
  const timelineValue = record.request.timeline || "Not provided";
  const budgetValue = record.request.budgetRange || "Not provided";
  const lines = [
    "Hi, I want a quote for flyer delivery.",
    "",
    `Name: ${record.contact.name}`,
    `Business: ${record.contact.businessName}`,
    `Phone: ${phoneValue}`,
    `Email: ${emailValue}`,
    `Preferred contact: ${record.contact.preferredContactMethod}`,
    `Services: ${record.request.services.join(", ")}`,
    `Need design: ${designValue}`,
    `Need printing: ${printValue}`,
    `Delivery type: ${record.request.deliveryType}`,
    `Quantity: ${record.request.quantity}`,
    `Large areas: ${record.request.targetAreas.join(", ") || "None selected"}`,
    `Cities: ${record.request.targetCities.join(", ") || "None selected"}`,
    `Postal codes: ${record.request.targetPostalCodes.join(", ") || "None selected"}`,
    `Timeline: ${timelineValue}`,
    `Budget: ${budgetValue}`,
    `Extra details: ${record.request.extraDetails ?? "None provided"}`,
  ];

  return lines.join("\n");
}

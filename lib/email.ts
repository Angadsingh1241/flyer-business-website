import nodemailer from "nodemailer";
import { Resend } from "resend";

import { formatLeadEmail } from "@/lib/quote";
import { siteContent } from "@/lib/site-content";

type LeadRecord = Parameters<typeof formatLeadEmail>[0];

type DeliveryResult = {
  mode: "disabled" | "resend" | "smtp";
};

export async function sendLeadNotification(
  record: LeadRecord,
): Promise<DeliveryResult> {
  const provider = process.env.EMAIL_PROVIDER?.toLowerCase() ?? "disabled";
  const from = process.env.LEAD_NOTIFICATION_FROM;
  const to = process.env.LEAD_NOTIFICATION_TO ?? siteContent.business.email;
  const { subject, text, html } = formatLeadEmail(record);

  if (provider === "disabled") {
    return { mode: "disabled" };
  }

  if (!from || !to) {
    throw new Error(
      "Lead notification email is missing LEAD_NOTIFICATION_FROM or LEAD_NOTIFICATION_TO.",
    );
  }

  if (provider === "resend") {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("EMAIL_PROVIDER is set to resend but RESEND_API_KEY is missing.");
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
    });

    return { mode: "resend" };
  }

  if (provider === "smtp") {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";

    if (!host || !user || !pass) {
      throw new Error(
        "EMAIL_PROVIDER is set to smtp but SMTP_HOST, SMTP_USER, or SMTP_PASS is missing.",
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo: record.contact.email,
    });

    return { mode: "smtp" };
  }

  throw new Error(
    "Unsupported EMAIL_PROVIDER. Use disabled, resend, or smtp in your environment configuration.",
  );
}

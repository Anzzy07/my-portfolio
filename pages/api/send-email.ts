import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API);

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { senderEmail, message } = req.body;

  // Server-side validation
  if (!validateString(senderEmail, 50)) {
    return res.status(400).json({ error: "Invalid sender email" });
  }
  if (!validateString(message, 1000)) {
    return res.status(400).json({ error: "Invalid message" });
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "giftg4754@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: getErrorMessage(error) });
  }
}

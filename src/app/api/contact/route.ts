import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/types";
import type { ApiResponse } from "@/types";

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await req.json();

    // Validate with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data. Please check your inputs." },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, subject, message } = parsed.data;

    // ── SMTP transporter ─────────────────────────────
    // Configure via .env.local — see .env.local.example
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   ?? "smtp.gmail.com",
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipientEmail = process.env.CONTACT_EMAIL ?? process.env.SMTP_USER ?? "";

    // ── Email to portfolio owner ──────────────────────
    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to:      recipientEmail,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      subject: `[Portfolio] ${subject ?? "New message"} — from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', sans-serif; background: #040610; color: #e8eaf6; margin: 0; padding: 0; }
              .wrap { max-width: 560px; margin: 0 auto; padding: 40px 24px; }
              .header { border-bottom: 1px solid rgba(0,245,255,0.2); padding-bottom: 20px; margin-bottom: 24px; }
              .label { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #4a4f72; margin-bottom: 4px; }
              .value { font-size: 15px; color: #e8eaf6; margin-bottom: 20px; }
              .message-box { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; font-size: 15px; line-height: 1.8; color: #8b90b8; }
              .accent { color: #00f5ff; }
              .footer { margin-top: 32px; font-size: 12px; color: #4a4f72; }
            </style>
          </head>
          <body>
            <div class="wrap">
              <div class="header">
                <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#00f5ff;margin:0 0 8px">
                  // New Contact Message
                </p>
                <h1 style="font-size:22px;font-weight:700;margin:0;color:#e8eaf6">
                  nayemul.dev Portfolio
                </h1>
              </div>

              <div class="label">From</div>
              <div class="value"><span class="accent">${firstName} ${lastName}</span> &lt;${email}&gt;</div>

              <div class="label">Subject</div>
              <div class="value">${subject ?? "(no subject)"}</div>

              <div class="label">Message</div>
              <div class="message-box">${message.replace(/\n/g, "<br>")}</div>

              <div class="footer">
                Sent from your portfolio contact form · Reply directly to this email to respond.
              </div>
            </div>
          </body>
        </html>
      `,
      text: `New message from ${firstName} ${lastName} <${email}>\n\nSubject: ${subject ?? "(none)"}\n\n${message}`,
    });

    // ── Auto-reply to sender ──────────────────────────
    await transporter.sendMail({
      from:    `"Nayemul Saheb" <${process.env.SMTP_USER}>`,
      to:      `"${firstName} ${lastName}" <${email}>`,
      subject: `Got your message, ${firstName} — I'll be in touch`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', sans-serif; background: #040610; color: #e8eaf6; margin: 0; padding: 0; }
              .wrap { max-width: 560px; margin: 0 auto; padding: 40px 24px; }
              p { font-size: 15px; line-height: 1.8; color: #8b90b8; margin-bottom: 16px; }
              .sig { margin-top: 32px; font-size: 14px; }
              .name { color: #00f5ff; font-weight: 600; }
              .role { font-size: 12px; letter-spacing: 0.1em; color: #4a4f72; margin-top: 4px; }
            </style>
          </head>
          <body>
            <div class="wrap">
              <p>Hi ${firstName},</p>
              <p>Thanks for reaching out — your message has landed safely in my inbox. I'll review it and get back to you within 24 hours.</p>
              <p>Looking forward to the conversation.</p>
              <div class="sig">
                <div class="name">Nayemul Saheb</div>
                <div class="role">// Software Engineer</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact/route] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send message. Please email me directly at " +
          (process.env.CONTACT_EMAIL ?? "nayemul@example.com"),
      },
      { status: 500 }
    );
  }
}

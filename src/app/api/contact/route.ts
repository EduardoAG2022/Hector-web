import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/config/site";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { name, email, phone, service, address, message } = body;

  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: true, note: "Email not configured." });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_EMAIL ?? business.email;

  try {
    await resend.emails.send({
      from: "JV Patios <onboarding@resend.dev>",
      to,
      replyTo: email || undefined,
      subject: `New quote request — ${name} (${service})`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;">
          <h2 style="color:#1a1a1a;margin-bottom:8px;">New Quote Request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:120px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">${phone}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${email || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Service</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${service}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Address</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${address || "—"}</td></tr>
            <tr><td style="padding:10px 0;color:#666;">Notes</td><td style="padding:10px 0;">${message || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json({ error: "Could not send email." }, { status: 500 });
  }
}

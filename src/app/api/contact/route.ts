import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  when: string;
  address: string;
  size: string;
  message: string;
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { name, email, phone, service, when, address, size, message } = body;

  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const apiKey = process.env.HECTOR_LAND;
  const to = process.env.HECTOR_EMAIL;

  if (!apiKey || !to) {
    console.warn("[contact] HECTOR_LAND or HECTOR_EMAIL not set.");
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "JV Patios <onboarding@resend.dev>",
      to,
      replyTo: email || undefined,
      subject: `Nueva cotización — ${name} · ${service}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#2d7d46;margin-bottom:4px;">Nueva solicitud de cotización</h2>
          <p style="color:#666;margin-top:0;margin-bottom:24px;font-size:14px;">JV Patios & Stonework — sitio web</p>

          <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;">
            <tr style="background:#f0f7f3;">
              <td style="padding:12px 16px;font-size:13px;color:#555;width:130px;">Nombre</td>
              <td style="padding:12px 16px;font-weight:700;color:#1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;font-size:13px;color:#555;border-top:1px solid #eee;">Teléfono</td>
              <td style="padding:12px 16px;font-weight:700;color:#1a1a1a;border-top:1px solid #eee;">${phone}</td>
            </tr>
            <tr style="background:#f0f7f3;">
              <td style="padding:12px 16px;font-size:13px;color:#555;border-top:1px solid #eee;">Email</td>
              <td style="padding:12px 16px;border-top:1px solid #eee;">${email || "—"}</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;font-size:13px;color:#555;border-top:1px solid #eee;">Servicio</td>
              <td style="padding:12px 16px;border-top:1px solid #eee;">${service || "—"}</td>
            </tr>
            <tr style="background:#f0f7f3;">
              <td style="padding:12px 16px;font-size:13px;color:#555;border-top:1px solid #eee;">¿Cuándo?</td>
              <td style="padding:12px 16px;border-top:1px solid #eee;">${when || "—"}</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;font-size:13px;color:#555;border-top:1px solid #eee;">Dirección</td>
              <td style="padding:12px 16px;border-top:1px solid #eee;">${address || "—"}</td>
            </tr>
            <tr style="background:#f0f7f3;">
              <td style="padding:12px 16px;font-size:13px;color:#555;border-top:1px solid #eee;">Tamaño</td>
              <td style="padding:12px 16px;border-top:1px solid #eee;">${size || "—"}</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;font-size:13px;color:#555;border-top:1px solid #eee;">Notas</td>
              <td style="padding:12px 16px;border-top:1px solid #eee;">${message || "—"}</td>
            </tr>
          </table>

          <p style="margin-top:24px;font-size:12px;color:#999;">Responde directamente a este correo para contactar al cliente.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json({ error: "Could not send email." }, { status: 500 });
  }
}

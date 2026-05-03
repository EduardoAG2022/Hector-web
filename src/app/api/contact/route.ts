import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  nombre: string;
  correo: string;
  telefono: string;
  industria: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^\+?[\d\s\-().]{7,20}$/.test(phone);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  const { nombre, correo, telefono, industria } = body;

  // Validación server-side
  if (!nombre?.trim() || !correo?.trim() || !telefono?.trim() || !industria?.trim()) {
    return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
  }
  if (!isValidEmail(correo)) {
    return NextResponse.json({ error: "Correo inválido." }, { status: 400 });
  }
  if (!isValidPhone(telefono)) {
    return NextResponse.json({ error: "Teléfono inválido." }, { status: 400 });
  }

  const destinatario = process.env.CONTACT_EMAIL ?? siteConfig.email;

  try {
    await resend.emails.send({
      from: `${siteConfig.name} <onboarding@resend.dev>`,
      to: destinatario,
      replyTo: correo,
      subject: `Nueva solicitud de llamada — ${nombre} (${industria})`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;">
          <h2 style="color:#1a1a1a;margin-bottom:8px;">Nueva solicitud de llamada</h2>
          <p style="color:#666;margin-bottom:24px;">Alguien completó el formulario en <strong>${siteConfig.name}</strong>.</p>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;width:140px;">Nombre</td>
              <td style="padding:12px 0;border-bottom:1px solid #eee;font-weight:600;color:#1a1a1a;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;">Correo</td>
              <td style="padding:12px 0;border-bottom:1px solid #eee;font-weight:600;color:#1a1a1a;">
                <a href="mailto:${correo}" style="color:#2563eb;">${correo}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eee;color:#666;">Teléfono</td>
              <td style="padding:12px 0;border-bottom:1px solid #eee;font-weight:600;color:#1a1a1a;">
                <a href="tel:${telefono}" style="color:#2563eb;">${telefono}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;color:#666;">Industria</td>
              <td style="padding:12px 0;font-weight:600;color:#1a1a1a;">${industria}</td>
            </tr>
          </table>

          <div style="margin-top:32px;padding:16px;background:#f0f7ff;border-radius:8px;">
            <p style="margin:0;color:#2563eb;font-size:14px;">
              Responde directamente a este correo para contactar a ${nombre}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el correo. Intenta de nuevo." },
      { status: 500 }
    );
  }
}

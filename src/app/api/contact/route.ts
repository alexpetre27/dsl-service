import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { templates } from "@/lib/email-templates";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const name = String(data?.name || "").trim();
    const email = String(data?.email || "").trim();
    const phone = data?.phone ? String(data.phone).trim() : undefined;
    const message = data?.message ? String(data.message).trim() : undefined;
    const honeypot = data?.honeypot ? String(data.honeypot) : "";

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Câmpuri obligatorii lipsă" },
        { status: 400 }
      );
    }

    const subject = `Formular contact — ${name} (${email})`;
    const html = templates.contact({ name, email, phone, message });
    await sendMail({ subject, html, replyTo: email });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Eroare la trimiterea emailului";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

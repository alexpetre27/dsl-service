import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { templates } from "@/lib/email-templates";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data?.name || !data?.email || !data?.childAge) {
      return NextResponse.json(
        { error: "Câmpuri obligatorii lipsă" },
        { status: 400 }
      );
    }

    const subject = `Consultanță gratuită — ${data.name} (${data.email})`;
    const html = templates.courseCta(data);
    await sendMail({ subject, html, replyTo: data.email });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Eroare la trimiterea emailului";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

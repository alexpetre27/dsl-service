// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, message } = await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: "dslgarage.contact@gmail.com",
//       subject: `Mesaj de la ${name}`,
//       text: `Telefon: ${phone}\n\n${message}`,
//       html: `
//         <h3>Ai primit un mesaj nou:</h3>
//         <p><strong>Nume:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Telefon:</strong> ${phone}</p>
//         <p><strong>Mesaj:</strong><br/>${message}</p>
//       `,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Email trimis cu succes!",
//     });
//   } catch (error: unknown) {
//     console.error(error);
//     return NextResponse.json(
//       { success: false, message: "Eroare la trimiterea emailului." },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { sendMail } from ";
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

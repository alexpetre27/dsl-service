import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM,
  EMAIL_TO,
} = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
  // Do not throw at import time in production builds; validate at send time.
}

export function getTransport() {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP configuration is missing environment variables");
  }
  const secure = String(SMTP_SECURE).toLowerCase() === "true";
  const port = Number(SMTP_PORT);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendMail(opts: {
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  to?: string;
}) {
  const transporter = getTransport();
  const from = EMAIL_FROM || SMTP_USER!;
  const to = opts.to || EMAIL_TO || SMTP_USER!;

  const info = await transporter.sendMail({
    from,
    to,
    subject: opts.subject,
    html: opts.html,
    text: opts.text,
    replyTo: opts.replyTo,
  });

  return info;
}

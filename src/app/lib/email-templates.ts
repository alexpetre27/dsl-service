type Section = { label: string; value?: string | string[] | undefined | null };

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#6b7280;font-size:12px;white-space:nowrap;">${label}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#111827;font-size:14px;">${value}</td>
    </tr>
  `;
}

function wrap(content: string, title: string) {
  return `
  <div style="background:#f9fafb;padding:24px">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:700px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb">
      <thead>
        <tr>
          <td style="padding:18px 20px;background:#111827;color:#ffffff;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial,'Noto Sans',sans-serif">
            <div style="font-size:12px;letter-spacing:1.2px;text-transform:uppercase;opacity:.9">DSL Garage — Service auto & ITP</div>
            <div style="font-size:20px;font-weight:500;margin-top:4px">${title}</div>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:4px 20px 20px 20px">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${content}
            </table>
            <div style="margin-top:18px;padding-top:14px;border-top:1px solid #f3f4f6;color:#6b7280;font-size:12px;line-height:1.6">
              Acest mesaj a fost generat de formularul de pe site. Răspundeți direct la acest e‑mail pentru a contacta solicitantul.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`;
}

function normalize(val?: string | string[] | null) {
  if (Array.isArray(val)) return val.filter(Boolean).join(", ");
  return (val ?? "").toString();
}

export function renderSections(title: string, sections: Section[]) {
  const rows = sections
    .filter(
      (s) =>
        s.value !== undefined &&
        s.value !== null &&
        normalize(s.value).trim() !== ""
    )
    .map((s) => row(s.label, normalize(s.value)))
    .join("\n");
  return wrap(rows, title);
}

// Define a specific type for the schedule form data
interface ScheduleData {
  name: string;
  email: string;
  phone?: string;
  contactPreference?: string;
  preferredDate?: string;
  preferredContactTime?: string;
  objective?: string;
  message?: string;
  availabilityDays?: string | string[];
  availabilityTime?: string;
  timeZone?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export const templates = {
  newsletter(email: string) {
    return renderSections("Abonare Newsletter", [
      { label: "Email", value: email },
    ]);
  },
  contact(data: {
    name: string;
    email: string;
    phone?: string;
    message?: string;
  }) {
    return renderSections("Mesaj din formularul de contact", [
      { label: "Nume", value: data.name },
      { label: "Email", value: data.email },
      { label: "Telefon", value: data.phone },
      { label: "Mesaj", value: data.message },
    ]);
  },
  // Use the specific ScheduleData interface instead of Record<string, any>
  schedule(data: ScheduleData) {
    return renderSections("Programare întâlnire", [
      { label: "Nume", value: data.name },
      { label: "Email", value: data.email },
      { label: "Telefon", value: data.phone },
      { label: "Preferință contact", value: data.contactPreference },
      { label: "Data preferată", value: data.preferredDate },
      { label: "Ore preferate", value: data.preferredContactTime },
      { label: "Obiectiv", value: data.objective },
      { label: "Mesaj", value: data.message },
      { label: "Zile disponibile", value: data.availabilityDays },
      { label: "Interval preferat", value: data.availabilityTime },
      { label: "Time zone", value: data.timeZone },
      { label: "UTM source", value: data.utmSource },
      { label: "UTM medium", value: data.utmMedium },
      { label: "UTM campaign", value: data.utmCampaign },
    ]);
  },
  offer(data: { name: string; email: string; level: string }) {
    return renderSections("Solicitare ofertă", [
      { label: "Nume", value: data.name },
      { label: "Email", value: data.email },
      { label: "Nivel", value: data.level },
    ]);
  },
  courseCta(data: {
    name: string;
    email: string;
    childAge: string;
    phone?: string;
    courseType?: string;
  }) {
    return renderSections("Solicitare consultanță gratuită", [
      { label: "Nume", value: data.name },
      { label: "Email", value: data.email },
      { label: "Opțiune", value: data.childAge },
      { label: "Telefon", value: data.phone },
      { label: "Tip curs", value: data.courseType },
    ]);
  },
  faqQuestion(data: { email: string; question: string }) {
    return renderSections("Întrebare din FAQ", [
      { label: "Email", value: data.email },
      { label: "Întrebare", value: data.question },
    ]);
  },
};

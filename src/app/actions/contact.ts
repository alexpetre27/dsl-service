'use server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot?: string;
}

interface ActionResult {
  success: boolean;
  message: string;
  errors?: {
    [key: string]: string;
  };
}

export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  try {
    // Extract form data
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      honeypot: formData.get('honeypot') as string,
    };

    // Anti-spam check
    if (data.honeypot) {
      return {
        success: false,
        message: 'Spam detectat. Formularul nu a fost trimis.',
      };
    }

    // Basic validation
    const errors: { [key: string]: string } = {};

    if (!data.name || data.name.trim().length < 2) {
      errors.name = 'Numele este obligatoriu și trebuie să aibă cel puțin 2 caractere.';
    }

    if (!data.email || !isValidEmail(data.email)) {
      errors.email = 'Adresa de email nu este validă.';
    }

    if (!data.phone || data.phone.trim().length < 10) {
      errors.phone = 'Numărul de telefon trebuie să aibă cel puțin 10 cifre.';
    }

    if (!data.message || data.message.trim().length < 10) {
      errors.message = 'Mesajul trebuie să aibă cel puțin 10 caractere.';
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: 'Te rugăm să corectezi erorile de mai jos.',
        errors,
      };
    }

    // Simulate email sending (replace with actual email service)
    console.log('Contact form submission:', {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      message: data.message.trim(),
      timestamp: new Date().toISOString(),
    });

    // Here you would integrate with your email service:
    // - Nodemailer
    // - SendGrid
    // - AWS SES
    // - Mailgun
    // etc.

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Mulțumim! Mesajul a fost trimis cu succes. Vă vom contacta în cel mai scurt timp posibil.',
    };

  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.',
    };
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
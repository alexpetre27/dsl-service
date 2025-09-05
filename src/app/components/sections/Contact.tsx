'use client';

import { useState, useTransition } from 'react';
import { submitContactForm } from '../../actions/contact';
import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Icon from '../ui/Icon';
import Section from '../ui/Section';
import Container from '../ui/Container';

interface FormState {
  success: boolean;
  message: string;
  errors?: {
    [key: string]: string;
  };
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(formData);
      setFormState(result);
      
      if (result.success) {
        // Reset form
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form?.reset();
      }
    });
  };

  // Map removed per request

  return (
    <Section id="contact" className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact & Locație
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programează-te pentru o consultație sau service. Suntem aici să te ajutăm cu orice întrebare.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Trimite-ne un mesaj
              </h3>

              <form id="contact-form" action={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nume complet *
                  </label>
                  <Input 
                    id="name"
                    name="name" 
                    placeholder="Introduceți numele complet"
                    required 
                    className={formState?.errors?.name ? 'border-red-500' : ''}
                  />
                  {formState?.errors?.name && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Adresa de email *
                  </label>
                  <Input 
                    id="email"
                    name="email" 
                    type="email"
                    placeholder="exemplu@email.com"
                    required 
                    className={formState?.errors?.email ? 'border-red-500' : ''}
                  />
                  {formState?.errors?.email && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Număr de telefon *
                  </label>
                  <Input 
                    id="phone"
                    name="phone" 
                    type="tel"
                    placeholder="0712 345 678"
                    required 
                    className={formState?.errors?.phone ? 'border-red-500' : ''}
                  />
                  {formState?.errors?.phone && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <TextArea 
                    id="message"
                    name="message" 
                    placeholder="Descrie problema vehiculului, serviciul dorit sau întrebarea ta..."
                    required 
                    className={formState?.errors?.message ? 'border-red-500' : ''}
                  />
                  {formState?.errors?.message && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Se trimite...
                    </>
                  ) : (
                    <>
                      <Icon name="mail" size={20} className="mr-2" />
                      Trimite mesaj
                    </>
                  )}
                </Button>

                {/* Form feedback */}
                {formState && (
                  <div role="status" aria-live="polite" className={`p-4 rounded-lg ${
                    formState.success 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {formState.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informații de contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600">0123 456 789</p>
                    <p className="text-sm text-gray-500">Luni-Vineri: 08:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">contact@autopremium.ro</p>
                    <p className="text-sm text-gray-500">Răspuns în maxim 2 ore</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="location" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresa</h4>
                    <p className="text-gray-600">Strada Serviciului Nr. 123</p>
                    <p className="text-gray-600">Sector 1, București</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="clock" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Program</h4>
                    <p className="text-gray-600">Luni-Vineri: 08:00-18:00</p>
                    <p className="text-gray-600">Sâmbătă: 09:00-14:00</p>
                    <p className="text-gray-600">Duminică: închis</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a 
                  href="https://wa.me/40123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <Icon name="whatsapp" size={24} className="text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">WhatsApp Business</p>
                    <p className="text-sm text-green-600">Mesaj rapid pentru urgențe</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map section removed per request */}
          </div>
        </div>
    </Container>
    </Section>
  );
}

'use client';

import Icon from '../ui/Icon';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <Container>
      <div className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              DSL <span className="text-accent">Service</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Service auto premium pentru BMW, Mercedes, Audi și Porsche. 
              Stație ITP autorizată RAR cu echipamente moderne și personal certificat.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                aria-label="Facebook"
              >
                📘
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a 
                href="https://wa.me/40123456789" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigare rapidă</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-600 hover:text-accent transition-colors block"
                >
                  Acasă
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('itp-section')}
                  className="text-gray-600 hover:text-accent transition-colors block"
                >
                  ITP Autorizat
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-600 hover:text-accent transition-colors block"
                >
                  Servicii
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-accent transition-colors block"
                >
                  Despre Noi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-accent transition-colors block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii principale</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Verificare ITP</li>
              <li>Diagnoză computerizată</li>
              <li>Sistem climatizare</li>
              <li>Frâne & suspensie</li>
              <li>Revizie completă</li>
              <li>Reparații mecanice</li>
              <li>Geometrie roți</li>
              <li>Caroserie & vopsitorie</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="phone" size={18} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm">0123 456 789</p>
                  <p className="text-xs text-gray-500">Luni-Vineri 08:00-18:00</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon name="mail" size={18} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm">contact@dslservice.ro</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Icon name="location" size={18} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm">Strada Serviciului Nr. 123</p>
                  <p className="text-sm">Sector 1, București</p>
                </div>
              </div>
            </div>

            {/* Program */}
            <div className="mt-6">
              <h4 className="font-semibold text-accent mb-2">Program lucru:</h4>
              <div className="text-sm space-y-1">
                <p className="text-gray-600">Luni-Vineri: 08:00-18:00</p>
                <p className="text-gray-600">Sâmbătă: 09:00-14:00</p>
                <p className="text-gray-600">Duminică: închis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-4">Certificări și autorizări</h4>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="shield" size={16} className="text-accent" />
                <span className="text-gray-600">Stație ITP autorizată RAR</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="award" size={16} className="text-accent" />
                <span className="text-gray-600">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-accent" />
                <span className="text-gray-600">ANRSC Service Autorizat</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="star" size={16} className="text-accent" />
                <span className="text-gray-600">Bosch Service Partner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            <p>© {currentYear} DSL Service SRL. Toate drepturile rezervate.</p>
            <p className="mt-1">
              <a href="#" className="hover:text-accent transition-colors">Politica de confidențialitate</a>
              {' • '}
              <a href="#" className="hover:text-accent transition-colors">Termeni și condiții</a>
              {' • '}
              <a href="#" className="hover:text-accent transition-colors">GDPR</a>
            </p>
          </div>
          
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-accent hover:text-black transition-colors rounded-lg text-sm"
          >
            <Icon name="arrowUp" size={16} />
            Înapoi sus
          </button>
        </div>
      </div>
      </Container>
    </footer>
  );
}

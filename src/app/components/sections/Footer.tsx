"use client";

import Icon from "@/components/ui/Icon";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Facebook, Instagram, PhoneCall } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="flex flex-col items-center md:items-start mb-4">
                <div className="flex items-start gap-2">
                  <Image
                    src="/dsl_icon.png"
                    alt="DSL Service Logo"
                    width={75}
                    height={75}
                    className="cursor-pointer mb-4"
                    onClick={() => scrollToSection("home")}
                  />
                  <div className="flex flex-col leading-[110%] py-1 font-semibold text-xl text-gray-600">
                    <span>DSL</span>
                    <span>Cars</span>
                    <span>Garage</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Service auto premium pentru BMW, Mercedes, Audi și Porsche.
                Stație ITP autorizată RAR cu echipamente moderne și personal
                certificat.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="https://wa.me/40123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                  aria-label="WhatsApp"
                >
                  <PhoneCall />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                Navigare rapidă
              </h3>
              <ul className="flex flex-col items-center md:items-start space-y-2">
                {[
                  "Acasă",
                  "ITP Autorizat",
                  "Servicii",
                  "Despre Noi",
                  "Contact",
                ].map((label, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        scrollToSection(
                          label === "Acasă"
                            ? "home"
                            : label === "ITP Autorizat"
                            ? "itp-section"
                            : label === "Servicii"
                            ? "services"
                            : label === "Despre Noi"
                            ? "about"
                            : "contact"
                        )
                      }
                      className="text-gray-600 hover:text-accent transition-colors block"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Servicii principale
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Verificare ITP",
                  "Diagnoză computerizată",
                  "Sistem climatizare",
                  "Frâne & suspensie",
                  "Revizie completă",
                  "Reparații mecanice",
                  "Geometrie roți",
                  "Caroserie & vopsitorie",
                ].map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Icon
                    name="phone"
                    size={20}
                    className="text-accent flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm">0767 601 122</p>
                    <p className="text-xs text-gray-500">
                      Luni-Vineri 08:00-18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Icon
                    name="mail"
                    size={20}
                    className="text-accent flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm">contact_dsl@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start justify-center md:justify-start gap-3">
                  <Icon
                    name="location"
                    size={20}
                    className="text-accent flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-gray-600 text-sm">
                      Comuna Râfov, Sat Buda
                    </p>
                    <p className="text-gray-600 text-sm">
                      Strada Principală, Numărul 172
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center md:text-left">
                <h4 className="font-semibold text-accent mb-2">
                  Program lucru:
                </h4>
                <div className="text-sm space-y-1">
                  <p className="text-gray-600">Luni-Vineri: 08:00-18:00</p>
                  <p className="text-gray-600">Sâmbătă: 09:00-14:00</p>
                  <p className="text-gray-600">Duminică: închis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <h4 className="text-lg font-semibold mb-4">
              Certificări și autorizări
            </h4>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {[
                { name: "shield", label: "Stație ITP autorizată RAR" },
                { name: "award", label: "ISO 9001:2015" },
                { name: "check", label: "ANRSC Service Autorizat" },
                { name: "star", label: "Bosch Service Partner" },
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Icon name={cert.name} size={16} className="text-accent" />
                  <span className="text-gray-600">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="text-sm text-gray-600 text-center md:text-left">
              <p>
                © {currentYear} DSL Cars Garage SRL. Toate drepturile rezervate.
              </p>
              <p className="mt-1">
                <a href="#" className="hover:text-accent transition-colors">
                  Politica de confidențialitate
                </a>
                {" • "}
                <a href="#" className="hover:text-accent transition-colors">
                  Termeni și condiții
                </a>
                {" • "}
                <a href="#" className="hover:text-accent transition-colors">
                  GDPR
                </a>
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-accent hover:text-black transition-colors rounded-lg text-sm"
            >
              <Icon name="arrowUp" size={16} /> Înapoi sus
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

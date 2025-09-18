"use client";

import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function ITP() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const itpSteps = [
    {
      icon: "phone",
      title: "Programare",
      description: "Sună și programează-te rapid",
    },
    {
      icon: "document",
      title: "Verificare",
      description: "Verificări complete conform normelor RAR",
    },
    {
      icon: "shield",
      title: "Raport",
      description: "Raport clar și certificat de conformitate",
    },
    {
      icon: "check",
      title: "Finalizare",
      description: "ITP valid și pregătit pentru drum",
    },
  ];

  return (
    <Section id="itp-section" className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Icon name="shield" size={20} />
            <span className="font-medium">STAȚIE AUTORIZATĂ RAR</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stație ITP Autorizată RAR
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferim servicii complete de inspecție tehnică periodică pentru toate
            tipurile de vehicule, cu echipamente moderne și personal certificat
            RAR.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {itpSteps.map((step, index) => (
                <Card
                  key={index}
                  className="group relative hover:shadow-xl transition-shadow border border-gray-100 rounded-2xl"
                >
                  <div className="flex items-start gap-5 md:gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl ring-1 ring-accent/20 flex items-center justify-center">
                      <Icon
                        name={step.icon}
                        size={24}
                        className="text-accent"
                      />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-semibold text-gray-900 leading-tight mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/10 transition-all duration-500" />
                </Card>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <Image
              src="/statie_itp.jpg"
              alt="Stație ITP Autorizată RAR"
              width={500}
              height={500}
              className="rounded-xl mx-auto"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="clock" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Programări în aceeași zi
              </h3>
              <p className="text-gray-600 text-sm">
                Flexibilitate maximă pentru programul tău
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="award" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Verificări complete
              </h3>
              <p className="text-gray-600 text-sm">
                Toate componentele verificate conform normelor
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="document" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Raport clar</h3>
              <p className="text-gray-600 text-sm">
                Explicații detaliate pentru toate verificările
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="px-8 py-4 text-lg font-semibold"
            >
              <Icon name="phone" size={20} className="mr-2" />
              Rezervă-ți locul acum!
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

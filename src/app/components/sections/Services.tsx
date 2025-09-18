"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function Services() {
  const services = [
    {
      icon: "wrench",
      title: "Diagnoză computerizată",
      description:
        "Diagnoză completă cu echipamente de ultimă generație pentru identificarea precisă a problemelor.",
      features: [
        "Scanner multimarcă",
        "Raport detaliat",
        "Interpretare profesională",
      ],
    },
    {
      icon: "check",
      title: "Sistem climatizare",
      description:
        "Service complet pentru sistemele de climatizare: verificare, reîncărcare, reparații.",
      features: [
        "Verificare presiuni",
        "Reîncărcare R1234yf",
        "Dezinfectare sistem",
      ],
    },
    {
      icon: "shield",
      title: "Frâne & suspensie",
      description:
        "Verificări și reparații pentru sistemele de frânare și suspensie, cruciale pentru siguranță.",
      features: ["Plăcuțe și discuri", "Amortizoare", "Test pe stand"],
    },
    {
      icon: "clock",
      title: "Revizie & întreținere",
      description:
        "Revizii periodice conform recomandărilor producătorului pentru a menține performanțele.",
      features: ["Revizie completă", "Uleiuri premium", "Check-up 50 puncte"],
    },
    {
      icon: "wrench",
      title: "Reparații mecanice",
      description:
        "Reparații complexe pentru motoare, transmisii și alte componente mecanice.",
      features: ["Reparații motor", "Transmisie", "Piese originale"],
    },
    {
      icon: "check",
      title: "Schimb ulei & filtre",
      description:
        "Schimb rapid de ulei și filtre cu produse premium adaptate fiecărei mărci.",
      features: ["Uleiuri Mobil 1", "Filtre originale", "15 minute"],
    },
    {
      icon: "document",
      title: "Verificare ITP",
      description:
        "Stație ITP autorizată RAR cu echipamente moderne pentru toate tipurile de vehicule.",
      features: ["Autorizare RAR", "Echipamente moderne", "Programare rapidă"],
    },
    {
      icon: "award",
      title: "Geometrie roți",
      description:
        "Verificare și reglare geometrie roți pentru uzură uniformă a anvelopelor.",
      features: ["Măsurare 3D", "Reglare precisă", "Test drive"],
    },
    {
      icon: "wrench",
      title: "Electrică auto",
      description:
        "Diagnoză și reparații pentru toate sistemele electrice și electronice.",
      features: ["Diagnoză avansată", "Reparații cablaje", "Programări ECU"],
    },
    {
      icon: "star",
      title: "Caroserie & vopsitorie",
      description:
        "Servicii complete de caroserie și vopsitorie în cameră cu filtrare profesională.",
      features: ["Reparații tabla", "Vopsitorie premium", "Finisaje perfecte"],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="services" className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Servicii Clasice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gamă completă de servicii pentru întreținerea și repararea
            vehiculelor premium, cu echipamente moderne și personal specializat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden"
            >
              <CardHeader>
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl ring-1 ring-accent/20 flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={28}
                      className="text-accent"
                    />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <Icon
                        name="check"
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToContact}
                  className="w-full"
                >
                  Solicită ofertă
                </Button>
              </CardContent>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/10 transition-all duration-500" />
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ai nevoie de un serviciu special?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactează-ne pentru servicii personalizate sau consultații
              tehnice pentru vehiculul tău premium.
            </p>
            <Button size="lg" onClick={scrollToContact}>
              <Icon name="phone" size={20} className="mr-2" />
              Consultă specialiștii
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

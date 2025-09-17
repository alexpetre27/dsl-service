import { Card, CardContent } from "../ui/Card";
import Icon from "../ui/Icon";
import Skeleton from "../ui/Skeleton";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Equipment() {
  const equipment = [
    {
      icon: "wrench",
      title: "Scanner diagnoză multimarcă",
      description:
        "Echipament de ultimă generație pentru diagnoză computerizată avansată",
      features: ["BMW ICOM", "Mercedes STAR", "Audi VAS", "Porsche PIWIS"],
      image: "[Scanner diagnoză profesional conectat la vehicul]",
    },
    {
      icon: "star",
      title: "Elevator hidraulic 4 coloane",
      description:
        "Sistem de ridicare profesional pentru acces complet sub vehicul",
      features: ["Capacitate 4 tone", "Ridicare uniformă", "Siguranță maximă"],
      image: "[Elevator 4 coloane cu mașină premium ridicate]",
    },
    {
      icon: "check",
      title: "Stație climatizare R1234yf",
      description:
        "Echipament modern pentru service-ul sistemelor de climatizare",
      features: [
        "Compatibil R134a/R1234yf",
        "Recirculare agent",
        "Vacuum profesional",
      ],
      image: "[Stație climatizare cu afișaj digital și furtunuri]",
    },
    {
      icon: "shield",
      title: "Cameră de vopsit cu filtrare",
      description:
        "Cameră profesională pentru lucrări de caroserie și vopsitorie",
      features: ["Filtrare aer", "Control temperatură", "Iluminare LED"],
      image: "[Cameră de vopsit cu vehicul în interior și sistem de filtrare]",
    },
    {
      icon: "award",
      title: "Stand geometrie 3D",
      description: "Măsurare și reglare precisă pentru geometria roților",
      features: ["Măsurare 3D", "Calibrare automată", "Raport detaliat"],
      image: "[Stand geometrie cu senzori montați pe roți]",
    },
    {
      icon: "wrench",
      title: "Unelte și scule profesionale",
      description:
        "Arsenal complet de unelte specializate pentru fiecare marcă",
      features: [
        "Unelte originale",
        "Chei dinamometrice",
        "Extractor injectoare",
      ],
      image: "[Set de unelte organizat în dulap cu compartimente]",
    },
  ];

  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tehnologii & Echipamente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Investim continuu în echipamente moderne pentru a oferi servicii la
            standarde premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {equipment.map((item, index) => (
            <Card
              key={index}
              className="card-hover border-0 shadow-sm overflow-hidden bg-white/90 backdrop-blur-sm p-0"
            >
              <div className="relative h-48">
                <Skeleton className="absolute inset-0" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs text-center p-4">
                  {item.image}
                </div>
              </div>

              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon name={item.icon} size={22} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight pt-1">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Icon
                        name="check"
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <p className="text-gray-600">
                Ani de experiență cu echipamente profesionale
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">€150k+</div>
              <p className="text-gray-600">Investiții în echipamente moderne</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <p className="text-gray-600">
                Mărci premium deservite cu echipamente dedicate
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

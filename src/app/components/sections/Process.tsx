import Icon from "../ui/Icon";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Process() {
  const processSteps = [
    {
      icon: "check",
      title: "Recepție",
      description:
        "Primirea vehiculului și discutarea problemelor identificate de client",
      detail: "Înregistrarea vehiculului cu toate detaliile necesare",
    },
    {
      icon: "wrench",
      title: "Diagnoză",
      description:
        "Diagnoză computerizată completă pentru identificarea exactă a problemelor",
      detail: "Scanare avansată și testare a tuturor sistemelor",
    },
    {
      icon: "document",
      title: "Ofertă transparentă",
      description:
        "Prezentarea unei oferte detaliate cu explicații pentru fiecare lucrare",
      detail: "Prețuri clare, fără costuri ascunse",
    },
    {
      icon: "star",
      title: "Execuție",
      description:
        "Realizarea lucrărilor cu piese de calitate și atenție la detalii",
      detail: "Utilizarea unor echipamente profesionale moderne",
    },
    {
      icon: "shield",
      title: "QC în 50 puncte",
      description:
        "Control de calitate în 50 de puncte înainte de predarea vehiculului",
      detail: "Verificări sistematice pentru siguranță și performanță",
    },
    {
      icon: "heart",
      title: "Predare & follow-up",
      description:
        "Predarea vehiculului cu explicații și urmărirea satisfacției clientului",
      detail: "Suport continuu și garanție pentru toate lucrările",
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Procesul nostru de lucru
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un workflow structurat pentru rezultate de încredere, de fiecare
            dată
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent/20 h-full"></div>

          <div className="space-y-16 lg:space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div className="bg-gray-50 p-10 rounded-3xl shadow-sm card-hover border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-3 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-gray-600 text-sm">{step.detail}</p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Icon name={step.icon} size={32} className="text-black" />
                  </div>

                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-accent/5 px-8 py-6 rounded-2xl">
            <Icon name="clock" size={32} className="text-accent" />
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-lg">
                Timpul mediu de execuție
              </p>
              <p className="text-gray-600">
                Servicii standard: 2-4 ore • Reparații complexe: 1-3 zile
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

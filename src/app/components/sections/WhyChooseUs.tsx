import Icon from "../ui/Icon";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "award",
      title: "10+ ani experiență",
      description:
        "Peste un deceniu de lucru cu cele mai prestigioase mărci auto",
    },
    {
      icon: "check",
      title: "Piese de calitate",
      description:
        "Folosim exclusiv piese originale și echivalente premium certificate",
    },
    {
      icon: "shield",
      title: "Garanție lucrări",
      description:
        "Toate serviciile beneficiază de garanție extinsă pentru liniștea ta",
    },
    {
      icon: "heart",
      title: "Prețuri corecte",
      description:
        "Transparență completă în prețuri, fără costuri ascunse sau surprize",
    },
    {
      icon: "star",
      title: "Personal certificat",
      description:
        "Mecanici cu certificări și pregătire continuă pentru fiecare marcă",
    },
    {
      icon: "clock",
      title: "Respectarea termenelor",
      description:
        "Livrăm vehiculul la timp, conform termenului stabilit împreună",
    },
    {
      icon: "wrench",
      title: "Echipamente moderne",
      description:
        "Investim constant în cele mai noi tehnologii și echipamente",
    },
    {
      icon: "eye",
      title: "Consultanță gratuită",
      description:
        "Oferim consiliere tehnică gratuită pentru întreținerea optimă",
    },
    {
      icon: "document",
      title: "Rapoarte detaliate",
      description: "Documente complete pentru toate lucrările efectuate",
    },
    {
      icon: "phone",
      title: "Support continuu",
      description: "Suport tehnic și răspunsuri la întrebări oricând ai nevoie",
    },
  ];

  return (
    <Section id="about" className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            De ce să ne alegi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zece motive pentru care DSL Service este alegerea potrivită pentru
            vehiculul tău premium
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(214,189,152,0.10), rgba(214,189,152,0.04))",
                }}
              />

              <div className="relative">
                <div className="mx-auto mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 ring-1 ring-accent/20">
                  <Icon name={reason.icon} size={24} className="text-accent" />
                </div>
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold leading-tight mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <p className="text-gray-600 font-medium">Clienți mulțumiți</p>
              <p className="text-gray-500 text-sm mt-1">în ultimii 3 ani</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-gray-600 font-medium">Rată satisfacție</p>
              <p className="text-gray-500 text-sm mt-1">
                conform feedback-ului
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2.5h</div>
              <p className="text-gray-600 font-medium">Timp mediu service</p>
              <p className="text-gray-500 text-sm mt-1">
                pentru servicii standard
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Consultanță tehnică</p>
              <p className="text-gray-500 text-sm mt-1">prin telefon</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Certificări și autorizări
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="shield" size={32} className="text-accent" />
              </div>
              <p className="font-semibold text-gray-700">RAR Autorizat</p>
              <p className="text-sm text-gray-500">Stație ITP</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="award" size={32} className="text-accent" />
              </div>
              <p className="font-semibold text-gray-700">ISO 9001</p>
              <p className="text-sm text-gray-500">Calitate</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="check" size={32} className="text-accent" />
              </div>
              <p className="font-semibold text-gray-700">ANRSC</p>
              <p className="text-sm text-gray-500">Service autorizat</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="star" size={32} className="text-accent" />
              </div>
              <p className="font-semibold text-gray-700">Bosch</p>
              <p className="text-sm text-gray-500">Service Partner</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

import { Card, CardContent } from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function Highlights() {
  const highlights = [
    {
      icon: "award",
      title: "Profesionalism",
      description:
        "Echipă de specialiști cu experiență vastă în serviciile auto premium. Pregătire continuă și certificări pentru ultimele tehnologii.",
      color: "text-accent",
    },
    {
      icon: "star",
      title: "Calitate",
      description:
        "Folosim exclusiv piese originale și echivalente de calitate superioară. Fiecare lucrare este testată înainte de predare.",
      color: "text-accent",
    },
    {
      icon: "shield",
      title: "Încredere",
      description:
        "Peste 10 ani de experiență cu mărci premium. Clienți mulțumiți care se întorc și ne recomandă prietenlor.",
      color: "text-accent",
    },
    {
      icon: "eye",
      title: "Transparență",
      description:
        "Prețuri clare de la început, fără costuri ascunse. Explicăm fiecare lucrare și oferim garanție pentru toate serviciile.",
      color: "text-accent",
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce ne recomandă
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Valorile care ne definesc în fiecare interacțiune cu clienții noștri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="text-center p-10 card-hover border-0 shadow-sm bg-white/85 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={highlight.icon}
                    size={36}
                    className={highlight.color}
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {highlight.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-accent/5 px-8 py-4 rounded-full">
            <Icon name="check" size={24} className="text-accent" />
            <span className="text-lg font-medium text-gray-700">
              Servicii premium pentru BMW, Mercedes, Audi și Porsche
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}

import Section from "../ui/Section";
import Container from "../ui/Container";
import FeatureCard from "../ui/FeatureCard";
import { Phone, FileCheck2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: "feat-1",
      icon: Phone,
      title: "Programări rapide",
      description: "Sloturi flexibile în aceeași zi, confirmate în 2 ore.",
    },
    {
      id: "feat-2",
      icon: FileCheck2,
      title: "Rapoarte detaliate",
      description:
        "Documentație clară pentru fiecare lucrare și recomandări următoare.",
    },
    {
      id: "feat-3",
      icon: ShieldCheck,
      title: "Garanție extinsă",
      description: "Protecție pentru piese și manoperă, fără surprize.",
    },
    {
      id: "feat-4",
      icon: CheckCircle2,
      title: "Calitate verificată",
      description: "QC în 50 de puncte înainte de predare.",
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Beneficii rapide
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O experiență premium de la programare până la predare.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f) => (
            <FeatureCard
              key={f.id}
              icon={f.icon}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

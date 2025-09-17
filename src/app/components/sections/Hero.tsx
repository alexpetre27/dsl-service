"use client";

import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white" />

      <div
        className="absolute -top-24 -right-20 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #D6BD98, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-8rem] -left-24 w-[40rem] h-[40rem] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #D6BD98, transparent 70%)",
        }}
      />

      <Container>
        <div className="relative z-10 py-16 sm:py-24 lg:py-28 min-h-[72vh] flex items-center">
          <div className="grid lg:grid-cols-12 gap-10 w-full items-center">
            <div className="lg:col-span-7 text-gray-900">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6 border border-accent/20">
                <Icon name="star" size={18} className="text-accent" />
                <span className="text-sm font-medium">
                  Service auto premium • Stație ITP autorizată
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6">
                Excelență în service auto
                <span
                  className="block mt-1 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg,#111111,#D6BD98)",
                  }}
                >
                  pentru mărci PREMIUM
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-10">
                Întreținere, diagnoză și reparații cu standarde de showroom.
                Rapid, transparent, garantat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button
                  size="lg"
                  className="px-8"
                  onClick={() => scrollTo("itp-section")}
                >
                  <Icon name="shield" size={20} className="mr-2" />
                  Programează ITP
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8"
                  onClick={() => scrollTo("services")}
                >
                  Vezi Servicii
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="check" size={18} className="text-accent" />
                  Garanție lucrări
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="award" size={18} className="text-accent" />
                  Piese originale
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="clock" size={18} className="text-accent" />
                  Programări rapide
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl p-6 shadow-sm bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Icon name="wrench" size={22} className="text-accent" />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-1">
                    Diagnoză avansată
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Echipamente OEM pentru mărci premium
                  </p>
                </div>
                <div className="rounded-2xl p-6 shadow-sm bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Icon name="shield" size={22} className="text-accent" />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-1">
                    Stație ITP
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Autorizată RAR, raport clar
                  </p>
                </div>
                <div className="rounded-2xl p-6 shadow-sm bg-white border border-gray-200 col-span-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Icon name="star" size={22} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Clienți mulțumiți</p>
                      <p className="text-gray-900 text-lg font-semibold">
                        Peste 1000 în ultimii 3 ani
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
    </Section>
  );
}

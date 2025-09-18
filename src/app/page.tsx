import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ITP from "@/components/sections/ITP";
import Highlights from "@/components/sections/Highlights";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Equipment from "@/components/sections/Equipment";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import SEOSchema from "@/components/SEOSchema";

export default function Home() {
  return (
    <>
      <SEOSchema />
      <Navigation />
      <main>
        <Hero />
        <ITP />
        <Features />
        <Highlights />
        <Services />
        <Process />
        <Equipment />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

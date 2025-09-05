'use client';

import Accordion from '../ui/Accordion';
import Section from '../ui/Section';
import Container from '../ui/Container';

export default function FAQ() {
  const faqItems = [
    {
      question: "Ce tipuri de vehicule deserviți?",
      answer: "Suntem specializați în automobile premium: BMW, Mercedes-Benz, Audi și Porsche. Avem echipamentele și expertiza necesară pentru toate modelele acestor mărci, de la cele mai vechi până la cele mai noi."
    },
    {
      question: "Cât durează o verificare ITP?",
      answer: "O verificare ITP standard durează aproximativ 30-45 de minute. Dacă vehiculul trece toate testele, veți primi certificatul în aceeași zi. În cazul unor neconformități minore, acestea pot fi remediate rapid în atelierul nostru."
    },
    {
      question: "Oferiți garanție pentru lucrările efectuate?",
      answer: "Da, oferim garanție pentru toate lucrările efectuate. Perioada de garanție variază în funcție de tipul serviciului: 6 luni pentru reparații generale, 12 luni pentru reparații majore și 2 ani pentru piesele originale montate."
    },
    {
      question: "Pot programa o vizită online sau prin telefon?",
      answer: "Puteți programa vizita atât prin telefon, cât și completând formularul de contact de pe site. Vă vom contacta în maximum 2 ore pentru a confirma programarea și a discuta detaliile."
    },
    {
      question: "Folosiți piese originale sau aftermarket?",
      answer: "Folosim în primul rând piese originale de la producător. Când clientul dorește o alternativă mai accesibilă, recomandăm piese aftermarket de calitate premium (Bosch, Continental, Sachs) cu garanție extinsă."
    },
    {
      question: "Cât costă o revizie completă?",
      answer: "Costul unei revizii depinde de modelul vehiculului și de kilometrajul acestuia. Pentru o revizie standard, prețurile încep de la 450 RON și pot ajunge la 1200 RON pentru modele premium cu specificații complexe. Vă oferim întotdeauna o ofertă detaliată înainte de începerea lucrărilor."
    },
    {
      question: "Aveți serviciu de urgență?",
      answer: "Da, oferim servicii de urgență pentru clienții noștri. Pentru situații urgente (pană de motor, probleme de siguranță), suntem disponibili 24/7 prin telefon pentru consultanță și programare rapidă."
    },
    {
      question: "Puteți face o diagnoză fără să las mașina?",
      answer: "Da, pentru o diagnoză preliminară putem folosi echipamentele mobile. O diagnoză completă necesită însă între 30-60 de minute, timp în care mașina trebuie să rămână în service pentru testări amănunțite."
    },
    {
      question: "Acceptați carduri de credit și facturi?",
      answer: "Da, acceptăm toate modalitățile de plată: numerar, card, transfer bancar. Pentru companii, emitem facturi cu TVA. Oferim și opțiuni de plată în rate pentru reparații majore prin partenerii noștri financiari."
    },
    {
      question: "Care este programul de lucru?",
      answer: "Suntem deschisi Luni-Vineri între 08:00-18:00 și Sâmbăta între 09:00-14:00. Duminica suntem închisi, cu excepția situațiilor de urgență pentru clienții existenți."
    },
    {
      question: "Pot urmări progresul lucrării?",
      answer: "Da, vă ținem la curent cu progresul lucrărilor prin telefon sau WhatsApp. Pentru reparații complexe, vă trimitem fotografii cu piesele defecte și vă explicăm toate detaliile înainte de înlocuire."
    },
    {
      question: "Oferiți servicii la domiciliu?",
      answer: "Pentru anumite servicii simple (schimb ulei, diagnoză preliminară, verificări rapide) putem veni la domiciliu în raza de 25 km de service. Serviciul se tarifeaza suplimentar cu 50-100 RON pentru deplasare."
    },
    {
      question: "Ce se întâmplă dacă nu trec ITP-ul?",
      answer: "Dacă vehiculul nu trece ITP-ul, vă explicăm toate neconformitățile identificate și vă oferim o estimare pentru remedierea acestora. Aveți 30 de zile pentru a remedia problemele și a reveni pentru o nouă verificare la tarif redus."
    },
    {
      question: "Aveți discount pentru clienți fideli?",
      answer: "Da, avem un program de fidelitate care oferă reduceri progresive: 5% după prima vizită, 10% după a treia vizită și până la 15% pentru clienții cu peste 10 vizite. De asemenea, oferim pachete speciale pentru întreținerea anuală."
    },
    {
      question: "Cum știu dacă mașina mea are nevoie de service?",
      answer: "Recomandăm un check-up general la fiecare 15.000 km sau o dată pe an. Signalele de alarmă includ: zgomote neobișnuite, vibrații, consumul crescut de combustibil, luminițe pe bord sau modificări în comportamentul vehiculului. Vă oferim consultanță gratuită prin telefon."
    }
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Întrebări frecvente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Răspunsuri la cele mai comune întrebări despre serviciile noastre
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={faqItems} allowMultiple={true} />
        </div>

        <div className="mt-16 text-center">
          <div className="bg-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nu găsiți răspunsul la întrebarea dumneavoastră?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactați-ne direct și unul dintre specialiștii noștri vă va răspunde în cel mai scurt timp posibil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+40123456789" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                📞 Sună acum: 0123 456 789
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-black transition-all"
              >
                ✉️ Trimite mesaj
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

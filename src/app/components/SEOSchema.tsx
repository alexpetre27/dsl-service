export default function SEOSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutomotiveBusiness",
        "@id": "https://dslservice.ro/#business",
        name: "DSL Service",
        alternateName: "Service Auto",
        description:
          "Service auto premium pentru BMW, Mercedes, Audi, Porsche. Stație ITP autorizată RAR cu echipamente moderne și personal certificat.",
        url: "https://dslservice.ro",
        telephone: "+40123456789",
        email: "contact@dslservice.ro",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada Serviciului Nr. 123",
          addressLocality: "București",
          addressRegion: "Sector 1",
          postalCode: "010001",
          addressCountry: "RO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.4267674,
          longitude: 26.1025384,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
          },
        ],
        priceRange: "$$",
        paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
        currenciesAccepted: "RON",
        areaServed: {
          "@type": "City",
          name: "București",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicii Auto DSL Service",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Verificare ITP",
                description: "Inspecție tehnică periodică autorizată RAR",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diagnoză computerizată",
                description: "Diagnoză avansată cu echipamente profesionale",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Service climatizare",
                description: "Întreținere și reparații sistem climatizare",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Reparații mecanice",
                description:
                  "Reparații complexe motoare și componente mecanice",
              },
            },
          ],
        },
        sameAs: [
          "https://www.facebook.com/dslservice",
          "https://www.instagram.com/dslservice",
        ],
        logo: {
          "@type": "ImageObject",
          url: "https://dslservice.ro/logo.png",
        },
        image: [
          "https://dslservice.ro/images/atelier.jpg",
          "https://dslservice.ro/images/echipamente.jpg",
        ],
      },

      {
        "@type": "AutomotiveBusiness",
        "@id": "https://dslservice.ro/#itp-station",
        name: "DSL Service - Stație ITP",
        description:
          "Stație ITP autorizată RAR cu echipamente moderne pentru toate tipurile de vehicule",
        parentOrganization: {
          "@id": "https://dslservice.ro/#business",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Autorizare RAR",
          recognizedBy: {
            "@type": "Organization",
            name: "Registrul Auto Român",
          },
        },
        speciality: [
          "ITP autoturisme",
          "ITP vehicule comerciale",
          "ITP motociclete",
          "Verificări emisii poluante",
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://dslservice.ro/#website",
        url: "https://dslservice.ro",
        name: "DSL Service",
        description:
          "Service auto premium pentru BMW, Mercedes, Audi, Porsche și stație ITP autorizată",
        publisher: {
          "@id": "https://dslservice.ro/#business",
        },
        inLanguage: "ro-RO",
      },

      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
        author: {
          "@type": "Person",
          name: "Ion Popescu",
        },
        reviewBody:
          "Servicii profesionale pentru BMW-ul meu. Personal competent și prețuri corecte.",
        itemReviewed: {
          "@id": "https://dslservice.ro/#business",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

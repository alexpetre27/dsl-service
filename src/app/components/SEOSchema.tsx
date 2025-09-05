export default function SEOSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Local Business Schema
      {
        "@type": "AutomotiveBusiness",
        "@id": "https://autopremium.ro/#business",
        "name": "AutoPremium Service",
        "alternateName": "Service Auto Premium",
        "description": "Service auto premium pentru BMW, Mercedes, Audi, Porsche. Stație ITP autorizată RAR cu echipamente moderne și personal certificat.",
        "url": "https://autopremium.ro",
        "telephone": "+40123456789",
        "email": "contact@autopremium.ro",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Strada Serviciului Nr. 123",
          "addressLocality": "București",
          "addressRegion": "Sector 1",
          "postalCode": "010001",
          "addressCountry": "RO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.4267674,
          "longitude": 26.1025384
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "priceRange": "$$",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "currenciesAccepted": "RON",
        "areaServed": {
          "@type": "City",
          "name": "București"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicii Auto Premium",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Verificare ITP",
                "description": "Inspecție tehnică periodică autorizată RAR"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diagnoză computerizată",
                "description": "Diagnoză avansată cu echipamente profesionale"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Service climatizare",
                "description": "Întreținere și reparații sistem climatizare"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reparații mecanice",
                "description": "Reparații complexe motoare și componente mecanice"
              }
            }
          ]
        },
        "sameAs": [
          "https://www.facebook.com/autopremium",
          "https://www.instagram.com/autopremium"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://autopremium.ro/logo.png"
        },
        "image": [
          "https://autopremium.ro/images/atelier.jpg",
          "https://autopremium.ro/images/echipamente.jpg"
        ]
      },
      // Auto Inspection Station Schema
      {
        "@type": "AutomotiveBusiness",
        "@id": "https://autopremium.ro/#itp-station",
        "name": "AutoPremium - Stație ITP",
        "description": "Stație ITP autorizată RAR cu echipamente moderne pentru toate tipurile de vehicule",
        "parentOrganization": {
          "@id": "https://autopremium.ro/#business"
        },
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Autorizare RAR",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Registrul Auto Român"
          }
        },
        "speciality": [
          "ITP autoturisme",
          "ITP vehicule comerciale", 
          "ITP motociclete",
          "Verificări emisii poluante"
        ]
      },
      // Website Schema
      {
        "@type": "WebSite",
        "@id": "https://autopremium.ro/#website",
        "url": "https://autopremium.ro",
        "name": "AutoPremium Service",
        "description": "Service auto premium pentru BMW, Mercedes, Audi, Porsche și stație ITP autorizată",
        "publisher": {
          "@id": "https://autopremium.ro/#business"
        },
        "inLanguage": "ro-RO"
      },
      // Review Schema (example - you'd replace with real reviews)
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": "Ion Popescu"
        },
        "reviewBody": "Servicii profesionale pentru BMW-ul meu. Personal competent și prețuri corecte.",
        "itemReviewed": {
          "@id": "https://autopremium.ro/#business"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
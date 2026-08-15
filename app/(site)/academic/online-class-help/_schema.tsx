
export default function TutoringSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online Class Help Services",
    description:
      "Need online class help? Get expert support for your online courses, assignments, quizzes, and exams. Our professionals handle your entire online class so you can focus on what matters most. 100% confidential and guaranteed results.",
    url: "https://www.testhelpnow.com/academic/online-class-help",
    provider: {
      "@type": "Organization",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
    },
    serviceType: "Online Class Help",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.testhelpnow.com/academic/online-class-help",
      serviceType: "Online",
    },
    offers: {
      "@type": "Offer",
      name: "Online Class Help Services",
      price: "Varies by course",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.testhelpnow.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Academic",
        item: "https://www.testhelpnow.com/academic",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Online Class Help",
        item: "https://www.testhelpnow.com/academic/online-class-help",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Online Class Help — TestHelpNow",
    description:
      "Need online class help? Get expert support for your online courses, assignments, quizzes, and exams. Our professionals handle your entire online class so you can focus on what matters most.",
    url: "https://www.testhelpnow.com/academic/online-class-help",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
    },
    provider: {
      "@type": "Organization",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
    },
    about: {
      "@type": "Thing",
      name: "Online Class Help",
      description: "Professional online class assistance for students",
    },
    mainEntity: {
      "@type": "Service",
      name: "Online Class Help Services",
      description:
        "Expert support for online courses, assignments, quizzes, and exams.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
// app/academic/tutoring/_schema.tsx
// Private file — not a Next.js route. Imported only by page.tsx next to it.

export default function TutoringSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online Tutoring Services",
    description:
      "Personalized online tutoring with expert tutors across all major academic subjects from K-12 through college level, including STEM, humanities, languages, and professional certificates.",
    url: "https://www.testhelpnow.com/academic/tutoring",
    provider: {
      "@type": "Organization",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
    },
    serviceType: "Online Tutoring",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.testhelpnow.com/academic/tutoring",
      serviceType: "Online",
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
        name: "Online Tutoring Services",
        item: "https://www.testhelpnow.com/academic/tutoring",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Online Tutoring Services — TestHelpNow",
    description:
      "Personalized online tutoring with expert tutors across all major academic subjects from K-12 through college level.",
    url: "https://www.testhelpnow.com/academic/tutoring",
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
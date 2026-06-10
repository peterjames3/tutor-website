// app/(site)/_schema.tsx
// Private file — not a Next.js route. Imported only by page.tsx next to it.

export default function HomeSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TestHelpNow",
    url: "https://www.testhelpnow.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.testhelpnow.com/logo.png",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "1-469-428-4470",
      contactType: "customer support",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [
      // Add your social profile URLs here e.g.:
      "https://t.me/+nRelw8camMk3N2Y0",
      "https://discord.gg/NC53djQx2b",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TestHelpNow",
    url: "https://www.testhelpnow.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.testhelpnow.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pay Someone to Take My PMP or SHRM Online Exam | TestHelpNow",
    description:
      "Pay someone to take your online exam with expert exam takers. Secure, confidential, and reliable online exam help for students.",
    url: "https://www.testhelpnow.com",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}

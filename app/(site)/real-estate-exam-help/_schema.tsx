export default function RealEstateExamSchema() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // ── 1. Organization ──────────────────────────────────────────
      {
        "@type": "Organization",
        "@id": "https://testhelpnow.com/#organization",
        name: "TestHelpNow",
        url: "https://testhelpnow.com",
        logo: {
          "@type": "ImageObject",
          url: "https://testhelpnow.com/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1(469) 428-4470",
          contactType: "Customer Service",
          availableLanguage: ["English"],
        },
      },

      // ── 2. Breadcrumbs ───────────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "@id": "https://testhelpnow.com/real-estate-exam-help#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://testhelpnow.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Real Estate Exam Help",
            item: "https://testhelpnow.com/real-estate-exam-help",
          },
        ],
      },

      // ── 3. Service ───────────────────────────────────────────────
      {
        "@type": "Service",
        "@id": "https://testhelpnow.com/real-estate-exam-help#service",
        name: "Real Estate Exam Help Services",
        description:
          "Professional real estate exam help for salesperson and broker licensing exams. Expert assistance for national and state-specific real estate exams including California DRE, Texas TREC, Florida DBPR, and New York DOS. 100% confidential with guaranteed results.",
        url: "https://testhelpnow.com/real-estate-exam-help",
        serviceType: "Real Estate Exam Help",
        category: "Professional Licensure Exam Support",
        provider: {
          "@id": "https://testhelpnow.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://testhelpnow.com/real-estate-exam-help",
          serviceType: "Online",
        },
        offers: {
          "@type": "Offer",
          name: "Real Estate Licensing Exam Help",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          description: "Custom real estate exam assistance based on exam scope and state requirements.",
        },
      },

      // ── 4. WebPage ───────────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": "https://testhelpnow.com/real-estate-exam-help#webpage",
        url: "https://testhelpnow.com/real-estate-exam-help",
        name: "Real Estate Exam Help | Pass Your Licensing Exam | TestHelpNow",
        description:
          "Professional real estate exam help for salesperson and broker licensing exams. Expert assistance for national and state-specific real estate exams.",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://testhelpnow.com/#website",
        },
        breadcrumb: {
          "@id": "https://testhelpnow.com/real-estate-exam-help#breadcrumb",
        },
        mainEntity: {
          "@id": "https://testhelpnow.com/real-estate-exam-help#service",
        },
      },

      // ── 5. FAQPage ───────────────────────────────────────────────
      {
        "@type": "FAQPage",
        "@id": "https://testhelpnow.com/real-estate-exam-help#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is real estate exam help?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Real estate exam help is a professional service where licensed experts assist you with your real estate licensing exam. We handle both national and state-specific portions of your salesperson or broker licensing exam with complete confidentiality and guaranteed results.",
            },
          },
          {
            "@type": "Question",
            name: "Can I pay someone to take my real estate exam?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, you can hire professional real estate exam takers to take your licensing exam on your behalf. Our licensed experts handle all aspects of the exam, including national and state-specific content, on major testing platforms like PSI and Pearson VUE.",
            },
          },
          {
            "@type": "Question",
            name: "Which states do you cover for real estate exams?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cover all 50 states including California (DRE), Texas (TREC), Florida (DBPR), New York (DOS), Illinois (IDFPR), and more. Our experts are familiar with both national and state-specific exam content.",
            },
          },
          {
            "@type": "Question",
            name: "Do you cover national and state-specific real estate exams?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we cover both the national and state-specific portions of your real estate licensing exam. Our experts are knowledgeable in all areas including property ownership, contracts, finance, agency relationships, and state-specific regulations.",
            },
          },
          {
            "@type": "Question",
            name: "Is real estate exam help confidential?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We guarantee 100% confidentiality with every real estate exam help request. Your personal information, exam credentials, and licensing details are never shared or stored. All experts sign strict NDAs.",
            },
          },
          {
            "@type": "Question",
            name: "What is the pass rate for your real estate exam help?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We maintain a 99% pass rate on real estate licensing exams. Our experts are licensed professionals who have successfully passed both national and state-specific real estate exams themselves.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
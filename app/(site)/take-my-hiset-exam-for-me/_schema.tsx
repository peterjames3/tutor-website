// app/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me/_schema.tsx
// Private file — not a Next.js route. Imported only by page.tsx next to it.

export default function HisetSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pay Someone To Take My HiSET Exam For Me",
    alternateName: "HiSET Exam Help Service",
    description:
      "Professional HiSET exam help service. We match you with a certified HiSET expert who completes your exam under strict privacy standards — available for both online and in-person formats, with guaranteed results.",
    url: "https://www.testhelpnow.com/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me",
    provider: {
      "@type": "Organization",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
      logo: "https://www.testhelpnow.com/favicon-32x32.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-800-803-4058",
        email: "info@testhelpnow.com",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
    },
    serviceType: "HiSET Exam Assistance",
    category: "Academic Exam Support",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HiSET Exam Help Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HiSET Full Exam Completion",
            description:
              "A certified expert completes all five HiSET subject tests on your behalf — Reading, Writing, Mathematics, Science, and Social Studies — with confidentiality and guaranteed results.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Urgent Same-Day HiSET Help",
            description:
              "Rush HiSET exam support for students with imminent exam dates. Contact our team to confirm availability.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description:
          "Pricing varies based on subject count and urgency. Contact us for a quote.",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of exams do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support a wide range of exams including HiSET, GED, PMP, and other proctored academic and professional certification tests. Our experts are matched to your specific exam type and subject requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Is paying someone to take my HiSET test for me legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services are offered as academic support and preparation assistance. We recommend reviewing your exam provider's terms before proceeding. We maintain full confidentiality and privacy for all clients regardless of their situation.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get urgent same-day HiSET help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer urgent same-day HiSET exam support depending on availability. Contact our team immediately via the order form or by phone at 1-800-803-4058 to check if we can accommodate your schedule.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check the status of my order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once your order is placed, our support team will keep you updated at every stage — from expert matching through exam completion. You can also reach out directly via email at info@testhelpnow.com or by phone.",
        },
      },
      {
        "@type": "Question",
        name: "How is security and privacy maintained throughout the HiSET exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We follow strict confidentiality protocols. All communications and client data are handled securely. Your assigned HiSET expert operates under privacy standards designed to protect your identity throughout the entire process.",
        },
      },
      {
        "@type": "Question",
        name: "What if I have technical issues during my exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our team provides technical support before and during your exam session. We also help with system setup in advance to minimize the risk of disruptions on exam day.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the specialist fails the HiSET exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We stand behind our guaranteed results policy. If the assigned specialist does not pass the HiSET exam, we will work with you to find a resolution. Contact our support team to discuss the outcome and next steps.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with system setup before exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We assist with all necessary technical setup prior to your exam, including confirming compatibility with the ETS testing platform and ensuring everything is ready for a smooth session.",
        },
      },
    ],
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
        name: "Proctored Exam Help",
        item: "https://www.testhelpnow.com/proctored-exam-help",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pay Someone To Take My HiSET Exam For Me",
        item: "https://www.testhelpnow.com/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

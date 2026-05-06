// app/take-my-ged-exam-for-me/_schema.tsx
// Private file — not a Next.js route. Imported only by page.tsx next to it.

export default function GedSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pay Someone To Take My GED Exam For Me",
    alternateName: "GED Exam Help Service",
    description:
      "TestHelpNow provides professional GED exam help for individuals who want to earn their GED certification. Our team of experts takes your GED exam on your behalf with guaranteed results, absolute security, and full confidentiality — available 24/7.",
    url: "https://www.testhelpnow.com/take-my-ged-exam-for-me",
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
        contactOption: "TollFree",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    },
    serviceType: "GED Exam Assistance",
    category: "Academic Exam Support",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "GED Exam Help Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GED Full Exam Completion",
            description:
              "A certified GED expert completes all four GED subject tests on your behalf — Mathematical Reasoning, Reasoning Through Language Arts, Science, and Social Studies — with guaranteed high scores and strict confidentiality.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Customized GED Coaching Classes",
            description:
              "Personalized GED preparation coaching with structured study plans, practice questions, and exam simulations tailored to your schedule and learning needs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Urgent Same-Day GED Help",
            description:
              "Rush GED exam support for students with imminent exam dates. Our expert team responds fast, assigns an expert quickly, and ensures smooth exam completion without delays.",
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
          "Pricing varies based on number of subjects and urgency. Contact us for a personalized quote.",
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
          text: "We support all major online proctored exams including Pearson VUE, ProctorU, Examity, Respondus, and institution-specific platforms. This includes certification exams (AWS, Microsoft, CompTIA), academic tests, and professional licensure exams.",
        },
      },
      {
        "@type": "Question",
        name: "Is paying someone to take my GED test for me legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it is completely logical and legitimate to take assistance in your GED exam from third-party resources. At TestHelpNow, we place high value on privacy and confidentiality to make sure that the identity of our client is never revealed.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get urgent same-day GED help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer urgent and same-day GED exam help. Our expert team responds fast, assigns an expert quickly, and ensures smooth exam completion without delays or stress.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check the status of my order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can track your order via email. You may also contact our support team, available 24/7 to answer your questions.",
        },
      },
      {
        "@type": "Question",
        name: "How is security and privacy maintained throughout the GED exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use sophisticated anonymity protocols, specialized IP addresses, and SSL-encrypted platforms. We never store personal data after sessions, and all technicians sign strict NDAs. Your exam content and credentials are never recorded or shared.",
        },
      },
      {
        "@type": "Question",
        name: "Is your service allowed for official exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we operate within all major testing platforms' guidelines. We provide technical support only — all exam content is handled solely by you to maintain academic integrity.",
        },
      },
      {
        "@type": "Question",
        name: "What if I have technical issues during my GED exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our 24/7 support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems without disrupting your exam progress.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the specialist fails the GED exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is not possible that our GED-certified expert fails to provide 100% success results. However, you are entitled to a complete refund if the anticipated outcomes are not obtained due to any technical reasons. Your success and satisfaction are our first priorities.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with system setup before the GED exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer pre-exam checks including system compatibility tests, software installation, mock proctoring sessions, and configuration of all required exam settings.",
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
        name: "Pay Someone To Take My GED Exam For Me",
        item: "https://www.testhelpnow.com/take-my-ged-exam-for-me",
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
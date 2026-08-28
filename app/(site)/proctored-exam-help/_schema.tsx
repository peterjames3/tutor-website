export default function ProctoredExamFAQSchema() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // ── 1. Organization ──────────────────────────────────────────
      {
        "@type": "Organization",
        "@id": "https://testhelpnow.com/#organization",
        name: "TestHelpNow",
        url: "https://testhelpnow.com",
        telephone: "+18008034058",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+18008034058",
          contactType: "customer support",
          availableLanguage: "English",
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

      // ── 2. Breadcrumbs ───────────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "@id": "https://testhelpnow.com/proctored-exam-help#breadcrumb",
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
            name: "Proctored Exam Help",
            item: "https://testhelpnow.com/proctored-exam-help",
          },
        ],
      },

      // ── 3. Service Schema ────────────────────────────────────────
      {
        "@type": "Service",
        "@id": "https://testhelpnow.com/proctored-exam-help#service",
        name: "Proctored Exam Help",
        alternateName: "Online Proctored Exam Support Service",
        url: "https://testhelpnow.com/proctored-exam-help",
        description:
          "Expert technical support for online proctored exams including Pearson VUE, ProctorU, Examity, Respondus, Honorlock, and ExamSoft. Services cover identity verification, lockdown browser setup, AI behaviour monitoring, pre-exam system checks, and 24/7 live session support.",
        provider: {
          "@id": "https://testhelpnow.com/#organization",
        },
        serviceType: "Online Exam Technical Support",
        category: "Education Support Services",
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "310",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Proctored Exam Support Plans",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "PMP Exam Support",
                url: "https://testhelpnow.com/take-my-pmp-exam-for-me",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "GED Exam Support",
                url: "https://testhelpnow.com/take-my-ged-exam-for-me",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "HiSET Exam Support",
                url: "https://testhelpnow.com/take-my-hiset-exam-for-me",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CompTIA Exam Support",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AWS Certification Exam Support",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Microsoft Certification Exam Support",
              },
            },
          ],
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "Students and professionals taking online proctored certification or academic exams",
        },
      },

      // ── 4. FAQ Schema ────────────────────────────────────────────
      {
        "@type": "FAQPage",
        "@id": "https://testhelpnow.com/proctored-exam-help#faq",
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
            name: "How does the on-behalf support work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our support technicians can remotely access your computer (with your permission) to handle technical setup, troubleshoot issues, and handle the exam for you — all while you maintain full visibility and control.",
            },
          },
          {
            "@type": "Question",
            name: "Is my information kept confidential?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We use AES-256 encryption, never store personal data after sessions, and all technicians sign strict NDAs. Your exam content and credentials are never recorded or shared.",
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
            name: "What if I have technical issues during my exam?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our 24/7 support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems without disrupting your exam progress.",
            },
          },
          {
            "@type": "Question",
            name: "Do you help with system setup before exams?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer pre-exam checks including system compatibility tests, software installation, mock proctoring sessions, and configuration of all required exam settings.",
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

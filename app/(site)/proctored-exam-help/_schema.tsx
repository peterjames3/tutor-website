export default function ProctoredExamFAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // ── Exam Support ──────────────────────────────────────────────
      {
        "@type": "Question",
        "name": "What types of exams do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support all major online proctored exams including Pearson VUE, ProctorU, Examity, Respondus, and institution-specific platforms. This includes certification exams (AWS, Microsoft, CompTIA), academic tests, and professional licensure exams."
        }
      },
      {
        "@type": "Question",
        "name": "How does the on-behalf support work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our support technicians can remotely access your computer (with your permission) to handle technical setup, troubleshoot issues, and handle the exam for you — all while you maintain full visibility and control."
        }
      },
      // ── Security & Confidentiality ────────────────────────────────
      {
        "@type": "Question",
        "name": "Is my information kept confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We use AES-256 encryption, never store personal data after sessions, and all technicians sign strict NDAs. Your exam content and credentials are never recorded or shared."
        }
      },
      {
        "@type": "Question",
        "name": "Is your service allowed for official exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we operate within all major testing platforms' guidelines. We provide technical support only — all exam content is handled solely by you to maintain academic integrity."
        }
      },
      // ── Technical Requirements ────────────────────────────────────
      {
        "@type": "Question",
        "name": "What if I have technical issues during my exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 24/7 support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems without disrupting your exam progress."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with system setup before exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer pre-exam checks including system compatibility tests, software installation, mock proctoring sessions, and configuration of all required exam settings."
        }
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Proctored Exam Help",
    "alternateName": "Online Proctored Exam Support Service",
    "url": "https://www.testhelpnow.com/proctored-exam-help",
    "description": "Expert technical support for online proctored exams including Pearson VUE, ProctorU, Examity, Respondus, Honorlock, and ExamSoft. Services cover identity verification, lockdown browser setup, AI behaviour monitoring, pre-exam system checks, and 24/7 live session support.",
    "provider": {
      "@type": "Organization",
      "name": "TestHelpNow",
      "url": "https://www.testhelpnow.com",
      "telephone": "+18008034058",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+18008034058",
        "contactType": "customer support",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" }
      ]
    },
    "serviceType": "Online Exam Technical Support",
    "category": "Education Support Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Proctored Exam Support Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PMP Exam Support",
            "url": "https://www.testhelpnow.com/take-my-pmp-exam-for-me"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GED Exam Support",
            "url": "https://www.testhelpnow.com/take-my-ged-exam-for-me"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HiSET Exam Support",
            "url": "https://www.testhelpnow.com/take-my-hiset-exam-for-me"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CompTIA Exam Support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AWS Certification Exam Support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Microsoft Certification Exam Support"
          }
        }
      ]
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Students and professionals taking online proctored certification or academic exams"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
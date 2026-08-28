export default function PmpSchema() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // ── 1. Breadcrumbs ───────────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "@id": "https://testhelpnow.com/take-my-pmp-exam-for-me#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://testhelpnow.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Proctored Exam Help",
            "item": "https://testhelpnow.com/proctored-exam-help",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "PMP Exam Help",
            "item": "https://testhelpnow.com/take-my-pmp-exam-for-me",
          },
        ],
      },

      // ── 2. Service Schema ────────────────────────────────────────
      {
        "@type": "Service",
        "@id": "https://testhelpnow.com/take-my-pmp-exam-for-me#service",
        "name": "Take My PMP Proctored Exam For Me",
        "alternateName": [
          "Pay Someone To Take My PMP Exam",
          "PMP Exam Taker Service",
          "Online PMP Proctored Exam Help",
        ],
        "url": "https://testhelpnow.com/take-my-pmp-exam-for-me",
        "description":
          "TestHelpNow provides PMP-certified professionals who take your online proctored PMP exam on your behalf via Pearson VUE. Our experts handle identity verification, lockdown browser setup, AI behaviour monitoring, and all 180 scenario-based questions — delivering a guaranteed passing score with full confidentiality and NDA protection.",
        "provider": {
          "@type": "Organization",
          "name": "TestHelpNow",
          "url": "https://testhelpnow.com",
          "telephone": "+18008034058",
        },
        "serviceType": "Online Proctored PMP Exam Taking Service",
        "category": "Professional Certification Exam Support",
        "termsOfService": "https://testhelpnow.com/terms",
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "240",
          "bestRating": "5",
          "worstRating": "1",
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://testhelpnow.com/take-my-pmp-exam-for-me",
          "servicePhone": "+18008034058",
          "availableLanguage": "English",
          "serviceLocation": {
            "@type": "VirtualLocation",
          },
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PMP Proctored Exam Taking Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full PMP Exam Taking on Your Behalf",
                "description":
                  "A PMP-certified expert remotely accesses your Pearson VUE session and completes all 180 questions of your PMP proctored exam for you, handling identity verification, AI behaviour monitoring, and lockdown browser requirements throughout.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pre-Exam Technical Setup",
                "description":
                  "Full system compatibility check for Pearson VUE, lockdown browser installation, webcam and ID verification dry-run, and a complete mock proctoring session before your exam date.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "24/7 Live Session Support",
                "description":
                  "Real-time support during your PMP exam session to resolve disconnections, software crashes, or Pearson VUE technical issues without disrupting the proctoring session.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Guaranteed Pass or Re-sit",
                "description":
                  "Every PMP exam taking engagement is backed by a 100% pass guarantee. If an unexpected outcome occurs, we arrange a full re-sit at no additional cost under our money-back guarantee policy.",
              },
            },
          ],
        },
      },

      // ── 3. FAQ Schema ────────────────────────────────────────────
      {
        "@type": "FAQPage",
        "@id": "https://testhelpnow.com/take-my-pmp-exam-for-me#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of exams do you support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We support all major online proctored exams including Pearson VUE, ProctorU, Examity, Respondus, and institution-specific platforms. This includes certification exams (AWS, Microsoft, CompTIA), academic tests, and professional licensure exams such as the PMP.",
            },
          },
          {
            "@type": "Question",
            "name": "Is paying someone to take my PMP test for me legal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Our service operates discreetly and confidentially. We provide expert-led exam support for candidates who need assistance navigating the demanding PMP certification process. All engagements are handled with full confidentiality under strict NDA agreements.",
            },
          },
          {
            "@type": "Question",
            "name": "How is security and privacy maintained throughout the PMP exam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We use AES-256 encryption for all communications, never store personal data beyond what is necessary, and all team members sign strict NDAs. We only work with in-house employees — no outsourcing — and use secure file sharing and private correspondence channels throughout.",
            },
          },
          {
            "@type": "Question",
            "name": "Is your service allowed for official exams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we operate within all major testing platforms' guidelines. We provide technical support only — all exam content is handled solely by you to maintain academic integrity.",
            },
          },
          {
            "@type": "Question",
            "name": "What if I have technical issues during my PMP exam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Our 24/7 support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems on Pearson VUE without disrupting your exam progress.",
            },
          },
          {
            "@type": "Question",
            "name": "What happens if the specialist fails the PMP exam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We maintain a 100% pass rate for our exam appearance service. In the rare event of an unexpected outcome, we will arrange a re-sit at no additional cost to you, covered under our money-back guarantee policy.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you help with system setup before the PMP exam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we offer full pre-exam checks including system compatibility tests for Pearson VUE, software installation, mock proctoring sessions, and configuration of all required exam settings to ensure nothing goes wrong on exam day.",
            },
          },
        ],
      },

      // ── 4. Course Schema ─────────────────────────────────────────
      {
        "@type": "Course",
        "@id": "https://testhelpnow.com/take-my-pmp-exam-for-me#course",
        "name": "PMP Exam Preparation Coaching",
        "description":
          "Structured PMP exam prep coaching covering all three exam domains — People, Process, and Business Environment — with personalized study plans, mock exams, and expert guidance aligned to PMI standards.",
        "provider": {
          "@type": "Organization",
          "name": "TestHelpNow",
          "url": "https://testhelpnow.com",
        },
        "url": "https://testhelpnow.com/take-my-pmp-exam-for-me",
        "courseCode": "PMP-PREP",
        "educationalLevel": "Professional Certification",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "240",
          "bestRating": "5",
          "worstRating": "1",
        },
        "about": [
          { "@type": "Thing", "name": "Project Management Professional (PMP)" },
          { "@type": "Thing", "name": "PMI PMBOK" },
        ],
        "teaches": [
          "People — Leadership and team management",
          "Process — Project planning and execution",
          "Business Environment — Organizational strategy alignment",
        ],
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "PT230M",
          "inLanguage": "en",
        },
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
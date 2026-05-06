// app/how-it-works/_schema.tsx
// Private file — not a Next.js route. Imported only by page.tsx next to it.

export default function HowItWorksSchema() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Expert Exam Help from TestHelpNow",
    description:
      "TestHelpNow makes it easy to get expert exam help in three simple steps — choose your service, tell us about your exam, and your assigned expert takes care of everything.",
    url: "https://www.testhelpnow.com/how-it-works",
    image: {
      "@type": "ImageObject",
      url: "https://www.testhelpnow.com/banner image desktop.png",
    },
    totalTime: "PT10M",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Your exam details (subject, date, platform, format)",
      },
      {
        "@type": "HowToSupply",
        name: "A valid email address and phone number",
      },
      {
        "@type": "HowToSupply",
        name: "Login credentials for your exam platform",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "TestHelpNow Order Form",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choose Your Exam Help Service",
        text: "Browse the type of support you need: Online Tutoring, Exam Preparation, or Full Exam Handling. Whether you want to hire an exam expert or need structured coaching, choose the service that fits your academic goals and click Get Help Now.",
        url: "https://www.testhelpnow.com/how-it-works#step-1",
        image: {
          "@type": "ImageObject",
          url: "https://www.testhelpnow.com/step%201%20image.png",
        },
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Tell Us About Your Exam",
        text: "Fill out a quick form with your exam details: subject name, course level, exam date, platform, and any specific areas where you need help. The more detail you provide, the better we can match you with the right expert for your exact exam.",
        url: "https://www.testhelpnow.com/how-it-works#step-2",
        image: {
          "@type": "ImageObject",
          url: "https://www.testhelpnow.com/step%202%20image.png",
        },
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Your Expert Takes Care of Everything",
        text: "Our team contacts you directly to confirm your expert assignment. On exam day, you log in to your exam platform to start the session — your assigned expert then takes over remotely and completes the exam on your behalf, end-to-end. All sessions are handled with full confidentiality under a signed NDA.",
        url: "https://www.testhelpnow.com/how-it-works#step-3",
        image: {
          "@type": "ImageObject",
          url: "https://www.testhelpnow.com/step%203%20image.png",
        },
      },
    ],
  };

  // NEW: FAQPage schema — synced with How It Works FAQs in FAQSection.tsx
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly will I be matched with an expert after submitting the form?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases you'll be matched within a few hours of submitting your order form. Our team reviews every request promptly and will contact you directly to confirm your expert assignment, verify your exam details, and walk you through the next steps.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need help with my exam today — do you offer same-day support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer same-day and urgent exam support depending on availability. Contact our team immediately via the order form or call us directly at 1-800-803-4058 and we'll do everything we can to match you with an available expert for your exam date.",
        },
      },
      {
        "@type": "Question",
        name: "Is my information kept confidential throughout the process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, completely. We use SSL-encrypted platforms and sophisticated anonymity protocols throughout every session. All experts sign strict NDAs before working with any client. Your identity, exam credentials, and personal data are never stored, recorded, or shared with any third party.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the expert doesn't pass my exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You are entitled to a full refund. We stand behind our guaranteed results policy — if the assigned expert does not achieve the agreed outcome for any reason, we will issue a complete refund with no questions asked.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to do anything during the exam, or do you handle everything?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You log in to your exam account to start the session, then our expert takes over remotely from there. You don't need to answer any questions or stay active — your expert handles the exam end-to-end. We walk you through the exact login steps beforehand so there's no confusion on exam day.",
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
        name: "How It Works",
        item: "https://www.testhelpnow.com/how-it-works",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How It Works — TestHelpNow",
    description:
      "Learn how TestHelpNow connects students with certified exam experts in three simple steps. Choose your service, tell us about your exam, and your expert handles everything — confidentially and with guaranteed results.",
    url: "https://www.testhelpnow.com/how-it-works",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1500",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
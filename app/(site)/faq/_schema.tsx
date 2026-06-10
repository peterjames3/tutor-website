// app/faq/_schema.tsx
// Private file — not a Next.js route. Imported only by page.tsx next to it.

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you help with homework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We take time to make sure the student understands the major concepts behind the homework. We guide students toward arriving at the right answer on their own.",
        },
      },
      {
        "@type": "Question",
        name: "What subjects do you offer test prep for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We cover all major academic subjects from K-12 through college level, including STEM, humanities, languages, and professional certificates.",
        },
      },
      {
        "@type": "Question",
        name: "How are tutoring sessions conducted?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sessions are available for online through our virtual classroom.",
        },
      },
      {
        "@type": "Question",
        name: "What are your payment options?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our platform.",
        },
      },
      {
        "@type": "Question",
        name: "Can I reschedule or cancel a session?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can reschedule or cancel up to 24 hours before your session without charge. Late cancellations may incur a fee.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if a tutor is qualified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All tutors undergo a rigorous vetting process including credential verification, background checks, and subject matter testing.",
        },
      },
      {
        "@type": "Question",
        name: "What if I don't like my tutor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not a problem! We have a broad and diverse team of qualified tutors and will match you with a tutor that better suits your needs and preferences. You can also make specific requests before your tutor is assigned to ensure you get the best possible match initially. If you require a tutor with a certain level of education or other qualities for any reason, such as a tutor with a Biology degree or a female tutor for a female child, just indicate this fact and we will gladly accommodate you.",
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
        name: "FAQ",
        item: "https://www.testhelpnow.com/faq",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Frequently Asked Questions — TestHelpNow",
    description:
      "Find answers to common questions about TestHelpNow's tutoring services, exam help, payment options, tutor qualifications, and more.",
    url: "https://www.testhelpnow.com/faq",
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
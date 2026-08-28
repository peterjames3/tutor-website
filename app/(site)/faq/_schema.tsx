// app/faq/_schema.tsx

export default function FAQSchema() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // ── 1. Organization ──────────────────────────────────────────
      {
        "@type": "Organization",
        "@id": "https://testhelpnow.com/#organization",
        name: "TestHelpNow",
        url: "https://testhelpnow.com",
      },

      // ── 2. BreadcrumbList ────────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "@id": "https://testhelpnow.com/faq#breadcrumb",
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
            name: "FAQ",
            item: "https://testhelpnow.com/faq",
          },
        ],
      },

      // ── 3. FAQPage / MainEntity ──────────────────────────────────
      {
        "@type": "FAQPage",
        "@id": "https://testhelpnow.com/faq#faq",
        name: "Frequently Asked Questions — TestHelpNow",
        description:
          "Find answers to common questions about TestHelpNow's tutoring services, exam help, payment options, tutor qualifications, and more.",
        url: "https://testhelpnow.com/faq",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://testhelpnow.com/#website",
        },
        breadcrumb: {
          "@id": "https://testhelpnow.com/faq#breadcrumb",
        },
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
              text: "Sessions are available online through our virtual classroom.",
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
              text: "Not a problem! We have a broad and diverse team of qualified tutors and will match you with a tutor that better suits your needs and preferences. You can also make specific requests before your tutor is assigned to ensure you get the best possible match initially.",
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
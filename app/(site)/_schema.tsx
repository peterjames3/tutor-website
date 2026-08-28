// app/(site)/_schema.tsx

export default function HomeSchema() {
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
          telephone: "+1-469-428-4470",
          contactType: "customer support",
          areaServed: ["US", "CA"],
          availableLanguage: "English",
        },
        sameAs: [
          "https://t.me/+nRelw8camMk3N2Y0",
          "https://discord.gg/NC53djQx2b",
        ],
      },

      // ── 2. WebSite ───────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://testhelpnow.com/#website",
        name: "TestHelpNow",
        url: "https://testhelpnow.com",
        publisher: {
          "@id": "https://testhelpnow.com/#organization",
        },
      },

      // ── 3. WebPage ───────────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": "https://testhelpnow.com/#webpage",
        url: "https://testhelpnow.com",
        name: "TestHelpNow | #1 Online Exam Help, Proctored Exam Taker & Tutoring Services",
        description:
          "Pay someone to take your online proctored exam. Expert exam takers for PMP, SHRM, PRINCE2, GED, HiSET & more. 100% confidential, secure, and guaranteed results.",
        inLanguage: "en-US",
        isPartOf: {
          "@id": "https://testhelpnow.com/#website",
        },
        about: {
          "@id": "https://testhelpnow.com/#organization",
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
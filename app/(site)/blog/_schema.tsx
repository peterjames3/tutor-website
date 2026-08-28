export default function BlogIndexSchema() {
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
      },

      // ── 2. Breadcrumbs ───────────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "@id": "https://testhelpnow.com/blog#breadcrumb",
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
            name: "Blog",
            item: "https://testhelpnow.com/blog",
          },
        ],
      },

      // ── 3. Blog / Collection ─────────────────────────────────────
      {
        "@type": "Blog",
        "@id": "https://testhelpnow.com/blog#blog",
        name: "TestHelpNow Blog",
        description:
          "Tips, guides, and resources to help students ace their exams and get the most out of tutoring.",
        url: "https://testhelpnow.com/blog",
        inLanguage: "en-US",
        publisher: {
          "@id": "https://testhelpnow.com/#organization",
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://testhelpnow.com/#website",
        },
        breadcrumb: {
          "@id": "https://testhelpnow.com/blog#breadcrumb",
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
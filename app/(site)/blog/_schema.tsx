
export default function BlogIndexSchema() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "TestHelpNow Blog",
    description:
      "Tips, guides, and resources to help students ace their exams and get the most out of tutoring.",
    url: "https://www.testhelpnow.com/blog",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.testhelpnow.com/logo.png",
      },
    },
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
        name: "Blog",
        item: "https://www.testhelpnow.com/blog",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Blog — TestHelpNow",
    description:
      "Tips, guides, and resources to help students ace their exams and get the most out of tutoring.",
    url: "https://www.testhelpnow.com/blog",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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

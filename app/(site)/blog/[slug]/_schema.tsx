import { SanityDocument } from "next-sanity";

interface BlogPostSchemaProps {
  post: SanityDocument;
}

export default function BlogPostSchema({ post }: BlogPostSchemaProps) {
  const slugString =
    typeof post.slug === "string" ? post.slug : post.slug?.current || "";

  const postUrl = `https://testhelpnow.com/blog/${slugString}`;

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
        "@id": `${postUrl}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },

      // ── 3. Article ───────────────────────────────────────────────
      {
        "@type": "Article",
        "@id": `${postUrl}#article`,
        headline: post.title,
        url: postUrl,
        datePublished: post._createdAt,
        dateModified: post._updatedAt || post._createdAt,
        description: post.summary || post.excerpt || undefined,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": "https://testhelpnow.com/blog#blog",
          name: "TestHelpNow Blog",
          url: "https://testhelpnow.com/blog",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": postUrl,
        },
        ...(post.imageURL && {
          image: {
            "@type": "ImageObject",
            url: post.imageURL,
          },
        }),
        author: {
          "@type": "Person",
          name: post.authorName || "TestHelpNow Editorial Team",
        },
        publisher: {
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
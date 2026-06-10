
import { SanityDocument } from "@sanity/client";

interface BlogPostSchemaProps {
  post: SanityDocument;
}

export default function BlogPostSchema({ post }: BlogPostSchemaProps) {
  const postUrl = `https://www.testhelpnow.com/blog/${post.slug.current}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    url: postUrl,
    datePublished: post._createdAt,
    inLanguage: "en-US",
    ...(post.imageURL && {
      image: {
        "@type": "ImageObject",
        url: post.imageURL,
      },
    }),
    ...(post.authorName && {
      author: {
        "@type": "Person",
        name: post.authorName,
      },
    }),
    publisher: {
      "@type": "Organization",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.testhelpnow.com/logo.png",
      },
    },
    isPartOf: {
      "@type": "Blog",
      name: "TestHelpNow Blog",
      url: "https://www.testhelpnow.com/blog",
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
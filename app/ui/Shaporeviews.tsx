// app/components/ShapoReviews.tsx
// Uses Shapo's script embed — no npm package needed.
// Drop this component on any page you want reviews to appear.

"use client";

import Script from "next/script";

interface ShapoReviewsProps {
  className?: string;
}

export default function ShapoReviews({ className = "" }: ShapoReviewsProps) {
  return (
    <div className={className}>
      {/* Widget container — Shapo targets this div by ID */}
      <div id="shapo-widget-aa85ad12922f887baf81" />

      {/* Shapo embed script — loads after page, won't block render */}
      <Script
        id="shapo-embed-js"
        type="text/javascript"
        src="https://cdn.shapo.io/js/embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
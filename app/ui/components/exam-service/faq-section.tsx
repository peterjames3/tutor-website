"use client";
import { useState } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { FaqSectionData } from "@/app/(site)/proctored-exam-help/[slug]/page";

export default function FaqSection({ data }: { data: FaqSectionData }) {
  const { heading, subheading, faqs, ctaBlock } = data;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Group faqs by category
  const grouped = faqs?.reduce<Record<string, typeof faqs>>((acc, faq) => {
    const cat = faq.category ?? "general";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(faq);
    return acc;
  }, {});

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && (
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-2">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* FAQ accordion — grouped by category */}
        {Object.entries(grouped ?? {}).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-semibold uppercase  text-gray-800 mb-4 pl-1">
              {category.replace(/-/g, " ")}
            </h3>
            <div className="flex flex-col gap-3">
              {items.map((faq, i) => {
                const globalIndex = faqs.indexOf(faq);
                const isOpen = openIndex === globalIndex;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-primary hover:bg-gray-50 transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full border-2 border-active-link flex items-center justify-center transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <svg
                          className="w-3 h-3 text-active-link"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </span>
                    </button>

                    {isOpen && faq.answer && (
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed prose prose-sm max-w-none">
                        <PortableText value={faq.answer} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Bottom CTA block */}
        {ctaBlock && (
          <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            {ctaBlock.text && (
              <p className="text-gray-600 mb-4">{ctaBlock.text}</p>
            )}
            {ctaBlock.buttonLabel && ctaBlock.buttonHref && (
              <Link
                href={ctaBlock.buttonHref}
                className="inline-block bg-button-login-default text-white font-medium px-10 py-4 rounded-md hover:bg-secondary/80 hover:shadow-lg transition-all duration-300"
              >
                {ctaBlock.buttonLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

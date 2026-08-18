"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { PortableText } from "next-sanity";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Server,
  Cloud,
  HelpCircle,
} from "lucide-react";
import  { FaqSectionData } from "@/lib/defination";

// Map category strings to an icon — extend as new categories are added in Sanity
const getCategoryIcon = (category: string) => {
  const key = category.toLowerCase();
  if (key.includes("cloud") || key.includes("core"))
    return <Cloud className="w-5 h-5 text-blue-500" />;
  if (key.includes("safety") || key.includes("onvue") || key.includes("proctor"))
    return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
  if (key.includes("security") || key.includes("cyber") || key.includes("pbq"))
    return <Server className="w-5 h-5 text-orange-500" />;
  return <HelpCircle className="w-5 h-5 text-gray-500" />;
};

export default function FaqSection({ data }: { data: FaqSectionData }) {
  const { heading, subheading, faqs, ctaBlock } = data;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Group faqs by category, preserving first-seen order
  const grouped = faqs?.reduce<Record<string, typeof faqs>>((acc, faq) => {
    const cat = faq.category ?? "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(faq);
    return acc;
  }, {});

  const categories = Object.entries(grouped ?? {});

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {(heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            {heading && (
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-lg text-gray-600">{subheading}</p>
            )}
          </motion.div>
        )}

        <div className="space-y-8">
          {categories.map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="flex items-center bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="mr-3">{getCategoryIcon(category)}</div>
                <h3 className="text-xl font-semibold text-secondary">
                  {category.replace(/-/g, " ")}
                </h3>
              </div>

              <div className="divide-y divide-gray-200">
                {items.map((faq, index) => {
                  const globalIndex = faqs.indexOf(faq);
                  const isOpen = activeIndex === globalIndex;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50/50 transition-colors hover:cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-medium text-gray-800">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary shrink-0 ml-4" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                        )}
                      </button>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm md:text-base bg-gray-50/20 prose prose-sm max-w-none">
                          {faq.answer && <PortableText value={faq.answer} />}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {ctaBlock && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            {ctaBlock.text && (
              <p className="text-gray-600 mb-6">{ctaBlock.text}</p>
            )}
            {ctaBlock.buttonLabel && ctaBlock.buttonHref && (
              <Link
                href={ctaBlock.buttonHref}
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-900 transition-colors shadow-sm inline-block"
              >
                {ctaBlock.buttonLabel}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

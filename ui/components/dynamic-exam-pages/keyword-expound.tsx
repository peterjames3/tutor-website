// app/ui/components/pmp/sections/keyword-expound.tsx
"use client";
import BackgroundRings from "@/ui/components/about/background-rings";
import LearnOnlineBadge from "@/ui/components/about/learnonline-badge";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { KeywordExpoundData } from "@/lib/defination";

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  orange: "bg-orange-100 text-orange-700",
  red: "bg-red-100 text-red-700",
  teal: "bg-teal-100 text-teal-700",
};

export default function KeywordExpound({ data }: { data: KeywordExpoundData }) {
  const {
    sectionId,
    heading,
    highlightedText,
    body,
    primaryCTA,
    featureTags,
    image,
    imagePosition = "right",
    backgroundColor = "#ffffff",
  } = data;

  return (
    <section
      id={sectionId}
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor }}
    >
      <div className="max-w-310 px-4 mx-auto">
        <div
          className={`flex flex-col ${imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
        >
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {highlightedText ? (
                  <>
                    <span className="text-emerald-600">{highlightedText}</span>
                    <span className="text-gray-900">
                      {" "}
                      {heading.replace(highlightedText, "").trim()}
                    </span>
                  </>
                ) : (
                  heading
                )}
              </h2>

              <div className="text-[1rem] md:text-[1.3rem] max-w-none text-primary">
                <PortableText value={body} />
              </div>

              {featureTags && featureTags.length > 0 && (
                <div className="flex flex-wrap gap-2 my-6">
                  {featureTags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${colorMap[tag.color] || "bg-gray-100 text-gray-700"}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}

              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md mt-4"
                >
                  {primaryCTA.label}
                </Link>
              )}
            </motion.div>
          </div>

          {/* Image */}
          {image && imagePosition !== "none" && (
            <motion.div
              className="w-full md:w-1/2 relative w-full h-full mx-auto justify-center "
              initial={{ opacity: 0, x: imagePosition === "right" ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BackgroundRings />
            <figure className="relative z-6 w-full h-[38rem]">
              <Image
                src={image.url}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover h-full "
              />
           </figure>
  {/* 3. Floating Label - Absolute positioned relative to the center cluster */}
      <div className="absolute bottom-[5%] right-[2%] z-8">
        <LearnOnlineBadge />
      </div>
  {/* Decorative Spark Accent (Top Left) */}
      <div className="absolute top-6 left-6 text-emerald-500 opacity-60 animate-pulse">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.4L21 11l-6.6 2.6L12 20l-2.4-6.4L3 11l6.6-2.6L12 2z" />
        </svg>
      </div>

            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

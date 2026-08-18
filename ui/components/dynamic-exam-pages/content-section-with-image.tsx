// app/ui/components/pmp/sections/content-section-with-image.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { ContentSectionData } from "@/lib/defination";

export default function ContentSectionWithImage({
  data,
}: {
  data: ContentSectionData;
}) {
  const {
    sectionId,
    heading,
    subheading,
    body,
    imagePosition = "right",
    imageSize = "50",
    backgroundColor = "#ffffff",
    image,
    keyPoints,
    ctaButton,
    help,
  } = data;

  const imageWidth =
    imageSize === "33"
      ? "lg:w-1/3"
      : imageSize === "66"
        ? "lg:w-2/3"
        : "lg:w-1/2";

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
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {heading}
              </h2>
              {subheading && (
                <p className="text-xl text-gray-600 mb-6">{subheading}</p>
              )}
              <div className="text-[1.3rem] max-w-none text-primary">
                <PortableText value={body} />
              </div>

              {keyPoints && keyPoints.length > 0 && (
                <ul className="space-y-3 mt-6">
                  {keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-emerald-500 font-bold text-lg">
                        ●
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {point.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {point.description}
                        </p>
                        {point.link && (
                          <Link
                            href={point.link}
                            className="text-emerald-600 hover:underline text-sm"
                          >
                            Learn more →
                          </Link>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {ctaButton && (
                <Link
                  href={ctaButton.href}
                  className={`inline-block mt-6 font-semibold px-8 py-3 rounded-lg transition-colors ${
                    ctaButton.variant === "primary"
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md"
                      : ctaButton.variant === "secondary"
                        ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                        : "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                  }`}
                >
                  {ctaButton.label}
                </Link>
              )}
            </motion.div>
          </div>

          {/* Image */}
          {image && imagePosition !== "none" && (
            <motion.div
              className={`${imageWidth} flex-shrink-0`}
              initial={{ opacity: 0, x: imagePosition === "right" ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={600}
                height={200}
                className=" object-contain w-full h-[33rem]"
              />
              {image.caption && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {image.caption}
                </p>
              )}
            </motion.div>
          )}
        </div>

        {/* Bottom block — full width bullet highlights */}
        {help && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {help.heading}
            </h2>

            {help.intro && (
              <p className=" text-[1rem] lg:text-[1.3rem] text-primary leading-relaxed mb-6">
                {help.intro}
              </p>
            )}

            {help.bulletPoints && help.bulletPoints.length > 0 && (
              <ul className="space-y-3">
                {help.bulletPoints.map((point, index) => (
                  <li key={index} className=" text-[1rem] lg:text-[1.3rem] text-primary flex items-start gap-3">
                    <span className="mt-1 text-gray-900">•</span>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900">
                        {point.title}
                      </span>{" "}
                      {point.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {help.closingNote && (
              <p className="italic  leading-relaxed mt-6 text-[1rem] lg:text-[1.3rem] text-primary">
                {help.closingNote}{" "}
                {help.closingCta?.href && help.closingCta?.label && (
                  <Link
                    href={help.closingCta.href}
                    className="not-italic font-semibold text-emerald-600 hover:underline"
                  >
                    {help.closingCta.label}
                  </Link>
                )}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

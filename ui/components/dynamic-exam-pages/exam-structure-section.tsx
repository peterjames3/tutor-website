// app/ui/components/pmp/sections/exam-structure-section.tsx
"use client";
import { PortableText } from "next-sanity";
import { CircleArrowRight } from "lucide-react";
//import type { PortableTextBlock } from "@portabletext/types";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { portableTextComponents } from "@/ui/components/blog/PortableTextComponents";
import { ExamStructureData } from "@/lib/defination";

// const colorMap: Record<string, string> = {
//   blue: "bg-blue-100 text-blue-700",
//   green: "bg-green-100 text-green-700",
//   purple: "bg-purple-100 text-purple-700",
//   orange: "bg-orange-100 text-orange-700",
//   red: "bg-red-100 text-red-700",
//   teal: "bg-teal-100 text-teal-700",
// };

export default function ExamStructureSection({
  data,
}: {
  data: ExamStructureData;
}) {
  const { heading, subheading, body, structureCards, diagramImage, ctaButton } =
    data;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-310 px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Text Content */}
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
              

 {body && (
            <div className="prose prose-gray max-w-none text-gray-700">
              <PortableText value={body}
              components={portableTextComponents} />
            </div>
          )}

              {diagramImage && (
                <div className="mt-8">
                  <Image
                    src={diagramImage.url}
                    alt={diagramImage.alt}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                  {diagramImage.caption && (
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      {diagramImage.caption}
                    </p>
                  )}
                </div>
              )}

              {ctaButton && (
                <Link
                  href={ctaButton.href}
                  className="inline-block mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  {ctaButton.label}
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right Column - Structure Cards */}
          <div className="lg:w-1/3 flex flex-col space-y-6">
            {structureCards?.map((card, index) => (
              <motion.div
                key={index}
                className="overflow-hidden  rounded-lg shadow-sm border border-gray-200"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className=" bg-black flex mb-4 items-center px-5 py-4  ">
                  
                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-3 px-5 py-4 font-medium">
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="border-b border-gray-100 pb-2 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold mt-1">
                          <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {item.point}
                          </h4>
                          {item.description && (
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          )}
                          {item.link && (
                            <Link
                              href={item.link}
                              className="text-xs text-emerald-600 hover:underline"
                            >
                              Learn more →
                            </Link>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Calculator, Lightbulb, BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";
import { SanityDocument } from "@sanity/client";
//import MultiStepForm from "@/app/ui/components/form/MultiStepForm";

interface Section {
  title: string;
  content: string;
  tips?: string[];
  icon?: string;
}

interface Testimonial {
  author: string;
  quote: string;
}

interface ExamData extends SanityDocument {
  title: string;
  description: string;
  structure?: string[];
  sections?: Section[];
  testimonials?: Testimonial[];
  featuredImage?: string;
}

export default function ExamPrepPageClient({ exam }: { exam: ExamData }) {
  const getSectionIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "math":
        return <Calculator className="text-purple-600" />;
      case "writing":
      case "writing test":
        return <BookOpen className="text-red-500" />;
      case "reading":
        return <BookOpen className="text-green-600" />;
      case "science":
        return <BookOpen className="text-blue-500" />;
      case "verbal reasoning":
        return <BookOpen className="text-yellow-500" />;
      case "quantitative reasoning":
        return <Calculator className="text-indigo-600" />;
      default:
        return <BookOpen className="text-gray-500" />;
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] pt-[10rem] min-h-[30rem] z-10 relative">
      <div className="py-[5rem] w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] px-4 md:px-2 lg:px-3">
        {exam.map((item: ExamData, index: number) => (
          <div
            key={index}
            className="h-full w-full flex flex-col gap-10 lg:flex-row md:justify-between"
          >
            {/* Left Column */}
            <section className="h-full flex flex-col justify-center w-full lg:w-1/2 py-3 sm:py-18 lg:py-24">
              <ul className="flex items-center gap-1.5 text-sm mb-2">
                <li>
                  <Link
                    href="/test-prep"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Test Prep
                  </Link>
                </li>
                <ChevronRight className="text-gray-500" />
                <li className="font-medium">{item.title}</li>
              </ul>

              <div className="bg-accent p-3 w-[15rem] text-center rounded-xs mb-4">
                <h2 className="label-text text-primary font-medium">
                  {item.title}
                </h2>
              </div>

              <p className="text-[2.5rem] lg:text-[3.1rem] font-bold text-primary leading-tight">
                {item.description}
              </p>

              {item.structure && (
                <ul className="list-disc ml-5 space-y-2 text-base text-gray-800 mt-6">
                  {item.structure.map((item, index: number) => (
                    <li key={index} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Right Column */}
            <section className="w-full lg:w-1/2 flex items-stretch gap-4">
              {Array.isArray(item.sections) && item.sections.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#EADCF3] rounded-md flex items-center justify-between h-full w-full px-6 py-8"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="rounded-full p-3 bg-white">
                        {getSectionIcon(item.sections[0].title)}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {item.sections[0].title}
                      </h3>
                    </div>

                    <p className="text-gray-600">
                      <span className="font-semibold">Sample:</span>{" "}
                      {item.sections[0].content}
                    </p>

                    {item.sections[0].tips &&
                      item.sections[0].tips.length > 0 && (
                        <div className="flex items-start gap-3 mt-6 px-2 py-4 bg-white rounded-md">
                          <Lightbulb className="text-purple-600" />
                          <div className="space-y-2">
                            {item.sections[0].tips.map((tip, i: number) => (
                              <span key={i} className="text-gray-700 block">
                                {tip}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </motion.div>
              )}

              <div className="flex flex-col gap-4 w-full">
                {Array.isArray(item.sections) &&
                  item.sections.slice(1).map((section, index: number) => {
                    const bgColors = [
                      "bg-[#FFF2F0]",
                      "bg-[#D6F6DC]",
                      "bg-[#E0F7FA]",
                    ];
                    const iconColors = [
                      "text-red-500",
                      "text-green-600",
                      "text-blue-500",
                    ];

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className={`${bgColors[index % bgColors.length]} rounded-md px-6 py-6 flex flex-col gap-2`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="rounded-full p-3 bg-white">
                            {getSectionIcon(section.title)}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {section.title}
                          </h3>
                        </div>

                        <p className="text-primary">
                          <span className="font-semibold">Sample:</span>{" "}
                          {section.content}
                        </p>

                        {section.tips && section.tips.length > 0 && (
                          <div className="flex items-start gap-3 mt-4 px-4 py-4 bg-white rounded-md">
                            <Lightbulb
                              className={iconColors[index % iconColors.length]}
                            />
                            <div className="space-y-2">
                              {section.tips.map((tip, i: number) => (
                                <span key={i} className="text-gray-700 block">
                                  {tip}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
              </div>
            </section>
          </div>
        ))}

        {/* Testimonials Section */}
        {exam.map((item: ExamData, index: number) => (
          <div key={index}>
            {/* ... your section rendering ... */}

            {/* ✅ Testimonials Section for each exam */}
            {Array.isArray(item.testimonials) &&
              item.testimonials.length > 0 && (
                <div className="mt-16 space-y-6">
                  <h2 className="text-2xl font-bold mb-8">What Students Say</h2>
                  {item.testimonials.map(
                    (testimonial: Testimonial, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="bg-white mx-auto p-8 max-w-[700px] rounded-xl shadow-sm"
                      >
                        <blockquote className="text-lg italic text-gray-700">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>
                        <footer className="mt-4 font-semibold text-gray-800">
                          — {testimonial.author}
                        </footer>
                      </motion.div>
                    )
                  )}
                </div>
              )}
          </div>
        ))}
      </div>
      <div className="py-[5rem] w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] px-4 md:px-2 lg:px-3">
        {/* <MultiStepForm /> */}
      </div>
    </div>
  );
}

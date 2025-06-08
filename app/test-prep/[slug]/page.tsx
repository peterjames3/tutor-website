"use client";
import { notFound as nextNotFound } from "next/navigation";
import { motion } from "framer-motion";
import { Calculator, Lightbulb, BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ExamPage({ params }: { params: { slug: string } }) {
  // Content data for each exam type

  type Section = {
    title: string;
    content: string;
    tips?: string[];
  };

  type Exam = {
    title: string;
    description: string;
    sections: Section[];
    testimonials: { author: string; quote: string }[];
  };

  const examContent: { [key: string]: Exam } = {
    psat: {
      title: "Digital PSAT® Preparation",
      description:
        " Prepare for the PSAT with our comprehensive digital Support you need.",
      sections: [
        {
          title: "Math",
          content: "If x² = 3x - 10...",
          tips: [
            "Remember to check all answer choices",
            "Choose the most concise answer",
          ],
        },
        {
          title: "Writing Test",
          content: "The writer wants to emphasize...",
          tips: ["Look for the most concise answer"],
        },
        {
          title: "Reading",
          content: "The passage suggests that...",
          tips: [
            "Pay attention to the context of the passage",
            "Look for clues in the text to support your answer",
          ],
        },
      ],
      testimonials: [
        {
          author: "Alice K",
          quote:
            "I like the clarity and meticulous nature of the course presentation. I like the fact that the course content and presentation was made using the content of the certification requirements. Great help, reasonably priced compared to the others which I see as rip off. Thanks. I passed my exam today!",
        },
      ],
    },
    isee: {
      title: "ISEE Exam Preparation",
      description: "Boost Your Score on the ISEE with Expert Guidance",
      sections: [
        {
          title: "What is the ISEE?",
          content: "A standardized test for admission to private schools.",
        },
        {
          title: "Exam Prep",
          content: "User-friendly settings designed for seamless testing.",
        },
        {
          title: "Why Choose Our Program",
          content: "94% of participants achieve their target scores.",
        },
      ],
      testimonials: [
        {
          author: "Emily Thompson",
          quote: "The personalized study plan was a game changer for me.",
        },
      ],
    },
  };
  // Icon mapping based on section title
  const getSectionIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "math":
        return <Calculator className="text-purple-600" />;
      case "writing test":
        return <BookOpen className="text-red-500" />;
      case "reading":
        return <BookOpen className="text-green-600" />;
      default:
        return <BookOpen className="text-blue-500" />;
    }
  };

  const exam = examContent[params.slug as keyof typeof examContent];

  if (!exam) {
    notFound();
  }

  return (
    <div className="w-full bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] pt-[10rem] min-h-[30rem] z-10 relative">
      <div className="py-[5rem] w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] px-4 md:px-2 lg:px-3">
        <div className=" h-full w-full flex flex-col gap-10 lg:flex-row md:justify-between">
          {/* Left Column */}
          <section className=" h-full flex flex-col justify-center w-full lg:w-1/2 py-3 sm:py-18 lg:py-24">
            <ul className="flex items-center gap-1.5 text-sm mb-2">
              <li>
                <Link href="/test-prep">Test Prep</Link>
              </li>
              <ChevronRight className="text-gray-500" />
              <li className="font-medium">{exam.title}</li>
            </ul>
            <div className="bg-accent p-3 w-[12rem] rounded-xs mb-4">
              <h2 className="label-text text-primary font-medium">
                {exam.title}
              </h2>
            </div>

            <p className="text-[2.5rem] lg:text-[3.1rem] font-bold text-primary leading-tight">
              {exam.description}
            </p>
          </section>

          {/* Right Column */}
          <section className="w-full lg:w-1/2 flex items-stretch gap-4">
            {/* Math Section (Full height) - First section always gets special treatment */}
            {exam.sections.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#EADCF3] rounded-md flex items-center justify-between h-full w-full px-6 py-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full p-3 bg-white">
                      {getSectionIcon(exam.sections[0].title)}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {exam.sections[0].title}
                    </h3>
                  </div>

                  <p className="text-gray-600">
                    <span className="font-semibold">Sample:</span>{" "}
                    {exam.sections[0].content}
                  </p>

                  {exam.sections[0].tips && (
                    <div className="flex items-start gap-3 mt-6 px-2 py-4 bg-white rounded-md">
                      <Lightbulb className="text-purple-600" />
                      <div className="space-y-2">
                        {exam.sections[0].tips.map((tip, i) => (
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

            {/* Other Sections Column */}
            <div className="flex flex-col gap-4 w-full">
              {exam.sections.slice(1).map((section, index) => {
                const bgColors = [
                  "bg-[#FFF2F0]", // Writing
                  "bg-[#D6F6DC]", // Reading
                  "bg-[#E0F7FA]", // Fallback
                ];

                const iconColors = [
                  "text-red-500", // Writing
                  "text-green-600", // Reading
                  "text-blue-500", // Fallback
                ];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                    className={`${
                      bgColors[index % bgColors.length]
                    } rounded-md px-6 py-6 flex flex-col gap-2`}
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

                    {section.tips && (
                      <div className="flex items-start gap-3 mt-4 px-4 py-4 bg-white rounded-md ">
                        <Lightbulb
                          className={iconColors[index % iconColors.length]}
                        />
                        <div className="space-y-2">
                          {section.tips.map((tip, i) => (
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

        {/* Testimonials */}
        <div className="mt-16  space-y-6">
          {exam.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white mx-auto p-8 max-w-[700px] rounded-xl shadow-sm"
            >
              <blockquote className="text-lg italic text-gray-700">
                &apos;{testimonial.quote}&apos;
              </blockquote>
              <footer className="mt-4 font-semibold text-gray-800">
                — {testimonial.author}
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
function notFound() {
  nextNotFound();
}

"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/ui/Logo";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ExamCategoryData, ExamCategory } from "@/lib/defination";

interface LeftHeroProps {
  onGetQuote: () => void;
}

const LeftHero = ({ onGetQuote }: LeftHeroProps) => {
  const [activeCategory, setActiveCategory] = useState<ExamCategory>("k12");

  const examData: Record<ExamCategory, ExamCategoryData> = {
    k12: {
      title: "US-Based Exam",
      exams: [
        {
          name: "PMP",
          path: "/take-my-pmp-exam-for-me",
          slug: "pmp",
        },
        {
          name: "SHRM",
          path: "/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me",
          slug: "shrm",
        },
        {
          name: "and More",
          path: "/proctored-exam-help",
          description: "Proctored Exam Help Page",
          slug: "and-more",
        },
      ],
    },
    academics: {
      title: "UK-Based Exams",
      exams: [
        {
          name: "PRINCE2",
          path: "/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me",
          slug: "prince2",
        },
        {
          name: "SHRM",
          path: "/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me",
          slug: "shrm",
        },
        {
          name: "and More",
          path: "/proctored-exam-help",
          slug: "and-more",
        },
      ],
    },
  };

  const currentCategory = examData[activeCategory];

  return (
    <div className="h-full w-full mx-auto px-6 pt-12">
      <div>
        {/* ── Heading ── */}
        <h1 className="sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          <span className="text-primary">Pass Your High-Stakes Exam -</span>
          <span className="text-secondary">Exam Support </span>
        </h1>

        <p className="text-primary mb-4 text-lg leading-relaxed">
          Supporting candidates preparing for The{" "}
          <span className="font-semibold text-slate-800">
            PMP, SHRM, PRINCE2, Real Estate, Nursing Entrace Exams among other
          </span>{" "}
          certification on the first try. get secure and realible testing
          assistance to you.
        </p>

        {/* ── Category Tabs ── */}
        <div className="flex  mb-3 rounded-md overflow-hidden border border-active-link max-w-[27.2rem] ">
          {Object.entries(examData).map(([key, category]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key as ExamCategory)}
                className={`
                   px-8 py-3 text-[1.2rem] font-semibold transition-all
                  ${
                    isActive
                      ? "bg-secondary text-background hover:cursor-pointer"
                      : "text-primary hover:bg-accent hover:cursor-pointer"
                  }
                `}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* ── Exam pills ── */}
        <div className="flex items-end gap-10">
          <div>
            <h3 className="flex items-center text-xl font-bold mb-3 text-green-700">
              <span className="mr-3">
                <Logo />
              </span>
              {currentCategory.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {currentCategory.exams.map((exam) => (
                <Link
                  key={exam.path}
                  href={exam.path}
                  className="
                  inline-block px-4 py-2
                  text-primary font-medium label-text
                  border border-green-500 rounded-full
                  hover:bg-green-500 hover:text-white
                  transition-all
                "
                >
                  {exam.name}
                </Link>
              ))}
            </div>
          </div>
          {/* ── Button row ── */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA — full hero swap to MultiStepForm */}

            {/* Bouncing arrow + Get a Free Quote */}
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-secondary"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </motion.div>

              <motion.button
                onClick={onGetQuote}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="
                relative flex items-center gap-2
                px-7 py-3 rounded-lg font-bold text-lg
                border-2 border-secondary text-secondary
                bg-transparent
                transition-all duration-300
                hover:text-[#f8f9fa]
                hover:cursor-pointer
                overflow-hidden
                group
              "
              >
                {/* fill sweep on hover */}
                <span
                  className="
                  absolute inset-0 bg-secondary
                  translate-x-[-101%] group-hover:translate-x-0
                  transition-transform duration-300 ease-out
                  rounded-lg
                "
                />
                <span className="relative z-10">Get Quote</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;

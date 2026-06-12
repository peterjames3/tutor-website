"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/app/ui/Logo";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ExamCategory = "k12" | "academics";

interface ExamItem {
  name: string;
  path: string;
  description?: string;
}

interface ExamCategoryData {
  title: string;
  exams: ExamItem[];
}

interface LeftHeroProps {
  onGetQuote: () => void; // triggers showHomeQuote → Quote
}

const LeftHero = ({ onGetQuote }: LeftHeroProps) => {
  const [activeCategory, setActiveCategory] = useState<ExamCategory>("k12");

  const examData: Record<ExamCategory, ExamCategoryData> = {
    k12: {
      title: "US-Based Certification Exam",
      exams: [
        { name: "PMP", path: "/take-my-pmp-exam-for-me" },
        { name: "SHRM", path: "/take-my-shrm-exam-for-me" },

        {
          name: "and More",
          path: "/proctored-exam-help",
          description: "Proctored Exam Help Page",
        },
      ],
    },
    academics: {
      title: "UK-Based Certificates Exams",
      exams: [
        { name: "PRINCE2", path: "/take-my-prince2-exam-for-me" },
        { name: "SHRM", path: "/take-my-shrm-exam-for-me" },
        { name: "and More", path: "/proctored-exam-help" },
      ],
    },
  };

  const currentCategory = examData[activeCategory];

  return (
    <div className="h-full w-full mx-auto px-6 pt-12">
      <div>
        {/* ── Heading ── */}
        <h1 className="text-3xl sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.6rem] font-bold mb-4 leading-tight">
          <span className="text-primary">Get the </span>
          <span className="text-secondary">Support </span>
          <br />
          <span className="text-primary">You Need to Pass </span>
          <span className="text-secondary">Your High-Stakes </span>
          <span className="text-primary">Exam</span>
        </h1>

        <p className="text-primary mb-4 text-lg leading-relaxed">
          Supporting candidates preparing for The PMP, SHRM, and PRINCE2
          certification,
          <br />
          as well as Healthcare & Academic Exams, Nursing Entrance Exams, and
          other high-stakes professional qualifications.
        </p>

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          What can we help you with?
        </h2>

        {/* ── Category Tabs ── */}
        <div className="flex  mb-3 rounded-md overflow-hidden border border-active-link max-w-[38.5rem] ">
          {Object.entries(examData).map(([key, category]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key as ExamCategory)}
                className={`
                   px-6 py-3 text-[1.2rem] font-semibold transition-all
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
                <span className="relative z-10">Get a Free Quote</span>
                <ArrowRight
                  size={18}
                  strokeWidth={2.5}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;

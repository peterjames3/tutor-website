"use client";

import { motion } from "framer-motion";
import { Calculator, BookOpen, BrainCircuit } from "lucide-react";

export default function HeroRightContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full flex items-center gap-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Quantitative Reasoning */}
      <motion.div
        className="relative bg-accent2 rounded-md flex items-center justify-between h-full w-full px-3 py-[10rem] overflow-hidden"
        variants={itemVariants}
      >
        <section className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-full p-3 bg-accent">
              <Calculator />
            </div>
            <h3 className="text-2xl font-bold text-primary">
              Quantitative Reasoning
            </h3>
          </div>
          <p className="text-gray-600">
            Core formulas like percentages, ratios, averages, algebraic
            expressions, and data interpretation appear across many exams.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Understand how to compare growth rates using percent change.
            </span>
          </p>
        </section>
      </motion.div>

      {/* Communication & Writing */}
      <div className="flex flex-col gap-5 py-2">
        {/* Verbal Communication */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support2 h-full w-full px-3 py-[2rem]"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
              <BookOpen />
            </div>
            <h3 className="text-xl font-semibold text-primary">
              Written Communication
            </h3>
          </div>
          <p className="text-gray-600 ml-7">
            Grammar, clarity, sentence structure, and logical flow are critical
            for written responses or essays.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Knowing when to use active vs passive voice improves writing
              quality.
            </span>
          </p>
        </motion.div>

        {/* Critical Thinking */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support3 h-full w-full px-3 py-[2rem]"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
              <BrainCircuit />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Critical Thinking
            </h3>
          </div>
          <p className="text-gray-600 ml-7">
            Evaluate arguments, identify assumptions, and draw conclusions —
            core skills for both verbal and analytical exams.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Spotting flawed logic helps in both reading passages and
              data interpretation.
            </span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

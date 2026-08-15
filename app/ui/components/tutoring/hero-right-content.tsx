"use client";

import { motion } from "framer-motion";
import {
  
  BookOpen,
  BrainCircuit,
  ClipboardCheck,

} from "lucide-react";

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
      {/* Online Class Support */}
      <motion.div
        className="relative bg-accent2 rounded-md flex items-center justify-between h-full w-full px-3 py-[10rem] overflow-hidden"
        variants={itemVariants}
      >
        <section className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-full p-3 bg-accent">
              <ClipboardCheck />
            </div>
            <h3 className="text-2xl font-bold text-primary">
              Full Online Class Support
            </h3>
          </div>
          <p className="text-gray-600">
            From weekly assignments to final exams, we handle your entire online
            course. Our experts manage quizzes, discussion posts, and projects —
            so you can focus on what matters most.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Complete your online class with guaranteed A or B grades.
            </span>
          </p>
        </section>
      </motion.div>

      <div className="flex flex-col gap-5 py-2">
        {/* Assignment & Quiz Help */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support2 h-full w-full px-3 py-[2rem]"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
              <BookOpen />
            </div>
            <h3 className="text-xl font-semibold text-primary">
              Assignments & Quizzes
            </h3>
          </div>
          <p className="text-gray-600 ml-7">
            Need help with weekly assignments, quizzes, or discussion posts? Our
            experts handle it all with precision and on-time delivery.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Get expert help with your online class assignments and
              quizzes.
            </span>
          </p>
        </motion.div>

        {/* Exam & Test Preparation */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support3 h-full w-full px-3 py-[2rem]"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
              <BrainCircuit />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Exam & Test Preparation
            </h3>
          </div>
          <p className="text-gray-600 ml-7">
            From midterms to finals, our experts prepare you for success. We
            also offer online exam help for proctored tests and timed
            assessments.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Pay someone to take my online exam and ace your tests.
            </span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

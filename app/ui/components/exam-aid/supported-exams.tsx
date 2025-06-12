"use client";

import { motion } from "framer-motion";

import { EXAM_AID_PROGRAMS } from "@/lib/constants/exam-aid-data";

import ExamAidSlider from "@/app/ui/components/exam-aid/exam-aid-slider";

export default function SupportedExams() {
  return (
    <section
      id="supported-exams"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We Support a variety of Exams
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We specialize in end-to-end technical support for all proctored
          testing platforms
        </p>
      </motion.div>

      <ExamAidSlider programs={EXAM_AID_PROGRAMS} />
    </section>
  );
}

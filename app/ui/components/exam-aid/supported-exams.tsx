"use client";

import { motion } from "framer-motion";

import { TEST_PREP_PROGRAMS } from "@/lib/constants/test-prep-data";

import ExamAidSlider from "@/app/ui/components/exam-aid/exam-aid-slider";

export default function SupportedExams() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Test Preparation Programs
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive prep courses for all major standardized tests
        </p>
      </motion.div>

      <ExamAidSlider programs={TEST_PREP_PROGRAMS} />
    </section>
  );
}

// src/app/test-prep/[slug]/components/multi-step-form.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function MultiStepForm({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1);

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="bg-background rounded-xl shadow-xl mt-[8rem] p-8 max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary mb-6 hover:text-secondary transition-colors"
      >
        <ArrowLeft size={18} /> Back to Prep
      </button>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Current School
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                  placeholder="University Name"
                />
              </div>
            </div>
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors float-right"
            >
              Next: Test Details
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">Test Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Test Type</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary">
                  <option>PSAT/NMSQT</option>
                  <option>SAT</option>
                  <option>ACT</option>
                  <option>GRE</option>
                  <option>GMAT</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Target Test Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Current Score
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                  placeholder="Enter your current score"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Target Score</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                  placeholder="Enter your target score"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Next: Finalize
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6 text-center"
          >
            <div className="bg-green-100 text-green-700 p-4 rounded-lg inline-block">
              <CheckCircle className="w-12 h-12 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Almost Done!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Review your information and submit to get started with your
              personalized test prep journey.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 text-left max-w-md mx-auto">
              <div className="flex justify-between border-b pb-3 mb-3">
                <span className="font-medium">Test Type:</span>
                <span>PSAT/NMSQT</span>
              </div>
              <div className="flex justify-between border-b pb-3 mb-3">
                <span className="font-medium">Target Score:</span>
                <span>1450</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Contact:</span>
                <span>john@example.com</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Edit Details
              </button>
              <button
                onClick={() => {
                  // Submit logic here
                  alert("Form submitted successfully!");
                  onBack();
                }}
                className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Submit & Start Prep
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

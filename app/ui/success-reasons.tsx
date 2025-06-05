"use client";

import { motion } from "framer-motion";
import SlideInContainer from "../ui/components/animation/SlideInContainer";

export default function SuccessReasons() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Main Heading */}
        <SlideInContainer direction="down" distance={30} delay={0.1}>
          <h2 className="text-center headline font-bold text-primary mb-16">
            Learn from the nation&apos;s largest community of <br />{" "}
            professional tutors.
          </h2>
        </SlideInContainer>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
          {/* Vetted Experts */}
          <SlideInContainer direction="left" delay={0.2}>
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  VETTED EXPERTS
                </h2>
                <p className="text-gray-600">
                  More qualified instructors than anywhere else, ready to help.
                </p>
              </motion.div>
            </div>
          </SlideInContainer>

          {/* The Right Fit */}
          <SlideInContainer direction="up" delay={0.3}>
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  THE RIGHT FIT
                </h2>
                <p className="text-gray-600">
                  Find an expert who suits your needs and learning style.
                </p>
              </motion.div>
            </div>
          </SlideInContainer>

          {/* Real Results */}
          <SlideInContainer direction="right" delay={0.4}>
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  REAL RESULTS
                </h2>
                <p className="text-gray-600">
                  Reach your goals faster with private, 1-to-1 lessons.
                </p>
              </motion.div>
            </div>
          </SlideInContainer>
        </div>
      </div>
    </section>
  );
}

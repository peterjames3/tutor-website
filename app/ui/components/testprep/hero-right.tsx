"use client";

import { motion } from "framer-motion";
import { Calculator, Lightbulb, BookOpen } from "lucide-react";

export default function HeroRight() {
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
      className="w-full  flex items-center  gap-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Math Section */}
      <motion.div
        className=" bg-accent2 rounded-md flex items-center justify-between h-full w-full px-3  py-[12rem]"
        variants={itemVariants}
      >
        <section>
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-full p-3 bg-accent">
              <Calculator />
            </div>
            <h3 className="text-2xl font-bold text-primary">Math</h3>
          </div>

          <p className="text-gray-600">
            Sample: If <span className="font-math">x² + 3x = 10</span>....
          </p>
          <div className="flex items-start gap-2 mt-4 px-3 rounded-sm py-5 bg-accent">
            <Lightbulb />
            <span className="text-primary">
              Tip: Remember to check all answer choices
            </span>
          </div>
        </section>
      </motion.div>

      <div className="flex flex-col gap-5 py-2 ">
        {/* Writing Test Section */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support2  h-full w-full px-3  py-[2rem] "
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
              <BookOpen />
            </div>
            <h3 className="text-xl font-semibold text-primary">Writing Test</h3>
          </div>
          <p className="text-gray-600 ml-7">
            Sample: The writer wants to emphasize...
          </p>
          <div className="flex items-start gap-2 mt-4 px-3 rounded-sm py-5 bg-accent">
            <div className="">
              <Lightbulb />
            </div>
            <span className="text-gray-600">
              Tip: Look for the most concise answer
            </span>
          </div>
        </motion.div>

        {/* Reading Section */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support3  h-full w-full px-3  py-[2rem]"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
              <BookOpen />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Reading</h3>
          </div>
          <p className="text-gray-600 ml-7">The author wants to emphasize...</p>
          <div className="flex items-start gap-2 ml-7">
            <div>
              <Lightbulb />
            </div>
            <span className="text-gray-600">
              Tip: Choose the most concise and directly supported answer.
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

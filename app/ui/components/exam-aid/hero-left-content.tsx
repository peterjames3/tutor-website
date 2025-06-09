"use client";

import { motion } from "framer-motion";

interface HeroLeftProps {
  onGetStarted: () => void;
}

export default function HeroLeftContent({ onGetStarted }: HeroLeftProps) {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full h-full flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.h2 className="p-text text-primary" variants={itemVariants}>
          Your Exam, Our Expertise – Everything Else is Covered
        </motion.h2>

        <motion.h3
          className="text-[2.5rem] lg:text-[3.1rem] font-bold text-primary leading-tight"
          variants={itemVariants}
        >
          <span className="text-primary">Book</span>
          <span className="text-secondary"> Your Exam </span>
          <span className="text-primary"> and Let </span>
          <br />
          <span className="text-secondary">Our Experts </span>
          <span className="text-primary"> Take Care of Rest.</span>
        </motion.h3>

        <p className="p-text text-primary mb-4">
          Preparing for exams can be overwhelming — but you don’t have to do it
          alone. With our <br /> proven expertise, personalized support, and
          end-to-end exam handling, we ensure you stay confident, organized, and
          fully prepared. From registration to results, we&apos;ve got you
          covered.
        </p>

        <motion.button
          onClick={onGetStarted}
          className="px-8 py-3 bg-secondary text-primary rounded-lg hover:bg-button-login-hover transition-colors cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}

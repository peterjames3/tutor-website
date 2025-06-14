"use client";

import { motion } from "framer-motion";
import { Users, PencilRuler, MoveRight } from "lucide-react";

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
          Learn Smarter, Score Higher – Tutoring That Gets Results
        </motion.h2>

        <motion.h3
          className="text-[2.5rem] lg:text-[3.1rem] font-bold text-primary leading-tight"
          variants={itemVariants}
        >
          <span className="text-primary">Personalized</span>
          <span className="text-secondary"> Tutoring </span>
          <span className="text-primary"> for </span>
          <br />
          <span className="text-secondary">Every </span>
          <span className="text-primary"> Student.</span>
        </motion.h3>

        <p className="p-text text-primary mb-4">
          Our tutoring services are designed to help students of all ages and
          skill levels achieve <br /> their academic goals. Whether you need
          help with homework, exam preparation, or <br /> mastering a specific
          subject, our experienced tutors are here to support you.
        </p>
        <div className="mb-4">
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={itemVariants}
          >
            <div className="">
              <Users className="text-primary" />
            </div>
            <h3 className="label-text text-primary">1:1 Coaching? Tutoring</h3>
          </motion.div>
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={itemVariants}
          >
            <div className="">
              <PencilRuler className="text-primary" />
            </div>
            <h3 className="label-text text-primary">
              A Study Plan Custom-made Just for You
            </h3>
          </motion.div>
        </div>

        <motion.button
          onClick={onGetStarted}
          className=" flex items-center gap-2 px-8 py-3 bg-secondary text-primary rounded-lg hover:bg-button-login-hover transition-colors cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Help Now <MoveRight className="hover:text-background" />
        </motion.button>
      </div>
    </motion.div>
  );
}

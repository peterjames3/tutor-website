"use client";

import { motion } from "framer-motion";
import {
 
  ClipboardCheck,
  Users,
  Target,
 
} from "lucide-react";

export default function RightHero() {
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
      {/* PMP Exam Support */}
      <motion.div
        className="relative bg-accent2 rounded-md flex items-center justify-between h-full w-full px-3 py-[10rem] overflow-hidden"
        variants={itemVariants}
      >
        <section className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-full p-3 bg-accent">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary">
              PMP Exam Support
            </h3>
          </div>
          <p className="text-gray-600">
            From domain mastery to exam strategy, we handle your entire PMP
            certification journey. Our <strong>PMP exam takers</strong> cover
            all three domains{" "}
           so you can achieve your PMP
            certification without stress.
            <br />
         
          </p>
          
        </section>
      </motion.div>

      <div className="flex flex-col gap-5 py-2">
        {/* PMP Domains */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support2 h-full w-full px-3 py-[2rem]"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-primary">
              People Domain (42%)
            </h3>
          </div>
          <p className="text-gray-600 ml-7">
            Leading and managing teams, conflict resolution, communication, and
            stakeholder engagement. Our <strong>PMP exam takers</strong> excel
            in all People domain questions.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Pay someone to take my PMP exam and master the People
              domain.
            </span>
          </p>
        </motion.div>

        {/* Process Domain */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support3 h-full w-full px-3 py-[2rem]"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Process Domain (50%)
            </h3>
          </div>
          <p className="text-gray-600 ml-7">
            Project planning, execution, monitoring, controlling, and closing.
            Our <strong>PMP exam takers</strong> handle all process-related
            questions with precision and expertise.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Pay someone to take my PMP exam and ace the Process domain.
            </span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

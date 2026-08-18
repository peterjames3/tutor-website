"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award } from "lucide-react";

export default function HeroLeft() {
  const router = useRouter();
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
          Real Estate Exam Help
        </motion.h2>

        <motion.h3
          className="text-[2.5rem] lg:text-[3.1rem] font-bold text-primary leading-tight"
          variants={itemVariants}
        >
          <span className="text-primary">Pay Someone to Take My</span>
          <span className="text-secondary"> Real Estate </span>
          <br />
          <span className="text-primary">Licensing Exam</span>
        </motion.h3>

        <p className="p-text text-primary mb-4">
          Get expert <strong>real estate exam help</strong> from licensed professionals. 
          Whether you&apos;re pursuing your <strong>salesperson</strong> or <strong>broker license</strong>, 
          our certified experts handle both national and state-specific portions of your exam 
          with guaranteed results and complete confidentiality.
        </p>

        <div className="flex flex-wrap gap-4 mb-4">
          <motion.div
            className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200"
            variants={itemVariants}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-medium text-gray-700">100% Confidential</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200"
            variants={itemVariants}
          >
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium text-gray-700">Licensed Experts</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200"
            variants={itemVariants}
          >
            <Clock className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-medium text-gray-700">24/7 Support</span>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            onClick={()=>router.push("/order")}
            className="cta hover:cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Real Estate Exam Help
          </motion.button>
        
        </div>

        <motion.div
          className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500"
          variants={itemVariants}
        >
          <span className="flex items-center gap-1">National & State-Specific Covered</span>
          <span className="flex items-center gap-1">Money-Back Guarantee</span>
          <span className="flex items-center gap-1">Last-Minute Bookings Accepted</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

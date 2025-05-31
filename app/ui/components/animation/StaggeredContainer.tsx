"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggeredContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export default function StaggeredContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggeredContainerProps) {
  console.log(
    "🎭 StaggeredContainer rendered with stagger delay:",
    staggerDelay
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

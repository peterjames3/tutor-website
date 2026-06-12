"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import type { ReactNode } from "react";

interface DropdownAnimationProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

export default function DropdownAnimation({
  children,
  isOpen,
  className = "",
}: DropdownAnimationProps) {
 

  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2,
        ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeInOut
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1], // cubic-bezier for easeOut
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={className}
          style={{
            transformOrigin: "top center",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

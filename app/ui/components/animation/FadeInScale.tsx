"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInScaleProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
}

export default function FadeInScale({
  children,
  delay = 0,
  duration = 0.6,
  scale = 0.8,
  className = "",
}: FadeInScaleProps) {
  console.log("🔍 FadeInScale rendered:", { delay, duration, scale });

  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

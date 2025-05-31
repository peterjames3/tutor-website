"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}

export default function HoverScale({
  children,
  scale = 1.05,
  duration = 0.2,
  className = "",
}: HoverScaleProps) {
  console.log("🎯 HoverScale rendered:", { scale, duration });

  return (
    <motion.div
      whileHover={{
        scale,
        transition: { duration, type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

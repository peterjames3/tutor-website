"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SlideInContainerProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export default function SlideInContainer({
  children,
  direction = "left",
  delay = 0,
  duration = 0.7,
  distance = 50,
  className = "",
}: SlideInContainerProps) {
  console.log("🎬 SlideInContainer rendered:", { direction, delay, duration });

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, opacity: 0 };
      case "right":
        return { x: distance, opacity: 0 };
      case "up":
        return { y: -distance, opacity: 0 };
      case "down":
        return { y: distance, opacity: 0 };
      default:
        return { x: -distance, opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    return { x: 0, y: 0, opacity: 1 };
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

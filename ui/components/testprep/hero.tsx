"use client";

import { motion, AnimatePresence } from "framer-motion";
import HeroLeft from "./hero-left";
import { HeroRight } from "./hero-right";
import FloatingElements from "../animation/FloatingElements";

export default function Hero() {
  return (
    <div
      id="Hero"
      className="w-full bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] min-h-[30rem] z-10 relative"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="hero"
          className="py-[10rem] w-full mx-auto max-w-full lg:max-w-310 flex flex-col gap-10 lg:flex-row md:justify-between px-4 md:px-2 lg:px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full lg:w-1/2">
            <HeroLeft />
          </div>
          <div className="w-full lg:w-1/2">
            <HeroRight />
          </div>
        </motion.div>
      </AnimatePresence>
      <FloatingElements />
    </div>
  );
}

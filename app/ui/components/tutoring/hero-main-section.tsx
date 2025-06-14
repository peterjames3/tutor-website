"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroLeft from "./hero-left-content";
import HeroRight from "./hero-right-content";
import FloatingElements from "../animation/FloatingElements";
import MultiStepForm from "./multi-step-form";
export default function HeroMainSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      id="Hero"
      className="w-full bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] min-h-[20rem] z-10 relative"
    >
      <AnimatePresence mode="wait">
        {showForm ? (
          <motion.div
            key="form"
            className="py-[5rem] w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] px-4 md:px-2 lg:px-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <MultiStepForm onBack={() => setShowForm(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            className="py-[10rem] w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] flex flex-col gap-10 lg:flex-row md:justify-between px-4 md:px-2 lg:px-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full lg:w-1/2">
              <HeroLeft onGetStarted={() => setShowForm(true)} />
            </div>
            <div className="w-full lg:w-1/2">
              <HeroRight />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <FloatingElements />
    </div>
  );
}

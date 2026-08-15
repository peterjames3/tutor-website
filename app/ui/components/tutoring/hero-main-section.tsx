"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroLeft from "./hero-left-content";
import HeroRight from "./hero-right-content";
import FloatingElements from "../animation/FloatingElements";
import MultiStepForm from "@/app/ui/components/form/MultiStepForm";

export default function HeroMainSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      id="Hero"
      className="w-full bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] py-18 md:py-22 z-10 relative"
    >
      <AnimatePresence mode="wait">
        {showForm ? (
          <motion.div
            key="form"
            className="py-[5rem] w-full mx-auto max-w-full lg:max-w-310 px-4"
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
            className="mt-30 w-full mx-auto max-w-full lg:max-w-310 flex flex-col gap-10 lg:flex-row md:justify-between px-4"
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

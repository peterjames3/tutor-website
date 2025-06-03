// components/ExamServices/ExamServicesSection.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ServicesHeader from "./test-header";
import Tabs from "./tabs";
import TestCarousel from "./test-slider";
import FloatingElements from "@/app/ui/components/animation/FloatingElements";

export default function ExamServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="px-8 py-20 bg-background relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto py-20"
      >
        <ServicesHeader />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <TestCarousel activeTab={activeTab} />
        <FloatingElements />
      </motion.div>
    </section>
  );
}

// components/ExamServices/ExamServicesSection.tsx
"use client";
import { motion } from "framer-motion";
import ServicesHeader from "./test-header";
import Tabs from "./tabs";
import ServicesCarousel from "./test-slider";

export default function TestServicesSection() {
  return (
    <section className="px-8 py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto"
      >
        <ServicesHeader />
        <Tabs />
        <ServicesCarousel />
      </motion.div>
    </section>
  );
}

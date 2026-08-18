"use client";

import { motion } from "motion/react";
import AboutLeft from "./about-left";
import AboutRight from "./about-right";

export default function AboutUsSection() {
  return (
    <div className="relative w-full py-15 px-4 lg:px-8 bg-primary-50">
      <section className="w-full mx-auto max-w-full lg:max-w-310  flex flex-col-reverse md:flex-row gap-18 md:gap-12 items-center">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <AboutLeft />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <AboutRight />
        </motion.div>
      </section>
    </div>
  );
}
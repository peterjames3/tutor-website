"use client";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import { motion } from "framer-motion";

export default function StepsSection() {
  return (
    <section className="w-full bg-background py-20 px-4 md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center headline font-bold text-primary mb-10"
      >
        Three Steps. One Perfect Solution for Your Needs.
      </motion.h1>

      <div className="w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StepOne />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <StepTwo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <StepThree />
        </motion.div>
      </div>
    </section>
  );
}

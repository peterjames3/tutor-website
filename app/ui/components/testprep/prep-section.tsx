"use client";
import PrepOne from "./prep-one";
import PrepTwo from "./prep-two";
import PrepThree from "./prep-three";
import { motion } from "framer-motion";

export default function PrepSection() {
  return (
    <section className="w-full bg-background py-20 px-4 md:px-12">
      <div className="w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PrepOne />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PrepTwo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <PrepThree />
        </motion.div>
      </div>
    </section>
  );
}

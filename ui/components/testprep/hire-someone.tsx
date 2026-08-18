"use client";
import { motion } from "framer-motion";
import HireSomeoneLeft from "./hire-someone-left";
import HireSomeoneRight from "./hire-someone-right";

export default function HireSomeoneSection() {
  return (
    <section className="w-full py-16 px-4 lg:px-8 bg-linear-to-b from-gray-50 to-white ">
      <div className="max-w-full mx-auto flex flex-col-reverse md:flex-row gap-18 md:gap-12 items-center lg:max-w-310">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <HireSomeoneLeft />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <HireSomeoneRight />
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const Proctored = () => {
  const router = useRouter();

  return (
    <motion.section
      className="relative py-6 px-8  overflow-hidden h-auto flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Image with overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/banner image desktop.png" // Replace with your image path
          alt="Students studying"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-dark/90" /> {/* Dark overlay */}
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-background mb-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Pay Someone to Take My Professional proctored Exam For Me
        </motion.h2>
        <motion.p
          className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Instant availability, high accuracy, and guaranteed grades. Hire our
          exam taker right away!
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={()=>router.push("/order")}
            className="bg-white hover:cursor-pointer text-primary font-semibold px-8 py-3 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Order Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

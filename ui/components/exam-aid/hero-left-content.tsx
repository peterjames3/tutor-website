"use client";
import { useRouter }  from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroLeftProps {
  
  onGetQuote: () => void;
}

export default function HeroLeftContent({
 
  onGetQuote,
}: HeroLeftProps) {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const router = useRouter();

  return (
    <motion.div
      className="w-full h-full flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.h1 className="p-text text-primary" variants={itemVariants}>
          Trusted by 1,500+ students across the USA & Canada
        </motion.h1>

        <motion.h2
          className="mb-4 text-[2.5rem] lg:text-[3.1rem] font-bold text-primary leading-tight"
          variants={itemVariants}
        >
          <span className="text-primary"> Proctored Exam Help – </span>
          <span className="text-secondary"> Book Your Exam </span>
          <span className="text-primary"> and Let </span>
          <br />
          <span className="text-secondary">Our Experts </span>
          <span className="text-primary"> Take Care of Rest.</span>
        </motion.h2>

        <motion.p className="text-xl text-primary mb-8" variants={itemVariants}>
          Certified specialists take your online proctored exam on your behalf —
          on ProctorU, Examity, Respondus, Honorlock, ExamSoft, and more.
          Discreet, secure, and backed by a money-back guarantee.
        </motion.p>

        {/* ── Button row ── */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          variants={itemVariants}
        >
          {/* Primary CTA — full hero swap */}
          <motion.button
            onClick={()=>router.push('/order')}
            className="cta hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Proctored Exam Help
          </motion.button>

          {/* Animated arrow + secondary CTA group */}
          <div className="flex items-center gap-2">
            {/* Bouncing arrow pointing right toward the button */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="text-secondary"
            >
              <ArrowRight size={20} strokeWidth={2.5} />
            </motion.div>

            {/* Get a Free Quote — ghost / outline style using site tokens */}
            <motion.button
              onClick={onGetQuote}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="
                relative flex items-center gap-2
                px-8 py-3 rounded-lg font-bold text-lg
                border-2 border-secondary text-secondary
                bg-transparent
                transition-all duration-300
                hover:bg-secondary hover:text-[#f8f9fa]
                hover:cursor-pointer
                overflow-hidden
                group
              "
            >
              {/* subtle fill sweep on hover */}
              <span
                className="
                  absolute inset-0 bg-secondary
                  translate-x-[-101%] group-hover:translate-x-0
                  transition-transform duration-300 ease-out
                  rounded-lg
                "
              />
              <span className="relative z-10">Get a Free Quote</span>
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

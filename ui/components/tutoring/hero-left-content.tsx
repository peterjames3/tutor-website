"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Users,
  MoveRight,
  GraduationCap,
  Clock,
} from "lucide-react";



export default function HeroLeftContent() {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full h-full flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.h2 className="p-text text-primary" variants={itemVariants}>
          Need Online Class Help? Get Expert Support Today
        </motion.h2>

        <motion.h3
          className="text-[2.5rem] lg:text-[3.1rem] font-bold text-primary leading-tight"
          variants={itemVariants}
        >
          <span className="text-primary">Pay Someone to</span>
          <span className="text-secondary"> Take My </span>
          <span className="text-primary"> Online </span>
          
          <span className="text-secondary">Class </span>
          <span className="text-primary"> For Me.</span>
        </motion.h3>

        <p className="text-base sm:text-lg leading-relaxed text-primary mb-4">
          Struggling with your online courses? Our experts handle your entire
          online class — from assignments and quizzes to exams and discussion
          posts.
          <br /> Get <strong>online class help</strong> that guarantees results
          with 100% confidentiality.
        </p>
      
        <motion.button
          onClick={()=>router.push("/order")}
          className=" flex items-center gap-2 cta cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Online Class Help Now{" "}
          <MoveRight className="hover:text-background" />
        </motion.button>
      </div>
    </motion.div>
  );
}

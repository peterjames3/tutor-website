"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  delay = 0,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  //const controls = useAnimation();

  console.log("🔢 AnimatedCounter rendered:", { end, duration, delay });

  useEffect(() => {
    if (isInView) {
      console.log("👁️ Counter in view, starting animation");

      const timer = setTimeout(() => {
        let startTime: number;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min(
            (currentTime - startTime) / (duration * 1000),
            1
          );

          // Easing function
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOutQuart * end);

          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
            console.log("✅ Counter animation completed:", end);
          }
        };

        requestAnimationFrame(animate);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, end, duration, delay]);

  const formatNumber = (num: number): string => {
    if (suffix.includes("K")) {
      return (num / 1000).toFixed(num >= 1000 ? 0 : 1);
    }
    return num.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.6,
        delay: delay,
        type: "spring",
        stiffness: 100,
      }}
      className={className}
    >
      {formatNumber(count)}
      {suffix}
    </motion.div>
  );
}

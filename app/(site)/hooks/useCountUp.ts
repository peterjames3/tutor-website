"use client";

import { useEffect, useState, useCallback } from "react";

export const useCountUp = (end: number, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startAnimation = useCallback(() => {
    console.log("🎬 Starting count animation:", { end, duration, delay });

    const timer = setTimeout(() => {
      let startTime: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          console.log("✅ Count animation completed:", end);
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => {
      console.log("🛑 Clearing count animation timer");
      clearTimeout(timer);
    };
  }, [end, duration, delay]);

  useEffect(() => {
    if (!isActive) return;
    return startAnimation();
  }, [isActive, startAnimation]);

  return { count, setIsActive };
};

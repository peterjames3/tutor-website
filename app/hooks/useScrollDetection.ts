"use client";

import { useEffect, useState } from "react";

export const useScrollDetection = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log("🔧 Setting up scroll detection with threshold:", threshold);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newIsScrolled = scrollTop > threshold;

      if (newIsScrolled !== isScrolled) {
        console.log("📊 Scroll state changed:", {
          scrollTop,
          isScrolled: newIsScrolled,
        });
        setIsScrolled(newIsScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      console.log("🧹 Cleaning up scroll listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, isScrolled]);

  return isScrolled;
};

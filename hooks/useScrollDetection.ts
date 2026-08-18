"use client";

import { useEffect, useState } from "react";

export const useScrollDetection = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newIsScrolled = scrollTop > threshold;

      if (newIsScrolled !== isScrolled) {
        setIsScrolled(newIsScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, isScrolled]);

  return isScrolled;
};

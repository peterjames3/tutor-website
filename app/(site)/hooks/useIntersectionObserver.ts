"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log("👁️ Setting up intersection observer with options:", options);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const newIsVisible = entry.isIntersecting;
        console.log("📍 Element visibility changed:", {
          isIntersecting: newIsVisible,
          intersectionRatio: entry.intersectionRatio,
        });
        setIsVisible(newIsVisible);
      },
      {
        threshold: options.threshold ?? 0.3,
        rootMargin: options.rootMargin ?? "0px 0px -50px 0px",
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      console.log("🎯 Observing element:", currentElement);
      observer.observe(currentElement);
    }

    return () => {
      console.log("🧹 Cleaning up intersection observer");
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return { isVisible, elementRef };
};

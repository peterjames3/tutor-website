"use client";

import { useEffect, memo } from "react";
import { useCountUp } from "@/app/hooks/useCountUp";
import type { StatCard as StatCardType } from "@/lib/defination";

interface StatCardProps {
  stat: StatCardType;
  index: number;
  isVisible: boolean;
}

const StatCard = memo<StatCardProps>(({ stat, index, isVisible }) => {
  console.log(`📊 Rendering StatCard ${index}, isVisible:`, isVisible);

  const { count, setIsActive } = useCountUp(stat.number, 2000, index * 200);

  useEffect(() => {
    if (isVisible) {
      console.log(`🎯 Activating counter for card ${index}`);
      setIsActive(true);
    }
  }, [isVisible, setIsActive, index]);

  const formatNumber = (num: number): string => {
    if (stat.suffix.includes("K")) {
      return (num / 1000).toFixed(num >= 1000 ? 0 : 1);
    }
    return num.toString();
  };

  return (
    <div
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className={`
        ${stat.bgColor} 
        rounded-2xl px-8  text-center h-48 flex flex-col items-center justify-center
        hover:scale-105 transition-transform duration-300 cursor-pointer
        shadow-sm hover:shadow-md
      `}
      >
        {/* Diamond Icon */}
        <div
          className={`
          ${stat.iconColor} 
          w-8 h-8 rotate-45 mb-6 rounded-sm
        `}
        />

        {/* Animated Number */}
        <div className="text-3xl font-bold text-gray-800 mb-2">
          {formatNumber(count)}
          {stat.suffix}
        </div>

        {/* Description */}
        <div className="text-gray-600 text-sm leading-relaxed">
          {stat.description}
        </div>
      </div>
    </div>
  );
});

StatCard.displayName = "StatCard";

export default StatCard;

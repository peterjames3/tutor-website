"use client";

import { memo } from "react";
import SlideInContainer from "@/app/ui/components/animation/SlideInContainer";
import AnimatedCounter from "@/app/ui/components/animation/AnimatedCounter";
import HoverScale from "@/app/ui/components/animation/HoverScale";
import type { StatCard as StatCardType } from "@/lib/defination";

interface AnimatedStatCardProps {
  stat: StatCardType;
  index: number;
}

const AnimatedStatCard = memo<AnimatedStatCardProps>(({ stat, index }) => {
  console.log(`📊 Rendering AnimatedStatCard ${index}`);

  return (
    <SlideInContainer
      direction="left"
      delay={index * 0.15}
      duration={0.7}
      distance={80}
    >
      <HoverScale scale={1.05} duration={0.3}>
        <div
          className={`
            ${stat.bgColor} 
            rounded-2xl p-8 text-center h-48 flex flex-col items-center justify-center
            shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer
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
          <AnimatedCounter
            end={stat.number}
            duration={2}
            delay={index * 0.2}
            suffix={stat.suffix}
            className="text-3xl font-bold text-gray-800 mb-2"
          />

          {/* Description */}
          <div className="text-gray-600 text-sm leading-relaxed">
            {stat.description}
          </div>
        </div>
      </HoverScale>
    </SlideInContainer>
  );
});

AnimatedStatCard.displayName = "AnimatedStatCard";

export default AnimatedStatCard;

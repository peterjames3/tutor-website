import { memo } from "react";
import StaggeredContainer from "@/app/ui/components/animation/StaggeredContainer";
import AnimatedStatCard from "./AnimatedStatCard";
import { statsData } from "@/lib/statsData";

const AnimatedStatsSection = memo(() => {


  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-310 px-4 lg:px-8">
        <StaggeredContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat, index) => (
            <AnimatedStatCard key={index} stat={stat} index={index} />
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
});

AnimatedStatsSection.displayName = "AnimatedStatsSection";

export default AnimatedStatsSection;

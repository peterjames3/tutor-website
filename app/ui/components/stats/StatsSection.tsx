import { memo } from "react";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import StatCard from "./StatCard";
import { statsData } from "@/lib/statsData";

const StatsSection = memo(() => {
  

  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section ref={elementRef} className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = "StatsSection";

export default StatsSection;

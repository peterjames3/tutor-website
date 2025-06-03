// components/ExamServices/ServicesCarousel.tsx
"use client";
import ServiceCard from "./exam-service-card";
import servicesByTab from "@/lib/services";

interface TestCarouselProps {
  activeTab: number;
}

export default function TestCarousel({ activeTab }: TestCarouselProps) {
  const services = servicesByTab[activeTab] || [];

  return (
    <div className="flex overflow-x-auto gap-6 px-2 scrollbar-hide snap-x snap-mandatory scroll-smooth">
      {services.length > 0 ? (
        services.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] md:w-[340px] snap-start"
          >
            <ServiceCard {...item} />
          </div>
        ))
      ) : (
        <p className="text-gray-500">No services available for this tab.</p>
      )}
    </div>
  );
}

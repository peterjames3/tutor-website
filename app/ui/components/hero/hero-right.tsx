"use client";

import StudentImage from "./student-image";
import { FileText, UsersRound } from "lucide-react";
import { AnimatedStatsCard } from "@/app/ui/components/animation/animated-stats-card";

export default function RightHero() {
  return (
    <div className="h-full px-4 pt-12 relative">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full">
        <StudentImage
          src="/image1.png"
          alt="Student 1"
          rounded="rounded-tl-[100px]"
        />
        <StudentImage
          src="/image 2.png"
          alt="Student 2"
          rounded="rounded-tr-[100px]"
        />
        <StudentImage
          src="/image 3.png"
          alt="Student 3"
          rounded="rounded-bl-[100px]"
        />
        <StudentImage
          src="/image 4.png"
          alt="Student 4"
          rounded="rounded-br-[100px]"
        />
      </div>

      <AnimatedStatsCard
        icon={FileText}
        value="1500+"
        label="Active students"
        position="top-right"
      />

      <AnimatedStatsCard
        icon={UsersRound}
        value="2000+"
        label="Passed exams"
        position="bottom-left"
      />
    </div>
  );
}

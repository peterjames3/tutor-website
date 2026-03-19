"use client";

import ExamImage from "./exam-image";

export default function ExamSection() {
  return (
    <div className="h-full px-4 pt-12 relative">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full">
        <ExamImage
          src="/ged_language.png"
          alt="Student 1"
          rounded="rounded-tl-[100px]"
        />
        <ExamImage
          src="/ged_math.png"
          alt="Student 2"
          rounded="rounded-tr-[100px]"
        />
        <ExamImage
          src="/ged_science.png"
          alt="Student 3"
          rounded="rounded-bl-[100px]"
        />
        <ExamImage
          src="/ged_social.png"
          alt="Student 4"
          rounded="rounded-br-[100px]"
        />
      </div>
    </div>
  );
}

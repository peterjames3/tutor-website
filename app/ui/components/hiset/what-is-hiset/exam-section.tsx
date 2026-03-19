"use client";

import ExamImage from "./exam-image";

export default function ExamSection() {
  return (
    <div className="h-full px-4 pt-12 relative">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full">
        <ExamImage
          src="/hiset_language.png"
          alt="Hiset reading and writing exam"
          rounded="rounded-tl-[100px]"
        />
        <ExamImage
          src="/hiset_math.png"
          alt="Hiset mathematic exam"
          rounded="rounded-tr-[100px]"
        />
        <ExamImage
          src="/hiset_science.png"
          alt="hiset science exam"
          rounded="rounded-bl-[100px]"
        />
        <ExamImage
          src="/hiset_social.png"
          alt="Hiset social study exam"
          rounded="rounded-br-[100px]"
        />
      </div>
    </div>
  );
}

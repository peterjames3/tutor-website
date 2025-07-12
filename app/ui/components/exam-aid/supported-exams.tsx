// app/components/supported-exams.tsx
import { SanityDocument } from "@sanity/client";

import ExamAidSlider from "@/app/ui/components/exam-aid/exam-aid-slider";

interface SupportedExamsProps {
  programs: SanityDocument[];
}
export default function SupportedExams({ programs }: SupportedExamsProps) {
  console.log(`Supported-exams: ${programs.length}`);
  return (
    <section
      id="supported-exams"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We Support a variety of Exams
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We specialize in end-to-end technical support for all proctored
          testing platforms
        </p>
      </div>
      <ExamAidSlider programs={programs} />
    </section>
  );
}

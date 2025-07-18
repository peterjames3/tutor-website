// app/components/supported-exams.tsx
//import { SanityDocument } from "@sanity/client";

import TestPrepSlider from "@/app/ui/components/testprep/TestPrepSlider";
import { TestPrepProgram } from "@/sanity/lib/testprep";
interface SupportedExamsProps {
  programs: TestPrepProgram[];
}
export default function SupportedTestPrep({ programs }: SupportedExamsProps) {

  return (
    <section
      id="supported-exams"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We Support a variety of Exam Preps
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We specialize in end-to-end technical support for all proctored
          testing platforms
        </p>
      </div>
      <TestPrepSlider programs={programs} />
    </section>
  );
}

import { SanityDocument } from "@sanity/client";
import {
  examPrepProgramsQuery,
  examPrepPathsQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/server-fetch";

import Hero from "@/app/ui/components/testprep/hero";
import PrepSection from "@/app/ui/components/testprep/prep-section";

import { WhyChooseUs } from "@/app/ui/components/testprep/why-choose-us";
import TestimonialsSection from "@/app/ui/components/Testimonial/testimonials-section";
import SupportedTestPrep from "@/app/ui/components/testprep/supported-exams-prep";

export default async function TestPrepHome() {
  const ExamPrepData = await sanityFetch<SanityDocument[]>({
    query: examPrepProgramsQuery,
    // tags: ["exams"],
  });
  const ExamPrepPath = await sanityFetch<SanityDocument[]>({
    query: examPrepPathsQuery,
    // tags: ["exams"],
  });

  console.log(`Exam prep paths ${ExamPrepPath.length}`);
  console.log(`Exam prep data ${ExamPrepData.length}`);

  return (
    <>
      <Hero />
      <PrepSection />
      <SupportedTestPrep programs={ExamPrepData} />
      <WhyChooseUs />
      <TestimonialsSection />
    </>
  );
}

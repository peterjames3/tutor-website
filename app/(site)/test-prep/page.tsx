
import {
  examPrepProgramsQuery,

} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/server-fetch";

import Hero from "@/app/ui/components/testprep/hero";
import PrepSection from "@/app/ui/components/testprep/prep-section";

import { WhyChooseUs } from "@/app/ui/components/testprep/why-choose-us";
import TestimonialsSection from "@/app/ui/components/Testimonial/testimonials-section";
import SupportedTestPrep from "@/app/ui/components/testprep/supported-exams-prep";
import  { TestPrepProgram } from '@/sanity/lib/testprep';
export default async function TestPrepHome() {
  const ExamPrepData = await sanityFetch<TestPrepProgram[]>({
    query: examPrepProgramsQuery,
  
  });
 



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

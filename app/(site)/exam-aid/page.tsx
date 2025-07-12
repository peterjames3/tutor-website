import { SanityDocument } from "@sanity/client";
import { examAidProgramsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/server-fetch";

import Hero from "@/app/ui/components/exam-aid/main-hero-section";
import WhyChooseUs from "@/app/ui/components/exam-aid/why-choose-us";
import FAQSection from "@/app/ui/components/exam-aid/faq";

import ProctoredProcess from "../../ui/components/exam-aid/proctored-process";
import SupportedExams from "@/app/ui/components/exam-aid/supported-exams";

import { Services } from "@/app/ui/components/exam-aid/services";

import TestimonialsSection from "@/app/ui/components/Testimonial/testimonials-section";

export default async function TestAidHome() {
  const programs = await sanityFetch<SanityDocument[]>({
    query: examAidProgramsQuery,
    // tags: ["exams"],
  });
  console.log(programs.length);


  return (
    <>
      <Hero />
      <ProctoredProcess />
      <Services />
      <WhyChooseUs />
      <SupportedExams programs={programs} />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}

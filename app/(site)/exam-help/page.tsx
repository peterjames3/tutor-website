//import { SanityDocument } from "@sanity/client";
import { examAidProgramsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/server-fetch";
import { MinimalExamAidProgram } from "@/app/ui/components/exam-aid/exam-aid-slider";

import Hero from "@/app/ui/components/exam-aid/main-hero-section";
import WhyChooseUs from "@/app/ui/components/exam-aid/why-choose-us";
import FAQSection from "@/app/ui/components/exam-aid/faq";

import ProctoredProcess from "../../ui/components/exam-aid/proctored-process";
import SupportedExams from "@/app/ui/components/exam-aid/supported-exams";

import { Services } from "@/app/ui/components/exam-aid/services";

import TestimonialsSection from "@/app/ui/components/Testimonial/testimonials-section";

export const metadata = {
  title: "ExamHelp Services",
  description:
    "Get expert end-to-end exam support aid with real-time guidance, we handle the exam for you-all while you maintain full visibility and control.",
  alternates: {
    canonical: "https://testhelpnow.com/exam-help",
  },
  openGraph: {
    title: "Exam Help Services | TestHelpNow",
    description:
      "Comprehensive exam aid services designed to help you succeed.",
    url: "https://testhelpnow.com/exam-help",
  },
};

export default async function TestHelpHome() {
  const programs = await sanityFetch<MinimalExamAidProgram[]>({
    query: examAidProgramsQuery,
    // tags: ["exams"],
  });

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

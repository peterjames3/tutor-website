//import { SanityDocument } from "@sanity/client";
import { examsWeSupportQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/server-fetch";
import { ExamCard } from "@/app/ui/components/exam-aid/exam-we-support";

import Hero from "@/app/ui/components/exam-aid/main-hero-section";
import WhyChooseUs from "@/app/ui/components/exam-aid/why-choose-us";
import FAQSection from "@/app/ui/components/exam-aid/faq";

import ProctoredProcess from "../../ui/components/exam-aid/proctored-process";
import ExamsWeSupport from "@/app/ui/components/exam-aid/exam-we-support";

import { Services } from "@/app/ui/components/exam-aid/services";
import PortalsSection from "@/app/ui/portal-section";

import TestimonialsSection from "@/app/ui/components/Testimonial/testimonials-section";

export const metadata = {
  title: "Proctored Exam Help Services",
  description:
    "Get expert end-to-end exam support aid with real-time guidance, we handle the exam for you-all while you maintain full visibility and control.",
  alternates: {
    canonical: "https://testhelpnow.com/proctored-exam-help",
  },
  openGraph: {
    title: "Proctored Exam Help Services | TestHelpNow",
    description:
      "Comprehensive exam aid services designed to help you succeed.",
    url: "https://testhelpnow.com/proctored-exam-help",
  },
};

export default async function ProctoredExamHelpHome() {
  const exams = await sanityFetch<ExamCard[]>({
    query: examsWeSupportQuery,
    // tags: ["exams"],
  });

  return (
    <>
      <Hero />
      <ProctoredProcess />
      <Services />
      <WhyChooseUs />
      <ExamsWeSupport exams={exams} />
      <PortalsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}

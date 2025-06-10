"use client";


import Hero from "@/app/ui/components/exam-aid/main-hero-section";
import WhyChooseUs from "@/app/ui/components/exam-aid/why-choose-us";
import FAQSection from "@/app/ui/components/exam-aid/faq";

import ProctoredProcess from "../ui/components/exam-aid/proctored-process";
import SupportedExams from "@/app/ui/components/exam-aid/supported-exams";

import { Services } from "@/app/ui/components/exam-aid/services";

import TestimonialsSection from "@/app/ui/components/Testimonial/testimonials-section";


export default function TestPrepHome() {
 

  return (
    <>
      <Hero />
      <ProctoredProcess />
      <Services />
      <WhyChooseUs />
      <SupportedExams />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}

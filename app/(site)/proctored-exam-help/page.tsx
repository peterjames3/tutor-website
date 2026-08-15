//import { SanityDocument } from "@sanity/client";
import { allExamServicePagesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/server-fetch";
import { ExamCard } from "@/app/ui/components/exam-aid/exam-we-support";
import ProctoredExamFAQSchema from "./_schema";
import Hero from "@/app/ui/components/exam-aid/main-hero-section";
import WhyChooseUs from "@/app/ui/components/exam-aid/why-choose-us";
import FAQSection from "@/app/ui/components/exam-aid/faq";
import ShapoReviews from "@/app/ui/Shaporeviews";
import ProctoredProcess from "../../ui/components/exam-aid/proctored-process";
import ExamsWeSupport from "@/app/ui/components/exam-aid/exam-we-support";
import ProctoredSeoContent from "../../ui/components/exam-aid/proctored-seo-content";
import { Services } from "@/app/ui/components/exam-aid/services";
import PortalsSection from "@/app/ui/portal-section";

import Quote from "@/app/ui/components/form/quote";
import TestimonialsSection from "@/app/ui/components/Testimonial/testimonials-section";

export const metadata = {
  title: "Pay Someone To Take My Proctored Exam Service",
  description:
    "Certified experts take your online proctored exam on your behalf — ProctorU, Examity, Respondus, Honorlock, and more. Guaranteed results, 100% confidential, available 24/7 across the USA and Canada.",
  alternates: {
    canonical: "https://testhelpnow.com/proctored-exam-help",
  },
  openGraph: {
    title: "Pay Someone To Take My Proctored Exam | USA & Canada ",
    description:
      "Comprehensive exam aid services designed to help you succeed.",
    url: "https://testhelpnow.com/proctored-exam-help",
  },
};

export default async function ProctoredExamHelpHome() {
  const exams = await sanityFetch<ExamCard[]>({
    query: allExamServicePagesQuery,
    // tags: ["exams"],
  });

  return (
    <>
    <ProctoredExamFAQSchema />
      <Hero />
      <ProctoredProcess />
      <Services />
      <WhyChooseUs />
      <ExamsWeSupport exams={exams} />
      <ProctoredSeoContent />
      <PortalsSection />
      <TestimonialsSection />

      <Quote />
      <ShapoReviews />
      <FAQSection />
    </>
  );
}

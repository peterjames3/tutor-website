import { examPrepProgramsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/server-fetch";

import Hero from "@/app/ui/components/testprep/hero";
import PrepSection from "@/app/ui/components/testprep/prep-section";

import { WhyChooseUs } from "@/app/ui/components/testprep/why-choose-us";
import TestimonialsSection from "@/app/ui/components/Testimonial/testimonials-section";
import SupportedTestPrep from "@/app/ui/components/testprep/supported-exams-prep";
import { TestPrepProgram } from "@/sanity/lib/testprep";

export const metadata = {
  title: "Test Preparation Services",
  description:
    "Ace your exams with our expert-led test preparation services. Get personalized study plans, practice materials, and proven strategies for success.",
  alternates: {
    canonical: "https://testhelpnow.com/test-prep",
  },
  openGraph: {
    title: "Test Preparation Services | TestHelpNow",
    description:
      "Boost your exam scores with tailored test prep. Learn smarter with expert guidance, practice tests, and success-focused strategies.",
    url: "https://testhelpnow.com/test-prep",
  },
};
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

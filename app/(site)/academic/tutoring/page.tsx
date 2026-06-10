import Hero from "@/app/ui/components/tutoring/hero-main-section";
import WhyChooseUs from "@/app/ui/components/tutoring/why-choose-us";
import SubTestimonialCard from "@/app/ui/components/tutoring/sub-testimonial";
import TutoringFeatures from "@/app/ui/components/tutoring/tutoring-component";
import SubjectsSection from "@/app/ui/components/tutoring/some-subject-covered";
import type { Metadata } from "next";
import TutoringSchema from "./_schema";

export const metadata: Metadata = {
  title: "Online Tutoring Services",
  description: "Personalized online tutoring with expert tutors.",
  alternates: {
    canonical: "https://testhelpnow.com/academic/tutoring",
  },
};
export default function TutoringPage() {
  return (
    <>
      <TutoringSchema />
      <Hero />
      <WhyChooseUs />
      <SubTestimonialCard />
      <TutoringFeatures />
      <SubjectsSection />
    </>
  );
}

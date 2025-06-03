// import { GraduationCap, MoveRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
import Hero from "@/app/ui/components/hero/main-hero";
import StatsSection from "./ui/components/stats/stats-section";
import SubService from "./ui/components/heroservice/subservices-section";
import TestServices from "./ui/components/exam/test-services-section";
import SubTestimonialCard from "./ui/components/Testimonial/sub-testimonial";
import SuccessPath from "./ui/components/path/success-path";

export default function Page() {
  return (
    <main className="">
      <Hero />
      <StatsSection />
      <SubService />
      <TestServices />
      <SubTestimonialCard />
      <SuccessPath />
    </main>
  );
}

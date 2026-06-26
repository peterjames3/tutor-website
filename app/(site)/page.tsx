
import Hero from "@/app/ui/components/hero/main-hero";
import StatsSection from "../ui/components/stats/stats-section";
import SubService from "../ui/components/heroservice/subservices-section";
import TestServices from "../ui/components/exam/test-services-section";
import SubTestimonialCard from "../ui/components/Testimonial/sub-testimonial";
import SuccessPath from "../ui/components/path/success-path";
import TestimonialsSection from "../ui/components/Testimonial/testimonials-section";
import { AnimatedBanner } from "../ui/animated-banner";
import SEOContent from '../ui/seo-content'
import PortalsSection from "../ui/portal-section"
import { OtherLinksSection } from "../ui/components/otherlinks/other-links-section";
import HomeSchema from "./_schema";

export const metadata = {
  title: "Pay Someone to Take My Online Exam | AllExamHelper | Exam Taker",
  description:
    "Pay someone to take your online exam with expert exam takers. Secure, confidential, and reliable online exam help for students.",
    
};
export default function Page() {
  return (
    <main className="">
      <HomeSchema />
      <Hero />
      <StatsSection />
      <SubService />
      <TestServices />
      <SubTestimonialCard />
      <SEOContent />
      <PortalsSection />
      <SuccessPath />
      <TestimonialsSection />
      <AnimatedBanner />
      <OtherLinksSection />
    </main>
  );
}

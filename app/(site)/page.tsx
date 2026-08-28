import { Metadata } from "next";
import Hero from "@/ui/components/hero/main-hero";
import StatsSection from "@/ui/components/stats/stats-section";
import SubService from "@/ui/components/heroservice/subservices-section";
import TestServices from "@/ui/components/exam/test-services-section";
import SubTestimonialCard from "@/ui/components/Testimonial/sub-testimonial";
import SuccessPath from "@/ui/components/path/success-path";
import TestimonialsSection from "@/ui/components/Testimonial/testimonials-section";
import { AnimatedBanner } from "@/ui/animated-banner";
import SEOContent from "@/ui/seo-content";
import AboutUsSection from "@/ui/components/about/aboutus-section";
import PortalsSection from "@/ui/portal-section";
import PMPExamFAQSection from "@/ui/components/faq/pmp-faq";
import HomeSchema from "./_schema";

export const metadata: Metadata = {
  title: "TestHelpNow | #1 Online Exam Help, Proctored Exam Taker & Tutoring Services",
  description:
    "Pay someone to take your online proctored exam. Expert exam takers for PMP, SHRM, PRINCE2, GED, HiSET & more. 100% confidential, secure, and guaranteed results. Get your free quote today.",
  
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "TestHelpNow | #1 Online Exam Help, Proctored Exam Taker & Tutoring Services",
    description:
      "Pay someone to take your online proctored exam. Expert exam takers for PMP, SHRM, PRINCE2, GED, HiSET & more. 100% confidential, secure, and guaranteed results.",
    url: "/",
    images: [
      {
        url: "/og/homepage-og-image.png",
        width: 1200,
        height: 630,
        alt: "TestHelpNow - Online Exam Help & Proctored Exam Taker Services",
      },
    ],
  },

  keywords: [
    "pay someone to take my online exam",
    "proctored exam help",
    "online exam taker",
    "PMP exam help",
    "SHRM exam help",
    "PRINCE2 exam help",
    "GED exam help",
    "HiSET exam help",
    "exam help service",
    "online test taker",
    "take my proctored exam",
    "exam assistance",
    "test taking service",
    "professional exam help",
    "tutoring services",
  ],

  other: {
    "og:phone_number": "+1(469) 428-4470",
    "og:email": "info@testhelpnow.com",
    "og:country-name": "United States",
  },
};

export default function Page() {
  return (
    <main className="">
      <HomeSchema />
      <Hero />
      <StatsSection />
      <AboutUsSection />
      <SubService />
      <TestServices />
      <SubTestimonialCard />
      <SEOContent />
      <PortalsSection />
      <SuccessPath />
      <TestimonialsSection />
      <AnimatedBanner />
      <PMPExamFAQSection />
    </main>
  );
}
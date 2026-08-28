import { Metadata } from "next";
import Hero from "@/ui/components/testprep/hero";
import HireSomeoneSection from "@/ui/components/testprep/hire-someone";
import GoToChoice from "@/ui/components/testprep/go-to-choice";
import RealEstateSeoContent from "@/ui/components/testprep/real-state-seo-content";
import { WhyChooseUs } from "@/ui/components/testprep/why-choose-us";
import RealEstateFAQSection from "@/ui/components/faq/real-estate-faq";
import TestimonialsSection from "@/ui/components/Testimonial/testimonials-section";
import RealEstateExamSchema from "./_schema";

export const metadata: Metadata = {
  // Uses layout template: "Real Estate Exam Help | Pass Your Licensing Exam | TestHelpNow"
  title: "Real Estate Exam Help | Pass Your Licensing Exam",
  
  description:
    "Pay someone to take your real estate licensing exam. Expert help for salesperson and broker exams. National & state-specific coverage. 100% confidential & guaranteed results.",

  alternates: {
    canonical: "/real-estate-exam-help",
  },

  openGraph: {
    title: "Real Estate Exam Help | Pass Your Licensing Exam | TestHelpNow",
    description:
      "Pay someone to take your real estate licensing exam. Expert help for salesperson and broker exams. National & state-specific coverage. 100% confidential & guaranteed results.",
    url: "/real-estate-exam-help",
    images: [
      {
        url: "/og/real-estate-exam-help-og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Exam Help - TestHelpNow",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Estate Exam Help | Pass Your Licensing Exam | TestHelpNow",
    description:
      "Pay someone to take your real estate licensing exam. Expert help for salesperson and broker exams. National & state-specific coverage. 100% confidential & guaranteed results.",
    images: ["/og/real-estate-exam-help-og-image.png"],
  },

  keywords: [
    "real estate exam help",
    "pay someone to take my real estate exam",
    "real estate licensing exam",
    "real estate exam helper",
    "real estate license exam help",
    "salesperson license exam",
    "broker license exam",
    "national real estate exam",
    "state real estate exam",
    "real estate exam assistance",
    "NAR exam help",
    "PSI real estate exam",
    "ARELLO exam help",
    "DRE exam help",
    "TREC exam help",
    "real estate certification help",
  ],

  other: {
    "og:phone_number": "+1(469) 428-4470",
    "og:email": "info@testhelpnow.com",
    "og:country-name": "United States",
  },
};

export default async function TestPrepHome() {
  return (
    <>
      <RealEstateExamSchema />
      <Hero />
      <GoToChoice />
      <HireSomeoneSection />
      <RealEstateSeoContent />
      <WhyChooseUs />
      <TestimonialsSection />
      <RealEstateFAQSection />
    </>
  );
}
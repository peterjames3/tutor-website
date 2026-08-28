import { Metadata } from "next";
import Hero from "@/ui/components/pmp/main-hero";
import HireSomeoneSection from "@/ui/components/pmp/hire-someone";
import SEOCONTENT from "@/ui/components/pmp/seo-content";
import PMPEXAM from "@/ui/components/pmp/pmp-exam";
import PMPExamFAQSection from "@/ui/components/faq/pmp-faq";
import WhyWeLead from "@/ui/components/pmp/why-we-lead";
import TestimonialsSection from "@/ui/components/Testimonial/testimonials-section";
import PmpSchema from "./_schema";

export const metadata: Metadata = {
  // Uses layout template: "Pay Someone to Take My PMP Exam | PMP Exam Help | TestHelpNow"
  title: "Pay Someone to Take My PMP Exam | PMP Exam Help",

  description:
    "Pay someone to take your PMP exam with PMI-certified exam takers. 100% confidential, secure, and guaranteed results. Pass your PMP certification on the first attempt.",

  alternates: {
    canonical: "/take-my-pmp-exam-for-me",
  },

  openGraph: {
    title: "Pay Someone to Take My PMP Exam | PMP Exam Help | TestHelpNow",
    description:
      "Pay someone to take your PMP exam with PMI-certified exam takers. 100% confidential, secure, and guaranteed results. Pass your PMP certification on the first attempt.",
    url: "/take-my-pmp-exam-for-me",
    images: [
      {
        url: "/og/pmp-exam-help-og-image.png",
        width: 1200,
        height: 630,
        alt: "PMP Exam Help - Pay Someone to Take My PMP Exam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pay Someone to Take My PMP Exam | PMP Exam Help | TestHelpNow",
    description:
      "Pay someone to take your PMP exam with PMI-certified exam takers. 100% confidential, secure, and guaranteed results. Pass your PMP certification on the first attempt.",
    images: ["/og/pmp-exam-help-og-image.png"],
  },

  keywords: [
    "pay someone to take my pmp exam",
    "pmp exam help",
    "pmp exam taker",
    "pmp certification help",
    "take my pmp exam for me",
    "pmi certified exam takers",
    "pmp proctored exam help",
    "pmp exam assistance",
    "project management certification help",
    "pmp exam taking service",
    "pay someone to do my pmp exam",
    "pmp exam helper",
    "pmp exam support",
    "pearson vue pmp exam help",
    "pmp certification assistance",
    "pmp exam pass guarantee",
  ],

  other: {
    "og:phone_number": "+1(469) 428-4470",
    "og:email": "info@testhelpnow.com",
    "og:country-name": "United States",
  },
};

export default function TAKEMYPMPEXAMFORME() {
  return (
    <>
      <PmpSchema />
      <Hero />
      <PMPEXAM />
      <WhyWeLead />
      <HireSomeoneSection />
      <SEOCONTENT />
      <TestimonialsSection />
      <PMPExamFAQSection />
    </>
  );
}

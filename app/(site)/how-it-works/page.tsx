import { Metadata } from "next";
import Hero from "@/ui/components/howitworks/main.hero";
import StepSection from "@/ui/components/three-steps/step-section";
import SuccessReasons from "@/ui/success-reasons";
import { AnimatedBanner } from "@/ui/components/howitworks/animater-banner";
import HowItWorksSchema from "./_schema";
import StatsSection from "@/ui/components/stats/stats-section";
import Quote from "@/ui/components/form/quote";
import FAQSection from "@/ui/components/howitworks/faq";
import ShapoReviews from "@/ui/Shaporeviews";

export const metadata: Metadata = {
  // Uses layout template: "How Proctored Exam Support Works | 3 Steps to Expert Help | TestHelpNow"
  title: "How Proctored Exam Help Works | 3 Steps to Expert Help",
  description:
    "See exactly how TestHelpNow works. Browse services, fill a quick form, and get matched with a certified exam expert in minutes.",
  
  alternates: {
    canonical: "/how-it-works",
  },

  openGraph: {
    title: "How TestHelpNow Works | 3 Steps to Expert Exam Help",
    description:
      "Browse services, fill a quick form, and get matched with a certified exam expert in minutes. Guaranteed confidential exam assistance.",
    url: "/how-it-works",
    type: "website",
    images: [
      {
        url: "/og/how-it-works-og-image.png",
        width: 1200,
        height: 630,
        alt: "How TestHelpNow Works - 3 Step Exam Help Process",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How TestHelpNow Works | 3 Steps to Expert Exam Help",
    description:
      "Browse services, fill a quick form, and get matched with a certified exam expert in minutes.",
    images: ["/og/how-it-works-og-image.png"],
  },
};

export default function HowItWorks() {
  return (
    <>
      <HowItWorksSchema />
      <Hero />
      <StepSection />
      <ShapoReviews className="py-12 bg-gray-50" />
      <StatsSection />
      <SuccessReasons />
      <Quote />
      <AnimatedBanner />
      <FAQSection />
    </>
  );
}
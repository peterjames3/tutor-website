import Hero from "@/ui/components/howitworks/main.hero";
import StepSection from "@/ui/components/three-steps/step-section";
import SuccessReasons from "@/ui/success-reasons";
import { AnimatedBanner } from "@/ui/components/howitworks/animater-banner";
import HowItWorksSchema from "./_schema";
//import StatsSection from "../ui/components/stats/stats-section";
import StatsSection from "@/ui/components/stats/stats-section";
import Quote from "@/ui/components/form/quote";
import FAQSection from "@/ui/components/howitworks/faq";
import ShapoReviews from "@/ui/Shaporeviews";
export const metadata = {
  title:
    "How Proctored  Exam Support  Works - Get Expert Exam Help in 3 Steps | TestHelpNow",
  description:
    "See exactly how  TestHelpNow works. Browse services, fill a quick form, and get matched with a certified exam expert in minutes",
  openGraph: {
    title: "How TestHelpNow Works - 3 Steps to Expert Exam help",
    description:
      " Browse services, fill a quick form, and get matched with a certified exam expert in minutes. See how TestHelpNow delivers expert exam help in 3 simple steps.",
    url: "https://testhelpnow.com/how-it-works",
    siteName: "TestHelpNow",
    locale: "en_US",
    type: "website",
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

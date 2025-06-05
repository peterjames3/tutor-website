import Hero from "@/app/ui/components/howitworks/main.hero";
import StepSection from "@/app/ui/components/three-steps/step-section";
import SuccessReasons from "../ui/success-reasons";
import { AnimatedBanner } from "../ui/components/howitworks/animater-banner";
export default function HowItWorks() {
  return (
    <>
      <Hero />
      <StepSection />
      <SuccessReasons />
      <AnimatedBanner />
    </>
  );
}

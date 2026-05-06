import Hero from "@/app/ui/components/pmp/main-hero";
//import HeroRight from "@/app/ui/components/pmp/hero-right";
import SEOCONTENT from "@/app/ui/components/pmp/seo-content";
import PMPEXAM from "@/app/ui/components/pmp/pmp-exam";
import PmpSchema from "./_schema";

export const metadata = {
  title: "Pay Someone to Take My PMP Exam | PMP Exam Help",
  description:
    "Pay someone to take your PMP exam with expert exam takers. Secure, confidential, and reliable PMP exam help for project management professionals.",
};
export default function TAKEMYPMPEXAMFORME() {
  return (
    <>
     <PmpSchema />
      <Hero />
      <PMPEXAM />
      <SEOCONTENT />
    </>
  );
}

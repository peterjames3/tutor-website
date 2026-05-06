import Hero from "@/app/ui/components/ged/main-hero";
//import HeroRight from "@/app/ui/components/pmp/hero-right";
import SEOCONTENT from "@/app/ui/components/ged/seo-content";
import GEDEXAM from "@/app/ui/components/ged/ged-exam";
import GedSchema from "./_schema";
export const metadata = {
  title: "Pay Someone to Take My GED Exam | GED Exam Help",
  description:
    "Pay someone to take your GED exam with expert exam takers. Secure, confidential, and reliable GED exam help.",
};
export default function TAKEMYGEDEXAMFORME() {
  return (
    <>
      <GedSchema />
      <Hero />
      <GEDEXAM />
      <SEOCONTENT />
    </>
  );
}

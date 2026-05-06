import Hero from "@/app/ui/components/hiset/main-hero";
//import HeroRight from "@/app/ui/components/pmp/hero-right";
import SEOCONTENT from "@/app/ui/components/hiset/seo-content";
import GEDEXAM from "@/app/ui/components/hiset/hiset-exam";
import HisetSchema from "./_schema";
export const metadata = {
  title: "Pay Someone to Take My HiSET Exam | HiSET Exam Help",
  description:
    "Pay someone to take your HiSET exam with expert exam takers. Secure, confidential, and reliable GED exam help.",
};
export default function TAKEMYHISETEXAMFORME() {
  return (
    <>
      <HisetSchema />
      <Hero />
      <GEDEXAM />
      <SEOCONTENT />
    </>
  );
}

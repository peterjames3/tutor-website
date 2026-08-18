"use client";
import LeftHero from "./hero-left";
import RightHero from "./hero-right";
import FloatingElements from "../animation/FloatingElements";

export default function MainHero() {
  
  return (
    <section
      id="hero-main"
      className="bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] py-18 md:py-22 z-10 relative"
    >
      
        <div className="pt-[8rem] py-2 w-full mx-auto max-w-310 px-4 flex  flex-col gap-10 lg:flex-row  md:justify-between">
          <div className="w-full lg:w-1/2">
            <LeftHero />
          </div>
          <div className="w-full lg:w-1/2">
            {" "}
            <RightHero />{" "}
          </div>
        </div>
     
      <FloatingElements />
    </section>
  );
}

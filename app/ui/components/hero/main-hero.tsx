"use client";
import LeftHero from "./hero-left";
import RightHero from "./hero-right";
import FloatingElements from "../animation/FloatingElements";
import { motion, AnimatePresence } from "framer-motion";
import MultiStepForm from "@/app/ui/components/form/MultiStepForm";
import { useUIState, useUIDispatch } from "@/context/UIContext";
export default function MainHero() {
  const { isVisible } = useUIState();
  const dispatch = useUIDispatch();
  return (
    <section className="bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] min-h-screen z-10 relative">
      {isVisible ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="form"
            className="py-[5rem] w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] px-4 md:px-2 lg:px-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <MultiStepForm
              onBack={() => {
                dispatch({ type: "HIDE_HELP" });
              }}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="pt-[10rem] py-2 w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] flex  flex-col gap-10 lg:flex-row  md:justify-between">
          <div className="w-full lg:w-1/2">
            <LeftHero />
          </div>
          <div className="w-full lg:w-1/2">
            {" "}
            <RightHero />{" "}
          </div>
        </div>
      )}

      <FloatingElements />
    </section>
  );
}

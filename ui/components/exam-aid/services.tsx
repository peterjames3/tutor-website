"use client";
import { motion } from "motion/react";
import SlideInContainer from "@/ui/components/animation/SlideInContainer";
import {
  ScanFace,
  MonitorOff,
  Timer,
  Eye,
  Wifi,
  ClipboardCheck,
} from "lucide-react";

export function Services() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const benefits = [
    {
      title: "Identity verification",
      description:
        "Webcam ID checks, face matching, and biometric prompts — we handle every verification step each platform requires before the exam begins.",
      icon: <ScanFace className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Lockdown browsers",
      description:
        "Respondus, ExamSoft, and similar tools restrict all other applications. Our experts operate within these environments without triggering alerts.",
      icon: <MonitorOff className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Timed pressure",
      description:
        "Strict time limits with no pause option. Our experts manage pacing across every section so nothing is left unanswered when the clock runs out.",
      icon: <Timer className="w-6 h-6 text-green-500" />,
    },
    {
      title: "AI behaviour monitoring",
      description:
        "Modern proctoring tools flag unusual eye movement, typing rhythm, and tab switching. We know exactly what each platform watches for.",
      icon: <Eye className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Technical disconnects",
      description:
        "Crashes and dropped connections happen. We stay on standby to rejoin and resume instantly without affecting your exam record.",
      icon: <Wifi className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Post-exam debrief",
      description:
        "After every session we confirm your results are posted correctly and handle any follow-up the platform requires.",
      icon: <ClipboardCheck className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <section className="w-full py-20  bg-tertiary-30">
      <div className="w-full max-w-full lg:max-w-310 px-4 mx-auto">
        {/* Header */}
        <SlideInContainer direction="down" distance={30} className="mb-12">
          <section className="lg:flex lg:items-center gap-5 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="mb-3 label-text">What we handle on exam day</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Every challenge proctored exams throw at you
              </h2>
            </div>
            <div className="w-full lg:w-1/2 title">
              <p>
                Proctored platforms are built to be stressful — webcam checks,
                lockdown browsers, identity verification, timed pressure, and AI
                monitoring. Our experts know every platform&apos;s exact
                behaviour and navigate each one without triggering flags.
              </p>
            </div>
          </section>
        </SlideInContainer>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <SlideInContainer
              key={index}
              direction="up"
              distance={40}
              delay={0.1 + index * 0.1}
              className="h-full"
            >
              <div className=" px-7 py-10 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col hover:bg-background transition-all delay-300 hover:cursor-pointer">
                <div className="flex flex-col items-start gap-4 mb-4">
                  <div className="flex-shrink-0 mt-1 text-xl bg-accent rounded-full p-5">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="title font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
                <p className="text-primary p-text">{benefit.description}</p>
              </div>
            </SlideInContainer>
          ))}
        </div>

        {/* CTA */}
        <SlideInContainer
          direction="up"
          delay={0.6}
          className="text-center mt-16"
        >
          <motion.button
            onClick={scrollToTop}
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow-md"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Start Your Success Journey Today
          </motion.button>
        </SlideInContainer>
      </div>
    </section>
  );
}

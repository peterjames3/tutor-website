"use client";
import { motion } from "framer-motion";
import SlideInContainer from "@/app/ui/components/animation/SlideInContainer";
import { MessageSquare, Calendar, ClipboardPen, Target } from "lucide-react";

export function WhyChooseUs() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const benefits = [
    {
      title: "10+ Years of Expertise",
      description: "Trust our decades of experience for your success.",
      icon: <MessageSquare className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Personalized Study Plan",
      description: "Custom study schedule based on your target score",
      icon: <Calendar className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Streamlined Process",
      description:
        "Get the right academic support—quickly and effectively. No hassle, just results.",
      icon: <ClipboardPen className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Extensive Practice Materials",
      description:
        "Thousands of hours spent developing new content for the digital exam.",
      icon: <Target className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-2 lg:px-3 bg-tertiary-30">
      <div className="w-full  max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto  ">
        {/* Header */}
        <SlideInContainer direction="down" distance={30} className=" mb-12">
          <section className="lg:flex lg:items-center gap-5 lg:gap-16 ">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
                Why Choose The Edusion for <br />
                your Tutoring and Test Prep
              </h2>
            </div>
            <div className="w-full lg:w-1/2 title">
              <p>
                Our streamlined process ensures you get the right academic{" "}
                support-quickly and effectively. No hassle, just results.
              </p>
            </div>
          </section>
        </SlideInContainer>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <SlideInContainer
              key={index}
              direction="up"
              distance={40}
              delay={0.1 + index * 0.1}
              className="h-full"
            >
              <div className="bg-background px-7 py-10 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
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

"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Headphones, Settings } from "lucide-react";
import Image from "next/image";


export default function WhyChooseUs() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  const benefits = [
    {
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      title: "Trusted by 1,500+ Students & Professionals",
      description: "Our proctored exam help is trusted by students and professionals across the USA, Canada, UK, and beyond. Join thousands who have successfully passed their exams with our online exam helper service.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "100% Confidential & Secure Sessions",
      description: "We prioritize confidentiality and security in every session. Military-grade encryption, strict NDAs, and no data storage after exams. Your privacy is our priority when you pay someone to take your proctored exam.",
    },
    {
      icon: <Headphones className="w-5 h-5 text-emerald-500" />,
      title: "24/7 Technical Support Before & During Exams",
      description: "Our dedicated support team is available around the clock to assist with technical issues, proctoring platforms, and last-minute concerns. We ensure your proctored exam help experience is smooth and stress-free.",
    },
    {
      icon: <Settings className="w-5 h-5 text-emerald-500" />,
      title: "Personalized Setup to Avoid Last-Minute Issues",
      description: "We provide personalized setup help to avoid last-minute issues. From system compatibility checks to mock proctoring sessions, we ensure everything is configured correctly before your exam day.",
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-500" />,
      title: "24/7 Availability for International Clients",
      description: "We serve clients across all time zones. Whether you're in New York, London, Dubai, or Singapore, our proctored exam help is available whenever you need it — day or night.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-full lg:max-w-310 px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Our <br /> Proctored Exam Help Services?
          </motion.h2>

          <motion.p variants={item} className="text-lg text-gray-600 mb-8">
            Looking for reliable <strong>proctored exam help</strong>? Our <strong>online exam helper</strong> service is trusted by students and professionals worldwide. Whether you need to <strong>pay someone to take your online exam</strong> or simply want expert guidance, we prioritize confidentiality, security, and guaranteed results in every session.
          </motion.p>

          <motion.ul variants={container} className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                variants={item}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mt-0.5">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                  <p className="text-sm text-gray-600 mt-0.5">{benefit.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700">⭐⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-500">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700">🏆</span>
              <span className="text-sm text-gray-500">99% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700">🔒</span>
              <span className="text-sm text-gray-500">100% Confidential</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/trust.png"
            alt="Professional proctored exam help and online exam assistance services"
            fill
            className="object-cover"
            
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          
          {/* Overlay Badge */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium text-gray-800">
              <span className="text-emerald-600 font-bold">1,500+</span> Exams Completed
            </p>
            <p className="text-xs text-gray-500">Trusted by professionals worldwide for proctored exam help</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

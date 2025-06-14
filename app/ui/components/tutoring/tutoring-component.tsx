"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BarChart2, Clock, Award } from "lucide-react";

export default function TutoringFeatures() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Comprehensive practice test library",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      text: "Targeted section practice tests",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Exclusive study materials",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      text: "Personalized performance analytics",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "24/7 access to expert tutors",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-background text-primary">
      <div className="w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] px-4 md:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-12"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Expert Tutoring for Academic <br />
            Excellence
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl text-primary max-w-3xl mx-auto"
          >
            Personalized learning programs tailored to your success
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="space-y-8"
          >
            {/* Premium Tutoring */}
            <motion.div
              variants={item}
              className="bg-tertiary-30 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Award className="text-yellow-400" />
                Premium Expert Tutoring
              </h3>
              <p className="text-primary">
                Comprehensive hours of personalized instruction for optimal
                results
              </p>
            </motion.div>

            {/* Live Sessions */}
            <motion.div
              variants={item}
              className="bg-tertiary-30 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-3">
                Interactive Live Sessions
              </h3>
              <p className="text-primary">
                Real-time learning with top-qualified tutors
              </p>
            </motion.div>

            {/* Guarantee */}
            <motion.div
              variants={item}
              className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-3">Success Guarantee</h3>
              <p className="text-white/90">
                Significant academic improvement or your money back*
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="bg-tertiary-30 backdrop-blur-sm p-8 rounded-xl border border-white/20"
          >
            <motion.h3 variants={item} className="text-2xl font-bold mb-6">
              Our Learning Features
            </motion.h3>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  custom={index}
                  className="flex items-start gap-3"
                >
                  <span className="text-yellow-400 mt-0.5">{feature.icon}</span>
                  <span className="text-primary">{feature.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm text-primary/70 mt-8 text-center"
        >
          *Terms and conditions apply. See guarantee details for more
          information.
        </motion.p>
      </div>
    </section>
  );
}

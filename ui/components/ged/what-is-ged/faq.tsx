"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  HelpCircle,
  MonitorCheck,
} from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Exam Support",
      icon: <MonitorCheck className="w-5 h-5 text-blue-600" />,
      questions: [
        {
          question: "What types of exams do you support?",
          answer:
            "We support all major online proctored exams including Pearson VUE, ProctorU, Examity, Respondus, and institution-specific platforms. This includes certification exams (AWS, Microsoft, CompTIA), academic tests, and professional licensure exams.",
        },
        {
          question: "Is paying someone to take my GED test for me legal?",
          answer:
            "Yes, it is completely logical and legit if you take assistance in your GED exam from third-party resources. At TestHelpNow, we place high value on privacy and confidentiality to make sure that the identity of our client is never revealed.",
        },
        {
          question: " Can I get urgent same-day GED help?",
          answer:
            "Yes! We offer urgent and same-day GED exam help. our expert team responds fast, assigns an expert quickly, and ensures smooth exam completion without delays or stress.",
        },
        {
          question: "How do I check the status of my order?",
          answer:
            "You can track your order via email. you may also ask our support team, available 24/7  to answer your question",
        },
      ],
    },
    {
      category: "Security & Confidentiality",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question:
            "How is security and privacy maintained throughout the PMP exam?",
          answer:
            "Absolutely. We use sophisticated anonymity protocols, specialized IP addresses, SSL-encrypted platform and we never store personal data after sessions, and all technicians sign strict NDAs. Your exam content and credentials are never recorded or shared.",
        },
        {
          question: "Is your service allowed for official exams?",
          answer:
            "Yes, we operate within all major testing platforms' guidelines. We provide technical support only—all exam content is handled solely by you to maintain academic integrity.",
        },
      ],
    },
    {
      category: "Technical Requirements",
      icon: <HelpCircle className="w-5 h-5 text-purple-600" />,
      questions: [
        {
          question: "What if I have technical issues during my exam?",
          answer:
            "Our 24/7 support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems without disrupting your exam progress.",
        },
        {
          question: "What occurs if the specialist fails the GED exam",
          answer:
            "It is not possible that our GED certified expert get failed to provide 100% success results. However, you are entitled to a complete refund if the anticipated outcomes are not obtained due to any technical reasons. Our first priorities are your success and pleasure.",
        },
        {
          question: "Do you help with system setup before exams?",
          answer:
            "Yes, we offer pre-exam checks including system compatibility tests, software installation, mock proctoring sessions, and configuration of all required exam settings.",
        },
      ],
    },
  ];

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            FAQs
          </h1>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary ">
            Find answers to common questions about our proctoring services
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="flex items-center bg-gray-50 px-6 py-4">
                <div className="mr-3">{category.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {category.category}
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {category.questions.map((item, index) => {
                  const globalIndex =
                    faqs
                      .slice(0, catIndex)
                      .reduce((acc, curr) => acc + curr.questions.length, 0) +
                    index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium  text-[1rem] lg:text-[1.3rem] text-primary">
                          {item.question}
                        </span>
                        {activeIndex === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: activeIndex === globalIndex ? "auto" : 0,
                          opacity: activeIndex === globalIndex ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 text-[1rem] lg:text-[1.3rem]">
                          {item.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Still have questions?</p>

          <Link
            href="/contact"
            className="px-6 py-3 bg-button-login-default text-white font-medium rounded-lg hover:bg-button-login-hover transition-colors shadow-sm"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

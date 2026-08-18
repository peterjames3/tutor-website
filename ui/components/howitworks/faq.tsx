"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  HelpCircle,
  MonitorCheck,
  ClipboardList,
} from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "How It Works",
      icon: <ClipboardList className="w-5 h-5 text-orange-500" />,
      questions: [
        {
          question:
            "How quickly will I be matched with an expert after submitting the form?",
          answer:
            "In most cases you'll be matched within a few hours of submitting your order form. Our team reviews every request promptly and will contact you directly to confirm your expert assignment, verify your exam details, and walk you through the next steps.",
        },
        {
          question:
            "What if I need help with my exam today — do you offer same-day support?",
          answer:
            "Yes. We offer same-day and urgent exam support depending on availability. Contact our team immediately via the order form or email us directly at info@testhelpnow.com and we'll do everything we can to match you with an available expert for your exam date.",
        },
        {
          question:
            "Is my information kept confidential throughout the process?",
          answer:
            "Yes, completely. We use SSL-encrypted platforms and sophisticated anonymity protocols throughout every session. All experts sign strict NDAs before working with any client. Your identity, exam credentials, and personal data are never stored, recorded, or shared with any third party.",
        },
        {
          question: "What happens if the expert doesn't pass my exam?",
          answer:
            "You are entitled to a full refund. We stand behind our guaranteed results policy — if the assigned expert does not achieve the agreed outcome for any reason, we will issue a complete refund with no questions asked. Contact our support team and we will resolve it immediately.",
        },
        {
          question:
            "Do I need to do anything during the exam, or do you handle everything?",
          answer:
            "You log in to your exam account to start the session, then our expert takes over remotely from there. You don't need to answer any questions or stay active — your expert handles the exam end-to-end. We walk you through the exact login steps beforehand so there's no confusion on exam day.",
        },
      ],
    },
    {
      category: "Exam Support",
      icon: <MonitorCheck className="w-5 h-5 text-blue-600" />,
      questions: [
        {
          question: "What types of exams do you support?",
          answer:
            "We support a wide range of online proctored exams including GED, HiSET, PMP, and other academic or professional certification tests delivered through platforms like Pearson VUE, ProctorU, Examity, and Respondus. If you're unsure whether your exam is covered, contact us and we'll confirm before you place an order.",
        },
        {
          question: "How does the 'on-behalf' support work?",
          answer:
            "You log in to your exam platform to initiate the session. Once the exam starts, our expert takes over your session remotely and completes the exam on your behalf. You don't need to answer any questions — we handle everything from the first question through to final submission. Our team also prepares you for the login process in advance so exam day runs smoothly.",
        },
      ],
    },
    {
      category: "Security & Confidentiality",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question: "Is my information kept confidential?",
          answer:
            "Absolutely. Every expert signs a strict NDA before being assigned to any client. We use SSL-encrypted platforms and anonymity protocols throughout every session. No personal data, login credentials, or exam content is ever stored after your session ends or shared with any outside party.",
        },
        {
          question: "How do you make sure I won't get flagged by the proctor?",
          answer:
            "Our experts are experienced with all major proctoring platforms and know exactly how each one monitors sessions. We use specialized IP configurations and follow platform-specific protocols to ensure your session runs without flags or interruptions. We also run a full pre-exam technical check before every session to eliminate risk.",
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
            "Our 24/7 support team is on standby throughout your session. If anything goes wrong — a dropped connection, software crash, or webcam issue — we can jump in immediately to resolve it without disrupting your exam progress. You'll never be left to troubleshoot alone.",
        },
        {
          question: "Do you help with system setup before the exam?",
          answer:
            "Yes. Before your exam we run a full pre-exam check: system compatibility, required software installation, mock proctoring session, and configuration of all exam settings. By the time exam day arrives, everything is tested and ready so there are no surprises.",
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
          {/* h2 not h1 — page H1 lives in the hero section */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our exam help services
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
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.category}
                </h3>
              </div>

              <div className="divide-y divide-gray-200">
                {category.questions.map((item, index) => {
                  const globalIndex =
                    faqs
                      .slice(0, catIndex)
                      .reduce(
                        (acc, curr) => acc + curr.questions.length,
                        0
                      ) + index;
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
                        <span className="font-medium text-gray-800">
                          {item.question}
                        </span>
                        {activeIndex === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 shrink-0 ml-4" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 shrink-0 ml-4" />
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
                        <div className="px-6 pb-4 text-gray-600">
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
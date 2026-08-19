"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Home,
 
  MapPin,
  
} from "lucide-react";
import { useState } from "react";

export default function RealEstateFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Real Estate Licensing Exam Help",
      icon: <Home className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question: "Can I pay someone to take my real estate exam for me?",
          answer: (
            <>
              Yes, absolutely. Our platform connects you with licensed real
              estate professionals who specialize in both national and
              state-specific licensing exams. When you choose to{" "}
              <strong>pay someone to take my real estate exam</strong>, we
              manage the entire process — from registration verification to
              final score updates — ensuring a guaranteed passing result.
              Whether you&apos;re pursuing your{" "}
              <strong>salesperson license</strong> or{" "}
              <strong>broker license</strong>, our experts handle everything
              with complete confidentiality.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  We also offer similar services for:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    PMP Exam
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    PRINCE2 Exam
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    SHRM Exam
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "How do I get started with a real estate exam expert?",
          answer: (
            <>
              Getting started is simple and streamlined. You just provide us
              with your preferred testing window and registration details. We
              will then assign a dedicated, licensed real estate professional to
              your profile who is an expert in both national and state-specific
              exam content. They handle the entire evaluation process cleanly
              while you maintain full oversight. Whether you&apos;re in{" "}
              <strong>California (DRE)</strong>, <strong>Texas (TREC)</strong>,{" "}
              <strong>Florida (DBPR)</strong>, or{" "}
              <strong>New York (DOS)</strong>, we have experts for your state.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Popular real estate exams we handle:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/real-estate-exam-help"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    Salesperson License →
                  </Link>
                  <Link
                    href="/real-estate-exam-help"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    Broker License →
                  </Link>
                  <Link
                    href="/real-estate-exam-help"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    National RE Exam →
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "How quickly can someone take my real estate exam?",
          answer:
            "Most requests are completed within 48 to 72 hours from your first contact. For urgent situations, we offer expedited 24-hour service. Contact us immediately with your exam date and we will accommodate you, whether it's the national portion or state-specific content.",
        },
        {
          question:
            "How much does it cost to pay someone to take my real estate exam?",
          answer: (
            <>
              Our pricing models are fully customized to match your specific
              timeline and the type of exam you need to clear. The{" "}
              <strong>salesperson licensing exam</strong> has a different
              pricing index compared to the{" "}
              <strong>broker licensing exam</strong>. When you decide to{" "}
              <strong>pay someone to take my real estate exam</strong>, we
              provide a transparent, all-inclusive quote that covers the
              technical setup, secure routing configurations, and the fee for
              your assigned specialist.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">
                    Looking for other certification pricing?
                  </span>{" "}
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    PMP exam costs
                  </Link>
                  {" • "}
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    SHRM exam costs
                  </Link>
                  {" • "}
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    GED exam costs
                  </Link>
                </p>
              </div>
            </>
          ),
        },
        {
          question:
            "How far in advance do I need to book a real estate exam expert?",
          answer:
            "We highly recommend scheduling your slot at least three to five days before your desired testing date. This advance window allows our team to perform system testing and ensure your local workspace is completely optimized. However, we also offer express booking slots if you need urgent <strong>real estate exam help</strong> on short notice, depending on the availability of our licensed professionals.",
        },
      ],
    },
    {
      category: "National & State-Specific Exam Coverage",
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      questions: [
        {
          question:
            "Do you cover both national and state-specific real estate exams?",
          answer: (
            <>
              Yes, we cover{" "}
              <strong>both the national and state-specific</strong> portions of
              your real estate licensing exam. Our experts are knowledgeable in
              all areas including <strong>property ownership</strong>,{" "}
              <strong>contracts</strong>, <strong>finance</strong>,{" "}
              <strong>agency relationships</strong>, and{" "}
              <strong>state-specific regulations</strong>. We ensure you pass
              both portions on your first attempt.
              
            </>
          ),
        },
        {
          question:
            "What testing platforms do you support for real estate exams?",
          answer: (
            <>
              We support all major testing platforms for real estate licensing
              exams, including <strong>PSI</strong>,{" "}
              <strong>Pearson VUE OnVUE</strong>, <strong>ARELLO</strong>, and{" "}
              <strong>Prometric</strong>. Our experts are trained to handle the
              specific requirements of each platform, ensuring your exam is
              completed seamlessly and without detection.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Other testing platforms we support:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    ProctorU
                  </Link>
                  <Link
                    href="/proctored-exam-help"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    Honorlock
                  </Link>
                  <Link
                    href="/proctored-exam-help"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    Respondus
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question:
            "Do you help with both salesperson and broker licensing exams?",
          answer: (
            <>
              Yes, we provide <strong>real estate exam help</strong> for both{" "}
              <strong>salesperson</strong> and <strong>broker</strong> licensing
              exams. Our experts are licensed professionals who have
              successfully passed both levels themselves. Whether you&apos;re
              just starting your real estate career or advancing to become a
              broker, we have the right expert for you.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">
                    Learn more about licensing:
                  </span>{" "}
                  <Link
                    href="/blog/pmp-eligibility-requirements-2027-how-to-check-if-you-qualify-before-you-start-studying"
                    className="text-primary hover:underline"
                  >
                    Eligibility Requirements
                  </Link>
                  {" • "}
                  <Link
                    href="/blog/how-to-pass-pmp-exam-on-your-first-try-the-preparation-approach-that-actually-changes-your-odds"
                    className="text-primary hover:underline"
                  >
                    Exam Preparation Tips
                  </Link>
                </p>
              </div>
            </>
          ),
        },
        {
          question:
            "How does your real estate exam help handle proctored exams?",
          answer: (
            <>
              We specialize in <strong>proctored exam help</strong> for real
              estate licensing exams. Our experts are trained to handle webcam
              monitoring, lockdown browsers, and AI behavior monitoring on
              platforms like <strong>PSI</strong>,{" "}
              <strong>Pearson VUE OnVUE</strong>, and <strong>Prometric</strong>
              . We ensure your exam is completed without detection or technical
              issues.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Other proctored exams we handle:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    Proctored Exam Help
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    PMP Proctored Exam
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    GED Proctored Exam
                  </Link>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      category: "Confidentiality, Security & Guarantees",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question:
            "Is my personal information safe when I use your real estate exam help?",
          answer: (
            <>
              Absolutely. We prioritize operational anonymity above all else.
              Our premium <strong>real estate exam help</strong> services
              utilize secure, highly customized configurations to establish a
              clean connection. We guarantee{" "}
              <strong>100% confidentiality</strong> with every request. Your
              personal information, exam credentials, and licensing details are
              never shared or stored. All experts sign strict NDAs.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Our security protocols also cover:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/blog/how-to-choose-a-legitimate-exam-help-service"
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Legitimate Service Guide
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question:
            "Will anyone know that I paid someone to take my real estate exam?",
          answer:
            "Never. Our platform operates under a strict, military-grade confidentiality framework. All client interactions, personal data, and transaction details are completely encrypted and restricted from external access. Your testing secrets and professional profile remain 100% confidential and safe. We never share your information with any third party.",
        },
        {
          question: "What happens if I don't pass my real estate exam?",
          answer: (
            <>
              We offer a <strong>full refund or free retake</strong> if you
              don&apos;t achieve your target score. Our success rate exceeds{" "}
              <strong>99%</strong> on first attempts for both salesperson and
              broker licensing exams. We stand by our promise to deliver quality
              results on every exam. When you{" "}
              <strong>pay someone to take my real estate exam</strong> through
              TestHelpNow, you&apos;re investing in guaranteed results.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Our guarantee applies to all licensing exams including:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/real-estate-exam-help"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    Salesperson License
                  </Link>
                  <Link
                    href="/real-estate-exam-help"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    Broker License
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    GED Exam
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    HiSET Exam
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question:
            "Do you offer a money-back guarantee for real estate exam help?",
          answer: (
            <>
              Yes, we offer a <strong>100% money-back guarantee</strong> on all
              our <strong>real estate exam help</strong> services. If we fail to
              meet our commitments or if you don&apos;t pass your exam, you
              receive a full refund — no questions asked. This ensures complete
              fairness and builds long-term trust between us and every client we
              assist.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">
                    Learn more about our guarantees:
                  </span>{" "}
                  <Link
                    href="/blog/how-to-choose-a-legitimate-exam-help-service"
                    className="text-primary hover:underline"
                  >
                    Legitimate Service Guide
                  </Link>
                  {" • "}
                  <Link href="/order" className="text-primary hover:underline">
                    Get Your Free Quote
                  </Link>
                </p>
              </div>
            </>
          ),
        },
        {
          question:
            "Why do professionals choose proctored exam help over traditional studying?",
          answer: (
            <>
              Preparing for the <strong>real estate licensing exam</strong>{" "}
              requires mastering complex topics including{" "}
              <strong>property ownership</strong>, <strong>contracts</strong>,{" "}
              <strong>finance</strong>, <strong>agency relationships</strong>,
              and <strong>state-specific regulations</strong>. This process
              takes hundreds of hours of study time. Busy professionals choose
              our <strong>real estate exam help</strong> to bypass this grueling
              preparation period entirely. It is a strategic career decision
              that protects your time, eliminates testing anxiety, and
              guarantees a passing credential on your first attempt.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Other professionals choose our services for:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    PMP Exam
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    SHRM Exam
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    GED Exam
                  </Link>
                </div>
              </div>
            </>
          ),
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
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Real Estate Exam Help — Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our{" "}
            <strong>real estate exam help</strong> services, licensing
            requirements, and guaranteed results.
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
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="flex items-center bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-primary">
                  {category.category}
                </h3>
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
                        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50/50 transition-colors hover:cursor-pointer"
                      >
                        <span className="font-medium text-gray-800">
                          {item.question}
                        </span>
                        {activeIndex === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-primary shrink-0 ml-4" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
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
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm md:text-base bg-gray-50/20">
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
          <p className="text-gray-600 mb-6">
            Ready to pass your real estate licensing exam?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/order"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-900 transition-colors shadow-sm inline-block"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/real-estate-exam-help"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors inline-block"
            >
              Real Estate Exam Help
            </Link>
            <Link
              href="/proctored-exam-help"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors inline-block"
            >
              Proctored Exam Help
            </Link>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <span>Explore other services: </span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
              className="text-primary hover:underline"
            >
              PMP Exam
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
              className="text-primary hover:underline"
            >
              SHRM Exam
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
              className="text-primary hover:underline"
            >
              GED Exam
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
              className="text-primary hover:underline"
            >
              PRINCE2 Exam
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Briefcase,
  FileText,
} from "lucide-react";
import { useState } from "react";

export default function PMPExamFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "PMP Exam Help & Taker Services",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      questions: [
        {
          question: "Can I pay someone to take my PMP exam for me?",
          answer: (
            <>
              Yes, absolutely. Our platform connects you with <strong>PMI-certified PMP exam takers</strong> who specialize in all three PMP domains — <strong>People</strong>, <strong>Process</strong>, and <strong>Business Environment</strong>. When you choose to <strong>pay someone to take my PMP exam</strong>, we manage the entire process from registration verification to final score delivery. Our experts have successfully passed the 180-question, 230-minute PMP exam and understand the PMI framework inside and out.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  We also offer similar services for:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
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
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    GED Exam
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "How do I get started with a PMP exam taker?",
          answer: (
            <>
              Getting started is simple and streamlined. You just provide us with your preferred testing window and PMI registration details. We will then assign a dedicated, <strong>PMI-certified PMP exam taker</strong> to your profile who has successfully passed the PMP exam themselves. They handle the entire evaluation process cleanly while you maintain full oversight. We handle all three PMP domains — <strong>People</strong> (42%), <strong>Process</strong> (50%), and <strong>Business Environment</strong> (8%).
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Popular PMP exam services we offer:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    PMP Full Exam →
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    PMP Proctored Exam →
                  </Link>
                  <Link
                    href="/blog/pay-someone-to-pass-my-pmp-exam-fast-safe-and-100-guaranteed-pmp-certification"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    PMP Certification Guide →
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "How quickly can someone take my PMP exam?",
          answer:
            "Most PMP exam requests are completed within 48 to 72 hours from your first contact. For urgent situations, we offer expedited 24-hour service. Contact us immediately with your exam date and we will accommodate you. Our PMP exam takers are available 24/7 to handle your certification needs.",
        },
        {
          question: "How much does it cost to pay someone to take my PMP exam?",
          answer: (
            <>
              Our PMP exam pricing is fully customized to match your specific timeline and requirements. The PMP exam is a high-stakes certification with 180 questions covering all three domains. When you decide to <strong>pay someone to take my PMP exam</strong>, we provide a transparent, all-inclusive quote that covers the technical setup, secure routing configurations, and the fee for your assigned PMP exam taker.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Looking for other certification pricing?</span>{" "}
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    PRINCE2 exam costs
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
          question: "How far in advance do I need to book a PMP exam taker?",
          answer:
            "We highly recommend scheduling your PMP exam slot at least three to five days before your desired testing date. This advance window allows our team to perform system testing and ensure your local workspace is completely optimized for the PMI exam environment. However, we also offer express booking slots if you need urgent <strong>PMP exam help</strong> on short notice, depending on the availability of our certified PMP exam takers.",
        },
        {
          question: "Do you handle PMP proctored exams?",
          answer: (
            <>
              Yes, we specialize in <strong>PMP proctored exam help</strong>. The PMP exam is delivered through <strong>Pearson VUE OnVUE</strong> with strict proctoring including webcam monitoring, identity verification, and screen sharing. Our <strong>PMP exam takers</strong> are trained to handle the Pearson VUE OnVUE environment seamlessly. We manage identity verification, lockdown browser navigation, AI behavior monitoring, and timed sections — ensuring your PMP exam is completed without detection or technical issues.
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
                    href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    PRINCE2 Proctored Exam
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    SHRM Proctored Exam
                  </Link>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      category: "PMP Exam Content & Domains",
      icon: <FileText className="w-5 h-5 text-orange-600" />,
      questions: [
        {
          question: "What are the three PMP domains your exam takers cover?",
          answer: (
            <>
              Our <strong>PMP exam takers</strong> cover all three PMP domains as outlined by PMI:
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li><strong>People (42%):</strong> Leading and managing teams, conflict resolution, communication, and stakeholder engagement</li>
                <li><strong>Process (50%):</strong> Project planning, execution, monitoring, controlling, and closing</li>
                <li><strong>Business Environment (8%):</strong> Strategic alignment, compliance, and organizational change</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Learn more about PMP exam preparation:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/blog/pmp-eligibility-requirements-2027-how-to-check-if-you-qualify-before-you-start-studying"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    PMP Eligibility Requirements
                  </Link>
                  <Link
                    href="/blog/how-to-pass-pmp-exam-on-your-first-try-the-preparation-approach-that-actually-changes-your-odds"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    PMP Exam Preparation Tips
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "How many questions are on the PMP exam?",
          answer:
            "The PMP exam consists of <strong>180 questions</strong> to be completed in <strong>230 minutes</strong>. The questions include multiple-choice, matching, drag-and-drop, and fill-in-the-blank formats. Our <strong>PMP exam takers</strong> are experts in navigating all question types and managing time effectively across all sections.",
        },
        {
          question: "What is the passing score for the PMP exam?",
          answer: (
            <>
              The PMP exam uses a psychometric scoring system with no fixed passing score. PMI determines the pass/fail threshold based on question difficulty. Our <strong>PMP exam takers</strong> consistently achieve passing results with over <strong>99% success rate</strong> on first attempts. We understand the PMI mindset and know how to strategically approach each question to maximize your score.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Related resources:</span>{" "}
                  <Link
                    href="/blog/pmp-mock-exam-strategy-2027-how-to-use-practice-tests-to-actually-move-your-score"
                    className="text-primary hover:underline"
                  >
                    PMP Mock Exam Strategy
                  </Link>
                </p>
              </div>
            </>
          ),
        },
        {
          question: "Do your PMP exam takers handle the new PMP exam format?",
          answer:
            "Yes, our <strong>PMP exam takers</strong> are fully trained on the latest PMP exam format including agile, hybrid, and predictive methodologies. The exam now features <strong>50% agile/hybrid</strong> and <strong>50% predictive</strong> questions. Our experts stay current with PMI updates and the latest PMP exam changes to ensure your success.",
        },
      ],
    },
    {
      category: "Confidentiality, Security & Guarantees",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question: "Is my personal information safe when I use your PMP exam help?",
          answer: (
            <>
              Absolutely. We prioritize operational anonymity above all else. Our premium <strong>PMP exam help</strong> services utilize secure, highly customized configurations to establish a clean connection. We guarantee <strong>100% confidentiality</strong> with every request. Your personal information, PMI registration details, and exam credentials are never shared or stored. All experts sign strict NDAs.
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
          question: "Will anyone know that I paid someone to take my PMP exam?",
          answer:
            "Never. Our platform operates under a strict, military-grade confidentiality framework. All client interactions, personal data, and transaction details are completely encrypted and restricted from external access. Your PMP certification journey remains 100% confidential and safe. We never share your information with any third party.",
        },
        {
          question: "What happens if I don't pass my PMP exam?",
          answer: (
            <>
              We offer a <strong>full refund or free retake</strong> if you don&apos;t achieve your target score. Our success rate exceeds <strong>99%</strong> on first attempts for the PMP exam. We stand by our promise to deliver quality results on every exam. When you <strong>pay someone to take my PMP exam</strong> through TestHelpNow, you&apos;re investing in guaranteed results.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Our guarantee applies to all PMP exam services:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    PMP Full Exam
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    PMP Proctored Exam
                  </Link>
                  <Link
                    href="/blog/pay-someone-to-pass-my-pmp-exam-fast-safe-and-100-guaranteed-pmp-certification"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    PMP Certification Guide
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "Do you offer a money-back guarantee for PMP exam help?",
          answer: (
            <>
              Yes, we offer a <strong>100% money-back guarantee</strong> on all our <strong>PMP exam help</strong> services. If we fail to meet our commitments or if you don&apos;t pass your PMP exam, you receive a full refund — no questions asked. This ensures complete fairness and builds long-term trust between us and every client we assist.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Learn more about our guarantees:</span>{" "}
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
          question: "Why do professionals choose PMP exam takers over traditional studying?",
          answer: (
            <>
              Preparing for the <strong>PMP exam</strong> requires mastering 180 questions across three domains with a mix of agile, hybrid, and predictive methodologies. The PMP exam preparation process takes hundreds of hours of study time. Busy professionals choose our <strong>PMP exam takers</strong> to bypass this grueling preparation period entirely. It is a strategic career decision that protects your time, eliminates testing anxiety, and guarantees a passing credential on your first attempt.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Other professionals choose our services for:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    PRINCE2 Exam
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
            PMP Exam Help — Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our <strong>PMP exam help</strong> services, 
            certification requirements, and guaranteed results from our <strong>PMP exam takers</strong>.
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
            Ready to pass your PMP exam on the first try?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/order"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-900 transition-colors shadow-sm inline-block"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors inline-block"
            >
              PMP Exam Help
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
              href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
              className="text-primary hover:underline"
            >
              PRINCE2 Exam
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
              href="/proctored-exam-help/pay-someone-to-take-my-real-estate-exam-for-me"
              className="text-primary hover:underline"
            >
              Real Estate Exam
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
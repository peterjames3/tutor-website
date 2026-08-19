"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Project Management Certifications",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      questions: [
        {
          question: "Can I pay someone to take my PMP exam for me?",
          answer: (
            <>
              Yes, you can hire our certified PMP experts to take your Project Management Professional exam on your behalf. Our team includes PMI-certified professionals who have successfully passed the PMP exam themselves and understand the 180-question, 230-minute format inside and out. We handle all three domains — People, Process, and Business Environment — with guaranteed results.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">PMP exam help resources:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    PMP Exam Help
                  </Link>
                  <Link
                    href="/blog/pay-someone-to-pass-my-pmp-exam-fast-safe-and-100-guaranteed-pmp-certification"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    PMP Certification Guide
                  </Link>
                  <Link
                    href="/blog/pmp-eligibility-requirements-2027-how-to-check-if-you-qualify-before-you-start-studying"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    PMP Eligibility Requirements
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "What does the PRINCE2 exam cover and can you help?",
          answer: (
            <>
              The PRINCE2 exam covers the globally recognized project management methodology used by organizations worldwide. Our PRINCE2-qualified specialists handle both Foundation and Practitioner level exams. We cover every theme, process, and principle required to pass — so you walk away certified without the stress of extensive study.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">PRINCE2 exam resources:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
                    className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors"
                  >
                    PRINCE2 Exam Help
                  </Link>
                  <Link
                    href="/blog/pay-best-test-taker-to-do-your-itil-exam-the-fast-track-to-certification"
                    className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors"
                  >
                    PRINCE2 Fast-Track Guide
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "How does the PMP exam proctoring work?",
          answer: (
            <>
              The PMP exam is delivered through Pearson VUE&apos;s OnVUE platform with strict proctoring including webcam monitoring, identity verification, and screen sharing. Our experts are trained to handle the Pearson VUE OnVUE environment seamlessly. We manage the entire proctoring process — from identity verification to lockdown browser navigation — ensuring your exam is completed without detection or technical issues.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">Proctoring resources:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/blog/what-is-online-proctoring-and-how-does-it-work-the-complete-guide"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    What Is Online Proctoring?
                  </Link>
                  <Link
                    href="/blog/how-to-pass-your-online-exam-without-getting-caught"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    Pass Your Proctored Exam
                  </Link>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      category: "High School Equivalency Exams",
      icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question: "Can you help me pass my GED exam?",
          answer: (
            <>
              Yes, our expert GED exam takers handle all four subject areas of the GED test: Math, Science, Social Studies, and Language Arts. We provide comprehensive support to help you earn your high school equivalency diploma quickly and confidently. Whether you need help with the entire GED battery or specific subjects, our certified experts ensure you achieve the scores needed to unlock new educational and career opportunities.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">GED exam resources:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    GED Exam Help
                  </Link>
                  <Link
                    href="/online-exam-helper"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    Online Exam Helper
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "What's the difference between GED and HiSET?",
          answer: (
            <>
              The GED and HiSET are both high school equivalency tests, but they have different formats. The GED has four subject areas (Math, Science, Social Studies, Language Arts), while the HiSET has five subtests (Language Arts - Reading, Language Arts - Writing, Mathematics, Science, Social Studies). Our experts can help you pass either test — or both — depending on your state requirements. We understand the nuances of each test, including the essay component in the HiSET Writing subtest.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">HiSET exam resources:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me"
                    className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full hover:bg-teal-100 transition-colors"
                  >
                    HiSET Exam Help
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                    className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full hover:bg-teal-100 transition-colors"
                  >
                    GED Exam Help
                  </Link>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      category: "Professional Certifications",
      icon: <Award className="w-5 h-5 text-purple-600" />,
      questions: [
        {
          question: "How does SHRM exam help work?",
          answer: (
            <>
              Our SHRM-certified experts take your SHRM-CP or SHRM-SCP exam on your behalf. We handle the 160 questions covering behavioral competencies and HR knowledge domains. Whether you&apos;re pursuing the SHRM-CP for early-career HR professionals or the SHRM-SCP for senior-level practitioners, our certified experts ensure you pass with confidence. Our SHRM specialists have extensive experience in HR operations, talent acquisition, and organizational development.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">SHRM exam resources:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    SHRM Exam Help
                  </Link>
                  <Link
                    href="/proctored-exam-help"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    Proctored Exam Help
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "What certifications do you cover besides PMP and SHRM?",
          answer: (
            <>
              We cover a wide range of professional certifications including PRINCE2 Foundation & Practitioner, Real Estate Licensing Exam, GED, HiSET, and more. Our certified experts are ready to help you pass any proctored exam across all major platforms including Pearson VUE, PSI Bridge, ProctorU, Honorlock, and ExamSoft.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">Explore all certifications:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    PMP
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
                    className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors"
                  >
                    PRINCE2
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    SHRM
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    GED
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me"
                    className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full hover:bg-teal-100 transition-colors"
                  >
                    HiSET
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-real-estate-exam-for-me"
                    className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full hover:bg-amber-100 transition-colors"
                  >
                    Real Estate
                  </Link>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      category: "Security & Privacy",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question: "Is my personal information safe when I use your service?",
          answer: (
            <>
              Absolutely. We use military-grade encryption for all communications, never store personal data after sessions, and all technicians sign strict NDAs. Your exam content and credentials are never recorded or shared. We operate with complete confidentiality and privacy protocols to ensure your identity remains protected throughout the process.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">Learn more about our security:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    Proctored Exam Help
                  </Link>
                  <Link
                    href="/blog/how-to-choose-a-legitimate-exam-help-service"
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    Choose a Legitimate Service
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "What happens if I don't pass my exam?",
          answer: (
            <>
              We offer a full refund or a free retake if you don&apos;t achieve your target score. Our success rate exceeds 99% on first attempts for all certifications including PMP, PRINCE2, SHRM, GED, and HiSET. We stand by our promise to deliver quality results on every exam.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">Our guarantee covers:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    PMP
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    SHRM
                  </Link>
                  <Link
                    href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    GED
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about PMP, PRINCE2, SHRM, GED, HiSET, and our proctored exam help services
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
                <h3 className="text-xl font-semibold text-gray-800">
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
                        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors hover:cursor-pointer"
                      >
                        <span className="font-medium text-gray-800">
                          {item.question}
                        </span>
                        {activeIndex === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-primary shrink-0 ml-4" />
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
            Need to verify a specific certification or have a question not listed?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/order"
              className="px-6 py-3 bg-button-login-default text-white font-medium rounded-lg hover:bg-button-login-hover transition-colors shadow-sm"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/proctored-exam-help"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors inline-block"
            >
              Explore Proctored Exam Help
            </Link>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <span>Quick links to our services: </span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
              className="text-primary hover:underline"
            >
              PMP
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
              className="text-primary hover:underline"
            >
              PRINCE2
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
              className="text-primary hover:underline"
            >
              SHRM
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
              className="text-primary hover:underline"
            >
              GED
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me"
              className="text-primary hover:underline"
            >
              HiSET
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/proctored-exam-help/pay-someone-to-take-my-real-estate-exam-for-me"
              className="text-primary hover:underline"
            >
              Real Estate
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
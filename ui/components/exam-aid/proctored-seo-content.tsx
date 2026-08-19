"use client";

import { motion } from "motion/react";
import { ExamCompanion } from "../../exam-companion";
import { Proctored } from "../../proctored";
import {
  CircleArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Lock,
  FileText,
  Users,
  Server,
  Shield,
  GraduationCap,
  Briefcase,
  Calculator,
  MessageSquare,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function ProctoredSeoContent() {
  return (
    <section className="w-full mx-auto max-w-full lg:max-w-310 gap-20 px-6 py-12 md:flex items-start">
      <article className="w-full md:w-[65%]">
        {/* ── H1: Main Hero ── */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Comprehensive Proctored Exam Help – Expert Support for Every
            Platform, LMS, and Certification
          </h1>
          <div className="mb-6 space-y-4 leading-relaxed text-[1.1rem]">
            <p className="text-lg text-gray-600">
              Balancing rigid academic benchmarks, career certifications, and
              busy work schedules can make exam day overwhelming. Whether you
              are facing remote proctoring software like{" "}
              <strong>Pearson VUE</strong>, <strong>Honorlock</strong>, and{" "}
              <strong>Respondus</strong>, or university LMS portals across{" "}
              <strong>Canvas</strong>, <strong>Blackboard</strong>, and{" "}
              <strong>MyMathLab</strong>, our dedicated subject specialists
              ensure seamless execution and top grades.
            </p>
            <p>
              With <strong>TestHelpNow</strong>, you get secure, confidential,
              and guaranteed <strong>proctored exam help</strong> backed by
              location-matched IP protection, flexible split payments, and 24/7
              direct communication across the USA, Canada, Australia, and the
              UK.
            </p>
          </div>
        </motion.article>

        {/* ── TABLE OF CONTENTS ── */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="bg-slate-50 p-6 rounded-xl border border-gray-200 my-8"
        >
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <Link
                href="#what-is-proctored-exam-help"
                className="text-emerald-600 hover:underline"
              >
                1. What Is Proctored Exam Help?
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="text-emerald-600 hover:underline"
              >
                2. How Does the Booking Process Work?
              </Link>
            </li>
            <li>
              <Link
                href="#platforms-and-modes"
                className="text-emerald-600 hover:underline"
              >
                3. Supported Proctoring Platforms & Delivery Modes
              </Link>
            </li>
            <li>
              <Link
                href="#exams-and-subjects"
                className="text-emerald-600 hover:underline"
              >
                4. Certifications, Academic Subjects & Quizzes Covered
              </Link>
            </li>
            <li>
              <Link
                href="#urgent-deadlines"
                className="text-emerald-600 hover:underline"
              >
                5. Urgent Exam Assistance (Same-Day & Due Tonight)
              </Link>
            </li>
            <li>
              <Link
                href="#pricing-and-guarantees"
                className="text-emerald-600 hover:underline"
              >
                6. Pricing, Payment Plans & Core Guarantees
              </Link>
            </li>
            <li>
              <Link
                href="#communication-channels"
                className="text-emerald-600 hover:underline"
              >
                7. Live Support & Communication Channels
              </Link>
            </li>
          </ul>
        </motion.article>

        {/* ── SECTION 1: What Is Proctored Exam Help? ── */}
        <motion.article
          id="what-is-proctored-exam-help"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            1. What Is Proctored Exam Help?
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              <strong>Proctored exam help</strong> is an end-to-end technical
              and academic support service designed to help students and working
              professionals clear high-stakes exams. Modern proctored
              assessments utilize webcam feeds, biometric facial tracking,
              microphone monitoring, and lockdown browsers to track every
              movement.
            </p>
            <p>
              Our qualified subject matter experts manage the entire technical
              setup—including screen sharing configurations, identity
              verification stages, and timed pressure—ensuring your exam is
              submitted smoothly without triggering security flags or IP
              mismatches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-bold text-emerald-800 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Who Benefits From Our Service?
                </h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4 text-gray-700">
                  <li>
                    Working professionals balancing shifts and certifications
                  </li>
                  <li>
                    College students overwhelmed by overlapping finals and
                    midterms
                  </li>
                  <li>
                    Distance learners across platforms like Phoenix, WGU, and
                    Purdue Global
                  </li>
                  <li>
                    Test-takers dealing with high test anxiety or technical
                    constraints
                  </li>
                  <li>
                    Students needing urgent grade boosts on quantitative
                    coursework
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  Our Core Commitments
                </h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4 text-gray-700">
                  <li>
                    100% confidential, private, and encrypted communication
                  </li>
                  <li>Zero IP mismatch via location-aligned connections</li>
                  <li>Guaranteed passing scores or 100% money-back refund</li>
                  <li>Flexible 50/50 installment payment plans</li>
                  <li>
                    Pre-exam technical dry runs 60 minutes prior to launch
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 2: How It Works ── */}
        <motion.article
          id="how-it-works"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            2. How Does the Booking Process Work?
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              Securing an experienced test-taker is straightforward. We assign a
              dedicated unique order ID to track your exam milestones from
              initial setup to grade posting:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
              {[
                {
                  step: "1",
                  title: "Submit Details",
                  desc: "Provide exam timing, duration, portal/software mode, and subject requirements to generate your unique Order ID.",
                  icon: "📋",
                },
                {
                  step: "2",
                  title: "Expert Match & Pay",
                  desc: "Select a top-rated specialist based on your timezone. Secure your slot with a simple partial payment option.",
                  icon: "🤝",
                },
                {
                  step: "3",
                  title: "60-Min Pre-Check",
                  desc: "Connect 1 hour prior to the exam for connection checks, identity verification setup, and briefing.",
                  icon: "💻",
                },
                {
                  step: "4",
                  title: "Score & Release",
                  desc: "Your expert completes the test. Confirm your high grade on the portal before finalizing project milestones.",
                  icon: "✅",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:shadow-md transition"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>🔒 Confidentiality Notice:</strong> Never share
                sensitive personal logins over unverified channels. Only
                communicate through our encrypted dashboard or official support
                lines.
              </p>
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 3: Platforms & Delivery Modes ── */}
        <motion.article
          id="platforms-and-modes"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            3. Supported Proctoring Platforms & Delivery Modes
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              Every proctoring system employs unique detection algorithms,
              background service checks, and environment scans. We adapt our
              assistance model to your specific format:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
              {[
                {
                  name: "Pearson VUE / OnVUE",
                  icon: <Shield className="w-5 h-5" />,
                },
                { name: "Honorlock", icon: <Shield className="w-5 h-5" /> },
                {
                  name: "ProctorU / Guardian",
                  icon: <Shield className="w-5 h-5" />,
                },
                {
                  name: "Respondus LockDown",
                  icon: <Lock className="w-5 h-5" />,
                },
                {
                  name: "ExamSoft / Examplify",
                  icon: <Shield className="w-5 h-5" />,
                },
                { name: "Proctorio", icon: <Shield className="w-5 h-5" /> },
                {
                  name: "PSI Bridge & Prometric",
                  icon: <Shield className="w-5 h-5" />,
                },
                {
                  name: "Kryterion Webassessor",
                  icon: <Shield className="w-5 h-5" />,
                },
                {
                  name: "Canvas / Blackboard / D2L",
                  icon: <Server className="w-5 h-5" />,
                },
                {
                  name: "MyMathLab & MyStatLab",
                  icon: <Calculator className="w-5 h-5" />,
                },
                {
                  name: "WileyPLUS & McGraw-Hill",
                  icon: <FileText className="w-5 h-5" />,
                },
                {
                  name: "PeopleCert / ExamShield",
                  icon: <Shield className="w-5 h-5" />,
                },
              ].map((platform, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-3 rounded-lg border border-gray-200 flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <span className="text-emerald-500">{platform.icon}</span>
                  {platform.name}
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Our Three Delivery Models
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-secondary flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Direct Remote Assistance
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Using secure desktop bypass utilities and clean virtual
                  interfaces, our expert completes the test directly while
                  managing lockdown constraints and webcam feeds.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-secondary flex items-center gap-2">
                  <Server className="w-4 h-4 text-emerald-500" />
                  Full Portal / LMS Takeover
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  For distance education portals (Canvas, Blackboard, Phoenix),
                  we log in directly using dedicated local IP proxies to prevent
                  single sign-on security triggers.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-secondary flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  Live Sync Question-Answer
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  When you are taking the test directly, relay questions to our
                  active tutor via WhatsApp or private chat to receive verified,
                  step-by-step solutions instantly.
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 4: Exams & Subjects Covered ── */}
        <motion.article
          id="exams-and-subjects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            4. Certifications, Academic Subjects & Quizzes Covered
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              Our multidisciplinary pool of experts handles everything from
              timed 20-minute multiple-choice quizzes to 4-hour comprehensive
              licensing and technical exams:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              {/* Professional Certifications */}
              <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-secondary flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-500" />
                  Professional Licenses
                </h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4 text-gray-700">
                  <li>
                    <Link
                      href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                      className="hover:text-emerald-600"
                    >
                      PMP & CAPM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
                      className="hover:text-emerald-600"
                    >
                      PRINCE2 Foundation & Practitioner
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                      className="hover:text-emerald-600"
                    >
                      SHRM-CP & SHRM-SCP
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/proctored-exam-help/pay-someone-to-take-my-real-estate-exam-for-me"
                      className="hover:text-emerald-600"
                    >
                      Real Estate State Licensing
                    </Link>
                  </li>
                  <li>NCLEX, TEAS & HESI Nursing</li>
                </ul>
              </div>

              {/* Cloud, IT & Equivalency */}
              <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-secondary flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-emerald-500" />
                  IT & Equivalency
                </h4>
                <ul className="text-sm space-y-1 mt-2 list-disc pl-4 text-gray-700">
                  <li>AWS Certified Solutions Architect</li>
                  <li>Microsoft Azure (AZ-900, DP-900)</li>
                  <li>CompTIA (Security+, Network+, A+)</li>
                  <li>
                    <Link
                      href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                      className="hover:text-emerald-600"
                    >
                      GED Battery Tests
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me"
                      className="hover:text-emerald-600"
                    >
                      HiSET Subtests
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 5: Urgent Deadlines ── */}
        <motion.article
          id="urgent-deadlines"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.38 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            5. Can You Help With an Urgent Exam Due Tonight?
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              While we encourage booking at least{" "}
              <strong>24 hours in advance</strong> to allow thorough review of
              platform rules and technical guidelines, we understand unexpected
              emergencies happen.
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
              <Zap className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-amber-900">
                  Short-Notice Fast-Track Support
                </h4>
                <p className="text-sm text-amber-800 mt-1">
                  We accommodate urgent requests with turnaround windows as
                  short as <strong>6 to 8 hours</strong> before exam launch.
                  Contact our live operations team immediately with your exam
                  syllabus, portal type, and start time for priority assignment.
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 6: Pricing & Guarantees ── */}
        <motion.article
          id="pricing-and-guarantees"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            6. Pricing, Payment Plans & Core Guarantees
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              Transparent pricing with no hidden charges. You don&apos;t need to
              pay the entire balance upfront—we offer a{" "}
              <strong>50% split milestone structure</strong> so you only release
              final payment once satisfied with your result.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">
                      Exam / Assessment Type
                    </th>
                    <th className="border p-2 text-left">Estimated Range</th>
                    <th className="border p-2 text-left">
                      Turnaround / Booking Window
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold">
                      Weekly College Quizzes & Unit Tests
                    </td>
                    <td className="border p-2">$80 – $200</td>
                    <td className="border p-2">6-24 hours</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">
                      Midterms & Final Academic Exams
                    </td>
                    <td className="border p-2">$150 – $500</td>
                    <td className="border p-2">24-48 hours</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">
                      High School Equivalency (GED / HiSET)
                    </td>
                    <td className="border p-2">$200 – $600</td>
                    <td className="border p-2">24-72 hours</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">
                      IT & Cloud Certifications (AWS, Azure, CompTIA)
                    </td>
                    <td className="border p-2">$300 – $1,200</td>
                    <td className="border p-2">48-72 hours</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">
                      Professional Certifications (PMP, PRINCE2, SHRM)
                    </td>
                    <td className="border p-2">$500 – $2,500</td>
                    <td className="border p-2">3-5 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-sm">
                <strong>Looking for a customized quote?</strong>{" "}
                <Link
                  href="/order"
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  Get your instant quote today →
                </Link>
              </p>
            </div>
          </div>
        </motion.article>

        {/* ── SECTION 7: Communication Channels ── */}
        <motion.article
          id="communication-channels"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-8">
            7. Live Support & Communication Channels
          </h2>
          <div className="mb-4 space-y-3 leading-relaxed text-[1.1rem]">
            <p>
              To maintain absolute focus and eliminate background noise during
              live assessments, our proctoring specialists communicate
              exclusively through low-latency encrypted text channels:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
              {[
                { name: "WhatsApp Text", desc: "Instant mobile updates" },
                { name: "24/7 Live Chat", desc: "On-site portal support" },
                { name: "Secure Student Area", desc: "Order tracking & files" },
                { name: "Google Docs Sync", desc: "Real-time question review" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-lg border border-gray-200 text-center"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              * Voice calling is restricted during active proctoring windows to
              prevent ambient noise pick-up by acoustic monitoring algorithms.
            </p>
          </div>
        </motion.article>

        <ExamCompanion />
      </article>

      {/* ── SIDEBAR ── */}
      <div className="w-full md:w-[35%] space-y-12">
        {/* BOX 1: Exams We Cover */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="border border-gray-300 overflow-hidden rounded-lg"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>Exams We Cover</h2>
          </div>
          <div className="px-3 py-6">
            <ul className="flex flex-col space-y-3 p-2">
              <li>
                <Link
                  href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      PMP
                    </span>
                    <span className="text-xs text-gray-500">
                      Project Management Professional
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      PRINCE2
                    </span>
                    <span className="text-xs text-gray-500">
                      Foundation & Practitioner
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      SHRM
                    </span>
                    <span className="text-xs text-gray-500">
                      SHRM-CP & SHRM-SCP
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      GED
                    </span>
                    <span className="text-xs text-gray-500">
                      High School Equivalency
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      HiSET
                    </span>
                    <span className="text-xs text-gray-500">
                      High School Equivalency
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/proctored-exam-help/pay-someone-to-take-my-real-estate-exam-for-me"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors group"
                >
                  <CircleArrowRight className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block group-hover:text-emerald-600">
                      Real Estate
                    </span>
                    <span className="text-xs text-gray-500">
                      Licensing Exam
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </motion.article>

        {/* BOX 2: Proctored Platforms */}
        <motion.article
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          className="border overflow-hidden border-gray-300 rounded-lg space-y-2"
        >
          <div className="font-medium text-white bg-black p-4 text-xl">
            <h2>Proctored Platforms We Handle</h2>
          </div>
          <div className="px-4 py-6">
            <ul className="flex flex-col space-y-3 font-medium">
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />
                Pearson VUE / OnVUE
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />
                PSI Bridge & Prometric
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />
                ProctorU & Guardian
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />
                Honorlock
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />
                ExamSoft & Examplify
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />
                Respondus LockDown Browser
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />
                Proctorio & ProctorTrack
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />
                Kryterion Webassessor
              </li>
            </ul>
          </div>
        </motion.article>

        {/* BOX 3: Related Resources */}
        <article className="border overflow-hidden border-gray-300 rounded-lg shadow-sm">
          <div className="font-medium text-white bg-black p-3 text-xl">
            <h2>Related Resources</h2>
          </div>
          <div className="px-4 py-6">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog/pmp-eligibility-requirements-2027-how-to-check-if-you-qualify-before-you-start-studying"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors text-sm"
                >
                  <CircleArrowRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    PMP Eligibility Requirements 2027 — How to Check If You
                    Qualify
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/pmp-mock-exam-strategy-2027-how-to-use-practice-tests-to-actually-move-your-score"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors text-sm"
                >
                  <CircleArrowRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    PMP Mock Exam Strategy 2027 — How to Use Practice Tests
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/pmp-renewal-2027-how-pdus-work-what-counts-and-what-happens-if-you-let-your-certification-lapse"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors text-sm"
                >
                  <CircleArrowRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>PMP Renewal 2027 — How PDUs Work, What Counts</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/is-summer-tutoring-worth-it-heres-why-the-answer-is-a-resounding-yes"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors text-sm"
                >
                  <CircleArrowRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Is Summer Tutoring Worth It? Here&apos;s Why the Answer Is
                    Yes
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-prepare-for-the-act-math-test-your-complete-guide-to-success"
                  className="flex items-start gap-2 hover:text-emerald-600 transition-colors text-sm"
                >
                  <CircleArrowRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    How to Prepare for the ACT Math Test — Complete Guide
                  </span>
                </Link>
              </li>
            </ul>
            <div className="mt-3 text-center">
              <Link
                href="/blog"
                className="text-emerald-600 hover:underline text-sm font-medium"
              >
                View All Posts →
              </Link>
            </div>
          </div>
        </article>

        <article className="border overflow-hidden border-gray-300 rounded-lg space-y-2">
          <Proctored />
        </article>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import SuccessPath from "@/app/ui/components/path/success-path";
import ExamSection from "./what-is-ged/exam-section";
import { AnimatedBanner } from "@/app/ui/animated-banner";

import FAQ from "./what-is-ged/faq";
export default function SEOCONTENT() {
  return (
    <main className="bg-white text-gray-800">
      {/* What is GED */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Can I Pay Someone to Take My GED Test for Me in 2026? Here’s What
            You Should Know
          </h2>

          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            The GED test (General Educational Development exam) is an important
            step for individuals who want to earn a high school equivalency
            credential. Passing the GED exam can open doors to better career
            opportunities, college admissions, and personal growth. Because of
            these benefits, many students search for reliable{" "}
            <strong>GED exam help</strong> and preparation support to increase
            their chances of success.
          </p>

          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            The GED test evaluates knowledge in four subjects: Mathematical
            Reasoning, Reasoning Through Language Arts, Science, and Social
            Studies. For students who have been away from school for a long
            time, preparing for these subjects can be challenging. As a result,
            many people look for professional <strong>GED test help</strong>,
            tutoring, or preparation assistance to better understand the exam
            topics and improve their performance.
          </p>

          <p className="text-[1rem] lg:text-[1.3rem] text-primary">
            Preparing for the GED exam while balancing work, family
            responsibilities, and other commitments can be difficult. The
            pressure to pass the exam, combined with limited study time and
            unfamiliar exam formats, often leads students to search for{" "}
            <strong>online GED exam assistance</strong>. With the right
            guidance, structured study plans, and expert support. You can hire
            our expert to take your GED exam for you or you can get our
            customized coaching classes. Our professionals experts manage your
            exam with absolute security and guarantee high score. So get our
            help to achieve your desired GED score!
          </p>
        </div>
      </section>

      {/* GED Exam Structure */}
      <div className="bg-gray-50 w-full">
        <section className="py-16 flex flex-col gap-10 lg:flex-row lg:items-center md:justify-between mx-auto w-full max-w-full lg:max-w-[1240px] xl:max-w-[1440px]">
          <article className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-6">
              GED Exam Structure and Format
            </h2>

            <p className="mb-6 text-[1rem] lg:text-[1.3rem] text-primary">
              Understanding the <strong>GED exam structure</strong> is essential
              for effective preparation. The GED test measures whether a
              candidate has the same academic knowledge and skills as a high
              school graduate. Knowing the GED test format helps students
              prepare strategically and improve their chances of passing the
              exam.
            </p>

            <ul className="list-disc pl-6 text-[1rem] lg:text-[1.3rem] space-y-3 text-gray-700">
              <li>Four subject-based tests</li>
              <li>Computer-based exam format</li>
              <li>Multiple-choice and drag-and-drop questions</li>
              <li>Real-world problem solving and reasoning questions</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">
              Key GED Test Subjects
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-[1rem] lg:text-[1.3rem] text-gray-700">
              <li>
                <strong>Reasoning Through Language Arts</strong> – Reading
                comprehension, grammar, and writing skills.
              </li>
              <li>
                <strong>Mathematical Reasoning</strong> – Algebra, quantitative
                problem solving, and basic mathematics concepts.
              </li>
              <li>
                <strong>Science</strong> – Life science, physical science, and
                interpreting scientific data.
              </li>
              <li>
                <strong>Social Studies</strong> – Civics, economics, geography,
                and U.S. history concepts.
              </li>
            </ul>
          </article>

          <figure className="w-full md:w-1/2">
            <ExamSection />
          </figure>
        </section>
      </div>

      {/* Why the GED Test is Challenging */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why the GED Test Can Be Challenging
          </h2>

          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
            Many students ask, <strong>“Is the GED test hard?”</strong> The GED
            exam is designed to measure whether a student has the same academic
            knowledge as a high school graduate. Because of this, the test
            evaluates critical thinking, reading comprehension, mathematical
            reasoning, and problem- solving skills across multiple subjects.
          </p>

          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
            For individuals who have been out of school for a while, preparing
            for the GED exam can feel overwhelming. Without a clear study
            strategy or proper guidance, many students struggle to pass the test
            on their first attempt.
          </p>

          <ul className="mb-10 list-disc pl-6 space-y-3 text-[1rem] lg:text-[1.3rem] text-gray-700">
            <li>
              <strong>Multiple Subjects:</strong> The GED test includes four
              subjects — Mathematical Reasoning, Language Arts, Science, and
              Social Studies.
            </li>
            <li>
              <strong>Critical Thinking Questions:</strong> Many GED questions
              require analyzing passages, interpreting data, and solving
              real-world problems.
            </li>
            <li>
              <strong>Time-Limited Test:</strong> Each GED subject test has a
              strict time limit, which can make it difficult for some students
              to complete all questions.
            </li>
            <li>
              <strong>Being Out of School:</strong> Many GED candidates have
              been out of school for years and need extra preparation to refresh
              their academic knowledge.
            </li>
          </ul>

          <Link
            href="/contact"
            id="get-help-now-btn"
            type="button"
            className="mt-6 cta hover:cursor-pointer"
            aria-label="Get help now"
            aria-pressed="false"
          >
            Book Your Free 15-minute GED Strategy Call
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <SuccessPath />
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Us for GED Exam Help
          </h2>

          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            Passing the GED test can be a life-changing achievement because it
            opens doors to better education opportunities, improved careers, and
            personal growth. However, many students struggle to prepare for the
            GED exam due to limited study time or challenging subjects. Our GED
            exam help services provide structured preparation, expert guidance,
            and personalized strategies designed to help students confidently
            prepare for and pass the GED test.
          </p>

          <h3 className="text-2xl font-semibold my-2">
            Experienced GED Tutors and Experts
          </h3>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            Our team includes experienced GED tutors and education professionals
            who understand the GED exam structure and subjects in depth. With
            years of experience helping students prepare for the GED test, our
            experts provide clear explanations, study strategies, and practical
            guidance to help learners succeed.
          </p>

          <h3 className="text-2xl font-semibold my-2">
            Proven Preparation Methods
          </h3>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            We use proven study techniques, practice questions, and exam
            simulations to help students become familiar with the GED test
            format. These methods allow students to improve their
            problem-solving skills, strengthen their understanding of key
            subjects, and approach the exam with confidence.
          </p>

          <h3 className="text-2xl font-semibold my-2">
            Confidential and Secure Support
          </h3>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            We respect our students’ privacy and maintain strict confidentiality
            standards. All communication and shared information are handled
            securely, ensuring that our students receive professional and
            trustworthy support throughout their GED preparation journey.
          </p>

          <h3 className="text-2xl font-semibold my-2">
            Flexible and Affordable Study Plans
          </h3>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            We understand that many GED candidates balance work, family, and
            other responsibilities. That is why we offer flexible and affordable
            GED preparation plans that fit different schedules and learning
            needs. Our goal is to make GED exam preparation accessible and
            effective for every student.
          </p>
        </div>
      </section>

      {/* How it works */}

      <AnimatedBanner />

      {/* FAQ */}
      <FAQ />
    </main>
  );
}

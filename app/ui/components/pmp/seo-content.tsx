import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedBanner } from "@/app/ui/animated-banner";

import FAQ from "./what-is-pmp/faq"
export default function SEOCONTENT() {
  return (
    <main className="bg-white text-gray-800">
      {/* What is PMP */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Can I Pay Someone to Take My PMP test for Me? Absolutely Yes!
          </h2>

          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            The PMP certification is a useful career tool that assesses your
            leadership capabilities, practical execution ability, and
            comprehension of project management ideas. Due to its expanding
            popularity in a variety of areas, including IT, construction,
            healthcare, and finance, more and more people want to get success in
            PMP certification. For this purpose, they look for expert help with
            PMP exam.
          </p>

          <p className="text-[1rem] lg:text-[1.3rem] text-primary">
            However, it is not simple as it looks like. The process of
            achievement in PMP certification is not easy for almost all the
            people. Many candidates want someone to take their PMP test for them
            since they find it impossible to balance their preparation with
            their personal, professional, and other obligations due to the
            demanding standards and complex nature of the process. The demanding
            study schedule, complex exam format, and high stakes usually cause
            anxiety and uncertainty and hence the demand comes to take my PMP
            test for me from millions of people around the globe.
          </p>
        </div>
      </section>

      {/* Exam Structure */}
      <div className="bg-gray-50 w-full">
        <section className=" py-16 flex flex-col gap-10 lg:flex-row lg:items-center md:justify-between  mx-auto w-full max-w-full lg:max-w-[1240px] xl:max-w-[1440px]">
          <article className="w-full md:w-1/2  px-4">
            <h2 className="text-3xl font-bold mb-6">
              PMP Exam Structure and Format
            </h2>

            <p className="mb-6 text-[1rem] lg:text-[1.3rem] text-primary">
              Understanding the structure of the PMP exam is essential for
              effective preparation.
            </p>

            <ul className="list-disc pl-6 text-[1rem] lg:text-[1.3rem]  space-y-3 text-gray-700">
              <li>180 questions</li>
              <li>230 minutes exam duration</li>
              <li>Scenario-based and multiple-choice questions</li>
              <li>Questions based on real project management situations</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">
              Key PMP Exam Domains
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-[1rem] lg:text-[1.3rem] text-gray-700">
              <li>People – Leadership and team management</li>
              <li>Process – Project planning and execution</li>
              <li>Business Environment – Organizational strategy alignment</li>
            </ul>
          </article>
          <figure className="w-full md:w-1/2">
            <Image
              src="/step 1 image.png"
              alt="step one image"
              width={700}
              height={200}
              quality={70}
              className="rounded-md object-fill"
            />
          </figure>
        </section>
      </div>

      {/* Why PMP is Hard */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why the PMP Exam is Challenging
          </h2>

          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
            The PMP exam is considered one of the most demanding certification
            exams in project management because it evaluates both theoretical
            knowledge and real-world project management skills.
          </p>

          <ul className=" mb-10 list-disc pl-6 space-y-3 text-[1rem] lg:text-[1.3rem]  text-gray-700">
            <li>Extensive project management knowledge base</li>
            <li>Scenario-based questions requiring critical thinking</li>
            <li>Limited exam time</li>
            <li>Complex PMBOK concepts</li>
          </ul>
          <Link
            href="/contact"
            id="get-help-now-btn"
            type="button"
            className=" mt-6 cta hover:cursor-pointer"
            aria-label="Get help now"
            aria-pressed="false"
          >
            Book Your Free 15-minute strategy Call
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our PMP Exam Help Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">
                Personalized Study Plan
              </h3>
              <p className="text-gray-600">
                Get a structured PMP study plan designed around your knowledge
                level and exam timeline.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">
                Take PMP Exam on my Behalf
              </h3>
              <p className="text-gray-600">
                TestHelpNow, through PMP-certified experts can take your PMP
                test for you and ensure a passing score
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Learn from experienced project management professionals who
                understand the PMP exam structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Us to Take my PMP Exam
          </h2>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            PMP certification can dynamically change your career growth, so it
            is crucial for you to take your PMP exam with full focus. A single
            mistake can ruin your dreams and take out from the race of success.
            Opting professionals can be a wise option and TestHelpNow have a
            team of capable experts that able to pass your PMP exam without any
            stress. If you are still unclear why you should choose us, check the
            following qualities which we offer;
          </p>
          <h3 className="text-2xl font-semibold my-2">
            Experienced PMP Exam Takers
          </h3>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            Each member of our team has at least five years of practical project
            management and exam coaching experience, and they are all the
            primary options for when you ask take my online PMP exam. They are
            well-versed on PMI expectations and know how to strategically ace
            the test.
          </p>
          <h3 className="text-2xl font-semibold my-2">100% Success Rate</h3>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            Our entire exam appearance service has a 100% pass rate, and our
            guided prep clients have a 98% success rate. Our clients have a
            distinct edge thanks to our tried-and-true methods, actual exam
            experience, and exam simulations.
          </p>
          <h3 className="text-2xl font-semibold my-2">
            Confidentiality and Privacy
          </h3>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            Our privacy protocols are of the highest caliber, ranging from
            secure file sharing to private correspondence. We never keep your
            data longer than is absolutely necessary, and we only collaborate
            with reliable, in-house employees no outsourcing.
          </p>
          <h3 className="text-2xl font-semibold my-2">
            Flexible and Reasonably Priced Packages
          </h3>
          <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-6">
            Getting certified PMP doesn&apos;t have to cost a fortune. We
            provide bespoke packages to fit your requirements and price range.
            We have a plan that works for you, whether you tell us to take my
            PMP test for me, help with PMP test process, or tutoring service. We
            will cover your specific requirement with affordable cost.
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

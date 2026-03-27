"use client";
import Link from "next/link";
const LeftHero = () => {
  return (
    <div className=" h-full w-full mx-auto px-6 flex items-center">
      <div>
        <div>
          <h2 className="text-3xl sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.1rem] font-bold mb-4 leading-tight">
            <span className="text-primary">Pay Someone To Take my </span>
            <span className="text-secondary">HiSET Exam </span>

            <span className="text-primary">Services With </span>

            <span className="text-secondary">Expert</span>
            <span className="text-primary"> Help</span>
          </h2>

          <p className="text-primary mb-4 text-lg leading-relaxed">
            TestHelpNow is a trusted platform to get with HiSET exam help for
            those who wants to earn HiSET certification. A team of professionals
            will take your HiSET exam on your behalf with guaranteed results. Get
            in touch with us! We are available round the clock for your
            assistance.
          </p>

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Get help Now!
          </h2>

          <Link
            href="/contact"
            id="get-help-now-btn"
            type="button"
            className=" mt-6 cta hover:cursor-pointer"
            aria-label="Book Your Free 15-minute strategy Call"
            aria-pressed="false"
          >
            Book Your Free 15-minute strategy Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;

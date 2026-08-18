"use client";
import Input from "./input";
import Select from "./select";
import { useQuoteForm } from "./useQuoteForm";

 const examOptions = [
   "GED",
   "HiSET",
   "PMP",
   "NCLEX-RN",
   "NCLEX-PN",
   "CompTIA",
   "AWS",
   "Microsoft Azure",
   "SHRM-CP",
   "SHRM-SCP",
   "ATI TEAS",
   "HESI",
   "ARRT",
   "Other",
 ];

export default function QuoteForm() {
  const { formik, isSubmitting } = useQuoteForm();

 

  return (
    <section className="w-full py-10 px-4 bg-gradient-to-r from-white/90 via-green-50/80 to-white/90 backdrop-blur-lg  border-b border-white/20 rounded-md">
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow + heading */}
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Get a quote
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Find out your price in 60 minutes
        </h2>
        <p className="text-gray-500 mb-6">
          Tell us about your exam and we&apos;ll send a quote within the hour.
          No commitment required.
        </p>

        {/* Trust chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Free to ask",
            "No commitment",
            "Reply within 1 hour",
            "100% confidential",
          ].map((t) => (
            <span
              key={t}
              className="text-sm font-medium bg-accent2 text-primary px-3 py-1 rounded-full"
            >
              ✓ {t}
            </span>
          ))}
        </div>

        {/* Form fields */}
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
        >
          <div className="flex flex-col gap-1">
            <Input
              id="name"
              name="name"
              type="text"
              label="Full Name"
              placeholder="e.g Sarah M."
              required
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name ? formik.errors.name : undefined}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="sarahmartin@example.com"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email ? formik.errors.email : undefined}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Select
              name="exam"
              label="Exam type"
              required
              placeholder="Select your exam"
              options={examOptions}
              value={formik.values.exam}
              onChange={formik.handleChange}
              error={formik.touched.exam ? formik.errors.exam : undefined}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Input
              id="date"
              name="date"
              type="date"
              label="Exam date"
              placeholder="john@example.com"
              required
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.date ? formik.errors.date : undefined}
            />
          </div>

          <div className="flex flex-col gap-1 sm:col-span-2">
            <Input
              name="platform"
              label="Proctoring platform"
              placeholder="e.g. ProctorU, Examity, Respondus, not sure…"
              value={formik.values.platform}
              onChange={formik.handleChange}
              containerClass="sm:col-span-2"
            />
          </div>
          {/* Submit */}
          <div className="flex flex-col gap-1 sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full cursor-pointer rounded-md px-6 py-3 font-medium text-lg text-white transition-all duration-300 ${
                isSubmitting
                  ? "bg-[#2b9e3b] cursor-not-allowed"
                  : "bg-button-login-default hover:bg-secondary/80 hover:shadow-lg"
              }`}
            >
              {isSubmitting ? "Sending..." : "Get My free quote   ->"}
            </button>
          </div>
        </form>

        {/* Trust footnote */}
        <p className="text-sm text-gray-400 text-center mt-3">
          🔒 Your details are never shared. All experts sign NDAs. · Email Us :{" "}
          <a href="mailto:info@testhelpnow.com" className="text-blue-500">
            info@testhelpnow.com
          </a>
        </p>
      </div>
    </section>
  );
}

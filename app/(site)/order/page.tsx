"use client";

import Input from "@/ui/components/form/input";
import TextArea from "@/ui/components/form/text-area";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useContactForm } from "@/ui/components/form/useContactForm";
import Stepper from "@/ui/components/form/StepIndicators";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Server,
} from "lucide-react";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const { formik, isSubmitting, submittedSuccessfully } = useContactForm();

  // Form State
  const [serviceInput, setServiceInput] = useState("");
  const [isParamLoaded, setIsParamLoaded] = useState(false);
  const [scheduleUrgency, setScheduleUrgency] = useState("standard");

  const hasLoadedParam = useRef(false);

  useEffect(() => {
    const examParam = searchParams.get("exam");

    if (examParam && !hasLoadedParam.current) {
      setServiceInput(examParam);
      setIsParamLoaded(true);
      formik.setFieldValue("service", examParam);
      hasLoadedParam.current = true;
    }
  }, [searchParams, formik]);

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setServiceInput(value);
    formik.setFieldValue("service", value);
    if (isParamLoaded) setIsParamLoaded(false);
  };

  const handleUrgencyChange = (urgency: string) => {
    setScheduleUrgency(urgency);
    formik.setFieldValue("scheduleUrgency", urgency);
  };

  return (
    <section className="min-h-screen py-20 md:py-24 mt-35 px-6 bg-linear-to-tr from-primary-50 via-[#ffffff] to-[#f0f9ff] flex items-center justify-center">
      <div className="lg:max-w-310 px-3 max-w-full w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form & Checkout Actions */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-200/60 shadow-sm">
            {!submittedSuccessfully ? (
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                    Secure Your Certification Exam
                  </h2>
                  <p className="text-gray-500 mt-2 text-sm md:text-base leading-relaxed">
                    Enter your testing metrics below to align with a verified{" "}
                    <strong>exam taker</strong> and deploy our secure{" "}
                    <strong>proxy services</strong> for your scheduled session.
                  </p>
                </div>

                <hr className="border-gray-100" />

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name ? formik.errors.name : undefined}
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="john@example.com"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.email ? formik.errors.email : undefined
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    placeholder="+1 234 567 8900"
                    required
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.phone ? formik.errors.phone : undefined
                    }
                  />
                  <Input
                    id="timeZone"
                    name="timeZone"
                    type="text"
                    label="Time Zone"
                    placeholder="GMT+3 / EST"
                    required
                    value={formik.values.timeZone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.timeZone
                        ? formik.errors.timeZone
                        : undefined
                    }
                  />
                </div>

                {/* Service Input - Auto-populated from URL */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider">
                    Exam/Service You Want Help With
                  </label>
                  <Input
                    id="service"
                    name="service"
                    type="text"
                    placeholder="e.g., AZ-104, AWS-SAA, CompTIA-Security+, PMP"
                    required
                    value={serviceInput}
                    onChange={handleServiceChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.service ? formik.errors.service : undefined
                    }
                  />
                  {isParamLoaded && serviceInput && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-emerald-600 flex items-center gap-1 mt-1"
                    >
                      <CheckCircle2 size={14} />
                      Pre-filled from your link: <strong>{serviceInput}</strong>
                    </motion.p>
                  )}
                  <p className="text-[10px] text-gray-400 mt-1">
                    Enter the exact exam code or service name you need help with
                  </p>
                </div>

                {/* Radio Selector: Timeline Urgency */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                    Execution Window Priority
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => handleUrgencyChange("flexible")}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between hover:cursor-pointer transition-all ${
                        scheduleUrgency === "flexible"
                          ? "bg-blue-50/50 border-primary shadow-sm"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Clock className="w-5 h-5 text-gray-500 mb-2" />
                      <div>
                        <h4 className="font-bold text-xs text-primary">
                          Flexible Slot
                        </h4>
                        <span className="text-[10px] text-gray-400">
                          Scheduled in 5+ Days
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleUrgencyChange("standard")}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between hover:cursor-pointer transition-all ${
                        scheduleUrgency === "standard"
                          ? "bg-blue-50/50 border-primary shadow-sm"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-2" />
                      <div>
                        <h4 className="font-bold text-xs text-primary">
                          Standard Window
                        </h4>
                        <span className="text-[10px] text-gray-400">
                          Scheduled in 3 to 5 Days
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleUrgencyChange("express")}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between hover:cursor-pointer transition-all ${
                        scheduleUrgency === "express"
                          ? "bg-blue-50/50 border-primary shadow-sm"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Sparkles className="w-5 h-5 text-amber-500 mb-2" />
                      <div>
                        <h4 className="font-bold text-xs text-primary">
                          Express Urgent (+ $100)
                        </h4>
                        <span className="text-[10px] text-gray-400">
                          Scheduled within 48 Hours
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Textarea: Custom Requirements */}
                <div className="space-y-2">
                  <TextArea
                    id="message"
                    name="message"
                    rows={5}
                    label="Additional Requirements"
                    placeholder="Provide details about your target exam dates, specific proctoring guidelines, or localized software constraints."
                    required
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.message ? formik.errors.message : undefined
                    }
                  />
                </div>

                {/* Hidden field to ensure urgency is sent */}
                <input
                  type="hidden"
                  name="scheduleUrgency"
                  value={scheduleUrgency}
                />

                {/* Submission CTA */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full cursor-pointer rounded-md px-6 py-4 font-bold text-lg text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-[#059669] cursor-not-allowed"
                      : "bg-secondary hover:shadow-lg shadow-lg  hover:shadow-xl hover:translate-y-[-1px] active:translate-y-0 group"
                  }`}
                >
                  {isSubmitting
                    ? "Processing Custom Setup..."
                    : "Submit Booking Order"}
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <ShieldCheck size={36} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">
                    Secure Order Received
                  </h2>
                  <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
                    Your details have been completely processed and isolated
                    within our encrypted database. An infrastructure analyst
                    will coordinate with you via email within the next 2 hours
                    to configure your specialized proxy services baseline and
                    verify your scheduled slot.
                  </p>
                  {serviceInput && (
                    <p className="text-sm font-medium text-secondary mt-4">
                      Exam/Service:{" "}
                      <span className="text-primary">{serviceInput}</span>
                    </p>
                  )}
                  {scheduleUrgency && (
                    <p className="text-sm text-gray-500 mt-2">
                      Priority:{" "}
                      <span className="capitalize">{scheduleUrgency}</span>
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Pricing Summary & Trust Signals */}
          <div className="lg:col-span-5 space-y-8">
            {/* Steps indicator */}
            <div className="bg-white border border-gray-200/60 rounded-3xl p-8 shadow-sm space-y-6">
              <Stepper />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100 shrink-0 text-blue-500">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">
                    Encrypted Connection Profiles
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Our customized, hardware-level proxy services route your
                    session parameters natively, ensuring full system anonymity
                    throughout testing lockdowns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-100 shrink-0 text-emerald-500">
                  <Server size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">
                    Specialist Validation Mastery
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Each assigned exam taker holds advanced credentials in their
                    respective field and is highly experienced in configuring
                    live sandbox environments and solving active
                    performance-based simulations.
                  </p>
                </div>
              </div>

              {/* Dynamic summary card showing current service */}
              {serviceInput && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-50 p-4 rounded-2xl border border-gray-200"
                >
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Your Selection
                  </h4>
                  <p className="text-sm font-medium text-secondary mt-1">
                    {serviceInput}
                  </p>
                  {isParamLoaded && (
                    <span className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
                      <CheckCircle2 size={12} />
                      Auto-loaded from link
                    </span>
                  )}
                  {scheduleUrgency && (
                    <p className="text-xs text-gray-500 mt-2">
                      Priority:{" "}
                      <span className="capitalize">{scheduleUrgency}</span>
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

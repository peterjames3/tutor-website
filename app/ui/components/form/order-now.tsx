"use client";

import { MessageSquare } from "lucide-react";
import Input from "./input";
import TextArea from "./text-area";
import { useContactForm } from "./useContactForm";

export default function OrderNowForm() {
  const { formik, isSubmitting } = useContactForm();

  return (
    <div className="w-full mx-auto p-6 bg-transparent rounded-2xl shadow-xl">
      <h3 className="text-3xl font-bold mb-2 text-center text-primary">
        Order Now
      </h3>
      <p className="text-gray-600 text-lg mb-8 text-center">
        Ready to get started? Fill out the form to get your first discount.
      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
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
          error={formik.touched.email ? formik.errors.email : undefined}
        />

        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="(123) 456-7890"
          required
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone ? formik.errors.phone : undefined}
        />

        <TextArea
          id="message"
          name="message"
          rows={5}
          label="Message"
          placeholder="How can we help you?"
          required
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message ? formik.errors.message : undefined}
        />
        <article className="w-full my-8 p-8 rounded-md shadow-md shadow-tertiary flex items-center gap-10 bg-tertiary-30">
          <div>
            <MessageSquare size={50} className="text-2xl text-active-link" />
          </div>
          <div className="text-primary p-text">
            <p>
              We like to start with a conversation about your goals and needs.
              The more we know about you, the more we can help.
            </p>
          </div>
        </article>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full cursor-pointer rounded-md px-6 py-4 font-medium text-lg text-white transition-all duration-300 ${
            isSubmitting
              ? "bg-[#2b9e3b] cursor-not-allowed"
              : "bg-button-login-default hover:bg-secondary/80 hover:shadow-lg"
          }`}
        >
          {isSubmitting ? "Sending..." : "Book Your Free Strategy via email"}
        </button>
      </form>
    
    </div>
  );
}

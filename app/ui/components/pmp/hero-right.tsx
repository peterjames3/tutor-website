"use client";
import { useState } from "react";
import { useFormik } from "formik";
import useToast from "@/app/ui/useToast";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  // Name validation
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Phone validation
  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      values.phone,
    )
  ) {
    errors.phone = "Invalid phone number";
  }

  // Message validation
  if (!values.message) {
    errors.message = "Message is required";
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { notifySuccess, notifyError } = useToast();
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_CONTACTUS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitting(true);

      emailjs.send(serviceId, templateId, values, publicKey).then(
        () => {
          notifySuccess(
            "Thank you for contacting us! We'll get back to you soon.",
          );
          setIsSubmitting(false);
          formik.resetForm();
        },
        (error) => {
          notifyError(`Message sending failed! ${error.text || error.message}`);
          setIsSubmitting(false);
          console.log(error);
        },
      );
    },
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-transparent rounded-2xl shadow-xl ">
      <h3 className="text-3xl font-bold mb-2 text-center text-primary">
        Order Now
      </h3>
      <p className="text-gray-600 text-lg mb-8 text-center">
        Ready to get started? Fill out the form to get your first discount.{" "}
      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="name" className="block font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            {formik.touched.name && formik.errors.name && (
              <p className="text-sm text-red-600" role="alert">
                {formik.errors.name}
              </p>
            )}
          </div>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-required="true"
            aria-invalid={!!(formik.touched.name && formik.errors.name)}
            aria-describedby={formik.errors.name ? "name-error" : undefined}
          />
        </div>

        {/* Email Field */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-600" role="alert">
                {formik.errors.email}
              </p>
            )}
          </div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-required="true"
            aria-invalid={!!(formik.touched.email && formik.errors.email)}
            aria-describedby={formik.errors.email ? "email-error" : undefined}
          />
        </div>

        {/* Phone Field */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="phone" className="block font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-sm text-red-600" role="alert">
                {formik.errors.phone}
              </p>
            )}
          </div>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(123) 456-7890"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-required="true"
            aria-invalid={!!(formik.touched.phone && formik.errors.phone)}
            aria-describedby={formik.errors.phone ? "phone-error" : undefined}
          />
        </div>

        {/* Message Field */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="message"
              className="block font-medium text-gray-700"
            >
              Message <span className="text-red-500">*</span>
            </label>
            {formik.touched.message && formik.errors.message && (
              <p className="text-sm text-red-600" role="alert">
                {formik.errors.message}
              </p>
            )}
          </div>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="How can we help you?"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-required="true"
            aria-invalid={!!(formik.touched.message && formik.errors.message)}
            aria-describedby={
              formik.errors.message ? "message-error" : undefined
            }
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full cursor-pointer rounded-md px-6 py-4 font-medium  text-lg text-white transition-all duration-300 ${
              isSubmitting
                ? "bg-foreground cursor-not-allowed"
                : "bg-button-login-default hover:bg-secondary/80 hover:shadow-lg"
            }`}
          >
            {isSubmitting ? "Sending..." : "Book Your Free Strategy via email"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

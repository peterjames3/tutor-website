"use client";
import { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import useToast from "@/ui/useToast";
import { validate } from "./validation";
import { FormValues } from "@/lib/defination";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const { notifySuccess, notifyError } = useToast();

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_CONTACTUS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      timeZone: "",
      service: "",
      scheduleUrgency: "standard",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitting(true);

      emailjs.send(serviceId, templateId, values, publicKey).then(
        () => {
          notifySuccess("Thank you for booking with us!");
          setIsSubmitting(false);
          setSubmittedSuccessfully(true);
          formik.resetForm();
        },
        (error) => {
          notifyError(`Message sending failed! ${error.text || error.message}`);
          setIsSubmitting(false);

          console.error(error);
        },
      );
    },
  });

  return { formik, isSubmitting, submittedSuccessfully };
};

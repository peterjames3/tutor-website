'use client';
import { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import useToast from "@/app/ui/useToast";
import { quotevalidate, FormValues } from "./quotevalidate";

export const useQuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { notifySuccess, notifyError } = useToast();

  const serviceId  = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_QUOTE_TEMPLATE_ID  as string;
  const publicKey  = process.env.NEXT_PUBLIC_KEY as string;

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      exam: "",
      date: "",
      platform: "",

    },
     quotevalidate,
    onSubmit: (values) => {
      setIsSubmitting(true);

      emailjs.send(serviceId, templateId, values, publicKey).then(
        () => {
          notifySuccess("Thank you for contacting us! We'll get back to you soon.");
          setIsSubmitting(false);
          formik.resetForm();
          console.log(values)
        },
        (error) => {
          notifyError(`Message sending failed! ${error.text || error.message}`);
          setIsSubmitting(false);
          console.error(error);
        }
      );
    },
  });

  return { formik, isSubmitting };
};
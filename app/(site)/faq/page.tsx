"use client";
import Link from "next/link";
import FAQSchema from "./_schema"

const faqs = [
  {
    question: "Do you help with homework?",
    answer:
      "Yes! We take time to make sure the student understands the major concepts behind the homework. We guide students toward arriving at the right answer on their own.",
  },
  {
    question: "What subjects do you offer test prep for?",
    answer:
      "We cover all major academic subjects from K-12 through college level, including STEM, humanities, languages, and professional certificates.",
  },
  {
    question: "How are tutoring sessions conducted?",
    answer: "Sessions are available for online through our virtual classroom.",
  },
  {
    question: "What are your payment options?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our platform.",
  },
  {
    question: "Can I reschedule or cancel a session?",
    answer:
      "Yes, you can reschedule or cancel up to 24 hours before your session without charge. Late cancellations may incur a fee.",
  },
  {
    question: "How do I know if a tutor is qualified?",
    answer:
      "All tutors undergo a rigorous vetting process including credential verification, background checks, and subject matter testing.",
  },
  {
    question: "What if I don't like my tutor?",
    answer:
      "Not a problem! We have a broad and diverse team of qualified tutors and will match you with a tutor that better suits your needs and preferences. You can also make specific requests before your tutor is assigned to ensure you get the best possible match initially. If you require a tutor with a certain level of education or other qualities for any reason, such as a tutor with a Biology degree or a female tutor for a female child, just indicate this fact and we will gladly accommodate you.",
  },
];

export default function FAQPage() {
  return (
    <>
    <FAQSchema />
    <div className="mt-36 max-w-4xl mx-auto px-6 py-10 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="headline font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact our support team
          </a>
        </p>
      </div>

      <section className="space-y-6">
        {faqs.map((faq, index) => (
          <article key={index} className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </article>
        ))}
      </section>

      <div className="mt-12 bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
        <p className="mb-4">
          Our support team is happy to help with any other questions you might
          have.
        </p>
        <Link href="/contact" className="inline-block btn cursor-pointer">
          Contact Support
        </Link>
      </div>
    </div>
    </>
  );
}

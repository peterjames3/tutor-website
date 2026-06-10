"use client";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

export default function ContactPage() {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });
  return (
    <div className=" mt-32 max-w-4xl mx-auto px-6 py-16 min-h-[15rem]">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <div className="mb-8">
        <p className="mb-4">
          For immediate assistance, check out our Help Center where you&apos;ll
          find answers to many frequently asked questions.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email Support</h2>
            <p>Reach out to our Customer Support team by email at:</p>
            <a className="text-blue-600 font-medium">info@testhelpnow.com</a>
            <p className="text-gray-600">
              Our team typically responds to emails within 24 hours of submission.
            </p>
          </div>

          

         
        </div>
      </div>
      <div className="App">
        <InlineWidget url="https://calendly.com/testprep952/30min" />
      </div>
    </div>
  );
}

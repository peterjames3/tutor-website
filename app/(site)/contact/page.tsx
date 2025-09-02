"use client";

export default function ContactPage() {
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
            <a  className="text-blue-600 font-medium">info@testhelpnow.com</a>
            <p className="text-gray-600">
              Our team typically responds to emails within 1-3 business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Corporate Address</h2>
            <address className="not-italic">
              <p className="font-medium">Tutor Dashboard</p>
              <p>123 Education Lane, Suite 400</p>
              <p>San Francisco, CA 94107</p>
            </address>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
            <p className="text-blue-600 font-medium">(555) 123-4567</p>
            <p className="text-gray-600">Monday-Friday, 9am-5pm PST</p>
          </div>
        </div>
      </div>

      {/* <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Twitter
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Facebook
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            LinkedIn
          </a>
        </div>
      </div> */}
    </div>
  );
}

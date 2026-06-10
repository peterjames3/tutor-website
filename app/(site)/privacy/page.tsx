"use client";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto mt-36 p-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 text-gray-700">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            TutorPro (&apos;we,&apos; &apos;our,&apos; or &apos;us&apos;)
            provides Test Preparation, Tutoring Services, and End-to-End Exam
            Support (including exam completion on your behalf). We are committed
            to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p className="mb-4">
            For our services (Test Prep, Tutoring, and Exam Support), we may
            collect:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Personal Information:</strong> Full name, email, phone
              number, payment details, academic records
            </li>
            <li>
              <strong>Exam Credentials:</strong> For end-to-end exam support, we
              collect login details and exam materials (only with explicit
              consent)
            </li>
            <li>
              <strong>Performance Data:</strong> Test scores, practice results,
              and academic progress
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <p className="mb-4">Specific to our services:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Test Preparation:</strong> Customize study plans and track
              progress
            </li>
            <li>
              <strong>Tutoring:</strong> Match with subject-specific tutors and
              schedule sessions
            </li>
            <li>
              <strong>Exam Support:</strong> Access exam portals on your behalf
              (with explicit authorization)
            </li>
            <li>Generate practice materials and mock exams</li>
            <li>
              Provide performance analytics and improvement recommendations
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Special Considerations for Exam Support
          </h2>
          <p className="mb-4">For our end-to-end exam support service:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              We require explicit, documented consent for each exam session
            </li>
            <li>
              All exam credentials are stored encrypted and deleted after
              completion
            </li>
            <li>We maintain activity logs of all exam-related actions</li>
            <li>
              You may request complete deletion of exam-related data at any time
            </li>
          </ul>
          <p className="text-sm italic">
            Note: We comply with all academic integrity policies and provide
            this service strictly as an accessibility aid.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
          <p className="mb-4">For our specialized services:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Tutors receive only necessary information for your sessions</li>
            <li>
              Exam proctors receive limited access during support sessions
            </li>
            <li>
              Third-party testing platforms only receive information you
              authorize
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Security Measures</h2>
          <p className="mb-4">Additional protections for exam support:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Multi-factor authentication for all exam access</li>
            <li>Session recording and audit trails</li>
            <li>Automatic credential rotation after each use</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
          <p className="mb-4">Specific to our services:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Request copies of all exam materials we&apos;ve accessed</li>
            <li>Revoke exam access at any time (even mid-session)</li>
            <li>
              Receive full reports of all actions taken during exam support
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. Service-Specific Contact
          </h2>
          <address className="not-italic">
            <p>
              <strong>For Test Prep:</strong> info@testhelpnow.com
            </p>
            <p>
              <strong>For Tutoring:</strong> info@testhelpnow.com
            </p>
            <p>
              <strong>For Exam Support:</strong> info@testhelpnow.com
            </p>

            <p>24/7 Support Line: +1(469) 428-4470</p>
          </address>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Policy Updates</h2>
          <p className="mb-4">
            Changes specific to exam services will be communicated via email at
            least 14 days in advance.
          </p>
        </section>
      </div>
    </div>
  );
}

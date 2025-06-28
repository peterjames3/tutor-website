"use client";
// app/test/page.tsx
export default function TestPage() {
  async function submitForm() {
    try {
      const response = await fetch(
        "https://tutor-dashboard-self.vercel.app/api/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Jane Smith",
            email: "jane@example.com",
            phone_number: "0987654321",
            level: "Undergraduate",
            support_type: "Tutoring",

            subject: "Mathematics",
            start_date: "2025-07-01",
          }),
        }
      );
      const result = await response.json();
      alert(JSON.stringify(result));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="p-10 h-screen flex items-center justify-center">
      <button
        onClick={submitForm}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer"
      >
        Test Submit
      </button>
    </div>
  );
}

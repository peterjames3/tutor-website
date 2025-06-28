async function submitForm() {
  const response = await fetch(
    "https://tutor-dashboard-self.vercel.app/api/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Jane Smith",
        email: "jane@example.com",
        phone_number: "0987654321",
        level: "Undergraduate",
        support_type: "Tutoring",
        subject_help: "Calculus",
        subject: "Mathematics",
        start_date: "2025-07-01",
      }),
    }
  );

  const result = await response.json();
  console.log(result);
}

"use server";

import { db } from "@/src/db";
//import { Resend } from "resend";
//import { render } from "@react-email/render";
//import { FormSubmissionEmail } from "@/emails/form-submission";
//import { ClientConfirmationEmailSimple } from "@/app/ui/components/form/client-confirmation-simple";
import {
  ExamPrepFormSchema,
  TutoringFormSchema,
  EndToEndSupportFormSchema,
} from "@/lib/zod-schema";

import {
  examPrep,
  tutoringStudents,
  endToEndSupportStudents,
} from "@/src/db/schema";
//const resend = new Resend(process.env.RESEND_API_KEY);
// e
export async function submitForm(data: any) {
  try {
    const supportType = data.support_type;

    let validated;

    switch (supportType) {
      case "Exam Prep":
        validated = ExamPrepFormSchema.parse(data);
        await db.insert(examPrep).values({
          ...validated,
        });
        break;

      case "Tutoring":
        validated = TutoringFormSchema.parse(data);
        await db.insert(tutoringStudents).values({
          ...validated,
        });
        break;

      case "End to End Exam Support":
        validated = EndToEndSupportFormSchema.parse(data);
        await db.insert(endToEndSupportStudents).values({
          ...validated,
        });
        break;

      default:
        throw new Error("Invalid support type provided.");
    }
    // --- Email Notification ---
    //   const emailHtml = `
    //   <h2>New ${supportType} Submission</h2>
    //   <p><strong>Name:</strong> ${validated.name}</p>
    //   <p><strong>Email:</strong> ${validated.email}</p>
    //   <p><strong>Phone:</strong> ${validated.phone_number}</p>
    //   <p><strong>Level:</strong> ${validated.level}</p>
    //   <p><strong>Support Type:</strong> ${validated.support_type}</p>
    // `;

    // await resend.emails.send({
    //   from: "no-reply@yourdomain.com",
    //   to: ["testprep952@gmail.com", validated.email],
    //   subject: `New ${supportType} Application from ${validated.name}`,
    //   html: emailHtml,
    // });

    // return { success: true };
  } catch (error: unknown) {
    console.error("Form submission error:", error);
    return { success: false, error: error.message || "Unexpected error" };
  }
}

// Send admin notification
// await resend.emails.send({
//   from: "TestPrep Admin <notifications@testprep.com>",
//   to: "testprep952@gmail.com",
//   subject: `New ${supportType} Application - ${parsedData.name}`,
//   html: render(
//     <FormSubmissionEmail
//       name={parsedData.name}
//       email={parsedData.email}
//       supportType={supportType}
//       subject={parsedData.subject || parsedData.exam}
//     />
//   ),
// });

// Send client confirmation
// await resend.emails.send({
//   from: "TestPrep Support <support@testprep.com>",
//   to: parsedData.email,
//   subject: "We've Received Your Application",
//   html: render(
//     <ClientConfirmationEmailSimple
//       name={parsedData.name}
//       supportType={supportType}
//     />
//   ),
// });

// import { Resend } from "resend";
// import { db } from "@/src/db";
// import {
//   BaseFormSchema,
//   ExamPresFormSchema,
//   TutoringFormSchem,
//   EndToEndSupportFormSchema,
// } from "@/lib/zod-schema";
// import {
//   examPrep,
//   tutoringStudents,
//   endToEndSupportStudents,
// } from "@/src/db/schema";

//  const DEFAULT_ASSISTANT = "Martin Kamau";
//  const DEFAULT_STATUS = "Pending";

// Helper to parse and throw Zod error if invalid

// export async function sendEmail() {
//   console.log("Server action triggered");

//   const resend = new Resend(process.env.RESEND_API_KEY);
//   try {
//     const data = await resend.emails.send({
//       from: "onboarding@resend.dev", // ✅ Use this for testing
//       to: ["kamauchief97@gmail.com", "testprep952@gmail.com"], // ✅ Recipients
//       subject: "Test from Resend + Server Action",
//       html: "<p>Hello Kamau, your Resend + Next.js setup works!</p>",
//     });

//     return { success: true, data };
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return { success: false, error: error.message };
//   }
// }

// import { db } from "@/src/db";
// import {

//   examPrep,
//   tutoringStudents,
//   endToEndSupportStudents,
// } from "@/src/db/schema";
// import {
//   BaseFormSchema,
//   ExamPrepFormSchema,
//   TutoringFormSchema,
//   EndToEndSupportFormSchema,
// } from "@/lib/zod-schema"; // <-- Your Zod validation schemas
// import { z } from "zod";

// // Default values
// const DEFAULT_ASSISTANT = "Martin Kamau";
// const DEFAULT_STATUS = "Pending";

import { notFound as nextNotFound } from "next/navigation";

export default function ExamPage({ params }: { params: { slug: string } }) {
  // Content data for each exam type
  type Section = {
    title: string;
    content: string;
    tips?: string[];
  };

  type Exam = {
    title: string;
    sections: Section[];
    testimonials: { author: string; quote: string }[];
  };

  const examContent: { [key: string]: Exam } = {
    psat: {
      title: "Digital PSAT® Preparation",
      sections: [
        {
          title: "Math",
          content: "If x² = 3x - 10...",
          tips: [
            "Remember to check all answer choices",
            "Choose the most concise answer",
          ],
        },
        {
          title: "Writing Test",
          content: "The writer wants to emphasize...",
          tips: ["Look for the most concise answer"],
        },
        {
          title: "Services",
          content:
            "Explore our comprehensive PSAT exam services including tutoring and practice exams.",
        },
      ],
      testimonials: [
        {
          author: "Alice K",
          quote:
            "I passed my exam today! The course presentation was meticulous and aligned with certification requirements.",
        },
      ],
    },
    isee: {
      title: "ISEE Exam Preparation",
      sections: [
        {
          title: "What is the ISEE?",
          content: "A standardized test for admission to private schools.",
        },
        {
          title: "Exam Prep",
          content: "User-friendly settings designed for seamless testing.",
        },
        {
          title: "Why Choose Our Program",
          content: "94% of participants achieve their target scores.",
        },
      ],
      testimonials: [
        {
          author: "Emily Thompson",
          quote: "The personalized study plan was a game changer for me.",
        },
      ],
    },
  };

  const exam = examContent[params.slug as keyof typeof examContent];

  if (!exam) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto rounded-sm py-60 px-6">
      <h1>{exam.title}</h1>

      {/* Exam Sections */}
      {exam.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          {section.tips && (
            <ul>
              {section.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* Testimonials */}
      <div className="testimonials">
        {exam.testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            <p>&apos;{testimonial.quote}&apos;</p>
            <footer>- {testimonial.author}</footer>
          </blockquote>
        ))}
      </div>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <button>Enroll Now</button>
      </section>
    </div>
  );
}
function notFound() {
  nextNotFound();
}

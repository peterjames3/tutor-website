import TestimonialScroller from "./testimonial-scroller";
import FloatingElements from "../animation/FloatingElements";

const topRowTestimonials = [
  {
    name: "Paul H",
    location: "Boston, MA",
    date: "15 Jan, 2025",
    rating: 5,
    content: "An excellent tutor and a kind individual who is dedicated...",
  },
  {
    name: "Angela P",
    location: "Memphis, TN",
    date: "03 Jan, 2025",
    rating: 5,
    content: "Dr. Jide is incredible! He has worked with my daughter...",
  },
  {
    name: "Kevin M",
    location: "Los Angeles, CA",
    date: "01 Jan, 2025",
    rating: 5,
    content: "Would recommend to anyone. Very knowledgeable about the ARRT...",
  },
  {
    name: "Regina H",
    location: "Miami, FL",
    date: "30 Apr, 2024",
    rating: 5,
    content: "Dana is very knowledgeable, especially with anatomy...",
  },
];

const bottomRowTestimonials = [
  {
    name: "Sandra K",
    location: "Chicago, IL",
    date: "15 Dec, 2024",
    rating: 5,
    content: "He was super patient and explained everything clearly...",
  },
  {
    name: "Derrick J",
    location: "Seattle, WA",
    date: "28 Nov, 2024",
    rating: 4,
    content: "Great sessions! Helped me pass my radiology exam.",
  },
  {
    name: "Beatrice M",
    location: "Newark, NJ",
    date: "12 Oct, 2024",
    rating: 5,
    content: "Clear, focused, and highly knowledgeable. Would recommend!",
  },
  {
    name: "Tunde L",
    location: "Houston, TX",
    date: "05 Sep, 2024",
    rating: 5,
    content: "Explains complex concepts in a very simple way.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-16 relative ">
      <section className="w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] ">
        <h2 className="text-center text-2xl font-bold mb-10">
          What Our Clients Say
        </h2>

        <div className="space-y-10">
          <TestimonialScroller
            testimonials={topRowTestimonials}
            direction="right"
          />
          <TestimonialScroller
            testimonials={bottomRowTestimonials}
            direction="left"
          />
        </div>
      </section>
      <FloatingElements />
    </div>
  );
}

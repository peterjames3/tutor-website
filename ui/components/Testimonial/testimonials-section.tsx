import TestimonialScroller from "./testimonial-scroller";
import FloatingElements from "../animation/FloatingElements";

const topRowTestimonials = [
  {
    name: "Paul H",
    location: "Boston, MA, USA",
    date: "15 Jan, 2025",
    rating: 5,
    content: "I needed to pass my PMP exam quickly for a promotion. The expert assigned to me was phenomenal — I passed with flying colors! Highly recommend their PMP exam help.",
  },
  {
    name: "Angela P",
    location: "Memphis, TN, USA",
    date: "03 Jan, 2025",
    rating: 5,
    content: "Dr. Jide is incredible! He helped me prepare for my SHRM exam and even handled the proctored session seamlessly. I'm now SHRM-CP certified. Thank you!",
  },
  {
    name: "Kevin M",
    location: "Los Angeles, CA, USA",
    date: "01 Jan, 2025",
    rating: 5,
    content: "Was skeptical about using an online exam helper, but they delivered beyond expectations. They took my PRINCE2 exam for me, and I got my certification without stress.",
  },
  {
    name: "Regina H",
    location: "Miami, FL, USA",
    date: "30 Apr, 2024",
    rating: 5,
    content: "Needed help with my Real Estate licensing exam. The expert was knowledgeable about both national and state-specific content. I passed on my first try!",
  },
  {
    name: "Sarah W",
    location: "London, United Kingdom",
    date: "12 Feb, 2025",
    rating: 5,
    content: "The PRINCE2 exam was my biggest career hurdle. Their UK-based experts understood the exam inside out. I passed with distinction and got promoted within weeks.",
  },
  {
    name: "Michael R",
    location: "Toronto, Canada",
    date: "08 Jan, 2025",
    rating: 5,
    content: "Needed to get my PMP certification for a new role in Toronto. The team handled the proctored exam perfectly. I'm now PMP certified and loving my new job!",
  },
  {
    name: "Emma K",
    location: "Melbourne, Australia",
    date: "22 Feb, 2025",
    rating: 5,
    content: "I was nervous about the GED exam, but they assigned a patient expert who walked me through everything. I finally have my high school equivalency certificate.",
  },
  {
    name: "David O",
    location: "Dublin, Ireland",
    date: "05 Mar, 2025",
    rating: 5,
    content: "The SHRM exam help was outstanding. Their expert knew the HR landscape in both US and European contexts. I passed SHRM-SCP with confidence!",
  },
];

const bottomRowTestimonials = [
  {
    name: "Sandra K",
    location: "Chicago, IL, USA",
    date: "15 Dec, 2024",
    rating: 5,
    content: "I was struggling with my GED exam prep. They assigned a patient expert who took my exam and I finally got my high school equivalency diploma. Life-changing!",
  },
  {
    name: "Derrick J",
    location: "Seattle, WA, USA",
    date: "28 Nov, 2024",
    rating: 4,
    content: "Great sessions! They handled my proctored nursing exam on NCLEX. The expert was professional, and I passed on my first attempt. Highly recommend their exam help.",
  },
  {
    name: "Beatrice M",
    location: "Newark, NJ, USA",
    date: "12 Oct, 2024",
    rating: 5,
    content: "I needed help with my HiSET exam. They took care of all five subtests — Language Arts, Math, Science, and Social Studies. I'm now certified. Thank you!",
  },
  {
    name: "Tunde L",
    location: "Houston, TX, USA",
    date: "05 Sep, 2024",
    rating: 5,
    content: "They helped me pass my PMP and PRINCE2 exams back-to-back. Both were proctored, and the team handled everything seamlessly. I couldn't have done it without them.",
  },
  {
    name: "Priya S",
    location: "Mumbai, India",
    date: "18 Jan, 2025",
    rating: 5,
    content: "I needed to pass my PMP exam for a global role. Their expert understood the PMI framework perfectly. I passed on my first attempt and now lead international projects.",
  },
  {
    name: "James L",
    location: "Singapore",
    date: "25 Feb, 2025",
    rating: 5,
    content: "The Real Estate exam help was exceptional. They covered both local and international regulations. I'm now licensed in Singapore thanks to their support.",
  },
  {
    name: "Fatima A",
    location: "Dubai, UAE",
    date: "10 Mar, 2025",
    rating: 5,
    content: "I needed to pass my SHRM exam for a senior HR role. Their experts guided me through the process and I achieved SHRM-SCP certification. Highly professional team!",
  },
  {
    name: "Carlos M",
    location: "São Paulo, Brazil",
    date: "14 Apr, 2025",
    rating: 5,
    content: "They helped me with my PRINCE2 Foundation exam. The expert was fluent in both English and Portuguese. I passed confidently and secured a project manager role.",
  },
  {
    name: "Naomi T",
    location: "Auckland, New Zealand",
    date: "01 May, 2025",
    rating: 5,
    content: "I needed to pass my HiSET exam for university admission. Their team handled everything professionally. I'm now enrolled in my dream program. Thank you!",
  },
  {
    name: "Ahmed H",
    location: "Cairo, Egypt",
    date: "22 Apr, 2025",
    rating: 5,
    content: "The PMP exam help was game-changing. Their experts knew the latest PMI updates. I passed easily and landed a consulting role with a top firm.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-16 relative ">
      <section className="w-full mx-auto max-w-full lg:max-w-310 ">
        <h2 className="text-center text-primary text-2xl font-bold mb-10">
          What Our Global Clients Say
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

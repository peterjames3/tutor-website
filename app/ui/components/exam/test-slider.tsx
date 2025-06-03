// components/ExamServices/ServicesCarousel.tsx
import ServiceCard from "./exam-service-card";

const services = [
  {
    title: "MCAT 515+ Exams and classes",
    description: "We take exams and do classes tailored to you.",
    labels: ["Live Online", "In-Person"],
    highlight: "Most popular",
  },
  {
    title: "LSAT 165+ Exams and Classes",
    description: "Everything you need for LSAT success.",
    labels: ["Live Online", "In-Person"],
  },
  {
    title: "GMAT 645+ Exams and Classes",
    description: "Get a GMAT focus score that top business schools want.",
    labels: ["Live Online"],
  },
  {
    title: "GRE+ Exams and Classes",
    description: "Achieve your best GRE score",
    labels: ["Live Online"],
  },
  {
    title: "GRE+ Exams and Classes",
    description: "Achieve your best GRE score",
    labels: ["Live Online"],
  },
];

export default function TestCarousel() {
  return (
    <div className="flex overflow-x-auto gap-6 px-1 scrollbar-hide">
      {services.map((item, index) => (
        <ServiceCard key={index} {...item} />
      ))}
    </div>
  );
}

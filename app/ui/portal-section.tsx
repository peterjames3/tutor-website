// components/PortalsSection.tsx
import Image from "next/image";

// Define portal data separately for better maintainability
const PORTALS = [
  {
    src: "/canvas.png",
    alt: "canvas exam portal logo",
    title: "Canvas",
    bgColor: "bg-[#FBF7F0]",
  },
  {
    src: "/StraighterLine.webp",
    alt: "straighterline exam portal logo",
    title: "Straighter Line",
    bgColor: "bg-[#F6EEF0]",
  },
  {
    src: "/Blackboard.webp",
    alt: "blackboard exam portal logo",
    title: "Blackboard",
    bgColor: "bg-[#E9F5EA]",
  },
  {
    src: "/Pearson.png",
    alt: "pearson exam portal logo",
    title: "Pearson",
    bgColor: "bg-[#E3F1F5]",
  },
  {
    src: "/sophia.png",
    alt: "sophia exam portal logo",
    title: "Sophia",
    bgColor: "bg-[#ECE5F1]",
  },
] as const;

// Extracted Portal Card component for better readability and potential memoization
const PortalCard = ({ portal }: { portal: (typeof PORTALS)[number] }) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 p-14 rounded-[3rem] rounded-tl-none transition-transform hover:scale-105 duration-300 w-full ${portal.bgColor}`}
    >
      <div className="relative w-[70px] h-[70px]">
        <Image
          src={portal.src}
          alt={portal.alt}
          fill
          sizes="150px"
          className="object-contain"
          loading="lazy"
          quality={75}
        />
      </div>
      <h3 className="text-xl font-semibold text-primary text-center">
        {portal.title}
      </h3>
    </div>
  );
};

export default function PortalsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#e2ebf3]/30">
      <div className="w-full mx-auto max-w-7xl flex flex-col items-center text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Portals We Work On
        </h2>
        <p className="text-primary text-lg max-w-3xl">
          We have experts for all portals and courses.
          <br className="hidden sm:block" />
          <span className="inline-block mt-2 sm:mt-0">
            If your portal is not available on the list, contact us, and we will
            connect you with one of the best profiles in the industry.
          </span>
        </p>
      </div>

      <div className="w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PORTALS.map((portal, index) => (
            <PortalCard key={`${portal.title}-${index}`} portal={portal} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import BackgroundRings from "../about/background-rings";
import LearnOnlineBadge from "../about/learnonline-badge";

export default function HireSomeoneLeft() {
  return (
    <div className="relative w-full h-full mx-auto flex  justify-center ">
      {/* 1. Recreated Geometric Circular Rings in the back */}
      <BackgroundRings />

      {/* 2. Main Characters Container */}
      <div className="relative w-full h-[38rem] z-6 ">
        <Image
          src="/first-content-right.webp"
          alt="Male Instructor"
          width={1200}
          height={1200}
          priority
          className="object-cover h-full "
        />
      </div>

      {/* 3. Floating Label - Absolute positioned relative to the center cluster */}
      <div className="absolute bottom-[5%] right-[2%] z-8">
        <LearnOnlineBadge />
      </div>

      {/* Decorative Spark Accent (Top Left) */}
      <div className="absolute top-6 left-6 text-emerald-500 opacity-60 animate-pulse">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.4L21 11l-6.6 2.6L12 20l-2.4-6.4L3 11l6.6-2.6L12 2z" />
        </svg>
      </div>
    </div>
  );
}
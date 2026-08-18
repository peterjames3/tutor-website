import Image from "next/image";
import { CertificationCard } from "./certificate-cards";

export const HeroRight = () => {
  return (
    <div className="relative w-full mx-auto flex items-center justify-center">
      {/* Main Recreated Character Image */}
      <div className="relative w-full h-[33rem]  flex items-center justify-center z-10 pt-10">
        <Image
          src="/real-estate-2.webp"
          alt="Real Estate Professional"
          width={480}
          height={900}
          priority
          className="object-fill h-full w-full drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      {/* 1. NAR Card - National Association of Realtors */}
      <CertificationCard
        positionClasses="bottom-[25%] left-[-10%] md:left-[-8%]"
        animationClass="animate-bounce-slow"
        gradientColors={{ from: "#005A9C", to: "#4A90D9" }}
        title="NAR"
        subtitle="National Association of Realtors"
        vendor="ARELLO"
        icon={
          <g
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Realtor Emblem - House with R */}
            <path d="M20 6L4 16L8 22L20 30L32 22L36 16L20 6Z" fill="none" />
            <path
              d="M20 9L6 17.5L10 22L20 28L30 22L34 17.5L20 9Z"
              fill="none"
            />
            <text
              x="20"
              y="24"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              fill="#ffffff"
            >
              R
            </text>
          </g>
        }
      />

      {/* 2. PSI Card - Real Estate Licensing Vendor */}
      <CertificationCard
        positionClasses="top-[25%] left-[-10%] md:left-[-2%]"
        animationClass="animate-bounce-slow [animation-delay:1s]"
        gradientColors={{ from: "#E87C1E", to: "#F4A460" }}
        title="PSI"
        subtitle="Real Estate Licensing"
        vendor="PSI Services"
        icon={
          <g
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Testing/Checkmark Emblem */}
            <rect x="8" y="8" width="24" height="24" rx="4" fill="none" />
            <path d="M13 20l4 4 8-10" strokeWidth="3" />
          </g>
        }
      />

      {/* 3. ARELLO Card - Real Estate Regulatory */}
      <CertificationCard
        positionClasses="bottom-[45%] right-[-4%] md:right-[-2%]"
        animationClass="animate-bounce-slow [animation-delay:2s]"
        gradientColors={{ from: "#1A5276", to: "#2980B9" }}
        title="ARELLO"
        subtitle="Real Estate Regulatory"
        vendor="ARELLO"
        icon={
          <g fill="#ffffff" opacity="0.95">
            {/* Regulatory/Shield Emblem */}
            <path
              d="M20 6L6 12V18C6 24 12 28 20 30C28 28 34 24 34 18V12L20 6Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <circle
              cx="20"
              cy="18"
              r="5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <text
              x="20"
              y="21"
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
              fill="#ffffff"
            >
              A
            </text>
          </g>
        }
      />

      {/* Decorative Top/Right Abstract Accents */}
      <div className="absolute top-[5%] right-[5%] grid grid-cols-4 gap-3 opacity-20 sm:grid">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-slate-800 rounded-full" />
        ))}
      </div>

      {/* Bottom Trust Badge */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
        <p className="text-xs font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Trusted by 20+ Real Estate Professionals
        </p>
      </div>
    </div>
  );
};

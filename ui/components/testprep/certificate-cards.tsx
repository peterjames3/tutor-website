import React from "react";

interface CertificationCardProps {
  positionClasses: string; // e.g., "top-[10%] left-[-12%]"
  animationClass?: string; // e.g., "animate-bounce-slow" or custom delays
  gradientColors: {
    from: string; // e.g., "#ff9900"
    to: string; // e.g., "#ecc94b"
  };
  title: string; // e.g., "NAR" or "Real Estate"
  subtitle: string; // e.g., "National Association of Realtors"
  icon: React.ReactNode; // Custom SVG vector path for the badge
  vendor: string; // e.g., "ARELLO" or "PSI"
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  positionClasses,
  animationClass = "animate-bounce-slow",
  gradientColors,
  title,
  subtitle,
  icon,
  vendor,
}) => {
  // Unique ID for the SVG gradient definition to prevent ID clashing across multiple instances
  const gradientId = `certGrad-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className={`absolute ${positionClasses} ${animationClass} bg-white/95 backdrop-blur-md border border-white/40 pl-4 pr-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 z-30 select-none transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default`}
    >
      {/* Dynamic Icon Wrapper */}
      <div className="w-11 h-11 rounded-full border-2 border-white shadow-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientColors.from} />
              <stop offset="100%" stopColor={gradientColors.to} />
            </linearGradient>
          </defs>
          {/* Background Badge Shape */}
          <rect width="40" height="40" fill={`url(#${gradientId})`} />

          {/* Injected Vector Icon Content */}
          {icon}
        </svg>
      </div>

      {/* Dynamic Text Content */}
      <div className="flex flex-col justify-center">
        <span className="text-lg font-extrabold text-slate-800 tracking-tight leading-none">
          {title}
        </span>
        <span className="text-xs text-slate-500 font-bold tracking-wide mt-1 whitespace-nowrap">
          {subtitle}
        </span>
        <span className="text-[10px] text-emerald-600 font-semibold mt-0.5">
          {vendor}
        </span>
      </div>
    </div>
  );
};

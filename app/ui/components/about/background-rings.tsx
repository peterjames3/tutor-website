export default function BackgroundRings() {
  return (
    <div className="absolute w-[130%] h-[130%] pointer-events-none opacity-40 flex items-center justify-center z-0">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full text-slate-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle
          cx="200"
          cy="200"
          r="140"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="200"
          cy="200"
          r="100"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  );
}

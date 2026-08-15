export default function WavyTexture() {
  return (
    <div className="w-24 h-24 text-accent-500/40 opacity-80">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M0,10 Q12.5,20 25,10 T50,10 T75,10 T100,10" />
        <path d="M0,25 Q12.5,35 25,25 T50,25 T75,25 T100,25" />
        <path d="M0,40 Q12.5,50 25,40 T50,40 T75,40 T100,40" />
        <path d="M0,55 Q12.5,65 25,55 T50,55 T75,55 T100,55" />
        <path d="M0,70 Q12.5,80 25,70 T50,70 T75,70 T100,70" />
      </svg>
    </div>
  );
}

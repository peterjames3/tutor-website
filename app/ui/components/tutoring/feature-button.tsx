

interface FeatureButtonProps {
  label: string;
  icon: string;
  
}

export default function FeatureButton({ label, icon }: FeatureButtonProps) {
  return (
    <div className={`flex items-center space-x-3 px-4 py-3 rounded-2xl border transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-sm `}>
      <span className="text-lg">{icon}</span>
      <span className="font-semibold text-sm tracking-wide">{label}</span>
    </div>
  );
}
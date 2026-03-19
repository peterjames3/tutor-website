import { Bot, X } from "lucide-react";
interface ChartHeaderProps {
  setIsOpen: (value: boolean) => void;
}
export default function ChartHeader({ setIsOpen }: ChartHeaderProps) {
  return (
    <section className="text-label-title px-4 py-6 font-medium bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] text-primary rounded-t-3xl flex justify-between items-center">
      <header className="flex gap-2 items-center">
        <Bot size={30} className="" />
        <h3> Messages</h3>
      </header>

      <button
        onClick={() => setIsOpen(false)}
        className="text-primary hover:text-gray-400 cursor-pointer"
        aria-label="Close chatbot"
      >
        <X size={20} />
      </button>
    </section>
  );
}

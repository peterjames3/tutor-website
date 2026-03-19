// components/HomeTab.tsx
import { HelpCircle } from "lucide-react";
import Link from "next/link";
interface HomeProps {
  setActiveTab: (tab: "home" | "messages" | "help") => void;
}
export default function HomeTab({ setActiveTab }: HomeProps) {
  return (
    <div className="px-4 py-2">
      <button
        onClick={() => setActiveTab("messages")}
        className="absolute top-42 w-78 rounded-lg flex justify-between items-center cursor-pointer p-4 mt-4  shadow-sm bg-[#f8f9fa]  text-primary hover:bg-secondary/90 transition"
      >
        <div className="text-start">
          <h3 className="text-lg font-semibold ">Ask a Question</h3>
          <p className="text-base ">AI Agent and team can help</p>
        </div>

        <HelpCircle size={30} className="inline-block " />
      </button>
      <Link
        href="/how-it-works"
        className="absolute top-65 w-78 text-start rounded-lg cursor-pointer p-4 mt-4  shadow-sm bg-[#f8f9fa]  text-primary hover:bg-secondary/90 transition"
      >
        <h3 className="text-lg font-semibold ">How can I place an order?</h3>
        <p className="text-base">The process to place an order</p>
      </Link>
      <Link
        href="/contact"
        className="absolute top-88 w-78 text-start rounded-lg cursor-pointer p-4 mt-4  shadow-sm bg-[#f8f9fa]  text-primary hover:bg-secondary/90 transition"
      >
        <h3 className="text-lg font-semibold ">Consultation</h3>
        <p className="text-base">Book a free 15-minute strategy call</p>
      </Link>
    </div>
  );
}

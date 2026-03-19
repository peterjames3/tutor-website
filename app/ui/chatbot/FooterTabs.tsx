import { House, MessageSquareText, HelpCircle } from "lucide-react";

interface FooterTabsProps {
  activeTab: string;
  setActiveTab: (tab: "home" | "messages" | "help") => void;
}

export default function FooterTabs({
  activeTab,
  setActiveTab,
}: FooterTabsProps) {
  return (
    <div className="flex justify-between px-3 border-t  border-accent2 py-5">
      <button
        onClick={() => setActiveTab("home")}
        className={`flex flex-col items-center p-3 text-base hover:cursor-pointer ${
          activeTab === "home" ? "text-primary font-semibold" : "text-gray-400"
        }`}
      >
        <House size={20} className="inline-block " />
        Home
      </button>

      <button
        onClick={() => setActiveTab("messages")}
        className={`flex flex-col items-center p-3 text-base hover:cursor-pointer ${
          activeTab === "messages"
            ? "text-primary font-semibold"
            : "text-gray-400"
        }`}
      >
        <MessageSquareText size={20} className="" />
        Messages
      </button>

      <button
        onClick={() => setActiveTab("help")}
        className={`flex flex-col items-center p-3 text-base hover:cursor-pointer${
          activeTab === "help" ? "text-primary font-semibold" : "text-gray-400"
        }`}
      >
        <HelpCircle size={20} className="" />
        Help
      </button>
    </div>
  );
}

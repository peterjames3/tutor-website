// components/ExamServices/Tabs.tsx
interface TabsProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const tabList = [
  "Grades K-12",
  "Graduate & beyond",
  "Professional Certification Exams",
];

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="w-full flex justify-center items-center mb-8">
      <div className="border border-secondary rounded-md inline-flex justify-center">
        {tabList.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`px-12 cursor-pointer py-2 p-text font-medium transition-all duration-200
              ${
                activeTab === idx
                  ? "bg-secondary text-primary"
                  : "text-primary font-medium"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

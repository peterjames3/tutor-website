// components/ExamServices/ServiceCard.tsx
interface testCardProps {
  title: string;
  description: string;
  labels: string[];
  highlight?: string;
}

export default function TestCard({
  title,
  description,
  labels,
  highlight,
}: testCardProps) {
  return (
    <div className="bg-accent rounded-sm shadow-md min-w-[260px] p-4 relative">
      {highlight && (
        <span className="absolute top-2 left-2 bg-secondary text-primary text-xs px-2 py-1 rounded font-medium">
          {highlight}
        </span>
      )}
      <div className="mb-2 flex flex-wrap gap-2 mt-5">
        {labels.map((label, idx) => (
          <span
            key={idx}
            className={`label-text font-medium px-2 py-1 rounded-full ${
              label === "Live Online"
                ? "bg-gray-100 text-green-600"
                : "bg-green-100 text-green-700"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      <h3 className="font-semibold title mt-2 mb-2">{title}</h3>
      <p className="p-text text-gray-600 mb-2">{description}</p>
      <button className="mt-4 w-full text-sm bg-green-500 text-white rounded-md py-2 hover:bg-green-600">
        Learn More
      </button>
    </div>
  );
}

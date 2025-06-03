// components/ExamServices/ServiceCard.tsx
import Link from "next/link";
interface testCardProps {
  title: string;
  description: string;
  labels: string[];
  highlight?: string;
  slug: string;
}

export default function TestCard({
  title,
  description,
  labels,
  highlight,
  slug,
}: testCardProps) {
  return (
    <div className="bg-cardBg rounded-sm shadow-md min-w-[260px] p-4 relative">
      {highlight && (
        <span className="absolute top-2 left-2 bg-secondary text-primary text-xs px-2 py-1 rounded font-medium">
          {highlight}
        </span>
      )}
      <div className="mb-2 flex flex-wrap gap-2 mt-5">
        {labels.map((label, idx) => (
          <span
            key={idx}
            className={`label-text font-medium px-2 py-1 rounded-sm ${
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
      <Link href={`/${slug}`}>
        <button className=" w-full mt-auto card-btn cursor-pointer ">
          Learn More
        </button>
      </Link>
    </div>
  );
}

"use client";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // was `string`, changed to `React.ReactNode` for JSX icon support
  selected: boolean;
  onClick: () => void;
  tags?: string[];
  variant?: string; // main color (icon)
  variantBg?: string; // light background color
  variantText?: string; // tag text color
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  selected,
  onClick,
  tags = [],
  variant = "#ccc",
  variantBg = "#f0f0f0",
  variantText = "#000",
}) => {
  return (
    <div
      className={`border rounded-xl p-6 cursor-pointer transition-all ${
        selected
          ? "border-accent2 bg-accent shadow-md ring-2 ring-accent2"
          : "border-gray-200 hover:border-gray-300 bg-background"
      }`}
      onClick={onClick}
    >
      <section className="flex items-start mb-4">
        {/* Icon Wrapper with dynamic colors */}
        <div
          className=" rounded-sm w-16 h-16 flex items-center justify-center"
          style={{ backgroundColor: variantBg, color: variant }}
        >
          <nav className="text-3xl">{icon}</nav>
        </div>

        {/* Text Content */}
        <article className="ml-4">
          <h3 className="title font-semibold text-primary">{title}</h3>
          <p className="p-text mt-1">{description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5 font-medium">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full label-text font-medium"
                  style={{
                    backgroundColor: variantBg,
                    color: variantText,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </section>
    </div>
  );
};

export default Card;

// components/SuccessStep.tsx
import { FC } from "react";

type SuccessStepProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
};

const SuccessStep: FC<SuccessStepProps> = ({
  title,
  description,
  icon,
  bgColor,
}) => {
  return (
    <div className={`rounded-xl px-6 py-16 ${bgColor} w-full max-w-xs`}>
      <div className="mb-4">{icon}</div>
      <h4 className="title font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-[1rem] lg:text-[1.3rem] text-primary">{description}</p>
    </div>
  );
};

export default SuccessStep;

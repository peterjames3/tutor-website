"use client";
import Button from "@/app/ui/start-button";

const LeftHero = () => {
  return (
    <div className=" h-full w-full mx-auto px-6 flex items-center">
      <div>
        <div>
          <h2 className="text-3xl sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.1rem] font-bold mb-4 leading-tight">
            <span className="text-primary">Learning </span>
            <span className="text-secondary">has </span>

            <span className="text-primary">Never </span>
            <br />
            <span className="text-secondary">Been </span>
            <span className="text-primary"> Easy</span>
          </h2>

          <p className="text-primary mb-4 text-lg leading-relaxed">
            Select your service and we guide you every step of the way.
            Experience personalized support tailored to your unique learning
            needs.
          </p>

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Get help Now!
          </h2>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default LeftHero;

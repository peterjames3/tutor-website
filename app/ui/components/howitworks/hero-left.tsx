"use client";
import { useUIDispatch } from "@/context/UIContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LeftHero = () => {
  const dispatch = useUIDispatch();
  const toggleForm = () => {
   

  
      dispatch({ type: "SHOW_HELP" });
    
  };
  return (
    <div className=" h-full w-full mx-auto px-6 flex items-center">
      <div>
        <div>
          <h2>How Proctored Exam Support  Works</h2>
          <h2 className="text-3xl sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.1rem] font-bold mb-4 leading-tight">
          
            <span className="text-secondary">Want to Understand </span>

            <span className="text-primary">How Proctored Exam Help Works </span>
            <br />
            <span className="text-secondary">Before you commit? </span>
            <span className="text-primary">?</span>
          </h2>

          <p className="text-primary mb-4 text-lg leading-relaxed">
            Our process is simple. Select the service you need and we guide you every
            step of the way. Experience personalized support tailored to your
            unique learning needs.
          </p>

         

        
           <motion.button
                      onClick={toggleForm}
                      className="cta hover:cursor-pointer flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Exam Help Now! <ArrowRight />
                    </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;

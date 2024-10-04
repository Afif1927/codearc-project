import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

export default function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="  w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker overflow-hidden">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                  initial={{ rotateY: 0, scale: 0.8, opacity: 0.8 }}
                  animate={{ rotateY: 180, scale: 1, opacity: 1 }}
                  transition={{
                    duration: 2,
                    ease: [0.42, 0, 0.58, 1], 
                    repeat: Infinity,        
                    repeatType: "reverse",    
                  }}
                  className="w-[8.5vw] h-[5.9vw] overflow-hidden relative -top-[0.4vw] rounded-md">
                      <img className='w-full h-full  object-cover' src="https://img.freepik.com/premium-vector/business-card-template-design-vector-illustration_619130-772.jpg?w=740" alt="" />
                  </motion.div>
                )}
                <h1 className="pt-[2vw] pb-[3.5vw] -mb-[0.4vw] font-mono text-[9vw] leading-[.35] tracking-tighter font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p key={index} className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 border-[2px] border-zinc-500 flex items-center justify-center rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}



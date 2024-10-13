import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import "./LandingStyle.css"
export default function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full h-screen flex flex-col  bg-zinc-900 pt-1">

      <div className=" pt-20 flex flex-col justify-center items-center sm:items-start sm:px-10 my-24  sm:my-32 md:my-24  ">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker overflow-hidden">
              <div className=" open w-fit flex flex-col justify-center sm:flex-row items-center">
           
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
                    className=" w-[30vw] sm:w-[8.5vw] h-[15vw]  sm:h-[5.9vw] overflow-hidden relative rounded-md">
                    <img className="w-full h-full object-cover" src="https://img.freepik.com/premium-vector/business-card-template-design-vector-illustration_619130-772.jpg?w=740" alt="" />
                  </motion.div>
                )}
                {/* Heading */}
                <h1 className=" sm:pt-[2vw] pb-[3.5vw] -mb-[0.4vw] font-mono text-[12vw] sm:text-[9vw]  sm:leading-[.4] tracking-tighter font-semibold  leading-none  ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800  flex px-5  flex-col sm:flex-row justify-between items-center  md:items-center  sm:py-5 gap-5  bottom-to-top ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p key={index} className="sm:text-sm  font-semibold tracking-tight leading-none text-center ">
              {item}
            </p>
          );
        })}

        <div className=" flex flex-col cursor-pointer md:flex-row items-center  gap-3 md:gap-1 ">
          <div className="px-5 hover:bg-zinc-100 hover:text-black cursor-pointer py-2 border-[2px] border-zinc-500 rounded-full font-semibold text-xs sm:text-sm uppercase text-center">
            Start the project
          </div>
          <div className="w-8 h-8  hover:bg-yellow-300 hover:text-black  sm:w-10 sm:h-10 border-[2px] border-zinc-100 flex items-center justify-center rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


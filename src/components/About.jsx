import React from 'react';

export default function About() {
  return (
    <div data-scroll data-scroll-speed="-.1" className="w-full p-10 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">

      <h1 className="text-[8vw] sm:text-[5vw] md:text-[3.5vw] leading-tight sm:leading-[5vw] md:leading-[3.5vw] font-mono tracking-tight text-center md:text-left">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-5 pt-10 border-t-[1px] mt-10 md:mt-20 border-[#c1dc60]">
        

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl flex px-10 sm:text-6xl md:text-3xl font-bold  justify-center  md:justify-start items-center">
            Our approach:
          </h1>
          <button className="flex gap-4 sm:gap-10 items-center px-6 sm:px-10 mt-6 sm:mt-10 py-4 sm:py-6 bg-zinc-900 rounded-full text-white uppercase mx-auto md:mx-0">
            Read More
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-zinc-100"></div>
          </button>
        </div>

        <div className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="Our Approach" />
        </div>
      </div>
    </div>
  );
}

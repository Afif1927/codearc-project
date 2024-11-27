import React from "react";

export default function About() {
  return (
    <div
      data-scroll
      data-scroll-speed='-.1'
      className='w-full p-5 sm:p-10 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'
    >
      <h1 className='text-[0.9rem] sm:text-[3.5vw] font-semibold md:text-[1.8rem] sm:leading-[2rem] md:leading-[2.5rem]  font-mono tracking-tight text-center md:text-left'>
        CodeArc is an innovative platform for
        website design and development, blending
        user-friendly tools with advanced tech. It
        features an intuitive interface for easy
        design, real-time team collaboration, and
        an embedded code editor supporting popular
        frameworks. With responsive design tools,
        a customizable component library, and easy
        deployment options, CodeArc streamlines
        the entire web development process. Plus,
        it integrates with leading tools, creating
        a seamless, versatile workflow for
        developers and designers alike.
      </h1>

      <div className='w-full flex flex-col md:flex-row gap-5  border-t-[1px] mt-10 md:mt-20 border-[#c1dc60]'>
        <div className='w-full md:w-1/2'>
          <button
            className='flex gap-4 sm:gap-10  text-wrap  text-[10px] sm:text-base md:text-lg  items-center px-4 sm:px-10 mt-6 sm:mt-0 py-3 sm:py-4  rounded-full text-white uppercase mx-auto md:mx-0
       bg-black hover:bg-white  font-bold  shadow-lg hover:text-black shadow-white transform transition-all  duration-500 ease-in-out hover:scale-110 hover:brightness-160 hover:animate-pulse active:animate-bounce'
          >
            Our Approach
          </button>
        </div>
        <div className='w-full h-full  sm:h-[70vh]   overflow-hidden'>
          <img
            className=' w-full h-full object-contain'
            src='https://www.truelogic.com.ph/wp-content/uploads/2020/03/kisspng-responsive-web-design-web-development-web-page-templates-5aebdca853a0c2.5358138415254068883426.png'
            alt='Our Approach'
          />
        </div>
      </div>
    </div>
  );
}

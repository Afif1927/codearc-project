import React, { useEffect, useState } from 'react';

export default function Eyes() { 
  const [rotate, setRotate] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div    className="eyes w-full h-screen overflow-hidden">
      <div
       
        className="relative w-full h-full bg-cover bg-center  bg-yellow-300 text-zinc-900 "
      > 
<div className="text-oc  leading-[.7] sm:leading-[.8] tracking-tight text-[12vw] text-[9vw] font-mono text-center font-extrabold pt-20"> Ready <br />
to start <br />
the project?</div>
   


        <div className="absolute flex gap-5 sm:gap-10 top-2/3 left-1/2 -translate-x-[50%] -translate-y-[90%]">
          
       
          <div className="h-[30vw] sm: sm:h-[10vw] w-[30vw] sm:w-[10vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="h-2/3 w-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line w-full h-10 sm:h-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="h-6  w-6  sm:h-8  sm:w-8 md:h-10   md:w-10   rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          
          <div className="h-[30vw] sm:h-[10vw] w-[30vw] sm:w-[10vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="h-2/3 w-2/3 relative flex justify-center items-center rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line w-full h-10 sm:h-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="h-6 w-6  sm:h-8  sm:w-8 md:h-10   md:w-10  rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="main-button flex flex-col items-center justify-center  gap-3  pt-20 sm:pt-48">

        <div className="button-x flex">
            <button className="flex gap-4 sm:gap-10 items-center px-6 sm:px-8  py-4 sm:py-4 bg-zinc-900 rounded-full text-white hover:bg-white hover:text-black  uppercase mx-auto md:mx-0">
            Start the Project
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-zinc-100 hover:bg-black"></div>
          </button>
        
       </div>
        <div className="button-x flex ">
            <button className="flex gap-4 sm:gap-10 items-center px-6 sm:px-8  py-4 sm:py-4  bg-white hover:bg-black hover:text-white rounded-full text-black uppercase mx-auto md:mx-0">
            Start the Project
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black  hover:bg-white"></div>
          </button>
        
       </div>
       
        </div>
      
      
      </div>
    </div>
  );
}

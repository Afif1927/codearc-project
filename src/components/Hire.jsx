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
                <div className="h-5 w-5  md:h-7   md:w-7 lg:h-10 lg:w-10    rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>  
          <div className="h-[30vw] sm:h-[10vw] w-[30vw] sm:w-[10vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="h-2/3 w-2/3 relative flex justify-center items-center rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line w-full h-10 sm:h-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="h-6 w-5  md:h-7   md:w-7 lg:h-10 lg:w-10  rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="main-button flex flex-col items-center justify-center pt-8  sm:pt-16 md:pt-20 lg:pt-52">
        <div className="button-x flex sm:pt-0 ">
        <button className="overflow-hidden relative  p-2 w-52 bg-black text-white hover:text-zinc-950 border-none rounded text-xl font-bold cursor-pointer z-10 group">
      Start the Project
      <span className="absolute w-52 h-32 -top-8 -left-0 bg-white rotate-5 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
      <span className="absolute w-52 h-32 -top-8 -left-0 bg-yellow-200 rotate-5 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
      <span className="absolute w-52 h-32 -top-8 -left-0 bg-yellow-400 rotate-5 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left" />
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1.8 left-20 z-10">Now!</span>
    </button>
       </div>       
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[3.5vw] font-mono leading-[3.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full flex gap-5 pt-10 border-t-[1px] mt-20 border-[#c1dc60]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex gap-10 items-center px-10 mt-10 py-6 bg-zinc-900 rounded-full text-white uppercase">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh]  rounded-3xl">
  
        <img className='w-full h-full overflow-hidden object-cover ' src="  https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}


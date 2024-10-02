import React from 'react'

function Featured() {
  return (
   <div className="w-full py-20 bg-zinc-800">
   <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700 ">
    <h1 className='text-7xl font-mono tracking-tighter'> Featured projects</h1>
  
   </div>
   <div className='px-20'>
   <div className="cards w-full flex gap-10 mt-10">
    <div className="cardcontainer relative  w-1/2 h-[70vh] ">
    <h1 className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter z-[9] text-7xl">FYDE</h1>

    <div className=" card w-full h-full rounded-xl overflow-hidden">
      <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
    </div>
    </div>
    <div className="cardcontainer relative  w-1/2 h-[70vh] ">
    <h1 className="absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 leading-none text-[#CDEA68] tracking-tighter z-[9] text-7xl">VISE</h1>

    <div className=" card w-full h-full rounded-xl overflow-hidden">
    <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />

    </div>
    </div>
   </div>

   </div>

   </div>
  )
}

export default Featured
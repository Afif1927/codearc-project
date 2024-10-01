import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-24 rounded-tl-3xl  rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden">
            <h1 className='text-[22vw] leading-none font-mono font-semibold uppercase tracking-tighter md:tracking-wide'>We Are Ochi </h1>
            <h1 className='text-[22vw]  
            leading-none font-mono uppercase  font-semibold uppercase tracking-tight'>We Are Ochi</h1>
        </div>
    </div>
  )
}

export default Marquee
import { motion } from 'framer-motion'


function Marquee() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".4"  className='w-full py-32 rounded-tl-3xl  rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-10 ">
            <motion.h1  
            initial={{ x:"0" }}
                  animate={{x:"-100%" }}
                  transition={{
                    duration: 10,
                    ease:"linear",
                    repeat: Infinity,        
              
                  }} className='text-[22vw] leading-none font-sherif font-semibold uppercase '>We Are Ochi </motion.h1>
            <motion.h1 
               initial={{ x:"0"}}
               animate={{x:"-100%" }}
               transition={{
                 duration: 10,
                 ease:"linear",
                 repeat: Infinity,        
             }}
            className='text-[22vw]  
            leading-none font-sherif font-semibold uppercase '>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
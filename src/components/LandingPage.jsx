import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./LandingStyle.css";
export default function LandingPage() {
  const navigate = useNavigate();
  const goToLogForm = () => {
    navigate("/login-form");
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed='-.4'
      className='w-full h-screen flex flex-col  bg-zinc-900 pt-1'
    >
      <div className=' pt-0 sm:pt-10 md:pt-20 flex flex-col justify-center items-center sm:items-start sm:px-10 my-24  sm:my-32 md:my-24  '>
        {[
          "We Create",
          "Eye Opening",
          "Presentation",
        ].map((item, index) => {
          return (
            <div
              key={index}
              className='masker overflow-hidden'
            >
              <div className=' open w-fit flex flex-col justify-center sm:flex-row items-center'>
                {index === 1 && (
                  <motion.div
                    initial={{
                      rotateY: 0,
                      scale: 0.8,
                      opacity: 0.8,
                    }}
                    animate={{
                      rotateY: 180,
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 2,
                      ease: [0.42, 0, 0.58, 1],
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className=' w-[30vw] sm:w-[8.5vw] h-[15vw]  sm:h-[5.9vw] overflow-hidden relative rounded-md'
                  >
                    <img
                      className='w-full h-full object-cover'
                      src='https://img.freepik.com/premium-vector/business-card-template-design-vector-illustration_619130-772.jpg?w=740'
                      alt=''
                    />
                  </motion.div>
                )}
                {/* Heading */}
                <h1 className=' sm:pt-[2vw] pb-[3.5vw] -mb-[0.4vw] font-mono text-[12vw] sm:text-[9vw]  sm:leading-[.4] tracking-tighter font-semibold  leading-none  '>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className='border-t-[1px] border-zinc-800  flex px-5  flex-col sm:flex-row justify-between items-center  md:items-center  sm:py-5 gap-5  bottom-to-top '>
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className='text-[0.8rem]  sm:text-[9rem] md:text-[1rem]  font-semibold tracking-tight leading-none text-center '
            >
              {item}
            </p>
          );
        })}

        <div className=' flex flex-col cursor-pointer md:flex-row items-center  gap-3 md:gap-1 '>
          <button
            type='submit'
            onClick={goToLogForm}
            className='flex justify-center gap-2 items-center mx-auto shadow-xl text-sm text-black bg-gray-50 backdrop-blur-md font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-100 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group'
          >
            Start the Project
            <svg
              className='w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45'
              viewBox='0 0 16 19'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z'
                className='fill-gray-800 group-hover:fill-gray-800'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

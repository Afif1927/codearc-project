function AboutusRoute() {
  return (
    <div className='bg-zinc-900 h-auto w-full '>
      <div className='part-1 flex flex-col md:flex-row items-center  justify-center  px-3  py-4 md:py-16 sm:gap-5'>
        <div className='sub-1 flex flex-col gap-5 justify-center md:justify-start items-center  px-5 py-3'>
          <h1 className='text  text-center flex justify-center item-center text-slate-100 text-[2rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.8rem] font-bold font-mono leading-none '>
            About Us
          </h1>
          <p className='font-mono text-center text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.5rem] font-medium text-slate-300 px-10 md:leading-relaxed'>
            Quickly incentivize impactful action
            items before tactical collaboration
            and idea-sharing. Monotonically engage
            market-driven intellectual capital
            through wireless opportunities.
            Progressively network performance
            based services for functionalized
            testing procedures.
          </p>
          <button className='px-3 py-2 md:px-6 lg:py-3 text-[0.5rem] sm:text-[0.6rem] md:text-[.8rem] lg:text-[1.1rem]  bg-blue-500 rounded font-bold'>
            Learn More
          </button>
        </div>
        <img
          className='rounded w-full h-[150px] sm:h-[200px] md:h-[300px]  lg:h-[400px] 
          object-contain md:object-cover '
          src='https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?uid=R167341156&ga=GA1.1.1094832418.1727846324&semt=ais_hybrid'
          alt=''
        />
      </div>
      <div className='Footer bg-gray-900'>
        <div className='  text-white py-10'>
          <div className='text-center'>
            <h3 className='text-[1rem] tracking-wider sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem]'>
              Download our CodeArc app
            </h3>
            <p className='text-[0.6rem]  sm:text-[.7rem] md:text-[.9rem] lg:text-[1rem]'>
              {" "}
              Make Beautiful Projects. All day,
              every day.{" "}
            </p>
            <div className='flex justify-center gap-5 my-5 md:my-7'>
              <div className='flex flex-col  items-center  border gap-1  w-auto rounded-lg px-4 py-2  '>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/888/888857.png'
                  className='w-7 md:w-8'
                ></img>
                <div className='text-center '>
                  <p className='text-[0.5rem] md:text-base text-gray-200'>
                    Download on
                  </p>
                  <p className='text-[0.5rem] md:text-[0.8rem]'>
                    Google Play Store
                  </p>
                </div>
              </div>
              <div className='flex items-center border flex-col  gap-1 rounded-lg px-4 py-2  '>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/888/888841.png'
                  className='w-7 md:w-8'
                ></img>
                <div className='text-center '>
                  <p className='text-[0.5rem]  md:text-base text-gray-200'>
                    Download on{" "}
                  </p>
                  <p className='text-[0.5rem] md:text-[0.8rem]'>
                    {" "}
                    Apple Store{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex flex-col sm:flex-row sm:justify-between items-center sm:mx-5 text-gray-400'>
            <p className='order-2 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] md:order-1  '>
              &copy; CodeArc Is Best, 2024.
            </p>
            <div className='order-1 md:order-2'>
              <span className='px-1 md:px-3 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]'>
                About us
              </span>
              <span className=' px-1 md:px-3 border-l text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]'>
                Contact us
              </span>
              <span className=' px-1 md:px-3 border-l text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]'>
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusRoute;

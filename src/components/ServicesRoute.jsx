function ServicesRoute() {
  return (
    <div className='bg-radial  md:bg-zinc-600 lg:bg-zinc-900 pt-5 sm:pt-10 md:pt-28'>
      <div className='part-1 flex flex-col  justify-center items-center px-3  py-4 gap-5 md:gap-7'>
        <div className='sub-1 flex flex-col gap-5 justify-center items-center px-5 pt-3'>
          <h1 className='text text-center text-slate-100 text-[2rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold font-mono leading-none '>
            Our Services
          </h1>
          <p className='font-mono text-center text-[0.6rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-medium text-slate-300'>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Image from
          </p>
        </div>

        <img
          className=' pt-5  rounded w-full h-[300px] md:h-[450px]  lg:h-[600px] object-contain '
          src='https://images02.nicepagecdn.com/c461c07a441a5d220e8feb1a/4d4e1c0ad7a15ecda065e3ff/x-min1.jpg'
          alt=''
        />
      </div>
      <div className='part-2 grid items-center px-8 md:py-5 md:grid-cols-2 gap-6 py-3  lg:py-10 '>
        <div className='sub-part1 flex flex-col  hover:bg-slate-700 gap-4 md:gap-6 px-8  md:py-5'>
          <img
            className='object-contain max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-24  w-full'
            src='https://www.svgrepo.com/show/228242/idea-brain.svg'
            alt=''
          />
          <h2 className='text text-center  text-slate-100 text-[1.1rem] sm:text-[1.2rem] md:text-[1.5rem] lg-text-[1.8rem] font-bold font-mono leading-none'>
            Growth strategy
          </h2>
          <p className='font-mono text-center text-[0.5rem]  sm:text-[.7rem] md:text-[.8rem] lg-text-[1rem] font-medium text-slate-300 lg:px-20'>
            Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur
          </p>
        </div>
        <div className='sub-part2 flex flex-col  hover:bg-slate-700 gap-4 md:gap-6 px-8  md:py-5'>
          <img
            className='object-contain max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-24  w-full'
            src='https://www.svgrepo.com/show/288470/medal-quality.svg'
            alt=''
          />
          <h2 className='text text-center  text-slate-100 text-[1.1rem] sm:text-[1.2rem] md:text-[1.5rem] lg-text-[1.8rem] font-bold font-mono leading-none'>
            Quality Expertise
          </h2>
          <p className='font-mono text-center text-[0.5rem]  sm:text-[.7rem] md:text-[.8rem] lg-text-[1rem] font-medium text-slate-300 lg:px-20'>
            Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur
          </p>
        </div>
        <div className='sub-part3 flex flex-col  hover:bg-slate-700 gap-4 md:gap-6 px-8  md:py-5'>
          <img
            className='object-contain max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-24  w-full'
            src='https://www.svgrepo.com/show/530452/mobile-app.svg'
            alt=''
          />
          <h2 className='text text-center text-slate-100 text-[1.1rem] sm:text-[1.2rem] md:text-[1.5rem] lg-text-[1.8rem] font-bold font-mono leading-none '>
            Responsiveness
          </h2>
          <p className='font-mono text-center text-[0.5rem]  sm:text-[.7rem] md:text-[.8rem] lg-text-[1rem] font-medium text-slate-300 lg:px-20'>
            Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur
          </p>
        </div>{" "}
        <div className='sub-part4 flex flex-col  hover:bg-slate-700 gap-4 md:gap-6 px-8  md:py-5'>
          <img
            className='object-contain max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-24  w-full'
            src='https://www.svgrepo.com/show/293550/customer-service-support.svg'
            alt=''
          />
          <h2 className='text text-center text-slate-100 text-[1.1rem] sm:text-[1.2rem] md:text-[1.5rem] lg-text-[1.8rem] font-bold font-mono leading-none '>
            Support 24/7
          </h2>
          <p className='font-mono text-center text-[0.5rem]  sm:text-[.7rem] md:text-[.8rem] lg-text-[1rem] font-medium text-slate-300 lg:px-20'>
            Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur
          </p>
        </div>
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
            <div className='flex justify-center gap-2 my-5 md:my-7'>
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

export default ServicesRoute;

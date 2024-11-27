function AboutusRoute() {
  return (
    <div className='bg-radial h-auto w-full pt-2 sm:pt-3 md:pt-5 lg:pt-16 '>
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

      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold text-zinc-100 sm:text-4xl'>
            Trusted by eCommerce Businesses
          </h2>

          <p className='mt-4 text-gray-500 sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione dolores
            laborum labore provident impedit esse
            recusandae facere libero harum sequi.
          </p>
        </div>

        <dl className='mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col rounded-lg bg-[#2563EB] px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-900'>
              Total Sales
            </dt>

            <dd className='text-4xl font-extrabold text-zinc-100 md:text-5xl'>
              $4.8m
            </dd>
          </div>

          <div className='flex flex-col rounded-lg bg-[#2563EB]  px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-900'>
              Official Addons
            </dt>

            <dd className='text-4xl font-extrabold text-zinc-100  md:text-5xl'>
              24
            </dd>
          </div>

          <div className='flex flex-col rounded-lg bg-[#2563EB]  px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-900'>
              Total Addons
            </dt>

            <dd className='text-4xl font-extrabold text-zinc-100  md:text-5xl'>
              86
            </dd>
          </div>

          <div className='flex flex-col rounded-lg bg-[#2563EB]  px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-900'>
              Downloads
            </dt>

            <dd className='text-4xl font-extrabold text-zinc-100  md:text-5xl'>
              86k
            </dd>
          </div>
        </dl>
      </div>

      <section className='bg-transparent'>
        <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
          <h2 className='text-center text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl'>
            Read trusted reviews from our
            customers
          </h2>

          <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
            <blockquote className='rounded-lg bg-indigo-300 p-6 shadow-sm sm:p-8'>
              <div className='flex items-center gap-4'>
                <img
                  alt=''
                  src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                  className='size-14 rounded-full object-cover'
                />

                <div>
                  <div className='flex justify-center gap-0.5 text-green-800'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  </div>

                  <p className='mt-0.5 text-lg font-medium text-gray-900'>
                    Paul Starr
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-700'>
                This website is a perfect example
                of great design meeting
                functionality. Everything from the
                sleek, modern interface to the
                intuitive navigation made my
                experience delightful. The
                responsiveness is
                top-notch—seamlessly adapting to
                all devices without losing any
                quality.
              </p>
            </blockquote>
            <blockquote className='rounded-lg bg-indigo-300 p-6 shadow-sm sm:p-8'>
              <div className='flex items-center gap-4'>
                <img
                  alt=''
                  src='https://images.unsplash.com/photo-1543060829-a0029874b174?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNtaWxleSUyMGJ1c2luZXNzfGVufDB8fDB8fHww'
                  className='size-14 rounded-full object-cover'
                />

                <div>
                  <div className='flex justify-center gap-0.5 text-green-800'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  </div>

                  <p className='mt-0.5 text-lg font-medium text-gray-900'>
                    Mitchel Fourts
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-700'>
                This website exceeded my
                expectations in every way! The
                clean layout and modern design are
                incredibly appealing, and
                navigating through the pages is a
                breeze. It’s fast, functional, and
                visually stunning—highly
                recommended!
              </p>
            </blockquote>
            <blockquote className='rounded-lg bg-indigo-300 p-6 shadow-sm sm:p-8'>
              <div className='flex items-center gap-4'>
                <img
                  alt=''
                  src='https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21pbGV5JTIwYnVzaW5lc3MlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D'
                  className='size-14 rounded-full object-cover bg-center'
                />

                <div>
                  <div className='flex justify-center gap-0.5 text-green-800'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  </div>

                  <p className='mt-0.5 text-lg font-medium text-gray-900'>
                    Jenny Anderssen
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-700'>
                Absolutely love this site! It’s
                incredibly user-friendly and
                provides a seamless experience.
                The attention to detail is evident
                in every feature, and the site
                feels robust yet lightweight. The
                design is not only visually
                pleasing but also very practical.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

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

export default AboutusRoute;

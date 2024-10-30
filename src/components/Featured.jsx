export default function Featured  ()  {
  return (
    <div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full md:px-24 lg:px-8 ">

      <div className="grid gap-6 row-gap-5 mb-8 md:mb-0 sm:row-gap-6 sm:grid-cols-2">
        <a href="#" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://static.tildacdn.com/tild3864-6134-4336-b837-653931613231/Screenshot_2021-01-1.png"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Sed ut perspiciatis unde omnis iste natus error
              </p>
            </div>
          </div>
        </a>
        <a href="#" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://brightpinkagency.com/wp-content/uploads/2018/09/Cover-single-page-website-examples.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Leverage agile frameworks to provide a robust synopsis
              </p>
            </div>
          </div>
        </a>
        <a href="#" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://cdn.dribbble.com/userupload/11930555/file/original-a539cbd3e0d1edcb0e3026eb314b10bb.png?resize=400x300&vertical=center"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Dingy Im telling you rhubaahb Bangah Jo-Jeezly
              </p>
            </div>
          </div>
        </a>
        <a href="#" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://static.tildacdn.com/tild6535-3261-4339-a435-633765623939/15.png"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Rough pomfret lemon shark plownose chimaera
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center  md:pt-16">
      <button className="cursor-pointer  text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
      See More ....
    </button>
      </div>
    </div>
  );
};
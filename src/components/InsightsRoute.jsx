import { FaRegStar } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { IoMdArchive } from "react-icons/io";
function InsightsRoute() {
  return (
    <div className='bg-radial pt-0 sm:pt-0  lg:pt-20'>
      <div className='image h-20 sm:h-32 md:h-40 lg:h-44 '>
        <img
          className='object-cover w-full h-full'
          src='https://png.pngtree.com/background/20210709/original/pngtree-technology-electronic-financial-background-picture-image_911025.jpg'
          alt=''
        />
      </div>
      <div className='w-full my-2  sm:my-4 md:my-6 lg:my-8  border bg-zinc-100 opacity-40'></div>
      <div className='part-1 text-zinc-100 flex flex-col gap-4 md:gap-8 px-4 sm:px-8 md:px-14 lg:px-20'>
        <h1 className='text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[2.5rem]'>
          Insights{" "}
        </h1>
        <p className='text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono'>
          Below is the template for insights, a
          new template for the PARA Method created
          by James Porteous.
        </p>
        <p className='text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono'>
          As you will read{" "}
          <span className='text-zinc-500'>
            elsewhere
          </span>
          , the PARA Method is "a system that
          tells you exactly where to put every
          piece of information in your life -
          every document, file, note, agenda,
          outline, and bit of information you
          might wish to keep."
        </p>
        <p className='text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono'>
          The original was based on the following
          sections:
        </p>
        <img
          className='object-contain w-full md:h-96 '
          src='https://towering-perigee-2e2.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fefa9eb2f-ffc3-4208-a27f-139f9089dd6d%2FUntitled.png?table=block&id=577a5f51-d206-4750-bfcc-62191003a2ba&spaceId=14191d96-dc01-4bbf-ae1f-7adc79b6ee30&width=1420&userId=&cache=v2'
          alt=''
        />
        <p className='text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono'>
          There are many copies of this template
          available online.
        </p>
        <p className='text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono'>
          For example, instead of saying that ‘an
          object can be placed here. Think of it
          as being an image,’ just call it an
          image. Additionally, I did not think
          ‘Area’ and ‘Resource’ really meant
          anything, and I did not want to refer to
          a list every time I wanted to add
          something.
        </p>
        <p className='text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono'>
          If you wish to use this template, you
          can of course change anything you wish.
          Once you have looked around, you can
          also delete any information that appears
          above the line.
        </p>
      </div>
      <div className='w-full my-10 border bg-zinc-100 opacity-40'></div>
      <div className='part-2 flex flex-col gap-5 text-zinc-100 mt-4 px-4 sm:px-8 md:px-14 lg:px-20'>
        <h1 className='text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[2.5rem]'>
          Insights{" "}
        </h1>
        <div className='container-1 py-3 flex flex-col gap-3 '>
          <div className='sub-1 flex gap-1 items-center text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] bg-slate-500'>
            <FaRegStar /> <span>iProjects</span>
          </div>
          <p className='text-[#ff7571] text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono '>
            A collection of tasks that are
            connected to a goal and have a set
            deadline or concrete activities you
            want to or need to do.
          </p>
        </div>
        <div className='container-2 py-3 flex flex-col gap-3 '>
          <div className='sub-1 flex gap-1 items-center text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] bg-slate-500'>
            <MdTaskAlt />
            <span>iTask</span>
          </div>
          <p className='text-[#ff7571] text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono '>
            The iTask section represents ongoing
            activities with no set deadline. So
            things like finances, writing, sales,
            health.
          </p>
        </div>
        <div className='container-3 py-3 flex flex-col gap-3 '>
          <div className='sub-1 flex gap-1 items-center text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] bg-slate-500'>
            <GrResources />{" "}
            <span>iResources</span>
          </div>
          <p className='text-[#ff7571] text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono '>
            Information about topics that are
            interesting or useful to you.
          </p>
        </div>
        <div className='container-4 py-3 flex flex-col gap-3 '>
          <div className='sub-1 flex gap-1 items-center text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] bg-slate-500'>
            <IoMdArchive /> <span>iArchive</span>
          </div>
          <p className='text-[#ff7571] text-[0.7rem] sm:text-[0.8rem] md:[text-0.9rem]  lg:text-[1rem] font-mono '>
            Items from the other three categories
            that have been completed or are no
            longer active.
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

export default InsightsRoute;

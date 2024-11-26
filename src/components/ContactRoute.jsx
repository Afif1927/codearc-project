import { useState } from "react";

import {
  Field,
  Label,
  Switch,
} from "@headlessui/react";

export default function ContactRoute() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <div className='isolate text-zinc-100 bg-zinc-900 px-6 py-10 sm:py-16 lg:px-8 pt-5 sm:pt-10 lg:pt-32'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          />
        </div>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-balance text-3xl lg:text-5xl font-semibold tracking-tight sm:text-4xl'>
            Contact Us Anytime !
          </h2>
          <p className='mt-2 text-md  md:text-lg/8 text-gray-400'>
            CodeArc Is Always There to Help Our
            Clients & Make proficient Projects
            with Eye Catching ANIMATION
          </p>
        </div>
        <form
          action='#'
          method='POST'
          className='mx-auto mt-6 max-w-xl sm:mt-10'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div>
              <label
                htmlFor='first-name'
                className='block text-sm/6 font-semibold text-zinc-100'
              >
                First name
              </label>
              <div className='mt-2.5'>
                <input
                  id='first-name'
                  name='first-name'
                  type='text'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='last-name'
                className='block text-sm/6 font-semibold text-zinc-100'
              >
                Last name
              </label>
              <div className='mt-2.5'>
                <input
                  id='last-name'
                  name='last-name'
                  type='text'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='company'
                className='block text-sm/6 font-semibold text-zinc-100'
              >
                Company
              </label>
              <div className='mt-2.5'>
                <input
                  id='company'
                  name='company'
                  type='text'
                  autoComplete='organization'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-sm/6 font-semibold text-zinc-100'
              >
                Email
              </label>
              <div className='mt-2.5'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='phone-number'
                className='block text-sm/6 font-semibold text-zinc-100'
              >
                Phone number
              </label>
              <div className='relative mt-2.5'>
                <div className='absolute inset-y-0 left-0 flex items-center '>
                  <label
                    htmlFor='country'
                    className='sr-only'
                  >
                    Country
                  </label>
                  <select
                    id='country'
                    name='country'
                    className='h-full rounded-md border-0 bg-transparent bg-none py-0 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                    <option>BD</option>
                    <option>IND</option>
                    <option>SW</option>
                  </select>
                </div>
                <input
                  id='phone-number'
                  name='phone-number'
                  type='tel'
                  autoComplete='tel'
                  className='block w-full rounded-md border-0 px-3.5 py-2 pl-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-sm/6 font-semibold text-zinc-100'
              >
                Message
              </label>
              <div className='mt-2.5'>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
                  defaultValue={""}
                />
              </div>
            </div>
            <Field className='flex gap-x-4 sm:col-span-2'>
              <div className='flex h-6 items-center'>
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className='group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600'
                >
                  <span className='sr-only'>
                    Agree to policies
                  </span>
                  <span
                    aria-hidden='true'
                    className='size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5'
                  />
                </Switch>
              </div>
              <Label className='text-sm/6 text-gray-400'>
                By selecting this, you agree to
                our{" "}
                <a
                  href='#'
                  className='font-semibold text-indigo-600'
                >
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>
          </div>
          <div className='mt-10'>
            <button
              type='submit'
              className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Let's talk
            </button>
          </div>
        </form>
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
    </>
  );
}

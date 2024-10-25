import { useState } from "react";

import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import "./NavbarStyle.css"
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar sm:fixed  sticky  sm:gap-10 z-[999] w-full px-5 py-8 sm:py-5 sm:px-28 rounded flex justify-between items-center  ">

      <div className="logo ">
<div className="heading" data-text="Awesome">
    <span className="actual-text font-bold">&nbsp;Ochi&nbsp;</span>
    <span aria-hidden="true" className="hover-text  font-bold">&nbsp;OCHI&nbsp;</span>
</div>
      </div>
      <div className="hidden md:flex sm:gap-2 md:gap-7">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
          (item, index) => (
      <a 
      key={index}
      className="sm:text-[1vw] md:text-[1.2vw] capitalize cursor-pointer font-semibold px-6 py-3 rounded "
      >
       {item}
    </a>
          )
        )}
      </div>
      <div className="md:hidden">
        <button onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {click && ( 
       
        <div className=" md:hidden  absolute top-28 w-full left-0 right-0 bg-slate-900 text-zinc-100 transition duration-300">
          {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                className="flex sm:text-lg justify-center items-center my-6 font-mono text-[5vw] font-semibold py-6 border-b border-slate-800 "
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}

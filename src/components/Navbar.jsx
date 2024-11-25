import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavbarStyle.css";
export default function Navbar() {
  const [click, setClick] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setClick(false);
  }, [location]);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/");
  };
  return (
    <div className='navbar lg:fixed  sticky  sm:gap-10 z-[999] w-full px-5 py-8 sm:py-5 sm:px-28 rounded flex justify-between items-center text-center text-wrap  '>
      <div className='logo '>
        <div
          onClick={HomePage}
          className='heading'
          data-text='Awesome'
        >
          <span className='actual-text font-bold'>
            &nbsp;CodeArc&nbsp;
          </span>
          <span
            aria-hidden='true'
            className='hover-text  font-bold'
          >
            &nbsp;CodeArc&nbsp;
          </span>
        </div>
      </div>
      <div className='hidden lg:flex sm:gap-2 md:gap-7 uppercase'>
        {[
          { name: "Services", path: "/services" },
          { name: "Our Work", path: "/our-work" },
          { name: "About Us", path: "/about-us" },
          { name: "Insights", path: "/insights" },
          { name: "Contact", path: "/contact" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className='sm:text-[1vw] md:text-[1.2vw] uppercase cursor-pointer font-semibold px-6 py-3 rounded'
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className='lg:hidden'>
        <button onClick={handleClick}>
          {click ? (
            <FaTimes size={30} />
          ) : (
            <CiMenuFries size={30} />
          )}
        </button>
      </div>

      {click && (
        <div className=' lg:hidden  absolute top-20 w-full left-0 right-0 bg-slate-900 text-zinc-100 transition duration-300 shadow-2xl'>
          {[
            {
              name: "Services",
              path: "/services",
            },
            {
              name: "Our Work",
              path: "/our-work",
            },
            {
              name: "About Us",
              path: "/about-us",
            },
            {
              name: "Insights",
              path: "/insights",
            },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className='flex sm:text-lg justify-center items-center  font-mono text-[5vw] font-semibold py-4 border-b border-slate-800'
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

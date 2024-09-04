import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col items-center sticky top-0 pt-5 rounded-[40px] z-10">
      <nav className="bg-black/30 border-[1px] border-gray-800  backdrop-blur-sm lg:w-fit px-2 w-full rounded-[40px] z-[999]">
        <div>
          <div className="max-w-screen-xl flex flex-wrap items-center gap-2 justify-between lg:justify-center mx-auto p-4">
            <NavLink
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse pr-2 lg:border-r-[1px] border-gray-800"
            >
              <img
                src="https://i.postimg.cc/MHrzBk0N/Britto-Soft-removebg-preview.png"
                className="lg:h-8 h-8 "
                alt="Britto Soft Logo"
              />
            </NavLink>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-4 h-w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700">
                <li>
                  <NavLink
                    to={"/"}
                    className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent  md:p-0 text-white md:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/"}
                    className="block py-2 px-3 rounded   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/service"}
                    className="block py-2 px-3 rounded   md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="pr-2 border-r-[1px] border-gray-800"> 
                  <NavLink
                    to={"/contact"}
                    className="block py-2 px-3 rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent "
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <a className="lg:bg-blue-600 px-3 lg:px-8 lg:py-2 rounded-[20px]" target="_blank" href="https://facebook.com">Get Started</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
